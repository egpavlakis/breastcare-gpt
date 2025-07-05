import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDataEntryForm from './PatientDataEntryForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientDataEntryForm />} />
      </Routes>
    </Router>
  );
}

export default App;
