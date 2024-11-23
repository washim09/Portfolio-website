// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { User, Tag, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   subject?: string;
//   message?: string;
// }

// const ContactMe: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const validateForm = (): boolean => {
//     let tempErrors: FormErrors = {};
//     if (!formData.name.trim()) tempErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       tempErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = "Email is invalid";
//     }
//     if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
//     if (!formData.message.trim()) tempErrors.message = "Message is required";
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setSubmitStatus('sending');
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         console.log('Form submitted:', formData);
//         setSubmitStatus('success');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         setSubmitStatus('error');
//       }
//     }
//   };

//   return (
//     <>
//       {/* Desktop View */}
//       <div className="bg-white ml-96 mt-10 w-[850px] py-16 px-8 text-[#222222] hidden lg:block">
//         <h2 className="text-4xl font-bold mb-8 relative inline-block">
//           Contact
//           <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
//         </h2>
//         <div className="flex">
//           <div className="w-1/2 pr-8">
//             <ContactInfo />
//           </div>
//           <div className="w-1/2">
//             <ContactForm
//               formData={formData}
//               errors={errors}
//               submitStatus={submitStatus}
//               handleChange={handleChange}
//               handleSubmit={handleSubmit}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Tablet View */}
//       <div className="bg-white ml-20 mt-5 w-[668px] py-12 px-6 text-[#222222] hidden md:block lg:hidden">
//         <h2 className="text-3xl font-bold mb-8 relative inline-block">
//           Contact
//           <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
//         </h2>
//         <div className="flex">
//           <div className="w-2/5 pr-6">
//             <ContactInfo />
//           </div>
//           <div className="w-3/5">
//             <ContactForm
//               formData={formData}
//               errors={errors}
//               submitStatus={submitStatus}
//               handleChange={handleChange}
//               handleSubmit={handleSubmit}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="bg-white md:hidden m-4 w-72 py-4 px-4 text-[#222222]">
//         <h2 className="text-xl font-bold mb-4 relative inline-block">
//           Contact
//           <span className="absolute left-0 w-1/4 h-0.5 top-7 bg-[#FF6F61]"></span>
//         </h2>
//         <div className="flex flex-col">
//           <div className="mb-6">
//             <ContactInfo />
//           </div>
//           <div>
//             <ContactForm
//               formData={formData}
//               errors={errors}
//               submitStatus={submitStatus}
//               handleChange={handleChange}
//               handleSubmit={handleSubmit}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const ContactInfo: React.FC = () => (
//   <div>
//     <div className="contact-info">
//       <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
//         <User className="w-6 h-6 mr-3 text-[#FF6F61]" />
//         Washim Akram
//       </p>
//       <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
//         <Tag className="w-6 h-6 mr-3 text-[#FF6F61]" />
//         Web Developer & Software Developer
//       </p>
//       <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
//         <Mail className="w-6 h-6 mr-3 text-[#FF6F61]" />
//         <a href="mailto:akrmwashim09@gmail.com" className="text-gray-700 hover:text-[#FF6F61]">akrmwashim09@gmail.com</a>
//       </p>
//       <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
//         <Phone className="w-6 h-6 mr-3 text-[#FF6F61]" />
//         <a href="tel:+919999413369" className="text-gray-700 hover:text-[#FF6F61]">+91 9999413369</a>
//       </p>
//       <p className="flex items-center mb-3 text-base font-semibold tracking-wide">
//         <MapPin className="w-6 h-6 mr-3 text-[#FF6F61]" />
//         Inder Enclave Phase - 2, North west Delhi, Delhi - 110086
//       </p>
//     </div>
//     <div className="social mt-6 space-x-2">
//       {[Twitter, Facebook, Linkedin, Instagram, Youtube].map((Icon, index) => (
//         <a key={index} href="#" className="inline-block w-8 h-8 bg-[#FF6F61] text-black hover:bg-black hover:text-[#FF6F61] transition-colors duration-300">
//           <Icon className="w-full h-full p-2" />
//         </a>
//       ))}
//     </div>
//   </div>
// );

// interface ContactFormProps {
//   formData: FormData;
//   errors: FormErrors;
//   submitStatus: 'idle' | 'sending' | 'success' | 'error';
//   handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//   handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
// }

// const ContactForm: React.FC<ContactFormProps> = ({ formData, errors, submitStatus, handleChange, handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
//       <div className="w-full md:w-1/2 mb-4 md:mb-0">
//         <input 
//           type="text" 
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name" 
//           className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`} 
//         />
//         {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//       </div>
//       <div className="w-full md:w-1/2">
//         <input 
//           type="email" 
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email" 
//           className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`} 
//         />
//         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//       </div>
//     </div>
//     <div className="mb-4">
//       <input 
//         type="text" 
//         name="subject"
//         value={formData.subject}
//         onChange={handleChange}
//         placeholder="Subject" 
//         className={`w-full p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`} 
//       />
//       {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
//     </div>
//     <div className="mb-4">
//       <textarea 
//         rows={5} 
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Message" 
//         className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-[#FF6F61] focus:outline-none`}
//       ></textarea>
//       {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//     </div>
//     <button 
//       type="submit" 
//       className="bg-[#FF6F61] text-black hover:bg-black hover:text-[#FF6F61] py-2 px-4 transition-colors duration-300 disabled:opacity-50"
//       disabled={submitStatus === 'sending'}
//     >
//       {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
//     </button>
//     {submitStatus === 'success' && (
//       <p className="text-green-500 mt-2">Message sent successfully!</p>
//     )}
//     {submitStatus === 'error' && (
//       <p className="text-red-500 mt-2">Error sending message. Please try again.</p>
//     )}
//   </form>
// );

// export default ContactMe;