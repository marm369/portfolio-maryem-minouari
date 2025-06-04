import { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RECEIVER_EMAIL = process.env.NEXT_PUBLIC_EMAIL_USER || ""; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    if (!RECEIVER_EMAIL) {
      toast.error("L'adresse email du destinataire n'est pas configurée.");
      return;
    }

    setSubmitting(true);

    const body = encodeURIComponent(message); // Encodage correct du body

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      RECEIVER_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${body}`;

    window.open(gmailLink, "_blank");

    toast.success("Redirection vers Gmail...");

    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Sujet</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          {isSubmitting ? "Envoi..." : "Envoyer via Gmail"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
