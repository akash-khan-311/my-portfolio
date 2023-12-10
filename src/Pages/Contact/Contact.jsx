import PageTitle from "../../components/PageTitle/PageTitle";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { Button } from "@material-tailwind/react";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const form = useRef();
  return (
    <div>
      <Helmet>
        <title>Akash Ali | Contact</title>
      </Helmet>
      <PageTitle title={"Contact"} />
      <div className="mt-32 gap-5 flex flex-col lg:flex-row justify-between items-center ">
        {/* contact form */}
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:w-1/2 w-full "
        >
          <h2 className="text-black dark:text-white text-4xl font-semibold">
            Get In Touch
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Please Enter a Valid Email";
              }
              if (!values.subject) {
                errors.subject = "Required";
              } else if (values.subject.length < 10) {
                errors.subject = "Write More";
              }

              if (!values.message) {
                errors.message = "Required";
              } else if (values.message.length < 20) {
                errors.message = "Write Your Message In Detail";
              }

              return errors;
            }}
            onSubmit={async (values, { resetForm }) => {
              /***
               * ===================
               * Form Data Will use in database
               * ===================
               *  */
              // const formDetails = {
              //   name: values.name,
              //   email: values.email,
              //   subject: values.subject,
              //   message: values.message,
              // };
              emailjs
                .sendForm(
                  `service_0bgcfb5`,
                  `template_ufqxgzd`,
                  form.current,
                  `gKdYde2zQxhOHLNMn`
                )
                .then(
                  (result) => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Thanks for Contacting With Me",
                      showConfirmButton: false,
                      timer: 2000,
                    });

                    resetForm({ values: "" });

                    console.log(result);
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }}
          >
            {(formik) => (
              <form ref={form} onSubmit={formik.handleSubmit}>
                {/* Name Field */}
                <div className="relative w-full min-w-[200px] h-10 my-14">
                  <input
                    type="text"
                    name="name"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 dark:text-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                    placeholder=" "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <span className="text-red-600 text-lg">
                      {formik.errors.name}
                    </span>
                  )}
                  <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[18px] peer-focus:text-[18px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                    Your Name
                  </label>
                </div>
                {/* Email Field */}
                <div className="relative w-full min-w-[200px] h-10 my-14">
                  <input
                    type="email"
                    name="email"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 dark:text-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                    placeholder=" "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-600 text-lg">
                      {formik.errors.email}
                    </span>
                  )}
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[18px] peer-focus:text-[18px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                    Your Email Address
                  </label>
                </div>
                {/* Subject Field */}
                <div className="relative w-full min-w-[200px] h-10 my-14">
                  <input
                    type="text"
                    name="subject"
                    className="peer w-full h-full bg-transparent text-blue-gray-700 dark:text-blue-gray-200 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-6 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                    placeholder=" "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <span className="text-red-600 text-lg">
                      {formik.errors.subject}
                    </span>
                  )}
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-lg text-[18px] peer-focus:text-[18px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                    Write Your Subject
                  </label>
                </div>
                {/* Message */}
                <div className="relative w-full min-w-[200px] mt-14">
                  <textarea
                    type="text"
                    name="message"
                    className="peer h-full min-h-[350px] w-full text-blue-gray-700 dark:text-blue-gray-200 resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-lg font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <span className="text-red-600 text-lg">
                      {formik.errors.message}
                    </span>
                  )}
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[18px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[18px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Textarea Red
                  </label>
                </div>
                <div className="mt-10">
                  <Button type="submit" color="blue" className="w-full">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        {/* contact info */}
        <div className="lg:w-1/2 w-full">
          {/* phone */}
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ContactInfo
              subTitle={"(+880) 1719-981 150 "}
              title={"Phone"}
              icon={FaPhoneAlt}
            />
          </div>
          {/* Email */}
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="my-10"
          >
            <ContactInfo
              title={"Email"}
              subTitle={" akashkhanbdinto@gmail.com "}
              icon={MdEmail}
            />
          </div>
          {/* Address */}
          <div
            data-aos="fade-down"
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ContactInfo
              title={"Address"}
              subTitle={"Nobinogor, Mohammadpur, Dhaka Bangladesh"}
              icon={FaLocationDot}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
