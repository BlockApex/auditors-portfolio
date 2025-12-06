"use client";

import React, { useState } from "react";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      message: string;
    }>
  >;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, setFormData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const [firstName, ...rest] = formData.name.split(" ");
      const lastName = rest.join(" ");

      const params = new URLSearchParams({
        firstName,
        lastName,
        fullName: formData.name,
        email: formData.email,
        message: formData.message,
      });

      const response = await fetch(
        `https://reports.blockapex.io/api/contact?${params.toString()}`,
        {
          method: "GET",
        }
      );
      // Success
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset fields
    } catch (error) {
      console.error(error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-foreground text-sm">
            _name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-dark-50/50 border border-foreground/20 rounded p-2 text-foreground focus:outline-none focus:border-secondary transition-colors text-sm"
            placeholder="Jonathan Davis"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-foreground text-sm">
            _email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-dark-50/50 border border-foreground/20 rounded p-2 text-foreground focus:outline-none focus:border-secondary transition-colors text-sm"
            placeholder="jonathan-davis@gmail.com"
            required
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-foreground text-sm">
            _message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full bg-dark-50/50 border border-foreground/20 rounded p-2 text-foreground focus:outline-none focus:border-secondary transition-colors text-sm resize-none"
            placeholder="Hey! Just checked your website..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#1C1A1C] text-foreground/80 hover:text-white border border-foreground/20 hover:border-white/50 rounded px-4 py-2 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "sending..." : "submit-message"}
        </button>

        {/* Status Message */}
        {statusMessage && (
          <p
            className={`mt-2 text-sm ${
              statusMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
