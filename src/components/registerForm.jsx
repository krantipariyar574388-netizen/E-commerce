import { useState } from "react";
import Button from "./button";
import Input from "./input";

{/* //todo:
// form -> submit -> onSubmit */}
const RegisterForm = () => {
  const [error, setError] = useState(null);
  const[isLoading, setIsLoading] = useState(false);
  const [FormData, setFormData] = useState({
    first_name: '',
    last_name : '',
    email: '',
    password: ''
  });

  const [FormError, setFormError] = useState({
    first_name: null,
    last_name : null,
    email: null,
    password: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  {/* // handle submit */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Data:', FormData);

    try {
      if(!FormData.first_name.trim()) {
        setFormError((prev) => {
          return {
            ...prev,
            first_name : "First name is required!!",
          };
        });
        return;
      }

      if(!FormData.last_name.trim()) {
        setFormError((prev) => {
          return {
            ...prev,
            last_name : "Last name is required!!",
          };
        });
        return;
      }

      if(!FormData.email.trim()) {
        setFormError((prev) => {
          return {
            ...prev,
            email : "Email is required!!",
          };
        });
        return;
      }

      if(!FormData.password.trim()) {
        setFormError((prev) => {
          return {
            ...prev,
            password : "Password is required!!",
          };
        });
        return;
      }

      setIsLoading(true);
      setError(null);
      const response = await fetch(
        "http://localhost:8080/auth/register",
        {
          method : "POST",
          body : JSON.stringify(FormData),
          headers : {
            "Content-Type" : "application/json",
          },
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message ?? "Something went wrong");
    } finally{
      setIsLoading(false);
    }
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

        { error && (
          <div
        style = {{
          background : "red", 
          padding: "10px", 
          color :"white", 
          borderRadius : "8px"
          }}>
          <small>{error}</small>
        </div>
         )}

      {/* first name */}
      <Input
        label={'First Name'}
        placeholder={'Enter your first name'}
        id={'fisrt_name'}
        name={'first_name'}
        onChange={handleChange}
        error={FormError.first_name}
      />
      {/* last name */}
      <Input
        label={'Last Name'}
        placeholder={'Enter your last name'}
        id={'last_name'}
        name={'last_name'}
        onChange={handleChange}
        error={FormError.last_name}
      />
      {/* email */}
      <Input
        label={"Email"}
        placeholder={"Enter your email"}
        id={"email"}
        name={'email'}
        type="email"
        onChange={handleChange}
        error={FormError.email}
      />

      {/* password */}
      <Input
        label={"Password"}
        placeholder={"Enter your password"}
        id={"password"}
        name={'password'}
        type="password"
        onChange={handleChange}
        error={FormError.password}
      />

      {/* button */}
      <Button type='submit' label = {isLoading ? "Submitting" : "Submit"} />

      
      

    </form>
  );
};

export default RegisterForm;