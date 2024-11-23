
function evaluarPredio(req, res) {
    const temperatura = parseFloat(req.body.pred_temperatura);
    const ph = parseFloat(req.body.pred_ph);
    if(temperatura >= 28 && temperatura <= 32 && ph >= 7 && ph <= 7.5) {
        return res.json(true);
    }
    return res.json(false);
}

module.exports = {
    evaluarPredio
}