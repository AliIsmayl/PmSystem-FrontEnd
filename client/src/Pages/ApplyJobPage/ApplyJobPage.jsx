import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./ApplyJobPage.scss";
import { IoIosArrowForward } from "react-icons/io";
import { RxUpload } from "react-icons/rx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BackImage from "../../Image/CareerDetailBack.webp";
import CardBackImage from "../../Image/ApplyJobCardBack.png";
import toast from "react-hot-toast";

function ApplyJobPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const languageKey = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "EN";

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    cv: null,
    job:null
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t("Name is required")),
    last_name: Yup.string().required(t("Surname is required")),
    email: Yup.string()
      .email(t("Invalid email address"))
      .required(t("Email is required")),
    phone: Yup.string().required(t("Phone number is required")),
    cv: Yup.mixed().required(t("File upload is required")),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
  
    formData.append("job", detail[languageKey].Position);
  
    try {
      const res = await axios.post(
        `https://pmsystems.az/qrcode/api/v1/jobs/${id}/apply/`,
        formData
      );
      toast.success("Göndərildi...");
      navigate("/career");
    } catch (error) {
      console.error("Error creating order:", error);
      if (error.response) {
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
  

  async function getDetail(id) {
    try {
      const res = await axios.get(
        `https://pmsystems.az/qrcode/api/v1/jobs/${id}`
      );
      setDetail(res.data);
      console.log('Vacancy:', detail[EN].Position)

    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   if (detail && detail[languageKey]) {
  //     console.log('Vacancy:', detail[languageKey].Position);
  //   }
  // }, [detail, languageKey]);

  useEffect(() => {
    getDetail(id);
  }, [id]);

  if (!detail || !detail[languageKey]) {
    return null;
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
                <label htmlFor="first_name">{t("Name")}</label>
                <Field type="text" name="first_name" />
                <ErrorMessage name="first_name" component="div" className="error" />

                <label htmlFor="last_name">{t("Surname")}</label>
                <Field type="text" name="last_name" />
                <ErrorMessage name="last_name" component="div" className="error" />

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
                    <p>{fileName || t("UploadFile")}</p>
                  </div>
                  <input
                    type="file"
                    name="cv"
                    className="fileInput"
                    onChange={(event) => {
                      const cv = event.currentTarget.files[0];
                      setFieldValue("cv", cv || null);
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

export default ApplyJobPage;
