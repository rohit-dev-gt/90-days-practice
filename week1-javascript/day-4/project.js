/*********************************
 * CUSTOM ERROR CLASSES
 *********************************/
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class AdmissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AdmissionError";
  }
}

/*********************************
 * FORM VALIDATOR
 *********************************/
class FormValidator {
  static validateStudentForm(form) {
    if (!form.name) {
      throw new ValidationError("Name is required");
    }

    if (typeof form.age !== "number" || form.age < 5) {
      throw new ValidationError("Age must be 5 or above");
    }

    if (!form.grade) {
      throw new ValidationError("Grade is required");
    }

    return true;
  }
}

/*********************************
 * SCHOOL MANAGEMENT SYSTEM
 *********************************/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getRole() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // method override
  getRole() {
    return "Student";
  }
}

class Teacher extends Person {
  getRole() {
    return "Teacher";
  }
}

class School {
  constructor() {
    this.students = [];
  }

  admitStudent(studentData) {
    try {
      // validate form first
      FormValidator.validateStudentForm(studentData);

      const student = new Student(
        studentData.name,
        studentData.age,
        studentData.grade
      );

      this.students.push(student);
      console.log("Student admitted:", student.name);
    } catch (err) {
      if (err instanceof ValidationError) {
        console.log("Validation Error:", err.message);
      } else {
        console.log("Unexpected Error:", err.message);
      }
    } finally {
      console.log("Admission attempt finished\n");
    }
  }

  listStudents() {
    this.students.forEach((s) => {
      console.log(`${s.name} (${s.getRole()}) - Grade ${s.grade}`);
    });
  }
}

/*********************************
 * APP EXECUTION (TEST CASES)
 *********************************/
const school = new School();

// Invalid student
school.admitStudent({
  name: "",
  age: 4,
  grade: "1st",
});

// Invalid student
school.admitStudent({
  name: "Aman",
  age: 6,
});

// Valid student
school.admitStudent({
  name: "Rohit",
  age: 10,
  grade: "5th",
});

// list admitted students
school.listStudents();
