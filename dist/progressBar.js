"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_progress_1 = __importDefault(require("cli-progress"));
class ProgressBar {
    constructor() {
        this.list = {};
        this.progress = new cli_progress_1.default.MultiBar({
            hideCursor: true,
            format: `[{color}{bar}\u001b[0m] | {event} {text} || {percentage}% || {count} {unit} `,
        }, cli_progress_1.default.Presets.shades_grey);
    }
    create(n, total, init, options) {
        const instenceProgress = this.progress.create(total, init, options);
        this.list[n] = instenceProgress;
        return instenceProgress;
    }
    get(n) {
        return this.list[n];
    }
    update(n, total, options) {
        const instance = this.get(n);
        if (instance) {
            instance.update(total, options);
        }
    }
    close() {
        this.progress.stop();
    }
}
exports.default = new ProgressBar();
