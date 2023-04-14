const env = {
  prod: "production",
  dev: "development",
};
const NODE_ENV = process.env.NODE_ENV;

const IS_PRODUCTION = NODE_ENV === env.prod;

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export { BACKEND_URL };
