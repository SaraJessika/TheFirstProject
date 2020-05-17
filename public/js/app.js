import {Person, Student, Teacher} from './personLib.js';
import {Factory} from './factory.js';
import {School} from './school.js';

// проинициализируем фабрику
const factory = new Factory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School();

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
school.add( factory.createStudent({ fullName: 'Кирилл Жилинский', type: 'student', university: 'БФУ', course: 2, birthDate: new Date(2000, 4, 10), photoUrl: '/img/ava01.jpg'  }) );
school.add( factory.createStudent({ fullName: 'Алена Сарычева', type: 'student', university: 'БФУ', course: 4, birthDate: new Date(2000, 8, 11), photoUrl: '/img/ava03.jpg' }) );
school.add( factory.createStudent({ fullName: 'Анастасия Калинина', type: 'student', university: 'БФУ', course: 3, birthDate: new Date(2000, 1, 1), photoUrl: '/img/ava02.jpg'}) );

school.buildmember(item);

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
school.appendToDom(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше