import { useState } from "react";
import InputField from "../Input/InputField";
import SectionHeader from "../Section/SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    role: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    role: "",
    budget: "",
    message: "",
  });

  const removeInput = () => {
    setInputs({
      name: "",
      phone: "",
      email: "",
      company: "",
      role: "",
      budget: "",
      message: "",
    });
  };

  const removeError = () => {
    setErrors({
      name: "",
      phone: "",
      email: "",
      company: "",
      role: "",
      budget: "",
      message: "",
    });
  };

  const handleValidation = () => {
    let isValid = false;

    let errorText = {};

    if (!inputs.name) {
      errorText["name"] = "Name is required";
    }

    if (!inputs.phone) {
      errorText["phone"] = "Phone is required";
    }

    if (!inputs.email) {
      errorText["email"] = "Email is required";
    }

    if (!inputs.company) {
      errorText["company"] = "Company is required";
    }

    if (!inputs.role) {
      errorText["role"] = "Role is required";
    }

    if (!inputs.budget) {
      errorText["budget"] = "Budget is required";
    }

    if (!inputs.message) {
      errorText["message"] = "Message is required";
    }

    setErrors(errorText);

    if (
      inputs.name != "" &&
      inputs.phone != "" &&
      inputs.email != "" &&
      inputs.company != "" &&
      inputs.company != "" &&
      inputs.role != "" &&
      inputs.budget != "" &&
      inputs.message != ""
    ) {
      isValid = true;
    }

    return isValid;
  };

  const handleChange = (e) => {
    e.preventDefault();

    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));

    removeError();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const valid = handleValidation();

    console.log(valid);

    if (valid) {
      let formData = {
        name: inputs.name,
        phone: inputs.phone,
        email: inputs.email,
        company: inputs.company,
        role: inputs.role,
        budget: inputs.budget,
        message: inputs.message,
      };

      emailjs
        .send(
          "service_kftveoh",
          "template_c2x4k29",
          formData,
          "z0_r8uAqCvnWvwvS5"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message Sent Successfully! ");
            removeInput();
          },
          (error) => {
            console.log(error.text);
            toast.error("Error sending message, try again! ");
          }
        );
    }
  };

  return (
    <div id="contact" className="mt-[88px]">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="w-[55%]"
      >
        <SectionHeader
          buttonText="Contact Us"
          title={`Let us know about your project`}
        />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[133px] gap-y-9 mx-[20px] lg:mx-[76px] mt-[35px] lg:mt-[77px]">
        <InputField
          title="Hello, I am"
          name="name"
          placeholder="Your Name"
          value={inputs.name}
          onChange={(e) => handleChange(e)}
          errorMessage={errors.name}
        />
        <InputField
          title="Phone Number"
          type="number"
          name="phone"
          placeholder="+628"
          value={inputs.phone}
          onChange={(e) => handleChange(e)}
          errorMessage={errors.phone}
        />
        <InputField
          title="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value={inputs.email}
          onChange={(e) => handleChange(e)}
          errorMessage={errors.email}
        />
        <InputField
          title="Company"
          name="company"
          placeholder="Name of your company"
          value={inputs.company}
          onChange={(e) => handleChange(e)}
          errorMessage={errors.company}
        />
        <InputField
          title="Role in company"
          name="role"
          placeholder="Your role of company"
          value={inputs.role}
          onChange={(e) => handleChange(e)}
          errorMessage={errors.role}
        />
        <InputField
          title="Budget"
          name="budget"
          placeholder="Budget for this project"
          value={inputs.budget}
          onChange={(e) => handleChange(e)}
          errorMessage={errors.budget}
        />
      </div>
      <div className="mt-[57px] mx-5 lg:mx-[76px]">
        <h6 className="font-medium text-4xl text-black">
          Information your project
        </h6>
        <div className="flex flex-col mt-5 lg:mt-9">
          <label htmlFor="" className="text-[22px] font-semibold">
            What is your goals for the project?{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id=""
            rows={10}
            className="form-control mt-1"
            placeholder="I want this project to be like...."
            value={inputs.message}
            onChange={(e) => handleChange(e)}
            required
          ></textarea>
          <span className="text-red-500">{errors.message}</span>
        </div>
        <div className="flex flex-col lg:flex-row justify-end items-start lg:items-end mt-7">
          <div className="flex items-center justify-center mt-5 lg:mt-0">
            <button
              className="btn-primary"
              type="submit"
              onClick={(e) => sendEmail(e)}
            >
              Let’s have an online meet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
