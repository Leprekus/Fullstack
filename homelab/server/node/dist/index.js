"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const loadConfig_1 = __importDefault(require("./utils/loadConfig"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
if (process.argv.length === 2) {
    console.error('Expected path to config file');
    process.exit(1);
}
if (process.argv.length > 3) {
    console.error('Too many arguments, expected a single argument to the path of the config file');
    process.exit(1);
}
const path = process.argv[2];
const config = (0, loadConfig_1.default)(path);
app.get('/', (req, res) => {
    console.log(req);
});
app.listen(port, () => console.log(`listening on port ${port}`));
