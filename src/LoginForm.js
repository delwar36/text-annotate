import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // In a real-world scenario, you would send the form data to a server for validation
    // and handle the authentication process on the server side.

    // For this example, let's just log the entered values to the console.
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />

        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
