class Student{
    only=this;
    constructor(params){ 
        this.name = params.fullName;
        this.image = params.photoUrl;
        this.univer = params.university;
        this.course = params.course;
        this.birthdate = params.birthDate;
    }
    get birthDateStr(){ 
        return(string(only.birthDate).split(' '));
    }; 
    get age(){ 
        return (Date()-only.birthDate());
    }; 
}
function appendStudentBlock(student){
    var img = document.createElement('IMG');
    img.src = student.image;
    var name_new = document.createElement('p');
    name_new.append(student.name);
    var univer_new = document.createElement('p');
    univer_new.append(`Университет: ${student.univer}`);
    var course_new = document.createElement('p');
    course_new.append(`Курс ${student.course}`);
    course_new.setAttribute('id','nocol');
    var main = document.createElement('div');
    main.setAttribute('id','imguch');
    main.appendChild(img);
    main.appendChild(name_new);
    main.appendChild(univer_new);
    main.appendChild(course_new);
    document.getElementById('imguch').append(main);
    return main;
}
function openCard(student, target){
    var krest = document.createElement('p');
    krest.append('\10006');
    var img_card = document.createElement('IMG');
    img_card.src = student.image;
    var name_card = document.createElement('p');
    name_card.append(student.name);
    var ucheba_card = document.createElement('p');
    ucheba_card.append(`Учится: ${student.univer}, ${student.course} курс`);
    var birthDate_new = document.createElement('p');
    birthDate_new.append(`День рождения: ${student.birthdate.getUTCDate()}.${student.birthdate.getUTCMonth()}.${student.birthdate.getUTCFullYear()}`);
    
    var main_card = document.createElement('div');
    var main_card2 = document.createElement('div');

    main_card.setAttribute('class','carding');
    img_card.setAttribute('id','img_card');
    name_card.setAttribute('id','name_card');
    main_card2.appendChild(name_card);
    main_card2.appendChild(birthDate_new);
    main_card2.appendChild(ucheba_card);
    main_card.appendChild(main_card2);
    main_card.appendChild(krest);
    main_card.appendChild(img_card);
    target.appendChild(main_card);
    return main_card;
}
function input() {
    const studentArr = [ 
    { 
        fullName: 'Кирилл Жилинский', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(2000, 4, 10), 
        photoUrl: '/img/ava01.jpg' 
    }, 
    { 
        fullName: 'Анастасия Калинина', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(2000, 1, 1), 
        photoUrl: '/img/ava02.jpg' 
    }, 
    { 
        fullName: 'Алена Сарычева', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(2000, 8, 11), 
        photoUrl: '/img/ava03.jpg' 
    }, 
    ]; 
    studentArr.forEach((item) => { 
        const student = new Student(item); 
        const studentBlock = appendStudentBlock(student); 
        studentBlock.addEventListener('click', (event) => {openCard(student, event.currentTarget);}); 
    }); 
}