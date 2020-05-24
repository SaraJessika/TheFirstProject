class Component{
    constructor(options){
        this.options = options;   //хранение опций
		this.state = {};  //состояние объекта
		this.container = undefined;   //сам контейнер
    }

    //встраивание в дом..place-место куда вставляют, position-положение куда вставляют
    mount(place, position){
        // прехук до монтирования        
        this.beforemount();

        //вставляем в дом
        this.container = document.createElement('div');
        this.container.innerHTML = this.render();

        // перекладываем верстку в нужное место
        place.insertAdjacentElement(position || 'beforeend',this.container);

        // прехук после монтирования
        this.aftermount();
    }

    //до выполнения mount
    beforemount(){}

    //после выполнения mount
    aftermount(){}

    //формирование блока, содержание контейнера
    render(){
        return `<div></div>`;
    }

    //уничтожение
    distroy(){
        this.container.remove();
    }
}

class Person extends Component{
    constructor(options){
        super(options);
        this.type = 'person';
        this.Name = options.name;
        this.img = options.image;
    }
    
    render(){
        return `<div>
        <img class = "card__img card__img_round" src = "${this.img}"> 
        <p>${this.Name}</p>
        </div>`;
    }

}

const student = new Person({name: 'Vasya',image:'img/ava04.jpg'});
student.mount(document.body,'beforeend');
//student.distroy();