import React, { useState } from "react";
import "./App.css";

function FeedbackResult({ name, feedback }) {
  return (
    <div className="result-box">
      <h3>Thank you for your feedback!</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Feedback:</strong> {feedback}
      </p>
    </div>
  );
}

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("Good");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Feedback:</label>
        <br />
        <select value={feedback} onChange={(e) => setFeedback(e.target.value)}>
          <option>Good</option>
          <option>Average</option>
          <option>Bad</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>

      {submitted && <FeedbackResult name={name} feedback={feedback} />}
    </div>
  );
}

export default App;
