const { errorHandler } = require("../utils");
exports.home = async (req, res, next) => {
  var hi = {}
      hi.baucua = `/baucua?chon= [ bầu - cua - cá - nai - gà - tôm ]`
      hi.taixiu = `/taixiu?chon= [ tài / xỉu ]`
      hi.Authors = `[ Tòn ] - Dưa Hấu`
res.header("Content-type", "application/json; charset=utf-8")
res.send(JSON.stringify(hi, null, 2))
};
