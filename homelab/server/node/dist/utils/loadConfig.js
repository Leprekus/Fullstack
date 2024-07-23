"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadConfig;
const fs_1 = __importDefault(require("fs"));
function loadConfig(path) {
    const config = JSON.parse(fs_1.default.readFileSync(path, 'utf8'));
    console.log({ config });
}
