"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpileController = void 0;
var core_1 = require("@babel/core");
exports.transpileController = {
    postTranspile: function (req, res) {
        var _a = req.body, userId = _a.userId, code = _a.code;
        (0, core_1.transform)(code, function (err, result) {
            if (err)
                return res.status(500).json({ message: "error occured" });
            res.status(200).json({ code: result });
        });
    }
};
