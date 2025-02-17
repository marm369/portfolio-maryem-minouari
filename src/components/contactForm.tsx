import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);

  /**
   * Handle input change
   * @param e - event object
   */
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Handle form submission
   * @param e - event object
   */
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);
    // Send form data to the server
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Handle success
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      // Handle error
      toast.error("Failed to send message. Please try again later.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              onChange={handleChange}
              value={formData.name}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex-1 px-2 mt-2 md:mt-0">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              onChange={handleChange}
              value={formData.email}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="mt-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            onChange={handleChange}
            value={formData.subject}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="w-full mt-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Message"
            required
            onChange={handleChange}
            value={formData.message}
            className="block w-full h-24 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          ></textarea>
        </div>

        <button
          disabled={isSubmitting}
          className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
