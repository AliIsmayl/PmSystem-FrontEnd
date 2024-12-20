import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { RxUpload } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CardBackİmage from "../../Image/ApplyJobCardBack.png";
import BackImage from "../../Image/CareerDetailBack.webp";
import "./SendCvPage.scss";
import axios from "axios";
import toast from "react-hot-toast";

function SendCvPage() {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t("Name is required")),
    last_name: Yup.string().required(t("Surname is required")),
    email: Yup.string()
      .email(t("Invalid email address"))
      .required(t("Email is required")),
    phone: Yup.string().required(t("Phone number is required")),
    message: Yup.string().required(t("Message is required")),
    cv: Yup.mixed().required(t("File upload is required")),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    try {
      const res = await axios.post(
        "https://api.pmsystems.az/qrcode/api/v1/jobs/general/apply/",
        formData
      );
      toast.success(t("Sender"));
      navigate("/career");
    } catch (error) {
      console.error("Error creating order:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        toast.error(error.response.data.message || error.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setSubmitting(false);
      resetForm();
      setFileName("");
    }
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
                <label htmlFor="first_name">{t("Name")}</label>
                <Field type="text" name="first_name" />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="error"
                />

                <label htmlFor="last_name">{t("Surname")}</label>
                <Field type="text" name="last_name" />
                <ErrorMessage
                  name="last_name"
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
                  </div>
                  <input
                    type="file"
                    className="fileInput"
                    onChange={(event) => {
                      const cv = event.currentTarget.files[0];
                      setFieldValue("cv", cv ? cv : null);
                      setFileName(cv ? cv.name : "");
                    }}
                  />
                </div>
                <ErrorMessage name="cv" component="div" className="error" />

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
