import { useState } from "react";
import "./App.css";
import FormInput from "./FormInput";

const App = () => {
  const [values, setValues] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      label: "firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "middlename",
      type: "text",
      placeholder: "middlename",
      label: "middlename",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      label: "lastname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>User Information</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
      <div className="app1">
        <p>firstname : {values.firstname}</p>
        <p>middlename : {values.middlename}</p>
        <p>lastname : {values.lastname}</p>
        <p>email : {values.email}</p>
        <p>birthday : {values.birthday}</p>
        <p>password : {values.password}</p>
      </div>
    </div>
  );
};

export default App;
