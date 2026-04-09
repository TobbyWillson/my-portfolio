import { useEffect, useState } from "react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { parsePhoneNumberFromString } from "libphonenumber-js";

const EMAIL_ADDRESS = "a586447a37250038ed325c65a0bd0c19";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL_ADDRESS}`;

const initialFormData = {
  fullName: "",
  email: "",
  contactDetail: "",
  purpose: "",
  message: "",
  preferredMethod: "phone",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const methodConfigs = {
    phone: { label: "Phone Number", placeholder: "+234 800 000 0000", type: "tel" },
    chat: { label: "WhatsApp Number", placeholder: "+234 800 000 0000", type: "tel" },
    email: { label: null, placeholder: null, type: null },
  };

  const methods = [
    { id: "phone", label: "Phone", icon: <Phone size={16} className='shrink-0' /> },
    { id: "email", label: "Email", icon: <Mail size={16} className='shrink-0' /> },
    { id: "chat", label: "WhatsApp", icon: <FaWhatsapp size={16} className='shrink-0' /> },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    let finalValue = value;

    const isPhoneOrChat = formData.preferredMethod === "phone" || formData.preferredMethod === "chat";

    if (name === "contactDetail" && isPhoneOrChat) {
      if (value.length > 0 && !value.startsWith("+")) {
        finalValue = `+${value}`;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  const handleMethodChange = (id) => {
    setFormData((prev) => ({
      ...prev,
      preferredMethod: id,
      contactDetail: "",
    }));
  };

  const isPhoneOrChat = formData.preferredMethod === "phone" || formData.preferredMethod === "chat";
  const phoneNumberObj = isPhoneOrChat ? parsePhoneNumberFromString(formData.contactDetail || "") : null;
  const isPhoneInvalid = isPhoneOrChat && (!formData.contactDetail.startsWith("+") || !phoneNumberObj?.isValid());

  const isEmailInvalid = formData.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isPhoneInvalid) {
      setFeedback({ type: "error", message: "" });
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return;
    }

    if (isEmailInvalid) {
      setFeedback({ type: "error", message: "" });
      setTimeout(() => setIsVisible(true), 10);
      return;
    }

    const { fullName, email, contactDetail, purpose, message, preferredMethod } = formData;

    const isContactValid = preferredMethod === "email" || contactDetail.trim();

    if (!fullName.trim() || !email.trim() || !isContactValid || !purpose.trim() || !message.trim()) {
      setFeedback({ type: "error", message: "Please fill in all fields before sending." });
      return;
    }

    try {
      setIsSending(true);
      setFeedback({ type: "", message: "" });

      const payload = new FormData();
      payload.append("name", fullName);
      payload.append("email", email);
      payload.append("purpose", purpose);
      payload.append("message", message);
      payload.append("Preferred Method", preferredMethod);

      if (preferredMethod !== "email") {
        payload.append(methodConfigs[preferredMethod].label, contactDetail);
      }

      payload.append("_captcha", "false");
      payload.append("_subject", `Portfolio Contact: ${purpose}`);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error();

      // WhatsApp redirects when Chat is picked
      const time = new Date().getHours();

      const checkTimeOfDay = () => {
        if (time >= 0 && time < 12) {
          return "Good Morning";
        } else if (time >= 12 && time < 16) {
          return "Good Afternoon";
        } else {
          return "Good Evening";
        }
      };

      if (preferredMethod === "chat") {
  const phone = contactDetail.replace(/\D/g, "");

  const cleanMessage = message.trim();
  const punctuation = cleanMessage.endsWith(".") ? "" : ".";
  
  const fullText = `Hello, ${checkTimeOfDay()}, my name is ${fullName}.\n\n${cleanMessage}${punctuation}`;
  
  const text = encodeURIComponent(fullText);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

      setFeedback({
        type: "success",
        message: "Thanks! Your details were sent successfully. I will get back to you as soon as possible.",
      });

      setFormData(initialFormData);
    } catch {
      setFeedback({
        type: "error",
        message: "Unable to send. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (feedback.message || (feedback.type === "error" && isPhoneInvalid)) {
      setIsVisible(true);

      const fadeTimer = setTimeout(() => setIsVisible(false), 4000);
      const clearTimer = setTimeout(() => {
        setFeedback({ type: "", message: "" });
      }, 4500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(clearTimer);
      };
    }
  }, [feedback.message, feedback.type, isPhoneInvalid]);

  return (
    <section className='my-30 max-w-3xl mx-auto' id='contact'>
      <div className='mb-14 text-center flex flex-col gap-4 border-b border-border-gray pb-5 rounded-lg'>
        <h1 className='text-3xl sm:text-4xl tracking-[3px]'>Contact Me</h1>
        <p className='text-sm sm:text-base dark:text-gray-100/60 text-bg-text/70 sm:mx-20'>Tell me who you are, your purpose, and your message. I will reach out to you as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className='rounded-xl bg-gray-200 dark:bg-[#272f3a] shadow-md dark:shadow-gray-50/10 p-4 sm:p-8 flex flex-col gap-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium text-bg-text dark:text-white'>Full Name</span>
            <input
              type='text'
              name='fullName'
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder='John Doe'
              disabled={isSending}
              onInvalid={(e) => e.target.setCustomValidity("Please enter your full name!")}
              onInput={(e) => e.target.setCustomValidity("")}
              className='rounded-lg border text-bg-text border-border-gray bg-white dark:bg-[#364153] px-4 py-3 outline-none focus:border-[#2563EB]'
            />

            {feedback.type === "error" && !formData.fullName && <span className={`text-xs transition-all duration-500 ease-in-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Full Name is required.</span>}
          </label>

          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium text-bg-text dark:text-white'>Email Address</span>
            <input
              type='email'
              name='email'
              required
              value={formData.email}
              onChange={handleChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter your Email Address!")}
              onInput={(e) => e.target.setCustomValidity("")}
              placeholder='johndoe@example.com'
              disabled={isSending}
              className='rounded-lg border border-border-gray bg-white text-bg-text dark:bg-[#364153] px-4 py-3 outline-none focus:border-[#2563EB]'
            />

            {feedback.type === "error" &&
              (!formData.email ? (
                <span className={`text-xs transition-all duration-500 ease-in-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Email Address is required.</span>
              ) : isEmailInvalid ? (
                <span className={`text-xs transition-all duration-500 ease-in-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Please enter a valid email address.</span>
              ) : null)}
          </label>
        </div>

        {/* Preferred Contact Method */}
        <div className='flex flex-col gap-3'>
          <span className='text-sm font-medium'>Preferred Contact Method</span>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {methods.map((method) => (
              <button
                key={method.id}
                type='button'
                onClick={() => handleMethodChange(method.id)}
                className={`flex items-center justify-center gap-3 px-3 py-3 rounded-lg border border-border-gray transition-all duration-400  last:col-span-2 min-[480px]:last:col-span-1 text-bg-text cursor-pointer
                ${formData.preferredMethod === method.id ? "border-[#2563EB] bg-[#2563EB]/10 text-[#2563EB] ring-1 ring-[#2563EB]" : "bg-white dark:bg-[#364153]"}`}
              >
                {method.icon} {method.label}
              </button>
            ))}
          </div>
        </div>

        {formData.preferredMethod !== "email" && (
          <label className='flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300'>
            <span className='text-sm font-medium'>{methodConfigs[formData.preferredMethod].label}</span>
            <input
              type={methodConfigs[formData.preferredMethod].type}
              name='contactDetail'
              required
              value={formData.contactDetail}
              onChange={handleChange}
              onInvalid={(e) => e.target.setCustomValidity("Please enter your preferred method of contact details!")}
              onInput={(e) => e.target.setCustomValidity("")}
              placeholder={methodConfigs[formData.preferredMethod].placeholder}
              disabled={isSending}
              className='rounded-lg border border-border-gray bg-white dark:bg-[#364153] px-4 py-3 outline-none focus:border-[#2563EB]'
            />

            {feedback.type === "error" && (
              <div className='overflow-hidden'>
                {!formData.contactDetail ? (
                  <span
                    className={`block text-xs transition-all duration-700 ease-out transform text-red-500 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  >
                    Preferred contact method detail is required.
                  </span>
                ) : isPhoneInvalid ? (
                  <span
                    className={`block text-xs transition-all duration-700 ease-out transform text-red-500 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  >
                    Please enter a valid phone number with country code (e.g. +234...).
                  </span>
                ) : null}
              </div>
            )}
          </label>
        )}

        {/* Purpose */}
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-medium text-bg-text dark:text-white'>Purpose</span>
          <input
            type='text'
            name='purpose'
            required
            value={formData.purpose}
            onChange={handleChange}
            onInvalid={(e) => e.target.setCustomValidity("Please let us know your purpose of contacting us!")}
            onInput={(e) => e.target.setCustomValidity("")}
            placeholder='Website redesign, Collaboration...'
            disabled={isSending}
            className='rounded-lg border border-border-gray text-bg-text bg-white dark:bg-[#364153] px-4 py-3 outline-none focus:border-[#2563EB]'
          />

          {feedback.type === "error" && !formData.purpose && <span className={`text-xs transition-all duration-500 ease-in-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Purpose of message is required.</span>}
        </label>

        {/* Message Field */}
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-medium text-bg-text dark:text-white'>Message</span>
          <textarea
            name='message'
            rows='6'
            required
            value={formData.message}
            onInvalid={(e) => e.target.setCustomValidity("Please enter some messages to give more details!")}
            onInput={(e) => e.target.setCustomValidity("")}
            onChange={handleChange}
            placeholder='Share your project details...'
            disabled={isSending}
            className='rounded-lg border border-border-gray text-bg-text bg-white dark:bg-[#364153] px-4 py-3 outline-none focus:border-[#2563EB] resize-y'
          />

          {feedback.type === "error" && !formData.message && <span className={`text-xs transition-all duration-500 ease-in-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Message is required.</span>}
        </label>

        <button
          type='submit'
          disabled={isSending}
          className='mt-1 w-full rounded-full bg-[#586583] px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#556daf] transition-all duration-300 cursor-pointer hover:scale-103 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2'
        >
          {isSending ? (
            <>
              <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></span>
              Sending...
            </>
          ) : (
            "Send Details"
          )}
        </button>

        {/* Feedback */}
        {feedback.message !== "" && <p className={`text-sm transition-all duration-700 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} ${feedback.type === "error" ? "text-red-500" : "text-green-600 dark:text-green-400"}`}>{feedback.message}</p>}
      </form>
    </section>
  );
};

export default Contact;
