import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/** Contact form with client-side validation */
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Connect to backend or email service
    console.log("Form submitted:", formData);
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyles =
    "w-full rounded-lg border border-white/10 bg-dark-200 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-5">
      {/* Success toast */}
      {submitted && (
        <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      {/* Name field */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputStyles}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputStyles}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm text-gray-400"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What would you like to say?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputStyles} resize-none`}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
