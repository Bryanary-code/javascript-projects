// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should have a value of 'nonprofit' for organization key", function () {
    expect(launchcode.organization).toBe('nonprofit');
  })

  test("should have a value of 'Jeff' for executiveDirector key", function() {
    expect(launchcode.executiveDirector).toBe('Jeff')
  })

  test("should have a value of 100 for percentageCoolEmployees key", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })

  test("should have a value of 'Web Development' for the first index in the programsOffered array", function() {
    expect(launchcode.programsOffered[0]).toBe('Web Development')
    
  })

  test("should have a value of 'Data Analysis' for the second index in the programsOffered array", function() {
    expect(launchcode.programsOffered[1]).toBe('Data Analysis')
  })

  test("should have a value of 'Liftoff' for the third index in the programsOffered array", function() {
    expect(launchcode.programsOffered[2]).toBe('Liftoff')
  })

  test("should have a length of 3 for the programsOffered array ", function() {
    expect(launchcode.programsOffered.length).toBe(3)
  })

  test("should return 'Launch!' if launchOutput() passed a number divisible by 2", function() {
    expect(launchcode.launchOutput(4)).toBe('Launch!')
  })

  test("should return 'Code!' if launchOutput() passed a number divisible by 3", function() {
    expect(launchcode.launchOutput(9)).toBe('Code!')
  })

  test("should return 'Rocks!' if launchOutput() passed a number divisible by 5", function() {
    expect(launchcode.launchOutput(25)).toBe('Rocks!')
  })

  test("should return 'LaunchCode!' if launchOutput() passed a number divisible by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!')
  })

  test("should return 'Code Rocks!' if launchOutput() passed a number divisible by 5 AND 3", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!')
  })

  test("should return 'Launch Rocks!' if launchOutput() passed a number divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!')
  })

  test("should return 'LaunchCode Rocks!' if launchOutput() passed a number divisible by 2, 3 AND 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!')
  })

  test("should return 'Rutabagas! That doesn't work.' if launchOutput() passed a number not divisible by 2, 3 or 5", function() {
    expect(launchcode.launchOutput(17)).toBe("Rutabagas! That doesn't work.")
  })


  
  
});