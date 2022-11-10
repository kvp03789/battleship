import {player1Cruiser} from './game.js';



test('ship length is correct', () => {
    expect(player1Cruiser.hp).toBe(4);
}) 

test('can take damage', () => {
    expect(player1Cruiser.hp).toBe(3);
})