'use strict';
const Node = require('./node');
const BT = require('./bt');

describe('Binary tree test', () => {
    let tree;
    beforeAll(() => {
        const one = new Node(1);
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        three.left = six;
        five.right = seven;

        tree = new BT(one);
    })
    it('should retrieve the max value inside a tree', () => {
        expect(tree.getMax()).toEqual(7);
    })





})