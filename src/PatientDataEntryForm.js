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
    console.log('Form Submitted:', formData);
    alert('Case submitted. (Simulated logic processing)');
  };

  return (
    <div style={{ maxWidth: 500, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
      <h2 style={{ textAlign: 'center' }}>BreastCare GPT - Case Entry</h2>
      <form onSubmit={handleSubmit}>
        {['age', 'tumorSize', 'er', 'pr', 'her2', 'ki67'].map((field) => (
          <div key={field} style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', fontWeight: 'bold' }}>{field.toUpperCase()}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              style={{ width: '100%', padding: 8 }}
            />
          </div>
        ))}
        <button type="submit" style={{ backgroundColor: '#0070f3', color: '#fff', padding: 10, width: '100%', border: 'none', borderRadius: 5 }}>
          Submit Case
        </button>
      </form>
    </div>
  );
}

export default PatientDataEntryForm;
