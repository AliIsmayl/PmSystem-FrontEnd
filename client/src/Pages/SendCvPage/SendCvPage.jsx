import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { RxUpload } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CardBackİmage from "../../Image/ApplyJobCardBack.png";
import BackImage from "../../Image/CareerDetailBack.webp";
import "./SendCvPage.scss";

function SendCvPage() {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState("");

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("Name is required")),
    surname: Yup.string().required(t("Surname is required")),
    email: Yup.string()
      .email(t("Invalid email address"))
      .required(t("Email is required")),
    phone: Yup.string().required(t("Phone number is required")),
    message: Yup.string().required(t("Message is required")),
    file: Yup.mixed().required(t("File upload is required")),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm(); // Reset form after submission
    setFileName(""); // Clear file name after submission
  };

  return (
    <div id="sendCvPage" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="oneBox">
        <Link className="touchLink" to={"/career"}>
          {t("Career")}
        </Link>
        <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link">{t("Apply")}</Link>
      </div>
      <div className="downBox">
        <div
          className="leftBox"
          style={{ backgroundImage: `url(${CardBackİmage})` }}
        ></div>
        <div className="rightBox">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <label htmlFor="name">{t("Name")}</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />

                <label htmlFor="surname">{t("Surname")}</label>
                <Field type="text" name="surname" />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="error"
                />

                <label htmlFor="email">{t("Email")}</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />

                <label htmlFor="phone">{t("PhoneNumber")}</label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" className="error" />

                <label htmlFor="message">{t("Message")}</label>
                <Field as="textarea" name="message" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />

                <div className="imageBox">
                  <div className="frontBox">
                    <div className="icon">
                      <RxUpload />
                    </div>
                    <p>{fileName || t("UploadFile")}</p>{" "}
                    {/* Show file name or default text */}
                  </div>
                  <input
                    type="file"
                    className="fileInput"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("file", file ? file : null); // Set file value
                      setFileName(file ? file.name : ""); // Set file name or clear it
                    }}
                  />
                </div>
                <ErrorMessage name="file" component="div" className="error" />

                <p>{t("UploadFileSize")}</p>
                <button
                  type="submit"
                  className="sendBtn"
                  disabled={isSubmitting}
                >
                  {t("Send")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SendCvPage;
