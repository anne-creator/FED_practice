class School {
  constructor(name, level, stuNum) {
    this._name = name;
    this._level = level;
    this._stuNum = stuNum;
  }
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get stuNum() {
    return this._stuNum;
  }

  set stuNum(num) {
    if(typeof num === 'number') {
      return this._stuNum = num;
    }else {
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
    
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.stuNum} students at the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomNum = Math.floor(Math.random() * substituteTeachers.length - 1);
    return substituteTeachers[randomNum];
  }
}

// let newSchool = new School('xinhua','medium',10)
// console.log(newSchool);
// console.log(newSchool.quickFacts());

class PrimarySchool extends School {
  constructor(name, stuNum, pickupPolicy) {
    super(name,'primary',stuNum)
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

}

class HighSchool extends School {
  constructor(name, stuNum, sportsTeams) {
    super(name, 'highschool',stuNum);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }

}

let lorra = new PrimarySchool('Lorra', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorra.quickFacts()
let teacher = PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(teacher);

let al = new HighSchool('Al Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(al.sportsTeams);



