import { useState } from "react";
import Button from "./button";
import Input from "./input";

const RegisterForm = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //* handle change first name
  const handleFirstNameChange = (e) => {
    let firstName = e.target.value;
    // setFirstName(firstName);
    // setFormData({ firstName });
    setFormData((prev) => {
      return {
        ...prev,
        firstName,
      };
    });
  };

  //* handle change last name
  const handleLastNameChange = (e) => {
    let lastName = e.target.value;
    // setLastName(lastName);
    setFormData((prev) => {
      return {
        ...prev,
        lastName,
      };
    });
  };

  //* handle change email
  const handleEmailChange = (e) => {
    let email = e.target.value;
    // setEmail(email);
    setFormData((prev) => {
      return {
        ...prev,
        email,
      };
    });
  };

  //* handle change password
  const handlePasswordChange = (e) => {
    let password = e.target.value;
    // setPassword(password);
    setFormData((prev) => {
      return {
        ...prev,
        password,
      };
    });
  };
  //* handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    // http post req   -> http://localhost:8080/api/v1/auth/register
    // req.body = {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "300px",
        border: "1px solid indigo",
        margin: "30px auto",
        padding: "40px 20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {/* first name */}
      <Input
        label={"First Name"}
        placeholder={"John"}
        id={"first_name"}
        onChange={handleFirstNameChange}
      />
      {/* last name */}
      <Input
        label={"Last Name"}
        placeholder={"Doe"}
        id={"last_name"}
        onChange={handleLastNameChange}
      />
      {/* email */}
      <Input
        label={"Email"}
        placeholder={"johndoe@gmail.com"}
        id={"email"}
        type="email"
        onChange={handleEmailChange}
      />

      {/* password */}
      <Input
        label={"Password"}
        placeholder={"enter password"}
        id={"password"}
        type="password"
        onChange={handlePasswordChange}
      />

      {/* buttons */}
      <Button type="submit" label="Submit" />
    </form>
  );
};

export default RegisterForm;