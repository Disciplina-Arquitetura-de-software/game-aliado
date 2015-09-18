
function dado() {

};

dado.prototype.jogar = function() {
    return Math.floor((Math.random() * 6) + 1);
};

module.exports = dado;
