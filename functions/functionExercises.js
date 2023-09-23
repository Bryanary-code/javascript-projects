
function makeLineSize(size, char = '#') {
    let line = ''
    for (let i = 0; i < size; i++) {
        line += char 
    }
    return line
}


function makeSquare(size, char = '#') {
    let square = makeRectangle(size, size, char)
    return square
}

function makeRectangle(width, height, char = "#") { 
    let rectangle = ''
     for (i = 0; i < height; i++) {
         rectangle += '\n' + makeLineSize(width, char)
     }
     return rectangle
}


function makeDownwardStairs(height, char = '#') {
    let triangle = ''
    for (let i = 0; i < height; i++) {
        triangle += '\n' + makeLineSize(i + 1, char)
    }
    return triangle
}

function makeSpaceLine(numSpaces, numChars, char ='#') {
    let spaceLine = '';
    
    for (let i = 0; i < numSpaces; i++) {
     spaceLine += ' ';
    }

    spaceLine += makeLineSize(numChars, char)
  
    for (let i = 0; i < numSpaces; i++) {
      spaceLine += ' ';
    }
  
    return spaceLine;
  }
  
  
  function makeIsosclesTriangle(height, char = '#') {
    let isoTriangle = ''
    for (let i = 0; i < height; i++) {
       isoTriangle += '\n' + makeSpaceLine(height - i - 1, 2 * i + 1, char)
    }
    return isoTriangle;
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function makeDiamond(height, char = '#') {
    let diamond = makeIsosclesTriangle(height, char) + '\n' + reverse(makeIsosclesTriangle(height, char))
    return diamond
    }

console.log(makeDiamond(15, '*'))