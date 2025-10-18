import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import AppData from "@data/app.json";
import { useState } from "react";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleFormSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // REEMPLAZA 'xvoyqyev' CON TU FORM ID DE FORMSPREE PARA CONTACTO
      const response = await fetch("https://formspree.io/f/mzzjoqve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: "📧 NUEVO MENSAJE DE CONTACTO - Midnight Studios",
          _replyto: values.email,
          source: "Contact Page Form",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        resetForm();
        setTimeout(() => {
          setSubmitStatus("");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Conversa con nosotros!"}
        breadTitle={"Contacto"}
        anchorLabel={"Enviar mensaje"}
        anchorLink={"#contact"}
        paddingBottom={1}
        align={"center"}
      />

      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d-73.6519672!3d45.5673453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f8abc30e0ff%3A0xfc6d9cbb49022e9c!2sManoir%20Saint-Joseph!5e0!3m2!1sen!2sua!4v1685485811069!5m2!1sen!2sua"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* map end */}

      {/* contact form */}
      <section id="contact">
        <div className="container mil-p-120-90">
          <h3 className="mil-center mil-up mil-mb-120">
            Contáctanos <span className="mil-thin">Ahora</span>
          </h3>

          <Formik
            initialValues={{ email: "", name: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.message) {
                errors.message = "Required";
              }
              return errors;
            }}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              resetForm,
            }) => (
              <form onSubmit={handleSubmit} className="row align-items-center">
                <div className="col-lg-6 mil-up">
                  <input
                    type="text"
                    placeholder="Cuál es tu nombre?"
                    name="name"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    disabled={isSubmitting}
                  />
                  {touched.name && errors.name && (
                    <div className="mil-form-error">{errors.name}</div>
                  )}
                </div>
                <div className="col-lg-6 mil-up">
                  <input
                    type="email"
                    placeholder="Tu Email"
                    name="email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    disabled={isSubmitting}
                  />
                  {touched.email && errors.email && (
                    <div className="mil-form-error">{errors.email}</div>
                  )}
                </div>
                <div className="col-lg-12 mil-up">
                  <textarea
                    placeholder="Háblanos Acerca de tu Proyecto"
                    name="message"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    disabled={isSubmitting}
                  />
                  {touched.message && errors.message && (
                    <div className="mil-form-error">{errors.message}</div>
                  )}
                </div>
                <div className="col-lg-8">
                  <p className="mil-up mil-mb-30">
                    <span className="mil-accent">*</span> Nos comprometemos a no
                    revelar su información personal a terceros.
                  </p>

                  {/* Mensaje de estado */}
                  {submitStatus === "success" && (
                    <div
                      className="mil-form-success mil-up"
                      style={{ color: "#4CAF50", fontWeight: "500" }}
                    >
                      ¡Gracias por tu mensaje! Te contactaremos pronto.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div
                      className="mil-form-error mil-up"
                      style={{ color: "#ff6b6b", fontWeight: "500" }}
                    >
                      Error al enviar el mensaje. Intenta nuevamente.
                    </div>
                  )}
                </div>
                <div className="col-lg-4">
                  <div className="mil-adaptive-right mil-up mil-mb-30">
                    <button
                      type="submit"
                      className="mil-button mil-arrow-place"
                      disabled={isSubmitting}
                    >
                      <span>
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      </span>
                      {!isSubmitting && <ArrowIcon />}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </section>
      {/* contact form end */}
    </Layouts>
  );
};
export default Contact;
