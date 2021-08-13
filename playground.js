let output = ''

//ToDO: Welcome to Playground: direct expressions to output

const object = { a: 1, b: 2, c: 3 }

for (const property in object) {
	console.log(`${property}: ${object[property]}`)
}

// console.log('PayLoad : ', output)

/**
 *  Note: You will need to switch out commands in package.json to use Node Playground with nodemon
 *  "playground": "nodemon --quiet playground.js",
 */
