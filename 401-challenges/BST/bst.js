'use strict';
const Node = require('./node');
const BinaryTree = require('./binary-tree');

class BST extends BinaryTree {
    add(val) {
        let root = this.root;
        const node = new Node(val);

        if (!root) {
            this.root = node;
            return;
        }
        const _traverse = (curr) => {
            if (curr.value < node.value) {
                if (!curr.right) {
                    curr.right = node;
                    return;
                }
                _traverse(curr.right);
            }

            if (curr.value > node.value) {
                if (!curr.left) {
                    curr.left = node;
                    return;
                }
                _traverse(curr.left);
            }
            if (curr.value === node.value) throw new Error('Unique values allowed only');
        };

        _traverse(root);
        return;
    }
    contains(val) {
        let root = this.root;

        if (!root) return null;
        let curr = this.root;

        while (curr) {
            if (val < curr.value) {
                curr = curr.left;
            }
            else if (val > curr.value) {
                curr = curr.right;
            }
            else {
                return true;
            }
        }
        return false;
    }
    breadthFirst(tree) {
        let root = tree.root;
        if (!root) {
            return 'Tree is Empty';
        }
        let tmp = [];
        let bfs = [];
        tmp.push(root);
        while (tmp.length > 0) {
            let current = tmp[0];
            if (current.left !== null) {
                tmp.push(current.left);
            }
            if (current.right !== null) {
                tmp.push(current.right);
            }
            bfs.push(tmp.shift().value);
        }
        return bfs;
    }
}

module.exports = BST;
