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


const Home = (examList) => {
  const {exams, dispatch} = useExamsContext()

  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch('/api/exams')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_EXAMS', payload: json})
      }
    }

    fetchExams()
  }, [])

  return (
    <div className="home">
      <div className="exams">
        {exams && exams.map((exam) => (
          <p key={exam._id}>{exam.patientId}</p>
        ))}
      </div>
    </div>
  )
}

export default Home