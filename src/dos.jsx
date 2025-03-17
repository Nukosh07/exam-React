import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(form); };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md w-80 rounded-lg">
      <h2 className="text-center text-lg font-bold">Қолданушы тіркеу</h2>
      {['name', 'email', 'password'].map((field) => (
        <input
          key={field}
          type={field === 'password' ? 'password' : 'text'}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          className="w-full p-2 my-2 border rounded"
          required
        />
      ))}
      <button className="w-full bg-blue-500 text-white p-2 rounded">Тіркелу</button>
    </form>
  );
}