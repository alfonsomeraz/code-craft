import React from 'react';


export default function PatientRow({ patient }) {
  const patientData = patient;

  return (
    <tr className="PatientRow">
      <td>{patientData.patientID}</td>
      <td>{patientData.examID}</td>
      <td>{patientData.image}</td>
      <td>{patientData.keyFinding}</td>
      <td>{patientData.brixiaScore}</td>
      <td>{patientData.age}</td>
      <td>{patientData.sex}</td>
      <td>{patientData.bmi}</td>
      <td>{patientData.zipCode}</td>
    </tr>
  );
}