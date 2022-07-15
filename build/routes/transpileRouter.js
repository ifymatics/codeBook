"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var transpileController_1 = require("./../components/transpileController");
var router = (0, express_1.Router)();
router.post("/transpile", transpileController_1.transpileController.postTranspile);
exports.default = router;
