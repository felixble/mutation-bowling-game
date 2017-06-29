require('mocha');
var BowlingGame = require('../src/bowling-game');

var assert = require('chai').assert;

describe('Bowling Game', function () {

    var game;

    beforeEach(function() {
        game = new BowlingGame();
    });

    it('rolls no pins', function () {
        rollMany(20, 0);
        assert.strictEqual(game.score(), 0, 'score should equal 0');
    });

    it('rolls all ones', function () {
        rollMany(20, 1);
        assert.strictEqual(game.score(), 20, 'score should equal 20');
    });

    it('rolls a spare', function () {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        assert.strictEqual(game.score(), 16, 'score should equal 16');
    });

    it('rolls one strike', function () {
        rollStrike();
        game.roll(4);
        game.roll(3);
        rollMany(16, 0);
        assert.strictEqual(game.score(), 24, 'score should equal 24');
    });

    it('rolls a strike in last frame', function () {
        rollMany(18, 0);
        rollStrike();
        game.roll(4);
        game.roll(3);
        assert.strictEqual(game.score(), 17, 'score should equal 24');
    });

    var rollMany = function (n, pins) {
        for (var i=0; i<n; i++) {
            game.roll(pins);
        }
    };

    var rollSpare = function () {
        game.roll(5);
        game.roll(5);
    };

    var rollStrike = function () {
        game.roll(10);
    }

});