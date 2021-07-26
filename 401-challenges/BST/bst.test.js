const BinarySearchTree = require('./bst');

describe('Binary Search Tree', () => {
    let tree;
    beforeAll(() => {
        tree = new BinarySearchTree();
        tree.add(5);
        tree.add(17);
        tree.add(30);
    });

    it('insert values', () => {
        tree.add(2);
        tree.add(9);
        expect(tree.preOrder()).toEqual([5, 2, 17, 9, 30]);
    });
    test('should find the value if it exists in the tree.', () => {
        expect(tree.contains(17)).toEqual(true);

    })
    test('should return false if value is not in the tree.', () => {
        expect(tree.contains(50)).toEqual(false);

    })

    test('should return BFS.', () => {
        let newTree = new BinarySearchTree();
        let expected = [5, 2, 17, 9, 30];
        expect(newTree.breadthFirst(tree)).toEqual(expected);

    })
    test('should return null if the tree is empty.', () => {
        let newTree = new BinarySearchTree();
        expect(newTree.contains(33)).toBeNull();

    })

});