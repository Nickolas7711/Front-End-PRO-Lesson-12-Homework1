function Person(name, age) {
    this.name = name;
    this.age = age;
    this.infoPerson = function() {
        console.log(`Ім\'я: ${this.name}, Вік: ${this.age} років`);
    }
}

function Car(brand, model, yearOfIssue, licensePlate, color) {
    this.brand = brand;
    this.model = model;
    this.yearOfIssue = yearOfIssue;
    this.licensePlate = licensePlate;
    this.color = color;
    this.ownerCar = function(owner) {
        if (owner.age > 18) {
            this.owner = owner;
            this.ownerField = '';
        } else {
            this.ownerField = "Власник повинен бути старше 18 років.";
        }
    };
    this.infoCar = function() {
        console.log(`Марка авто: ${this.brand}`);
        console.log(`Модель авто: ${this.model}`);
        console.log(`Рік випуску: ${this.yearOfIssue}`);
        console.log(`Номерний знак: ${this.licensePlate}`);
        console.log(`Колір авто: ${this.color}`);
        console.log(`Інформація про власника: ${this.ownerField}`);
        this.owner.infoPerson();
    };
    
}

const user1 = new Person('Nicki', 46);
const user2 = new Person('Alex', 19);
const user3 = new Person('Dasha', 15);

const car1 = new Car('bmw', 'X5 M', 2019, 'KA 23-10 EE', 'Сірий');
const car2 = new Car('nissan', 'x-trail', 2018, 'KA 08-04 EE', 'Білий');
const car3 = new Car('Toyota', 'Camry', 2022, 'ВС 12-34 АВ', 'Синій');

car1.ownerCar(user1);
car2.ownerCar(user2);
car3.ownerCar(user3);

car1.infoCar();
console.log("-------------------");
car2.infoCar();
console.log("-------------------");
car3.infoCar();