
Hospital-API
We’re going to design an API using Node.js and MongoDB for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

Task:
There can be 2 types of ​ Users

Doctors & Patients

Doctors can log in

Each time a patient visits, the doctor will follow 2 steps:

Register​ the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
After the checkup, create a ​Report.
Patient Report will have the following fields

Created by doctor
Status: Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
Date


How to set it up on your local Computer?
Clone the Package to your local System
Navigate to the folder wherein the project has been cloned
Open Terminal and type npm install [Make sure node is already installed in your system!]
Type node index.js || npm start
Open browser and goto localhost:8000
