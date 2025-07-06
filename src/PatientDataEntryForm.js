import React, { useState } from 'react';

function PatientDataEntryForm() {
  const [formData, setFormData] = useState({
    age: '',
    tumorSize: '',
    er: '',
    pr: '',
    her2: '',
    ki67: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! Data: ' + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      {Object.keys(formData).map((field) => (
        <div key={field} style={{ marginBottom: 10 }}>
          <label>{field.toUpperCase()}: </label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            style={{ marginLeft: 10 }}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default PatientDataEntryForm;
