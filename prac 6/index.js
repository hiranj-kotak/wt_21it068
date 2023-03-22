class Student {
    constructor(name, ID, dob) {
      this.name = name;
      this.ID = ID;
      this.dob = dob;
    }
    getDetails() {
      document.write(`<div class='student-card'>
          <div class='student-name'>
            ${this.name}
          </div>
        <div class='student-id'>
          ${this.ID}
        </div>
        <div class='student-dob'>
          ${this.dob}
        </div>
        <div class='student-age'>
          ${this.getAge()}
        </div>
      </div>`);
    }
    getAge() {
      let today = new Date();
      let birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m<0 || (m === 0 && today.getDate() < birthDate.getDate()))
      
      age--;
      return "The age of student is " + age;
    }
  }
  let p1 = new Student("Hiranj ", "21IT068", "03-03-2004");
  let p2 = new Student("Henil", "21IT085", "19-07-2004");
  p1.getDetails();
  p2.getDetails();
  