class Factory{
    create(type) {
        switch(type.type){
            case 'student':
                var people = new Student(type);
                appendStudentBlock(people);
                return people;
            case 'teacher':
                var people = new Teacher(type);
                appendStudentBlock(people);
                return people;
            default:
                var people = new Person(type);
                return people;
        }
    }
}

class Person {
    constructor(params){ 
        this.type = 'person';
        this.name = params.fullName;
        this.image = params.photoUrl;
        this.birthdate = params.birthDate;
    }
    get age(){ 
        var date_now = new Date();
        return date_now.getUTCFullYear() - this.birthdate.getUTCFullYear(); //дата сейчас минус дата компьютера
    }; 
}

class School{
    constructor(){
        this.list = [];
        this.factory = new Factory();
        this.kol = 0;
    }
    buildmember(params){   //добавление
        this.list[this.kol] = this.factory.create(params);    
        this.kol = this.kol + 1;
    }
    findperson(name){  //поиск
        this.list.forEach((item) => {
            if (item.fullName = name)
                return item;
        });
    }
    deletemember(student){   //отчисление
        if(!isNaN(student))
            this.list.slice(student, 1);
        else alert ('Не найден');
    }
}

class Teacher extends Person{
    constructor(params){
        super (params); 
        this.type = 'teacher';
//        this.course = params.course; у учителя нет курса
    }
}

class Student extends Person{
    constructor(params){
        super (params);
        this.type = 'student'; 
        this.univers = params.university;
        this.course = params.course;
    }
}

function appendStudentBlock(student){
    var img = document.createElement('IMG');
    img.src = student.image;
    var name_new = document.createElement('p');
    name_new.append(student.name);
    var univers_new = document.createElement('p');
    univers_new.append(`Университет: ${student.univers}`);
    var course_new = document.createElement('p');
    course_new.append(`Курс ${student.course}`);
    course_new.setAttribute('id','nocol');
    var main = document.createElement('div');
    main.setAttribute('id','imguch');
    main.appendChild(img);
    main.appendChild(name_new);
    main.appendChild(univers_new);
    main.appendChild(course_new);
    
    document.getElementById('imguch').append(main);
    main.addEventListener('click', (event) => {openCard(student, event.currentTarget);}); 
}
function openCard(student, target){
    var prov = document.createElement('div');
    prov.setAttribute('class','prov');
    var krest = document.createTextNode('\u2716');
    prov.append(krest);
    var img_card = document.createElement('IMG');
    img_card.src = student.image;
    var name_card = document.createElement('p');
    name_card.append(student.name);
    var ucheba_card = document.createElement('p');
    ucheba_card.append(`Учится: ${student.univers}, ${student.course} курс`);
    var birthDate_new = document.createElement('p');
    birthDate_new.append(`День рождения: ${student.birthdate.getUTCDate()}.${student.birthdate.getUTCMonth()}.${student.birthdate.getUTCFullYear()}, ${student.age} лет`);
    
    var main_card = document.createElement('div');
    var main_card2 = document.createElement('div');

    main_card.setAttribute('class','carding');
    img_card.setAttribute('id','img_card');
    name_card.setAttribute('id','name_card');
    main_card2.appendChild(name_card);
    main_card2.appendChild(birthDate_new);
    main_card2.appendChild(ucheba_card);
    main_card.appendChild(main_card2);
    main_card.appendChild(img_card); 
    main_card.appendChild(krest);
    target.appendChild(main_card);
    return main_card;
}
function input() {
    const studentArr = [ 
    { 
        fullName: 'Кирилл Жилинский',
        type: 'student', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(2000, 4, 10), 
        photoUrl: '/img/ava01.jpg' 
    }, 
    { 
        fullName: 'Анастасия Калинина',
        type: 'student', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(2000, 1, 1), 
        photoUrl: '/img/ava02.jpg' 
    }, 
    { 
        fullName: 'Алена Сарычева',
        type: 'student', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(2000, 8, 11), 
        photoUrl: '/img/ava03.jpg' 
    }, 
    ];
    
    var school = new School(); //создается школаs
    
    studentArr.forEach((item) => { 
        school.buildmember(item);
    }); 
}