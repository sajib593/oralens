import { useState } from "react";


const App = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
  });

  console.log(data);

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.age || !data.email) {
      setError("All fields are required!");
    } else {
      setError("");
      setSubmittedData(data)
      alert("Form submitted successfully!");
      console.log(data);
    }
  };

  return (
    <div className="w-2/4 mx-auto mt-10" >
      <h2 className="text-2xl font-bold text-blue-700">Make a form and take the age</h2>

      <br /><br />
      <form className=" border-e-neutral-800 bg-lime-300" onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label className="text-lg font-bold" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label className="text-lg font-bold" htmlFor="age">Age:</label>
          <select
            id="age"
            name="age"
            value={data.age}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          >
            <option value="">Select Age</option>
            {[...Array(100).keys()].map((age) => (
              <option key={age} value={age + 1}>
                {age + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label className="text-lg font-bold" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

       

        

       <div className="text-lg font-bold flex items-center justify-center">
       <button className="p-4"  type="submit">
          Submit
        </button>
       </div>
      </form>
<br /><br /><br />

{error && (
          <div className="text-red-600 mt-10 mb-10">{error}</div>
        )}

{submittedData && (
        <h1 className="text-2xl font-semibold">
          The age is: <span className="text-green-500 text-4xl">{submittedData.age}</span>
        </h1>
      )}
    </div>
  );
};

export default App;
