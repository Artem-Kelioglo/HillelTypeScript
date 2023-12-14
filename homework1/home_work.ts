class School {
  directions:any[] = [];

  addDirection(direction:any):void {
    this.directions.push(direction);
  }
}

class Direction {
  levels:any[] = [];

  constructor(
    private _name: string
  ) { }

  get name():string {
    return this._name;
  }

  addLevel(level:any):void {
    this.levels.push(level);
  }
}

class Level {
  groups:any[] = [];

  constructor(
    private _name: string,
    private _program: string
  )
  {}

  get name():string {
    return this._name;
  }

  get program():string {
    return this._program;
  }

  addGroup(group:string):void {
    this.groups.push(group);
  }
}

class Group {
  private _students:any[] = [];

  constructor(
    public directionName: string,
    public levelName: string
  ) { }

  get students():any[] {
    return this._students;
  }

  addStudent(student:string):void {
    this._students.push(student);
  }

  showPerformance():any  {
    const sortedStudents:any = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades = {};
  attendance:any[] = [];

  constructor(
    public firstName:string,
    public lastName:string,
    public birthYear:number,
  ){}
  

  get fullName():string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value:string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age():number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject:string, grade:number):void {
    this.grades[subject] = grade;
  }

  markAttendance(present:string):void {
    this.attendance.push(present);
  }

  getPerformanceRating():number {
    const gradeValues:any[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade:number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage:number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
