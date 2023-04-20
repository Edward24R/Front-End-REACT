import * as React from "react";
import { useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  count: 0,
  ipAddr: "",
  camN: "",
  location: "",
  maxCap: ""
};

export default function ListDialog(props) {
  const { open } = props;
  const [updateData, setUpdateData] = useState(initialValues);

  const handleClose = () => {
    props.onClose(false);
  };

  useEffect(() => {
    setUpdateData(props.editData);
  }, [props.editData]);

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.ipAddr) {
      errors.ipAddr = "Ip is required";
    } else if (!regex.test(values.ipAddr)) {
      errors.ipAddr = "Invalid IP";
    }

    if (!values.camN) {
      errors.camN = "camera name is required";
    } else if (values.camN.length < 1) {
      errors.camN = "camera name too short";
    }

    if (!values.location) {
      errors.location = "location is required";
    } else if (values.location.length < 1) {
      errors.location = "location too short";
    }

    if (!values.maxCap) {
      errors.maxCap = "max capacity is required";
    }

    return errors;
  };

  const UserDetailSchema = Yup.object().shape({
   
    ipAddr: Yup.string()
    .required("IP is required")
    .min(1, "IP is too short - should be 4 chars minimum"),

    camN: Yup.string()
      .required("camera is required")
      .min(1, "camera name is too short - should be 4 chars minimum"),

    location: Yup.string()
      .required("location is required")
      .min(1, ""),
    maxCap: Yup.string()
      .required("max capacity is required")
      .min(1, "")
  });

  const submitForm = (values) => {
    props.submitData(values);
    props.onClose(false);
  };

  return (
    <Dialog
      // style={{ content: EXAMPLE_ALERT_STYLE }}
      fullWidth={true}
      maxWidth={"md"}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>Add Camera Details</DialogTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        <div>
          <Formik
            initialValues={updateData}
             validate={validate}
            validationSchema={UserDetailSchema}
            onSubmit={submitForm}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isValid,
                dirty
              } = formik;
              return (
                <div className="container">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <TextField
                        label="Camera Name"
                        variant="outlined"
                        type="text"
                        name="camN"
                        id="camN"
                        value={values.camN}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.camN && touched.camN
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.camN && touched.camN && (
                        <span className="error">{errors.camN}</span>
                      )}
                    </div>

                    <div className="form-row">
                      <TextField
                        label="Location"
                        variant="outlined"
                        type="text"
                        name="location"
                        id="location"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.location && touched.location
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.location && touched.location && (
                        <span className="error">{errors.location}</span>
                      )}
                    </div>

                    <div className="form-row">
                      <TextField
                        label="Max Capacity"
                        variant="outlined"
                        type="text"
                        name="maxCap"
                        id="maxCap"
                        value={values.maxCap}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.maxCap && touched.maxCap
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.maxCap && touched.maxCap && (
                        <span className="error">{errors.maxCap}</span>
                      )}
                    </div>

                    <div className="form-row">
                      <TextField
                        label="IP"
                        variant="outlined"
                        type="ipAddr"
                        name="ipAddr"
                        id="ipAddr"
                        value={values.ipAddr}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.ipAddr && touched.ipAddr ? "input-error" : null
                        }
                      />
                      {errors.ipAddr && touched.ipAddr && (
                        <span className="error">{errors.ipAddr}</span>
                      )}
                    </div>

                    <button
                      type="submit"
                       className={!(dirty && isValid) ? "disabled-btn" : ""}
                       disabled={!(dirty && isValid)}
                      variant="outlined"
                    >
                      {props.buttonName}
                    </button>
                  </form>
                </div>
              );
            }}
          </Formik>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 10px 10px 0"
          }}
        >
          <div></div>
        </div>
      </div>
    </Dialog>
  );
}
