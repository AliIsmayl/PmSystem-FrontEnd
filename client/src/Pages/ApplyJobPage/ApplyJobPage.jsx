import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ApplyJobPage.scss";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { RxUpload } from "react-icons/rx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BackImage from "../../Image/CareerDetailBack.webp";
import CardBackImage from "../../Image/ApplyJobCardBack.png";

function ApplyJobPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const languageKey = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    file: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("Name is required")),
    surname: Yup.string().required(t("Surname is required")),
    email: Yup.string()
      .email(t("Invalid email address"))
      .required(t("Email is required")),
    phone: Yup.string().required(t("Phone number is required")),
    file: Yup.mixed().required(t("File upload is required")),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  async function getDetail() {
    try {
      const res = await axios.get(
        `https://pmsystems.az/qrcode/api/v1/jobs/${id}`
      );
      setDetail(res.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, [id]);

  if (!detail || !detail[languageKey]) {
    return;
  }

  return (
    <div id="applyJobPage" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="oneBox">
        <Link className="touchLink" to="/career">
          {t("Career")}
        </Link>
        <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link2" to={`/career/${id}`}>
          {detail[languageKey].Position}
        </Link>
        <div className="icon">
          <IoIosArrowForward />
        </div>
        <Link className="link">{t("ApplyJob")}</Link>
      </div>
      <div className="downBox">
        <div
          className="leftBox"
          style={{ backgroundImage: `url(${CardBackImage})` }}
        >
          <h1>{detail[languageKey].Position}</h1>
          <div className="normalBox">
            <p>{`${detail[languageKey].LocationCity}, ${detail[languageKey].LocationCountry}`}</p>
            | <p>{detail[languageKey].JobType}</p>
          </div>
        </div>
        <div className="rightBox">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values, isSubmitting }) => (
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

                <div className="imageBox">
                  <div className="frontBox">
                    <div className="icon">
                      <RxUpload />
                    </div>
                    <p>{values.file ? values.file.name : t("UploadFile")}</p>
                  </div>
                  <input
                    type="file"
                    name="file"
                    className="fileInput"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("file", file || null);
                    }}
                  />
                </div>
                {!values.file && (
                  <ErrorMessage name="file" component="div" className="error" />
                )}

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

export default ApplyJobPage;
