import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  User, Tag, Mail, Phone, MapPin, Facebook, Youtube,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface SocialLink {
  label: string;
  href?: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('sending');
      setSubmitMessage('');
      try {
        const response = await fetch('/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;

        if (response.ok && result?.success) {
          setSubmitStatus('success');
          setSubmitMessage(result.message ?? 'Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            website: '',
          });
        } else {
          throw new Error(result?.message ?? 'Failed to send message');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
        setSubmitMessage(
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again later.',
        );
      }
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-[21rem] mr-8 mt-10 py-16 px-8 text-[#222222] hidden lg:block">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          Contact
          <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]" />
        </h2>
        <div className="flex">
          <div className="w-1/2 pr-8">
            <ContactInfo />
          </div>
          <div className="w-1/2">
            <ContactForm
              formData={formData}
              errors={errors}
              submitStatus={submitStatus}
              submitMessage={submitMessage}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mr-5 mt-5 py-12 px-6 text-[#222222] hidden md:block lg:hidden">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Contact
          <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]" />
        </h2>
        <div className="flex">
          <div className="w-2/5 pr-6">
            <ContactInfo />
          </div>
          <div className="w-3/5">
            <ContactForm
              formData={formData}
              errors={errors}
              submitStatus={submitStatus}
              submitMessage={submitMessage}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-4 py-4 px-4 text-[#222222]">
        <h2 className="text-2xl font-bold mb-5 relative inline-block">
          Contact
          <span className="absolute left-0 h-0.5 w-12 top-8 bg-[#FF6F61]" />
        </h2>
        <div className="flex flex-col">
          <div className="mb-6">
            <ContactInfo />
          </div>
          <div>
            <ContactForm
              formData={formData}
              errors={errors}
              submitStatus={submitStatus}
              submitMessage={submitMessage}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const XLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.901 2H21.9l-6.548 7.484L23 22h-5.978l-4.682-6.87L6.33 22H3.329l7-8.001L1 2h6.13l4.232 6.274L18.901 2Zm-1.052 18h1.662L6.227 3.895H4.444L17.849 20Z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  { label: 'X', href: import.meta.env.VITE_X_URL, Icon: XLogo },
  { label: 'Facebook', href: import.meta.env.VITE_FACEBOOK_URL, Icon: Facebook },
  { label: 'YouTube', href: import.meta.env.VITE_YOUTUBE_URL, Icon: Youtube },
];

const ContactInfo: React.FC = () => (
  <div>
    <div className="contact-info">
      <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
        <User className="w-6 h-6 mr-3 text-[#FF6F61]" />
        Washim Akram
      </p>
      <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
        <Tag className="w-6 h-6 mr-3 text-[#FF6F61]" />
        Frontend Developer & Full-Stack Developer
      </p>
      <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
        <Mail className="w-6 h-6 mr-3 text-[#FF6F61]" />
        <a href="mailto:akrmwashim09@gmail.com" className="text-gray-700 hover:text-[#FF6F61]">
          akrmwashim09@gmail.com
        </a>
      </p>
      <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
        <Phone className="w-6 h-6 mr-3 text-[#FF6F61]" />
        <a href="tel:+919999413369" className="text-gray-700 hover:text-[#FF6F61]">
          +91 9999413369
        </a>
      </p>
      <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
        <MapPin className="w-6 h-6 mr-3 text-[#FF6F61]" />
        Inder Enclave Phase - 2, North west Delhi, Delhi - 110086
      </p>
    </div>
    <div className="social mt-6 flex gap-2">
      {socialLinks.map(({ label, href, Icon }) =>
        href ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-block h-8 w-8 bg-[#FF6F61] text-black transition-colors duration-300 hover:bg-black hover:text-[#FF6F61]"
          >
            <Icon className="h-full w-full p-2" />
          </a>
        ) : (
          <span
            key={label}
            aria-label={`${label} link not configured`}
            className="inline-block h-8 w-8 cursor-default bg-[#FF6F61] text-black opacity-70"
            title={`${label} link not configured`}
          >
            <Icon className="h-full w-full p-2" />
          </span>
        )
      )}
    </div>
  </div>
);

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  submitStatus: 'idle' | 'sending' | 'success' | 'error';
  submitMessage: string;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData, errors, submitStatus, submitMessage, handleChange, handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="website"
      value={formData.website}
      onChange={handleChange}
      autoComplete="off"
      tabIndex={-1}
      className="hidden"
      aria-hidden="true"
    />
    <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          autoComplete='off'
          className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="w-full md:w-1/2">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          autoComplete='off'
          className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
    </div>
    <div className="mb-4">
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
        autoComplete='off'
        className={`w-full p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`}
      />
      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
    </div>
    <div className="mb-4">
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        autoComplete='off'
        minLength={5}
        className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`}
        rows={4}
      />
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
    </div>
    <button
      type="submit"
      className="bg-[#FF6F61] text-white py-2 px-4 rounded hover:bg-[#FF5F51] transition-colors duration-300 w-full md:w-auto"
      disabled={submitStatus === 'sending'}
    >
      {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
    </button>
    {submitStatus === 'success' && <p className="text-green-500 text-sm mt-2">{submitMessage}</p>}
    {submitStatus === 'error' && <p className="text-red-500 text-sm mt-2">{submitMessage}</p>}
  </form>
);

export default ContactMe;
