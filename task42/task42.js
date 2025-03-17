// Напишите функцию getTreeValues(tree), которая принимает на вход дерево,
// значения вершин которого являются числами, и возвращает отсортированный
// по возрастанию массив значений всех вершин этого дерева.

function getTreeValues(tree) {
    const values = [];

    function traverse(node) {
        if (node) {
            values.push(node.value);
            if (node.children) {
                node.children.forEach(child => traverse(child));
            }
        }
    }

    traverse(tree);
    return values.sort((a, b) => a - b);
}

const tree = {
    value: 5,
    children: [
        {
            value: 3,
            children: [
                { value: 1, children: [] },
                { value: 4, children: [] }
            ]
        },
        {
            value: 8,
            children: [
                { value: 7, children: [] },
                { value: 9, children: [] }
            ]
        }
    ]
};

console.log(getTreeValues(tree)); // [1, 3, 4, 5, 7, 8, 9]


