const Queue = require('./queue');
class Shelter {
    constructor() {
        this.cat = new Queue();
        this.dog = new Queue();
    }
    enqueue(animal) {
        if (animal.type == 'dog') {
            this.dog.enqueue(animal);
        }
        else if (animal.type == 'cat') {
            this.cat.enqueue(animal);
        }
        else {
            return null;
        }
    }
    dequeue(pref) {
        if (pref == 'cat') {
            return this.cat.dequeue();
        }
        else if (pref == 'dog') {
            return this.dog.dequeue();
        }
        else {
            return null;
        }

    }
}
module.exports = Shelter;
