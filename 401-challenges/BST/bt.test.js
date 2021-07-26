'use strict';
const Node = require('./node');


describe('Nodes functionality', () => {
    test('should create an inst. of the Node class', () => {
        const newNode = new Node();
        expect(newNode instanceof Node).toBeTruthy();
    })

    test('should create a node with the right values', () => {
        const something = 'someThing';
        const newNode = new Node(something);

        expect(newNode.value).toEqual(something);
        expect(newNode.right).toBeNull();
        expect(newNode.left).toBeNull();

    })

})
