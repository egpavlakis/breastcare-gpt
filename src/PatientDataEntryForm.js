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
    console.log('Submitted Case:', formData);
    alert('Case submitted for logic processing.');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      {['age', 'tumorSize', 'er', 'pr', 'her2', 'ki67'].map((field) => (
        <div key={field}>
          <label className="block capitalize">{field}:</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="border p-1 w-full"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Case
      </button>
    </form>
  );
}

export default PatientDataEntryForm;
