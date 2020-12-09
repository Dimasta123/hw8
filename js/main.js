class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = Array.from(
      {length: 4},
      () => Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    );
    this.dismiss = false;
  }
  getInfo() {
    if (!this.dismiss) {
      return console.log(
        `Student ${this.course} ${this.university} ${this.fullName}`,
      );
    }
  }
  getMarks() {
    if (!this.dismiss) {
      return console.log(` ${this.fullName} имеет такие оценки ${this.marks} `);
    } else {
      return null;
    }
  }
  set mark(num) {
    if (!this.dismiss) {
      this.marks.push(num);
    }
  }
  dismisser() {
    return (this.dismiss = true);
  }
  recover() {
    return (this.dismiss = false);
  }
  getAverageMark() {
    return !this.dismiss
      ? this.marks.reduce((total, mark) => total + mark) / this.marks.length
      : null;
  }
}
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    this.scholarShip = '1400 uh';
    this.getScholarship = setInterval();

    setInterval(
      function getScholarships() {
        if (!this.dismiss && getAverageMark() < 4) {
          return console.log(
            `Добре навчаєтесь студент ${this.student} ви отримали стипендію в розмирі ${this.scholarShip}`,
          );
        }
      },
      30000,
    );
  }
}
const sasha = new Student('НТУ ХПИ', 3, 'Александр Мазюк');

