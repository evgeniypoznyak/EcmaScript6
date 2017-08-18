class MyClass {

    constructor(name) {
        this.name = name;
    }

    some() {
        console.log(`Your name is: ${this.name}`);
    }
}

class NewClass extends MyClass {

    constructor(name, lastname) {

        // Используем и перегружаем родительский конструктор
        // Обязательно фигурные скобки должны быть на другой линии... :/
        super(name)
        {
            this.name = ` --- ${name} ---`
        }
        // добавляем еще одно свойство
        this.lastname = lastname
    }

    // Перегружаем родительский метод и добавляем туда свой код
    some() {
        super.some();
        console.log(`And last name: ${this.lastname}`);
    }

}

let evgeniy = new NewClass('Evgeniy', 'Poznyak')
evgeniy.some();