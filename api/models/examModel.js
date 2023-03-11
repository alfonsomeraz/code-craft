const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
  patientId: String,
  age: Number,
  sex: String,
  zipCode: String,
  BMI: Number,
  weight: Number,
  examId: String,
  icuAdmit: String,
  icuAdmits: Number,
  mortality: String,
  brixiaScores: Number,
  imageURL: String
}, { timestamps: true })

module.exports = mongoose.model('patients', examSchema)
