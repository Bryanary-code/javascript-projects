const whoWon = require('../RPS.js')

describe('whoWon', function (){

    test('should return TIE! if player1 and player2 are equal', function () {
        expect(whoWon('rock', 'rock')).toBe('TIE!')
    })

    test('should return Player 2 wins! if player2 wins', function () {
        expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!')
    })

    test('should return Player 1 wins! if player1 wins', function () {
            expect(whoWon('paper', 'rock')).toBe('Player 1 wins!')
    })

    test('should return Invalid option if an invalid input is provided', function () {
        expect(whoWon('rock', 'brush')).toBe('Invalid option. Please use rock, paper, or scissors.');
    })

});