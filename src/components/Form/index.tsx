import React, { useState } from "react";
import { FormProps, FormFieldProps } from "../../utils/types";
import { validate } from "email-validator";
import { contactInfo } from "../../config/config";
import { genericPostPutRequests } from "../../utils/requests";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { emailTypes } from "../../utils/constants";
const MySwal = withReactContent(Swal);
const Input = ({
  id,
  type,
  required,
  placeholder,
  fullWidth,
  value,
  onChange,
}: FormFieldProps & { value?: string; onChange: (e: any) => void }) => {
  return (
    <div className={`col-${fullWidth ? "12" : "6"}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="form-control border-0 px-4"
        placeholder={placeholder}
        style={{ height: "55px" }}
      />
    </div>
  );
};

const TextArea = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}: FormFieldProps & { value?: string; onChange: (e: any) => void }) => {
  return (
    <div className={`col-12`}>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="form-control border-0 px-4 py-3"
        placeholder={placeholder}
        rows={8}
      ></textarea>
    </div>
  );
};
const formValidation = (fields: any, formValues: any) => {
  let error = false;
  fields.forEach((item: any) => {
    if (
      (item.required && formValues[item.id].length < item.minlength) ||
      (item.id === "email" && !validate(formValues.email))
    )
      error = true;
  });
  return error;
};
const Form = (props: FormProps) => {
  const { fields, buttonTitle, errorMessage, type, sweetMessages } = props;
  let generateStateKeys = {} as any;
  fields?.forEach((item: any) => {
    generateStateKeys[item.id] = "";
  });

  const [formValues, setFormValues] = useState<any>(generateStateKeys);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrormsg] = useState<string>(errorMessage);
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (event: any) => {
    const newFormValues = { ...formValues };
    if (event.target.type === "file" && event.target.files)
      newFormValues[event.target.id] = event.target.files[0];
    else newFormValues[event.target.id] = event.target.value;
    setFormValues(newFormValues);
    setError(false);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    if (formValidation(fields, formValues)) {
      setError(true);
      return;
    }
    const formData = new FormData();
    formData.append("clientEmail", contactInfo.emailAddress);
    formData.append("type", type);
    Object.keys(formValues).forEach((item) => {
      formData.append(`${item}`, formValues[item]);
    });
    type === emailTypes.apply && file && formData.append("file", file);

    genericPostPutRequests({ data: formData })
      .then((res) => {
        MySwal.fire({
          title: <strong>{sweetMessages.success}</strong>,
          html: <></>,
          icon: "success",
        });
        setFormValues(generateStateKeys);
        setFile(undefined);
      })
      .catch((err) => {
        MySwal.fire({
          title: <strong>{sweetMessages?.error}</strong>,
          html: <></>,
          icon: "error",
        });
      });
    // for (const [key, value] of formData.entries()) {
    //   console.log(`hehehe ${key}: ${formData.entries()}`);
    // }
  };
  const formBuilder = () => (
    <div className="row g-3">
      {fields
        ?.sort((a, b) => a.order - b?.order)
        .map((item, index) => {
          let ComponentToRender = Input;
          if (item.type === "textarea") ComponentToRender = TextArea;
          if (item.type === "file")
            return <ComponentToRender {...item} onChange={handleFileChange} />;

          return (
            <ComponentToRender
              {...item}
              onChange={handleChange}
              value={formValues[item.id]}
            />
          );
        })}
    </div>
  );
  if (!props || !Object.keys(props)?.length) return <></>;
  return (
    <div className="bg-light rounded p-5">
      <form>
        <div className="row g-3">
          {formBuilder()}
          <div className="col-12">
            {error && (
              <p
                style={{ color: "red" }}
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: ` ${errorMsg}`,
                }}
              />
            )}
            <button
              className="btn btn-primary w-100 py-3"
              type="submit"
              onClick={handleClick}
            >
              {buttonTitle}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
