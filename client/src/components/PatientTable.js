import React from 'react';

import PatientRow from './PatientRow';

export default function PatientTable({ patients }) {
  const rows = [];

  patients.forEach((patient) => {
    rows.push(
      <PatientRow
        patient={patient}
        key={patient.patientID}
      />
    );
  });
  return (
    <div className="table-container">
      <table className="patient-table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Exam ID</th>
            <th>Image</th>
            <th>Key Findings</th>
            <th>Brixia Score</th>
            <th>Age</th>
            <th>Sex</th>
            <th>BMI</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}