class Student{
    constructor(fullname,age){
        this.fullname = fullname;
        this.age = age;
    }

    print(){
        console.log(`hello ${this.fullname}`);
    }
} 

class HightStudent extends Student{
    constructor(score, fullname, age){
        supper(fullname, age);
        this.score = score;
    }
}

student = new Student("precious", 20);
student2 = new HightStudent(30)
console.log( student2 instanceof Student);

const member=[12,78,930];
delete member[0];
console.log(typeof student);