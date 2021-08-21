"use strict";
const Edge = require('./edge.js');
const Vertex = require('./vertex.js');

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(value) {
        let vertex = new Vertex(value);
        this.adjacencyList.set(vertex, []);
        return vertex;
    }

    addDirectedEdge(startVertex, endVertex, weight = 0) {
        if (
            !this.adjacencyList.has(startVertex) ||
            !this.adjacencyList.has(endVertex)
        ) {
            throw Error("Vertices");
        }
        let edgesArray = this.adjacencyList.get(startVertex);
        edgesArray.push(new Edge(endVertex, weight));
    }
    breadthFirst(startVertex) {
        let queue = [];
        let visitedNodes = new Set();
        queue.push(startVertex);
        visitedNodes.add(startVertex);
        while (queue.length) {
            const current = queue.shift();
            const neighbors = this.getNeighbors(current);
            for (let neighbor of neighbors) {
                let neighborNode = neighbor.vertex;
                if (visitedNodes.has(neighborNode)) {
                    continue;
                } else {
                    visitedNodes.add(neighborNode);
                    queue.push(neighborNode);
                }
            }
        }

        return visitedNodes;
    }

    getNodes() {
        return this.adjacencyList;
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log(vertex);
            throw Error("Invalid Vertex", vertex);
        }

        return [...this.adjacencyList.get(vertex)];
    }
}

module.exports = {
    Vertex,
    Edge,
    Graph,
};