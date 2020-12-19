class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}



class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }               
    regStudent(curStudent) {
        const test = this.students.filter(student => student.email === curStudent.email)[0];
            if(test) {
                console.log("this email is already registered!");
                return;
            }
        
        console.log(`Registering ${curStudent.email} to the bootcamp: ${this.name}!`)
        this.students.push(curStudent);                 
        
        return this.students;
    }
}

const student1 = new Student("Julio", "email@gmail.com", "nucamp");
const bootcamp1 = new Bootcamp("nucamp", "high");
bootcamp1.regStudent(student1);
bootcamp1.regStudent(student1);

console.log(bootcamp1);
