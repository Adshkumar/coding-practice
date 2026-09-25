// 🔐 Task 20: Password Reset Simulation
// Objective:
// Send OTP and reset password

// Instructions:
// . sendOTP(phoneNumber) → generate 4-digit code

// . verifyOTP(inputCode, correctCode) → resolve if match

// . If verified, allow resetPassword(newPassword)

// 👉 Chain all in Promise format

function sendOTP(phoneNumber) {
  return new Promise((resolve) => {
    const OTP = Math.floor(1000 + Math.random() * 9000);
    console.log(`📲 OTP sent to ${phoneNumber}: ${OTP}`);
    setTimeout(() => resolve(OTP), 1000);
  });
}

function verifyOTP(inputCode, correctCode) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputCode === correctCode) {
        resolve("✅ OTP verified.");
      } else {
        reject("❌ Incorrect OTP.");
      }
    }, 1000);
  });
}

function resetPassword(newPassword) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🔒 Password has been successfully reset to: ${newPassword}`);
      resolve();
    }, 1000);
  });
}

function passwordResetFlow(phoneNumber, userInputOTP, newPassword) {
  let generatedOTP;

  sendOTP(phoneNumber)
    .then((otp) => {
      generatedOTP = otp;
      return verifyOTP(userInputOTP, generatedOTP);
    })
    .then(() => {
      return resetPassword(newPassword);
    })
    .catch((err) => {
      console.error(err);
    });
}
passwordResetFlow("6204128348", 1234, "myNewPass123");