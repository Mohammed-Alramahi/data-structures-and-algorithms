'use strict';
const Node = require('./node');
const BT = require('./binary-tree');

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
    it('should give the right values for pre-order', () => {
        let expected = [1, 2, 4, 5, 7, 3, 6];
        expect(tree.preOrder()).toEqual(expected);
    })

    it('should give the right values for in-order', () => {
        let expected = [4, 2, 5, 7, 1, 6, 3];
        expect(tree.inOrder()).toEqual(expected);
    })

    it('should give the right values for post-order', () => {
        let expected = [4, 7, 5, 2, 6, 3, 1];
        expect(tree.postOrder()).toEqual(expected);
    })

    it('should give error if the tree is empty', () => {
        tree = new BT();
        expect(() => {
            tree.postOrder();
        }).toThrow('Tree is Empty');
    })

})