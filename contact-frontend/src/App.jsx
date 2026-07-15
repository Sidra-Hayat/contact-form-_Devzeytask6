import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    address: "",
  });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [statusMsg, setStatusMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const validate = () => {
  if (!form.name.trim()) return "Name is required.";

  if (!form.email.trim()) return "Email is required.";

  if (!form.email.includes("@"))
    return "Please enter a valid email.";

  if (!form.contactNumber.trim())
    return "Contact Number is required.";

  if (!form.message.trim())
    return "Message is required.";

  return null;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setStatusMsg(validationError);
      return;
    }
    
    
console.log("Form Data:", form);

    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setStatusMsg("Your message was sent successfully!");
      setForm({ name: "", email: "", contactNumber: "", message: "", address: "" });
    } catch (err) {
      setStatus("error");
      setStatusMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <h1>Get in touch</h1>
          <p>Fill out the form and we'll get back to you shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="+92 300 1234567"
            />
          </div>

          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="City, Country"
            />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
            />
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div className={`banner ${status}`}>
              {status === "success" ? "✓ " : "⚠ "}
              {statusMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;