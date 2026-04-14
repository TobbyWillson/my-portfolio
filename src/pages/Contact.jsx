import { useEffect, useState, useRef } from "react";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import { methodConfigs, methods } from "../constants/Materials";
import TelegramVanish from "../Components/Thanos";
import { useVanishEffect } from "../hooks/useVanishEffect";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    let finalValue = value;

    const isPhoneOrChat = formData.preferredMethod === "phone" || formData.preferredMethod === "chat";

    if (name === "contactDetail" && isPhoneOrChat) {
      finalValue = value.replace(/[^\d+]/g, "");

      if (finalValue.includes("+")) {
        finalValue = "+" + finalValue.replace(/\+/g, "");
      }

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

  // Check phone number's validity (+ and country code)
  const isPhoneOrChat = formData.preferredMethod === "phone" || formData.preferredMethod === "chat";
  const phoneNumberObj = isPhoneOrChat ? parsePhoneNumberFromString(formData.contactDetail || "") : null;
  const isPhoneInvalid = isPhoneOrChat && (!formData.contactDetail.startsWith("+") || !phoneNumberObj?.isValid());

  // Check Email validity
  const isEmailInvalid = formData.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  // Check if Name is invalid
  const isNameValid = formData.fullName.length < 5;

  // Check if purpose is less than 10
  const isPurposeValid = formData.purpose.length >= 10;

  // Check Message validity
  const isMessageValid = formData.message.length < 15;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isPurposeValid || isPhoneInvalid || isEmailInvalid || isNameValid || isMessageValid) {
      setFeedback({ type: "error", message: "" });
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
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
        const phone = `2348036524258`;

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
        message: "Unable to send. Please check your network connection and try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (feedback.type) {
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
  }, [feedback.type]);

  // Clear X button
  const xButton = (
    <svg xmlns='http://w3.org' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
      <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
    </svg>
  );

  const handleClear = (fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: "",
    }));
  };

  // Thanos Vanish Effect
  const { vanishText, refs, triggerVanish, handleVanishComplete, handleKeyDown } = useVanishEffect(formData, handleClear);

  const handleVanishing = (fieldName) => {
    if (vanishText?.name !== fieldName) return null;
    return <TelegramVanish text={vanishText.text} charIndex={vanishText.charIndex} onComplete={handleVanishComplete} />;
  };

  return (
    <section className='my-30 max-w-3xl mx-auto' id='contact'>
      <div className='mb-14 text-center flex flex-col gap-4 border-b border-border-gray pb-5 rounded-lg'>
        <h1 className='text-3xl sm:text-4xl tracking-[3px]'>Contact Me</h1>
        <p className='text-sm sm:text-base dark:text-gray-100/60 text-bg-text/70 sm:mx-20'>Tell me who you are, your purpose, and your message. I will reach out to you as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className='rounded-xl bg-gray-200 dark:bg-[#272f3a] shadow-md dark:shadow-gray-50/10 p-4 sm:p-8 flex flex-col gap-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
          {/* Full Name Input field and label */}
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium text-bg-text dark:text-white'>Full Name</span>
            <div className='relative flex items-center overflow-hidden'>
              {handleVanishing("fullName")}

              <input
                type='text'
                name='fullName'
                required
                value={formData.fullName}
                onChange={handleChange}
                ref={refs.fullName}
                onKeyDown={(e) => handleKeyDown(e, "fullName")}
                placeholder='John Doe'
                disabled={isSending}
                className={`w-full rounded-lg border text-bg-text border-border-gray bg-white dark:bg-[#364153] pl-4 pr-10 py-3 outline-none focus:border-[#2563EB] ${feedback.type === "error" && isNameValid ? "border-red-500" : "border-border-gray focus:border-[#2563EB]"}`}
              />

              {formData.fullName && !isSending && (
                <button type='button' onClick={() => triggerVanish("fullName")} className='absolute right-3 text-gray-400 hover:text-red-500 transition-colors' aria-label='Clear input'>
                  {xButton}
                </button>
              )}
            </div>

            {feedback.type === "error" && (
              <div className='overflow-hidden'>
                {!formData.fullName ? (
                  <span className={`block text-xs transition-all duration-500 text-red-500 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Full Name is required.</span>
                ) : formData.fullName.length < 5 ? (
                  <span className={`block text-xs transition-all duration-500 text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Full name must be at least 5 letters (current: {formData.fullName.length}).</span>
                ) : null}
              </div>
            )}
          </label>

          {/* Email Address Input Field and Label */}
          <label className='flex flex-col gap-2'>
            <span className='text-sm font-medium text-bg-text dark:text-white'>Email Address</span>
            <div className='relative flex items-center overflow-hidden'>
              {handleVanishing("email")}
              <input
                type='text'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                ref={refs.email}
                onKeyDown={(e) => handleKeyDown(e, "email")}
                placeholder='johndoe@example.com'
                disabled={isSending}
                className={`w-full rounded-lg border border-border-gray bg-white text-bg-text dark:bg-[#364153] px-4 pr-10 py-3 outline-none focus:border-[#2563EB]  ${feedback.type === "error" && (formData.email.length < 1 || isEmailInvalid) ? "border-red-500" : "border-border-gray focus:border-[#2563EB]"}`}
              />
              {formData.email && !isSending && (
                <button type='button' onClick={() => triggerVanish("email")} className='absolute right-3 text-gray-400 hover:text-red-500 transition-colors'>
                  {xButton}
                </button>
              )}
            </div>

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
        {/* Phone or Chat Input field */}
        {formData.preferredMethod !== "email" && (
          <label className='flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300'>
            <span className='text-sm font-medium'>{methodConfigs[formData.preferredMethod].label}</span>
            <div className='relative flex items-center overflow-hidden'>
              {handleVanishing("contactDetail")}
              <input
                type={methodConfigs[formData.preferredMethod].type}
                inputMode={methodConfigs[formData.preferredMethod].inputMode}
                name='contactDetail'
                required
                value={formData.contactDetail}
                onChange={handleChange}
                ref={refs.contactDetail}
                onKeyDown={(e) => handleKeyDown(e, "contactDetail")}
                placeholder={methodConfigs[formData.preferredMethod].placeholder}
                disabled={isSending}
                className={`w-full rounded-lg border border-border-gray bg-white text-bg-text dark:bg-[#364153] px-4 pr-10 py-3 outline-none focus:border-[#2563EB]  ${feedback.type === "error" && isPhoneInvalid ? "border-red-500" : "border-border-gray focus:border-[#2563EB]"}`}
              />
              {formData.contactDetail && !isSending && (
                <button type='button' onClick={() => triggerVanish("contactDetail")} className='absolute right-3 text-gray-400 hover:text-red-500 transition-colors'>
                  {xButton}
                </button>
              )}
            </div>

            {feedback.type === "error" && (
              <div className='overflow-hidden'>
                {!formData.contactDetail ? (
                  <span className={`block text-xs transition-all duration-700 ease-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Preferred contact method detail is required.</span>
                ) : isPhoneInvalid ? (
                  <span className={`block text-xs transition-all duration-700 ease-out transform text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Please enter a valid phone number with country code (e.g. +234...).</span>
                ) : null}
              </div>
            )}
          </label>
        )}

        {/* Purpose of Contact*/}
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-medium text-bg-text dark:text-white'>Purpose</span>
          <div className='relative flex items-center overflow-hidden'>
            {handleVanishing("purpose")}
            <input
              type='text'
              name='purpose'
              required
              value={formData.purpose}
              onChange={handleChange}
              ref={refs.purpose}
              onKeyDown={(e) => handleKeyDown(e, "purpose")}
              placeholder='Website redesign, Collaboration...'
              disabled={isSending}
              className={`w-full rounded-lg border text-bg-text bg-white dark:bg-[#364153] px-4 pr-10 py-3 outline-none transition-colors ${feedback.type === "error" && formData.purpose.length < 10 ? "border-red-500" : "border-border-gray focus:border-[#2563EB]"}`}
            />
            {formData.purpose && !isSending && (
              <button type='button' onClick={() => triggerVanish("purpose")} className='absolute right-3 text-gray-400 hover:text-red-500 transition-colors'>
                {xButton}
              </button>
            )}
          </div>

          {feedback.type === "error" && (
            <div className='overflow-hidden'>
              {!formData.purpose ? (
                <span className={`block text-xs transition-all duration-500 text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Purpose of message is required.</span>
              ) : formData.purpose.length < 10 ? (
                <span className={`block text-xs transition-all duration-500 text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Purpose must be at least 10 letters (current: {formData.purpose.length}).</span>
              ) : null}
            </div>
          )}
        </label>

        {/* Message Field */}
        <label className='flex flex-col gap-2'>
          <span className='text-sm font-medium text-bg-text dark:text-white'>Message</span>

          <div className='relative overflow-hidden'>
            {handleVanishing("message")}
            <textarea
              name='message'
              rows='10'
              required
              value={formData.message}
              onInvalid={(e) => e.target.setCustomValidity("Please enter some messages to give more details!")}
              onInput={(e) => e.target.setCustomValidity("")}
              onChange={handleChange}
              ref={refs.message}
              onKeyDown={(e) => handleKeyDown(e, "message")}
              placeholder='Share your project details...'
              disabled={isSending}
              className={`w-full min-w-0 block rounded-lg border border-border-gray text-bg-text bg-white dark:bg-[#364153] px-4 py-3 outline-none focus:border-[#2563EB] resize-y  ${feedback.type === "error" && formData.message.length < 15 ? "border-red-500" : "border-border-gray focus:border-[#2563EB]"}`}
            />
          </div>

          {feedback.type === "error" && (
            <div className='overflow-hidden'>
              {!formData.message ? (
                <span className={`block text-xs transition-all duration-500 text-red-500 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Message is required.</span>
              ) : formData.message.length < 15 ? (
                <span className={`block text-xs transition-all duration-500 text-red-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>Message content must not be less than 15 letters (current: {formData.fullName.length}).</span>
              ) : null}
            </div>
          )}
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
