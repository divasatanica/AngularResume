class Edu {
  time: string;
  level: string;
  school: string;
  major: string;
}

class Project {
  time: string;
  name: string;
  job: string;
  process: string[];
}

class Internship {
  time: string;
  corp: string;
  job: string[];
}

export class Person {
  id: number;
  name: string;
  tele: string;
  address: string;
  age: string;
  avatar: string;
  skill: string[];
  edu: Edu [];
  proj: Project [];
  selfEvaluate: string [];
  internship: Internship[];
}