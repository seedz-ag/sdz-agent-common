"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const datetime_1 = __importDefault(require("./datetime"));
const bold = chalk_1.default.bold;
const error = chalk_1.default.red;
const info = chalk_1.default.green;
const warning = chalk_1.default.yellow;
class Logger {
    constructor() {
        this.type = 'log';
    }
    bold(text) {
        return bold(text);
    }
    error(...args) {
        this.type = 'error';
        this.do.apply(this, args);
    }
    info(...args) {
        this.type = 'info';
        this.do.apply(this, args);
    }
    log(...args) {
        this.type = 'log';
        this.do.apply(this, args);
    }
    do(...args) {
        let formatter;
        switch (this.type) {
            case 'error':
                formatter = error;
                break;
            case 'info':
                formatter = info;
                break;
            case 'warning':
                formatter = warning;
                break;
            default: formatter = (text) => text;
        }
        const prefix = formatter(`${bold(this.type.toUpperCase().padEnd(7, ' '))} [${datetime_1.default()}]:`);
        console.log.apply(console, [prefix, ...args]);
    }
    warning(...args) {
        this.type = 'warning';
        this.do.apply(this, args);
    }
}
exports.default = new Logger;
