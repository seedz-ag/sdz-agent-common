"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipes = {
    Append: (row, value, append) => `${value}${append}`,
    Capitalize: (row, value) => value.toUpperCase(),
    Concat: (row, value, field) => {
        return value + row[field];
    },
    Prepend: (row, value, prepend) => `${prepend}${value}`,
    SetValue: (row, value, newValue) => newValue
};
/**
 * Map column name to object correspondent attribute
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
const Hydrator = (mapping, row) => {
    const hydrated = {};
    const rowKeys = {};
    const isValid = (input) => {
        if (input === false || input === null || typeof input === 'undefined') {
            return false;
        }
        return true;
    };
    Object.keys(row).map((key) => (rowKeys[`${key}`.toUpperCase()] = key));
    Object.entries(mapping).forEach(([to, from]) => {
        let value = `${((from && isValid(row[rowKeys[`${from}`.toUpperCase()]])) ? (row[rowKeys[`${from}`.toUpperCase()]]) : "")}`.trim();
        if (to.match(/\|/)) {
            const pipe = to.split(/\|/g);
            to = pipe.shift();
            pipe.forEach(pipe => {
                const reg = new RegExp(/(.*?)\((.*?)\)/g);
                const matches = reg.exec(pipe);
                matches.shift();
                const f = matches.shift();
                const a = matches.shift().split(/,/g);
                value = pipes[f](row, value, ...a);
            });
        }
        hydrated[to] = value;
    });
    return hydrated;
};
exports.default = Hydrator;
