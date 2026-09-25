// ✅ Task 2: 🏥 Doctor Appointment Checker
// 🧠 Objective:
// Check available slots for a doctor.

// // Function: getAppointmentSlots(doctorName)

// const doctors = {
//   "Dr. Smith": ["10:00 AM", "2:00 PM"],
//   "Dr. Jain": ["11:30 AM"],
//   "Dr. Mehta": []
// };
// 🧩 If slots available → resolve with timings.
// ❌ Else → reject with "No slots available"

const doctors = {
  "Dr. Smith": ["10:00 AM", "2:00 PM"],
  "Dr. Jain": ["11:30 AM"],
  "Dr. Mehta": [],
};

function getAppointmentSlots(doctorName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!doctorName || !doctors.hasOwnProperty(doctorName)) {
        reject("Doctor not found");
      } else if (doctors[doctorName].length === 0) {
        reject("No slots available");
      } else {
        resolve(doctors[doctorName]);
      }
    }, 2000);
  });
}
