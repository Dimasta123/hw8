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
    } else {
      return console.log(`Этот студент отсранен ${this.fullName}`);
    }
  }
  getMarks() {
    if (!this.dismiss) {
      return console.log(` ${this.fullName} имеет такие оценки ${this.marks} `);
    } else {
      return null || console.log(`Этот студент отстранен ${this.fullName} `);
    }
  }
  set mark(num) {
    if (!this.dismiss) {
      this.marks.push(num);
    } else {
      return null || console.log(`Этот студент отстранен ${this.fullName} `);
    }
  }
  dismisser() {
    return (this.dismiss = true) ||
      console.log(`Этот студент отстранен ${this.fullName} `);
  }
  recover() {
    return (this.dismiss = false) ||
      console.log(`Этот студент востановлен ${this.fullName} `);
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
    this.scholarShip = '1400';
    setInterval(
      () => {
        if (this.getAverageMark() >= 4 || !this.dismiss) {
          console.log(`вы получили ${this.scholarShip} грн стипендии`);
        } else {
          return console.log(
            `вы получили ${null} грн стипендии;
          Этот студент отсранен ${this.fullName}`,
          );
        }
      },
      30000,
    );
  }
}

const sasha = new Student('НТУ ХПИ', 3, 'Александр Мазюк');
const vasya = new BudgetStudent('Иститут Архитектуры', 5, 'Василий Петрович');


