class Animal {
    constructor(name, type, age, size, isEaten) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(input) {
        if (input instanceof Animal) {
            if (this.type === 'herbivore') {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
            } else {
                if (input.size >= this.size * 2) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`);
                } else {
                    input.isEaten = true;
                    console.log(`The animal ${this.name} ate the ${input.name}.`);
                }
            }
        } else {
            console.log(`The animal ${this.name} is eating ${input}.`);
        }
    }
}