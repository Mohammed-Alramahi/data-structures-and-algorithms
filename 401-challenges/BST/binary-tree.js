class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {
        const result = [];
        if (!this.root) throw new Error('Tree is Empty');
        const _traverse = (node) => {
            result.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        }
        _traverse(this.root);
        return result;
    }
    postOrder() {
        const result = [];
        if (!this.root) throw new Error('Tree is Empty');
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            result.push(node.value);
        };
        _traverse(this.root);
        return result;
    }

    inOrder() {
        const result = [];
        if (!this.root) throw new Error('Tree is Empty');
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            result.push(node.value);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return result;
    }
}

module.exports = BinaryTree;