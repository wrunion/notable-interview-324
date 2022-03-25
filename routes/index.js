const router = require('express').Router()
let { APPOINTMENTS, DOCTORS } = require('./../data')
const { v4: uuidv4 } = require('uuid')

// Requirement: Return a list of all doctors
router.get('/doctors', (req, res) => {
  const allDoctors = DOCTORS.map(doctor => `${doctor.first_name} ${doctor.last_name}`)
  res.send(allDoctors)
})

/* Requirement: Get a list of all appointments for a particular doctor and particular day  
  Working test strings: 
  
  To see doctor #5's appointments on date 5-24-2022, hit: http://localhost:8000/appointments/5/5-24-2022

  To see doctor #1's appointments on date 5/24/2022, hit: 
  http://localhost:8000/appointments/1/5-24-2022

  To see the "No appointments found" message, hit: http://localhost:8000/appointments/9/5-24-2022 (There is no doctor with that id. Hitting an invalid date as the second param will also give you the same message.)
*/
router.get('/appointments/:doctorId/:date', (req, res) => {
  // require doctor id and date. null check so that Express doesn't crash
  const doctorId = req.params?.doctorId ?? null
  const date = req.params?.date ?? null
  if (!doctorId || !date) {
    return res.send(`Please include the doctor's id and the appointment date`)
  }
  const appointments = APPOINTMENTS.filter(
    appointment => ((appointment.doctor_id === doctorId) && (appointment.date === date))
    )
  if (appointments.length === 0) {
    return res.send('No appointments found')
  }
  return res.send(appointments)
})

// Delete an existing appointment by appointment id
// To test, send a DELETE request to this invoice with the body:
// { "appointment_id": "102" }
router.delete('/appointments', (req, res) => {
  const appointment_id = req.body?.appointment_id ?? null
  if (!appointment_id) { 
    return res.send('Please include an appointment ID.')
  }

  // When working with a database, you'd do the call here. For the purposes of this example, we simply remove the matching appointment object from the APPOINTMENTS array
  APPOINTMENTS = APPOINTMENTS.filter(e => e.id !== appointment_id)
  console.log(APPOINTMENTS)
  return res.send('Appointment removed.')
})


// Add a new appointment to a doctor's calendar
/* 
  To test appointment creation, send a POST request to the endpoint with the body: 
  {
    "patient_first_name": "George",
    "patient_last_name": "Silver",
    "appointment_type": "Follow Up",
    "date": "5-24-2022",
    "time": "12:45",
    "doctor_id": "3"
  }

  To test an invalid appointment time, send a POST request to the endpoint with the body: 
    {
    "patient_first_name": "George",
    "patient_last_name": "Silver",
    "appointment_type": "Follow Up",
    "date": "5-24-2022",
    "time": "12:55",
    "doctor_id": "3"
  }

  The single bug in this application occurs on line 107, when a valid post request is submitted twice in a row. I could debug with more time, but for now I've located and documented the bug, which are the first two steps in figuring it out!

  I hope I get the opportunity to code and debug with you in the future real world!

*/

router.post('/appointments', (req, res) => {
  // Null check everything so Express doesn't crash
  // There are slicker ways of writing this code, but this is the safest
  const patient_first_name = req.body?.patient_first_name ?? null
  const patient_last_name = req.body?.patient_last_name ?? null
  const appointment_type = req.body?.appointment_type ?? null
  const date = req.body?.date ?? null
  const time = req.body?.time ?? null
  const doctor_id = req.body?.time ?? null

  if (!patient_first_name || !patient_last_name || !appointment_type || !date|| !time || !doctor_id) {
    return res.send('Please include all required information to make an appointment.')
  }

  // Requirement: appointment time must be :00, :15, :30, or :45 (15 minute increments only)
  const validTimeEndings = ['00', '15', '30', '45']
  const timeEnding = time.split(':')[1]
  const isValidTime = validTimeEndings.includes(timeEnding)

  if (!isValidTime) {
    return res.send('Appointment time must only be on the hour, half hour, quarter hour, or three quarters hour. Please try again with a valid appointment time.')
  }

  // Requirement: doctor cannot have more than 3 appointments in the same time slot
  const existingAppointments = APPOINTMENTS.filter(appointment => appointment.time === time && appointment.doctor_id === doctor_id)
  if (existingAppointments.length >= 3) {
    return res.send(`The doctor is busy during that time slot. Please choose another appointment time.`)
  }

  // If the request has reached this far, it's a valid appointment request.
  // Assign it a new, unique ID
  const newAppointment = {
    id: uuidv4(),
    patient_first_name,
    patient_last_name,
    appointment_type,
    date,
    time,
    doctor_id
  }
  // Add new, valid appointment to the existing appointment array (or write to the db, in a real-world scenario.)
  APPOINTMENTS = { ...APPOINTMENTS, newAppointment }

  return res.send(`New appointment for ${patient_first_name} ${patient_last_name} on ${date} at ${time} successfully created.`)  
})

module.exports = router