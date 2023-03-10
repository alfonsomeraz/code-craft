import React, { useState } from 'react';

import PatientTable from './PatientTable';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
      
      <form>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
      </form>
    </div>
  );
}

export default function SearchablePatientTable({ patients }) {
  const [filteredPatients, setFilteredPatients] = useState(patients);

  const handleSearch = (searchTerm) => {
    const filtered = patients.filter((patient) =>
      patient.patientID.toLowerCase().includes(searchTerm.toLowerCase()) || 
      patient.examID.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PatientTable patients={filteredPatients} />
    </div>
  );
}

