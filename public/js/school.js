class School{
    constructor(){
        this.list = [];
        this.factory = new Factory();
        this.kol = 0;
    }
    buildmember(item){   //добавление
        this.list[this.kol] = this.factory.create(item);    
        this.kol = this.kol + 1;
    }
    findperson(name){  //поиск
        this.list.forEach((item) => {
            if (item.fullName = name){
                return item;
            }
        });
    }
    deletemember(student){   //отчисление
        if(!isNaN(student)){
            this.list.slice(student, 1);
        }
        else { alert ('Не найден'); }
    }
}