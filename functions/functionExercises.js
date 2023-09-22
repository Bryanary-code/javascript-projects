
function makeLineSize(size) {
    let line = ''
    for (let i = 0; i < size; i++) {
        line += '#' 
    }
    return line
}

function makeSquare(size) {
    let square = makeRectangle(size, size)
    return square
}

function makeRectangle(width, height) { 
    let rectangle = ''
     for (i = 0; i < height; i++) {
         rectangle += '\n' + makeLineSize(width)
     }
     return rectangle
}

function makeDownwardStairs(height) {
    let triangle = ''
    for (let i = 0; i < height; i++) {
        triangle += '\n' + makeLineSize(i + 1)
    }
    return triangle
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    
    for (let i = 0; i < numSpaces; i++) {
     spaceLine += ' ';
    }

    spaceLine += makeLineSize(numChars)
  
    for (let i = 0; i < numSpaces; i++) {
      spaceLine += ' ';
    }
  
    return spaceLine;
  }
  
  
  function makeIsosclesTriangle(height) {
    let isoTriangle = ''
    for (let i = 0; i < height; i++) {
       isoTriangle += '\n' + makeSpaceLine(height - i - 1, 2 * i + 1)
    }
    return isoTriangle;
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function makeDiamond(height) {
    let diamond = makeIsosclesTriangle(height) + '\n' + reverse(makeIsosclesTriangle(height))
    return diamond
    }
console.log(makeDiamond(7))
