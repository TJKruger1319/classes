class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("Beep.");
    }
    toString() {
        const {make, model, year} = this;
        console.log(`The vehicle is a ${make} ${model} from ${year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
    revEngine(){
        console.log("VROOM!!!");
    }
}

class Motorcyle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM!!!");
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vechicles = [];
    }
    add(car) {
        if (this.vechicles.length < this.capacity) {
            if (car instanceof Vehicle) {
                this.vechicles.push(car);
                console.log("Vehicle added!");
            } else {
                console.log("Only vehicles are allowed in here!")
            }
        } else {
            console.log("Sorry, we're full.")
        }
    }
}
