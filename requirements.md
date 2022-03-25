Problem​: We need a way to automatically integrate doctor’s calendars from their existing
systems of records with the Notable platform. The task is to build a web back-end that supports
the following functionality via HTTP requests:
- [x] Get a list of all doctors X
- [x] Get a list of all appointments for a particular doctor and particular day X 
- [x] Delete an existing appointment from a doctor's calendar
- [x] Add a new appointment to a doctor's calendar
- [x] New appointments can only start at 15 minute intervals (ie, 8:15AM is a valid time
but 8:20AM is not)
- [x] A doctor can have multiple appointments with the same time, but no more than 3
appointments can be added with the same time for a given doctor

An example web UI that would be built on top of this backend is shown below. 
- [x] Doctors should
have a unique ID, a first name, and a last name. 
- [x] Appointments should have a unique ID,
patient first name, patient last name, date & time, and kind (New Patient or Follow Up.)

- [x] The backend must respond to HTTP requests.

- [x] With your response, please include a zip file with your source code (preferably in a git repository), and instructions for  how to run the application locally.