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