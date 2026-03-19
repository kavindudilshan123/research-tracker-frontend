import React from "react";

export default function Login() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Page</h2>
      <input placeholder="Email" /><br/><br/>
      <input placeholder="Password" type="password" /><br/><br/>
      <button>Login</button>
    </div>
  );
}