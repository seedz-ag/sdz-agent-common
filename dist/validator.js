"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
class Validator {
    constructor(config) {
        this.config = config;
    }
    auth() {
        try {
            logger_1.default.info(`VALIDANDO CONFIGURAÇÕES DE ${logger_1.default.bold('AUTENTICAÇÃO DE API')}.`);
            if (!this.valid(this.config.auth.api)) {
                throw new Error();
            }
        }
        catch {
            logger_1.default.error('CONFIGURAÇÕES INVÁLIDAS.');
            process.exit(1);
        }
        try {
            logger_1.default.info(`VALIDANDO CONFIGURAÇÕES DE ${logger_1.default.bold('AUTENTICAÇÃO DE FTP')}.`);
            if (!this.valid(this.config.auth.ftp)) {
                throw new Error();
            }
        }
        catch {
            logger_1.default.warning('CONFIGURAÇÕES INVÁLIDAS.');
        }
    }
    database() {
        try {
            logger_1.default.info(`VALIDANDO CONFIGURAÇÕES DE ${logger_1.default.bold('BANCO DE DADOS')}.`);
        }
        catch {
            logger_1.default.error('CONFIGURAÇÕES INVÁLIDAS.');
            process.exit(1);
        }
    }
    valid(config) {
        const valid = Object.keys(config).reduce((carrier, key) => {
            if (!config[key]) {
                return ++carrier;
            }
            return carrier;
        }, 0);
        return !valid;
    }
}
exports.default = Validator;
