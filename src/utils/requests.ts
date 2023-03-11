import axios from "axios";
import { BACKEND_URL } from "../variables";

const makeRequest = async (config: any) => {
  let axiosRef = axios.create();

  //--- setting default properties if properties are missing
  config.method = config.method || "get";
  config.responseType = config.responseType || "json";
  config.noCache = config.noCache || false;

  config.headers = {};
  config.headers["Content-Type"] = "multipart/form-data";

  //Checking if the cache is required or not. If not the add no cache in the headers.
  if (config.noCache) {
    let temp = {
      "Cache-Control": "no-cache",
    };
    config.headers = config.headers ? config.headers : {};
    config.headers = { ...config.headers, ...temp };
  }
  config.customErrorHandeler = config.customErrorHandeler || onError;
  config.customSuccessHandler = config.customSuccessHandler || onSuccess;
  config.url = config.url || null;

  return axiosRef(config).then(
    config.customSuccessHandler,
    config.customErrorHandeler
  );
};

/**
 * Default callback on failure of API request.
 * @param    {[Object]} error [Object retured from axios api on failure]
 */

const onError = (error: any) => {
  const newError = (error && error.response && error.response.data) ?? {};
  return Promise.reject({ ...newError });
};

/**
 * Callback on success of API request.
 * @param    {[Object]} response [Object retured from axios api response]
 */
const onSuccess = (response: any) => {
  return (response && response.data) ?? {};
};

const genericPostPutRequests = async ({
  url = "sendEmail",
  data,
  method = "post",
}: {
  url?: string;
  data: any;
  method?: string;
}) =>
  makeRequest({
    method: method,
    url: `${BACKEND_URL}${url}`,
    data: data,
  });

export { makeRequest, genericPostPutRequests };
