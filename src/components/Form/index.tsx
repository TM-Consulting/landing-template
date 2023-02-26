import React, { useState } from "react";
import { FormProps, FormFieldProps } from "../../utils/types";
import { validate } from "email-validator";

const Input = ({
  id,
  type,
  required,
  placeholder,
  fullWidth,
  value,
  onChange,
}: FormFieldProps & { value: string; onChange: (e: any) => void }) => {
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
}: FormFieldProps & { value: string; onChange: (e: any) => void }) => {
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
  const { fields, buttonTitle, errorMessage } = props;
  let generateStateKeys = {} as any;
  fields?.forEach((item: any) => {
    generateStateKeys[item.id] = "";
  });

  const [formValues, setFormValues] = useState<any>(generateStateKeys);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const newFormValues = { ...formValues };
    newFormValues[event.target.id] = event.target.value;
    setFormValues(newFormValues);
    setError(false);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    if (formValidation(fields, formValues)) setError(true);
  };
  const formBuilder = () => (
    <div className="row g-3">
      {fields
        ?.sort((a, b) => a.order - b?.order)
        .map((item, index) => {
          let ComponentToRender = Input;
          if (item.type === "textarea") ComponentToRender = TextArea;

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
                  __html: ` ${errorMessage}`,
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
