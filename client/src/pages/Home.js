import { useEffect, useState } from "react"
import { useExamsContext } from '../hooks/useExamsContext'

// components
import SearchablePatientTable from '../components/SearchablePatientTable';

// Fake data to work with while building
const PATIENTS = [
  {patientID: "COVID-19-1", examID: "Exam-1", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "44", sex: "M", bmi: "33.3", zipCode: "123"},
  {patientID: "COVID-19-2", examID: "Exam-2", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "49", sex: "F", bmi: "43.85", zipCode: "123"},
  {patientID: "COVID-19-3", examID: "Exam-3", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "75", sex: "F", bmi: "23.57", zipCode: "123"},
  {patientID: "COVID-19-4", examID: "Exam-4", image: "picture", keyFinding: "blah blah",
  brixiaScore: "1,2,3,4", age: "48", sex: "M", bmi: "29.8", zipCode: "123"},
];


const Home = () => {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch('http://localhost:9000/api/exams')
      const json = await response.json()

      if (response.ok) {
        setPatients(json)
      }
    }
console.log(patients)
    fetchExams()
  }, [])

  return (
    <div className="home">
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Zip Code</th>
            <th>BMI</th>
            <th>Weight</th>
            <th>Exam ID</th>
            <th>ICU Admit</th>
            <th>ICU Admits</th>
            <th>Mortality</th>
            <th>Brixia Scores</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.patientId}</td>
              <td>{patient.age}</td>
              <td>{patient.sex}</td>
              <td>{patient.zipCode}</td>
              <td>{patient.BMI}</td>
              <td>{patient.weight}</td>
              <td>{patient.examId}</td>
              <td>{patient.icuAdmit}</td>
              <td>{patient.icuAdmits}</td>
              <td>{patient.mortality}</td>
              <td>{patient.brixiaScores}</td>
              <td>{patient.imageURL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home