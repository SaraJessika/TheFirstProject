class Person {
    constructor(item){ 
        this.type = 'person';
        this.name = item.fullName;
        this.image = item.photoUrl;
        this.birthdate = item.birthDate;
    }
    get age(){ 
        var date_now = new Date();
        return date_now.getUTCFullYear() - this.birthdate.getUTCFullYear(); //дата сейчас минус дата компьютера
    };

    get renderCard(){
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

    get renderInfo(){
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
//        main.addEventListener('click', (event) => {openCard(student, event.currentTarget);}); 
    }

    openCard(html){
        let body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
        if (window.innerHeight < body.offsetHeight){
            body.style.marginRight = "17px";
        }
        body.appendChild(html);
        html.style.top = pageYOffset + "px";
        (html.getElementsByClassName("close_btn")[0]).addEventListener( 'click', (event) => {openCard(student, event.currentTarget);});

/*      var prov = document.createElement('div');
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
        return main_card; */
    }

    appendToDOM(html,DOMElement){
        let element = DOMElement.appendChild(html);
        let that = this;
        element.addEventListener('click', (event) => {openCard(student, event.currentTarget);});
    }

}

class Teacher extends Person{
    constructor(item){
        super (item); 
        this.type = 'teacher';
        this.univers = item.university;
    }
}

class Student extends Person{
    constructor(item){
        super (item);
        this.type = 'student'; 
        this.univers = item.university;
        this.course = item.course;
    }
}