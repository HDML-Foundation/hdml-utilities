const parse5 = require('parse5');

// Example HTML string
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Parse5 Example</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a simple example of using parse5.</p>
  </body>
</html>
`;

// Parse the HTML string
const document = parse5.parse(html);

// Function to traverse the DOM tree and log node details
function traverse(node, depth = 0) {
    const indent = ' '.repeat(depth * 2);
    console.log(`${indent}Node: ${node.nodeName}`);

    if (node.tagName) {
        console.log(`${indent} Tag: ${node.tagName}`);
    }

    if (node.attrs && node.attrs.length > 0) {
        console.log(`${indent} Attributes:`);
        node.attrs.forEach(attr => {
            console.log(`${indent}  - ${attr.name}="${attr.value}"`);
        });
    }

    if (node.childNodes) {
        node.childNodes.forEach(child => traverse(child, depth + 1));
    }
}

// Start traversing from the document node
traverse(document);
