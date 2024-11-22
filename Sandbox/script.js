class Student {
  constructor(inputName, age, grade) {
    this.name = inputName;
    this.age = age;
    this.grade = grade;
    this.classes = {};
  }

  addClassGrade(className, grade) {
    this.classes[className] = grade;
  }

  calculateGPA() {
    const gradeVals = {
      'A': 4.0,
      'B': 3.0,
      'C': 2.0,
      'D': 1.0,
      'F': 0.0,
    };
    let totalPoints = 0;
    let totalClasses = 0;

    for (let grade of Object.values(this.classes)) {
      totalPoints += gradeVals[grade];
      totalClasses++;
    }

    return totalClasses > 0 ?
            (totalPoints / totalClasses).toFixed(2) :
            'N/A';
  }
}

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const gradeInput = document.getElementById('grade');
const addButton = document.getElementById('addStudentForm');
const studentList = document.getElementById('studentList');
const gradeFilter = document.getElementById('gradeFilter');

//const kidA = new Student('1995 DCal', '14', '9');
//const kidB = new Student('1999 DCal', '18', '12');
let students = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        students = data.map(elem => {
            const student = new Student(elem.name, 
                Math.floor(Math.random()*5+14), 
                Math.floor(Math.random()*4+9));
                const classes = ['Math', 'Science', 'English', 'History'];
                const grades = ['A', 'B', 'C', 'D', 'F'];
                for(let i = 0; i < 3; i++){
                    const randClass = classes[Math.floor(Math.random()*classes.length)];
                    const randGrade = grades[Math.floor(Math.random()*grades.length)];
                    student.addClassGrade(randClass, randGrade);
                }
                return student;
        });
        displayStudents();
    });


function addStudent(event) {
  event.preventDefault();
  const newStudent = new Student(nameInput.value, ageInput.value, gradeInput.value);
  students.push(newStudent);

  displayStudents();
  event.target.reset();
}

function displayStudents(kids = students) {
  studentList.innerHTML = '';

  kids.forEach(student => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');
    studentCard.innerHTML += `
      <h3>${student.name}</h3>
      <p>Age: ${student.age}</p>
      <p>Grade: ${student.grade}th</p>
      <p>GPA: ${student.calculateGPA()}</p>
      <ul>
        ${Object.entries(student.classes).map(([className, grade]) =>
            `<li>${className}: ${grade}</li>`).join('')
        }
      </ul>
      <form class="add-class-form">
        <input type="text" placeholder="Class Name" required>
        <select required>
            <option value="">Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
        </select>
        <button type="submit">Add Class</button>
      </form>
    `;
    studentList.appendChild(studentCard);

    studentCard.querySelector('.add-class-form').addEventListener('submit', e => {
      e.preventDefault();
      const className = e.target.elements[0].value;
      const classGrade = e.target.elements[1].value;
      student.addClassGrade(className, classGrade);
      displayStudents();
    });
  });
}

function filterStudents() {
  let filteredStudents = students;
  if (gradeFilter.value !== 'all') {
    filteredStudents = students.filter(student => student.grade === gradeFilter.value);
  }

  displayStudents(filteredStudents);
}

addButton.addEventListener('submit', addStudent);
gradeFilter.addEventListener('change', filterStudents);

displayStudents();

//const darkColors = [
//    "#0B0C10", // Dark Slate Grey
//    "#1C1C1C", // Very Dark Grey
//    "#2C3E50", // Midnight Blue
//    "#000000", // Black
//    "#3D3D3D", // Dark Charcoal
//    "#4B0082", // Indigo
//    "#2F4F4F", // Dark Slate
//    "#191970", // Midnight Blue
//    "#1B1B1B", // Eerie Black
//    "#343A40", // Dark Grayish Blue
//    "#2E2E2E", // Jet Black
//];
//
//const body = document.querySelector('body');
//const hexText = document.querySelector('p');
//const button = document.querySelector('button');
//
//let colorIndex = 0;
//function changeColors(){
//    body.style.backgroundColor = darkColors[colorIndex];  
//    colorIndex++;
//    hexText.innerHTML = "Hex Cod: " + darkColors[colorIndex];
//    if (colorIndex >= darkColors.length){
//        colorIndex = 0;
//    }
//}
//
//button.onclick = changeColors;
//
//console.log(darkColors);