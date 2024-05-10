import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({ firstName: "", lastName: "" });
  const [submit, setSubmit] = useState(false);

  const fullName = inputs.firstName + " " + inputs.lastName;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label name="firstname">First name:</label>
        <input
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <br />
        <label name="lastname">Last Name:</label>
        <input
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="submit" onChange={handleChange} />
      </form>
      {submit ? <p>Full Name: {fullName}</p> : ""}
    </div>
  );
}

export default App;