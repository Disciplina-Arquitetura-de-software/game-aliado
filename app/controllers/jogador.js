
module.exports = function(app) {
    var controller = {};

    controller.estado = function(req, res) {
        res.status(200).json({
            resultado:"erro",
            erro:"Jogador não atutenticado"
        });
    };

    controller.autenticar = function(req, res) {
        console.log("Cookies: ", req.cookies);
        res.status(200).json({
            resultado: "autenticado"
        });
    };

    return controller;
};
