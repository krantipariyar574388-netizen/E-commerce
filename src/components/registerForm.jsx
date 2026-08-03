import { useState } from "react";
import Button from "./button";
import Input from "./input";

{/* //todo:
// form -> submit -> onSubmit */}
const RegisterForm = () => {
  const [FormData, setFormData] = useState({
    first_name: '',
    last_name : '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', FormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '300px',
        border: '1px solid indigo',
        margin: '30px auto',
        padding: '40px 20px',
        borderRadius: ' 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}>

      {/* first name */}
      <Input
        label={'First Name'}
        placeholder={'Enter your first name'}
        id={'fisrt_name'}
        name={'first_name'}
        onChange={handleChange}
      />
      {/* last name */}
      <Input
        label={'Last Name'}
        placeholder={'Enter your last name'}
        id={'last_name'}
        name={'last_name'}
        onChange={handleChange}
      />
      {/* email */}
      <Input
        label={"Email"}
        placeholder={"Enter your email"}
        id={"email"}
        name={'email'}
        type="email"
        onChange={handleChange}
      />

      {/* password */}
      <Input
        label={"Password"}
        placeholder={"Enter your password"}
        id={"password"}
        name={'password'}
        type="password"
        onChange={handleChange}
      />

      {/* button */}
      <Button type='submit' label='Submit' />

    </form>
  );
};

export default RegisterForm;