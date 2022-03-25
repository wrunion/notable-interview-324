// Doctors should
// have a unique ID, a first name, and a last name.

const DOCTORS = [
  {
    id: '1',
    first_name: 'Kevin',
    last_name: 'Ross'
  },
  {
    id: '2',
    first_name: 'Carrie',
    last_name: 'Hansen'
  },
  {
    id: '3',
    first_name: 'Joyce',
    last_name: 'Running'
  },
  {
    id: '4',
    first_name: 'Kisa',
    last_name: 'Smith'
  },
  {
    id: '5',
    first_name: 'Earl',
    last_name: 'Jones'
  }
]

//Appointments should have a unique ID, patient first name, patient last name, date & time, and kind (New Patient or Follow Up.)

const APPOINTMENTS = [
  {
    id: '101',
    patient_first_name: 'Tessa',
    patient_last_name: 'Grey',
    appointment_type: 'New Patient',
    date: '5-24-2022',
    time: '09:15', 
    doctor_id: '1'
  },
  {
    id: '102',
    patient_first_name: 'Bob',
    patient_last_name: 'Smith',
    appointment_type: 'New Patient',
    date: '5-24-2022',
    time: '12:15', 
    doctor_id: '1'
  },
  {
    id: '103',
    patient_first_name: 'Jose',
    patient_last_name: 'Ruiz',
    appointment_type: 'New Patient',
    date: '5-24-2022',
    time: '09:30',
    doctor_id: '3'
  },
  {
    id: '104',
    patient_first_name: 'Piper',
    patient_last_name: 'Greymantle',
    appointment_type: 'Follow Up',
    date: '5-24-2022',
    time: '09:45',
    doctor_id: '4'
  },
  {
    id: '105',
    patient_first_name: 'Ronan',
    patient_last_name: 'Silver',
    appointment_type: 'Follow Up',
    date: '5-24-2022',
    time: '15:45',
    doctor_id: '1'
  },
  {
    id: '106',
    patient_first_name: 'Tina',
    patient_last_name: 'Fisher',
    appointment_type: 'Follow Up',
    date: '5-24-2022',
    time: '10:15', 
    doctor_id: '5'
  }
]

module.exports = { APPOINTMENTS, DOCTORS }