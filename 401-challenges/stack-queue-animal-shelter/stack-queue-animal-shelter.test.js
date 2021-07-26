'use strict';

const Animal = require("./animal");
const Shelter = require('./stack-queue-animal-shelter');

xdescribe('Animal Shlter', () => {
    let cat, dog, shelter, lion;
    beforeEach(() => {
        cat = new Animal('cat');
        dog = new Animal('dog');
        lion = new Animal('lion');
        shelter = new Shelter();

    });
    it('Can enqueue a cat', () => {

        shelter.enqueue(cat);
        shelter.enqueue(cat);
        shelter.enqueue(cat);
        expect(shelter.cat.isEmpty()).toEqual(false);
    });

    it('Can enqueue a dog', () => {
        shelter.enqueue(dog);
        shelter.enqueue(dog);
        shelter.enqueue(dog);
        expect(shelter.dog.peek()).toBe(dog);
    });

    it('Can dequeue a cat', () => {
        shelter.enqueue(cat);
        shelter.dequeue(cat.type);
        expect(shelter.cat.isEmpty()).toBe(true);
    });

    it('Can dequeue a dog', () => {
        shelter.enqueue(dog);
        shelter.dequeue(dog.type);
        expect(shelter.dog.isEmpty()).toBe(true);
    });

    it('Returns null if you try to enqueue anything other than dog or cat', () => {
        expect(shelter.enqueue(lion)).toBe(null);
    });


    it('Returns null if you try to denqueue anything other than dog or cat', () => {
        shelter.enqueue(dog);
        expect(shelter.dequeue(lion)).toBe(null);
    });

});