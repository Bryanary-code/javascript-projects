const checkFive = require('../checkFive.js')

describe('checkFive', function () {

test('should return message of num is less than five', function () {
    expect(checkFive(3)).toBe('3 is less than 5.')
})

test('should return message of num is greater than five', function () {
    expect(checkFive(7)).toBe('7 is greater than 5.')
})

test('should return message of num is equal to five', function () {
    expect(checkFive(5)).toBe('5 is equal to 5.')
})




})

