"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    if (res) {
        res.send("Hello world");
    }
});
app.listen(PORT, () => {
    return console.log(`Express server is running and started on http://localhost:${PORT} Successfully`);
});
//# sourceMappingURL=app.js.map