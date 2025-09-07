import React, { useEffect, useState } from "react";

const App = () => {
  const [initial, setInitial] = useState("");
  const [annual, setAnnual] = useState("");
  const [exReturn, setExReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (initial && annual && exReturn && duration) {
      calculateResults();
    } else {
      setResults([]);
    }
  }, [initial, annual, exReturn, duration]);

  const calculateResults = () => {
    const yearlyData = [];
    let currentValue = +initial;

    for (let year = 1; year <= duration; year++) {
      const interest = currentValue * (+exReturn / 100);
      currentValue += interest + +annual;

      const investedCapital = +initial + +annual * year;
      const totalInterest = currentValue - investedCapital;

      yearlyData.push({
        year,
        investmentValue: currentValue,
        interestYear: interest,
        totalInterest,
        investedCapital,
      });
    }

    setResults(yearlyData);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Investment Calculator</h2>

      <div className="input-container w-100 bg-success px-4 py-5 rounded">
        <div className="row">
          <div className="col-12 col-md-6 p-2">
            <input
              value={initial}
              onChange={(e) => setInitial(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Initial investment"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <input
              value={annual}
              onChange={(e) => setAnnual(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Annual investment"
            />
          </div> 
          <div className="col-12 col-md-6 p-2">
            <input
              value={exReturn}
              onChange={(e) => setExReturn(e.target.value)}
              className="form-control"
              type="number"
              step="0.1"
              placeholder="Expected return (%)"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Duration (years)"
            />
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <table className="table table-bordered text-center mt-4">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res) => (
              <tr key={res.year}>
                <td>{res.year}</td>
                <td>${res.investmentValue.toLocaleString()}</td>
                <td>${res.interestYear.toLocaleString()}</td>
                <td>${res.totalInterest.toLocaleString()}</td>
                <td>${res.investedCapital.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
