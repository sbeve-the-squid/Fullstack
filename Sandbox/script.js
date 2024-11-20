class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.classes = {};
    }
    
    addClassGrade(className, grade){
        this.classes[className] = grade;
    }
    
    calculateGPA(){
        const gradeVals = {
            'A' : 4.0,
            'B' : 3.0,
            'C' : 2.0,
            'D' : 1.0,
            'F' : 0.0,
        };
        let sum = 0;
        let counter = 0;
        for (let grade of Object.values(this.classe)){
            totalPoints += gradeVals[grade];
            counter++;
        }
        return counter > 0 ? (totalPoints/counter).toFixed(2) : 'N/A';
    }
}

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const gradeInput = document.getElementById('grade');
const addButton = document.getElementById('addStudentForm');
const gradeFilter = document.getElementById('gradeFilter');

let students = [];

function addStudent(e){
    e.preventDefault();
    const newStudent = new Student(nameInput.value, ageInput.value, gradeInput.value);
    students.push(newStudent);

    displayStudents();
    event.target.reset();
}

function displayStudents(kids = students){
    studentList.innerHTML = '';
    
    kids.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('student-card');
        studentCard.innerHTML += `
        <h3>${student.name}</h3>
        <p>Age: ${student.age}</p>
        <p>Grade: ${student.grade}th</p>
    `;
    studentList.appendChild(studentCard);
    });
}

function filterStudents(){
    let filteredStudents = students;
    if (gradeFilter.value != 'all'){
        filteredStudents = students.filter(student => student.grade === gradeFilter.value);
    }
    
    displayStudents(filteredStudents);
}

addButton.addEventListener('submit', addStudent);

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