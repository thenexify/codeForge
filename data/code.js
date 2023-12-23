const htmlBoiler = `
<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>
    \
\n</body>\n</html>`

const popularShortcuts = [
    {
        title: 'HTML Boilerplate',
        id: 'html-boilerplate',
        language: 'html',
        code: htmlBoiler
    },
    {
        title: 'Bootstrap CDN',
        id: 'bootstrap-cdn',
        language: 'html',
        code: `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`
    },
    {
        title: 'Bootstrap Icons CDN',
        id: 'bootstrap-icons',
        language: 'html',
        code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">`
    },
    {
        title: 'Bootstrap Icons CDN (CSS)',
        id: 'bootstrap-icons-css',
        language: 'css',
        code: `@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");`
    },
    {
        title: 'Bootstrap CDN, PopperJS',
        id: 'bootstrap-cdn-2',
        language: 'html',
        code: `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>`
    },
    {
        title: 'ReactJS HTML',
        id: 'reactjs',
        language: 'html', 
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>`
    },
    {
        title: 'ReactJS HTML',
        id: 'reactjs',
        language: 'html', 
        code: `<!-- React -->
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <!-- React DOM -->
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>`
    },
    {
        title: 'Express JS Setup',
        id: 'express-js',
        language: 'js', 
        code: `const express = require('express');
        const app = express();
        const port = 3000;
        
        app.get('/', (req, res) => {
            res.send('Hello, Express!');
        });
        
        app.listen(port, () => {
            console.log('Server is listening at http://localhost:'+ port);
        });`
    },
]
const allShortcuts = [
    {
        title: 'HTML Boilerplate',
        id: 'html-boilerplate',
        language: 'html',
        code: htmlBoiler
    },
    {
        title: 'Bootstrap CDN',
        id: 'bootstrap-cdn',
        language: 'html',
        code: `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`
    },
    {
        title: 'Bootstrap Icons CDN',
        id: 'bootstrap-icons',
        language: 'html',
        code: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">`
    },
    {
        title: 'Bootstrap Icons CDN (CSS)',
        id: 'bootstrap-icons-css',
        language: 'css',
        code: `@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");`
    },
    {
        title: 'Bootstrap CDN, PopperJS',
        id: 'bootstrap-cdn-2',
        language: 'html',
        code: `<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>`
    },
    {
        title: 'ReactJS HTML',
        id: 'reactjs',
        language: 'html', 
        code: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
        </head>
        <body>
            <div id="root"></div>
        </body>
        </html>`
    },
    {
        title: 'ReactJS HTML',
        id: 'reactjs',
        language: 'html', 
        code: `<!-- React -->
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <!-- React DOM -->
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>`
    },
    {
        title: 'Express JS Setup',
        id: 'express-js',
        language: 'js', 
        code: `const express = require('express');\nconst app = express();\nconst port = 3000;\n\napp.get('/', (req, res) => {\n    res.send('Hello, Express!');\n});\n\napp.listen(port, () => {\n    console.log('Server is listening at http://localhost:'+ port);\n});`
    },
    {
        title: 'HTML Heading',
        id: 'html-heading-h1',
        language: 'html',
        code: `<h1>This is a heading</h1>`
    },
    {
        title: 'HTML Heading',
        id: 'html-heading-h2',
        language: 'html',
        code: `<h2>This is a heading</h2>`
    },
    {
        title: 'HTML Heading',
        id: 'html-heading-h3',
        language: 'html',
        code: `<h3>This is a heading</h3>`
    },
    {
        title: 'HTML Heading',
        id: 'html-heading-h4',
        language: 'html',
        code: `<h4>This is a heading</h4>`
    },
    {
        title: 'HTML Heading',
        id: 'html-heading-h5',
        language: 'html',
        code: `<h5>This is a heading</h5>`
    },
    {
        title: 'HTML Heading',
        id: 'html-heading-h6',
        language: 'html',
        code: `<h6>This is a heading</h6>`
    },
    {
        title: 'HTML Container',
        id: 'html-container',
        language: 'html',
        code: `<div> This is div block </div>`
    },
    {
        title: 'Span Inline Text',
        id: 'span-tag',
        language: 'html',
        code: `<span> This is span block </span>`
    },
    {
        title: 'Paragraph Tag',
        id: 'para-tag',
        language: 'html',
        code: `<p> This is a paragraph </p>`
    },
    {
        title: 'Pre Tag',
        id: 'pre-tag',
        language: 'html',
        code: `<pre> Hello World </pre>`
    },
    {
        title: 'Code Tag',
        id: 'code-tag',
        language: 'html',
        code: `<code> import pip3 </code>`
    },
    {
        title: 'Strong Bold Tag',
        id: 'strong-tag',
        language: 'html',
        code: `<b>I'm bold text</b>`
    },
    {
        title: 'Ordered List',
        id: 'ordered-list',
        language: 'html',
        code: `<ol>\n<li>Data 1</li>\n<li>Data 2</li>\n<li>Data 3</li>\n</ol>`
    },
    {
        title: 'Unordered List',
        id: 'unordered-list',
        language: 'html',
        code: `<ul>\n<li>Your Data</li>\n<li>Your Data</li>\n</ul>`
    },
    {
        title: 'Audio Tag',
        id: 'audio-tag',
        language: 'html',
        code: `<audio controls>\n<source src="demo.mp3" type="audio/mpeg">\nYour browser does not support the audio element.\n</audio>`
    },
    {
        title: 'Image Tag',
        id: 'img-tag',
        language: 'html',
        code: `<img src="./img.jpg" alt="Alternate text">`
    },
    {
        title: 'Video Tag',
        id: 'video-tag',
        language: 'html',
        code: `<video width="480" height="320" controls>\n<source src="demo_move.mp4" type="video/mp4">\nYour browser does not support the video tag.\n</video>`
    },
    {
        title: 'Table',
        id: 'table-tag', 
        language: 'html',
        code: `<table>\n<caption>Demo Table</caption>\n<thead>\n<tr>\n<th>Column1</th>\n<th colspan="2">Column2</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Data1</td>\n<td>Data2</td>\n<td>Data2</td>\n</tr>\n<tr>\n<td>Data1</td>\n<td>Data2</td>\n<td>Data2</td>\n</tr>\n</tbody>\n<tfoot>\n<tr>\n<td>&nbsp;</td>\n<td>Data</td>\n<td>Data</td>\n</tr>\n</tfoot>\n</table>`
    },
    {
        title: 'Anchor Hyperlinks',
        id: 'anchor-tag',
        language: 'html',
        code: `<a href="https://www.codewithharry.com/">Visit CodeWithHarry.com!</a>`
    },
    {
        title: 'Form',
        id: 'form-tag',
        language: 'html',
        code: `<form action="/action.php" method="post"> \n<textarea cols="20" name="comments" rows="5">Comment</textarea><br />\n<label><input name="terms" type="checkbox" value="tandc" />Accept terms</label> <br />\n<input type="submit" value="Submit" />\n</form>`
    },
    {
        title: 'Dropdown Menu',
        id: 'select-tag',
        language: 'html',
        code: `<select name="country">\n<option value="usa">United States</option>\n<option value="canada">Canada</option>\n</select>`
    },
    {
        title: 'Radio Input',
        id: 'radio-input',
        language: 'html',
        code: `<input type="radio" name="gender" value="male">\n Male\n<br>\n<input type="radio" name="gender" value="female"> Female`
    },
    {
        title: 'Basic CSS Setup',
        id: 'css-setup',
        language: 'css',
        code: `html, body{ \npadding: 0;\nmargin: 0;\n}`
    },
    {
        title: 'Centering an element horizontally',
        id: 'center-an-element-margin-horizontally',
        language: 'css',
        code: `.center-horizontal {\nmargin-left: auto;\nmargin-right: auto;\n}`
    },
    {
        title: 'Centering an element vertically',
        id: 'center-an-element-margin-vertically',
        language: 'css',
        code: `.center-vertical {\nmargin-top: auto;\nmargin-bottom: auto;\n}`
    },
    {
        title: 'Box Shadow',
        id: 'box-shadow',
        language: 'css',
        code: `.box-shadow {\nbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}`
    },
    {
        title: 'Flexbox Centering',
        id: 'center-flex',
        language: 'css',
        code: `.flex-center{\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n}`
    },
    {
        title: 'Responsive Typography',
        id: 'responsive-typo',
        language: 'css',
        code: `body {\nfont-size: 16px;\n}\n\n@media (min-width: 768px) {\nbody {\nfont-size: 18px;\n}\n}\n\n@media (min-width: 1200px) {\nbody {\nfont-size: 20px;\n}\n}`
    },
    {
        title: 'Gradient Background',
        id: 'gradient-background-image',
        language: 'css',
        code: `.gradient-bg {\nbackground: linear-gradient(to right, #ff7e5f, #feb47b);\n}`
    },
    {
        title: 'Transition Effects',
        id: 'transition-effects',
        language: 'css',
        code: `.transition-effect {\ntransition: all 0.3s ease-in-out;\n}`
    },
    {
        title: 'Grid Centering',
        id: 'grid-centering',
        language: 'css',
        code: `.grid-center {\ndisplay: grid;\nplace-items: center;\n}`
    },
    {
        title: 'Absolute Centering',
        id: 'absolute-centering',
        language: 'css',
        code: `.absolute-center {\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n}`
    },
    {
        title: 'Custom Checkbox',
        id: 'custom-checkbox',
        language: 'css',
        code: `.input[type="checkbox"] {\nappearance: none;\nwidth: 20px;\nheight: 20px;\nborder: 2px solid #333;\nborder-radius: 4px;\ncursor: pointer;}                \ninput[type="checkbox"]:checked {\nbackground-color: #333;\nborder: 2px solid #fff;\n}`
    },
    {
        title: 'HTTP Server',
        id: 'http-server',
        language: 'js',
        code: `const server = http.createServer((req, res) => {\n    res.writeHead(200, { 'Content-Type': 'text/plain' });\n    res.end('Hello, Node.js HTTP Server!');\n});\n\nconst port = 3000;\nserver.listen(port, () => {\n    console.log('Server running at http://localhost:'+port);\n});`
    },
    {
        title: 'File System Module in NodeJS',
        id: 'file-system',
        language: 'js',
        code: `const fs = require('fs');\n// Reading a File\nfs.readFile('file.txt', 'utf8', (err, data) => {\n    if (err) throw err;\n    console.log(data);\n});\n\n// Writing to a File\nfs.writeFile('newfile.txt', 'Hello, Node.js!', 'utf8', (err) => {\n    if (err) throw err;\n    console.log('File written successfully!');\n});`
    },
    {
        title: 'For Loop',
        id: 'for-loop',
        language: 'js',
        code: `for (let i = 0; i < 5; i++) {\nconsole.log(i);\n}`
    },
    {
        title: 'While Loop',
        id: 'while-loop',
        language: 'js',
        code: `let i = 0;\nwhile (i < 5) {\n    console.log(i);\n    i++;\n}`
    },
    {
        title: 'Do-While Loop',
        id: 'do-while-loop',
        language: 'js',
        code: `let i = 0;\ndo {\n    console.log(i);\n    i++;\n} while (i < 5);`
    },
    {
        title: 'For-in Loop',
        id: 'for-in-loop',
        language: 'js',
        code: `const obj = { a: 1, b: 2, c: 3 };\nfor (const key in obj) {\n    console.log(key, obj[key]);\n}`
    },
    {
        title: 'For-of Loop',
        id: 'for-of-loop',
        language: 'js',
        code: `const array = [1, 2, 3, 4, 5];\nfor (const value of array) {\n    console.log(value);\n}`
    },
    {
        title: 'Geolocation API',
        id: 'geolocation',
        language: 'js',
        code: `function getGeolocation() {\n    if (navigator.geolocation) {\n        navigator.geolocation.getCurrentPosition(\n            position => {\n                const { latitude, longitude } = position.coords;\n                console.log(latitude, longitude);\n            },\n            error => {\n                console.error('Error getting geolocation:', error);\n            }\n        );\n    } else {\n        console.error('Geolocation is not supported by this browser.');\n    }\n}\n\n// Call the function to get geolocation\ngetGeolocation();`
    },
    {
        title: 'Higher Order Array Methods',
        id: 'higher-array-methods',
        language: 'js',
        code: `const numbers = [1, 2, 3, 4, 5];\nconst squared = numbers.map(num => num * num);\nconst evens = numbers.filter(num => num % 2 === 0);\nconst sum = numbers.reduce((acc, num) => acc + num, 0);`
    },
    {
        title: 'Fetch Method',
        id: 'fetch',
        language: 'js',
        code: `fetch('https://api.example.com/data')\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error('Error:', error));`
    },
    {
        title: 'Form Validation',
        id: 'form-validation',
        language: 'js',
        code: `const emailInput = document.getElementById('email');\nfunction validateEmail() {\n    const emailValue = emailInput.value;\n    const isValid = /\S+@\S+\.\S+/.test(emailValue);\n    \n    if (!isValid) {\n        alert('Invalid email address');\n    }\n}\n\nemailInput.addEventListener('blur', validateEmail);`
    },
    {
        title: 'Google Search',
        id: 'google-search',
        language: 'js',
        code: `const searchGoogle = (query) => {\nconst splitQuery = query.replace(/ /g, '+');\nconst linkFormat = 'https://www.google.com/search?client=firefox-b-d&q=splitQuery';\nwindow.location.href = linkFormat;\n};`
    },
    {
        title: 'REGEX Guide',
        id: 'regex-guide',
        language: 'js',
        code: `// Creating a Regular Expression\n// Literal Syntax\nconst regexLiteral = /pattern/;\n\n// Constructor Function\nconst regexConstructor = new RegExp('pattern');\n\n\n// Matching\n\n// Test Method\nconst testRegex = /abc/;\nconst isMatch = testRegex.test('abc'); // true\n\n// String Methods\nconst matchRegex = /\d+/;\nconst str = '123abc456';\nconst result = str.match(matchRegex); // ['123', '456']\n\n\n// Flags\n\n// Case Insensitive (i)\nconst caseInsensitiveRegex = /pattern/i;\n\n// Global (g)\nconst globalRegex = /pattern/g;\n\n\n// Examples\n\n// Matching Digits\nconst digitRegex = /\d+/;\nconst isDigit = digitRegex.test('123'); // true\n\n// Matching Word\nconst wordRegex = /word/;\nconst containsWord = wordRegex.test('This is a word.'); // true\n\n// Matching Email\nconst emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;\nconst isValidEmail = emailRegex.test('user@example.com'); // true`
    },
]


module.exports = { popularShortcuts, allShortcuts }