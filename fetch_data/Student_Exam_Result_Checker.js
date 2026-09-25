// 🧪 Task 3: Student Exam Result Checker
// Objective: Simulate checking result and sending grade via email.

// 🔧 Instructions:
// 1 getResult(studentId)

// . Returns a score (simulate with random 0–100).

// . If studentId is invalid (not in list), reject.

// 2 calculateGrade(score)

// . A: 90+, B: 80–89, C: 70–79, F: <70

// 3 sendEmail(studentId, grade)

// . Resolve with "📩 Grade sent to student #ID"

// 4 checkResult(studentId)

// . Async function chaining all.

const students = {
  101: "Alice",
  102: "Bob",
  103: "Charlie"
};

function getResult(studentId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(students[studentId]){
                const score = Math.floor(Math.random() * 101);
                resolve({ studentId, score });
            }
            else{
                reject(`❌ Invalid student ID: ${studentId}`);
            }
        }, 1000);
    });
}

function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else return "F";
}

function sendEmail(studentId, grade) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`📩 Grade '${grade}' sent to student #${studentId}`);
    }, 500);
  });
}

async function checkResult(studentId) {
  try {
    const { studentId: id, score } = await getResult(studentId);
    const grade = calculateGrade(score);
    console.log(`🎓 Student: ${students[id]} | Score: ${score} | Grade: ${grade}`);

    const emailStatus = await sendEmail(id, grade);
    console.log(emailStatus);
  } catch (error) {
    console.error(error);
  }
}

checkResult(101);  
