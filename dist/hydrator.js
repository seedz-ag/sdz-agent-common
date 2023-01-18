"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dot_wild_1 = require("dot-wild");
const pipes = {
    Append: (row, value, append) => `${value || ``}${append}`,
    Capitalize: (row, value) => value && value.toUpperCase(),
    Concat: (row, value, field) => {
        return value + (row[field] || "");
    },
    Prepend: (row, value, prepend) => `${prepend}${value || ``}`,
    SetValue: (row, value, newValue) => newValue,
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
    const rowNormalized = normalize(row);
    Object.keys(rowNormalized).map((key) => {
        if (typeof key === "object") {
            return;
        }
        if (typeof rowNormalized[key] === "object") {
            return Object.keys(rowNormalized[key]).map((subKey) => {
                const newKey = `${key}-${subKey}`.toUpperCase();
                rowKeys[newKey] = newKey;
                rowNormalized[newKey] = rowNormalized[key][subKey];
            });
        }
        return (rowKeys[`${key}`.toUpperCase()] = key);
    });
    Object.entries(mapping).forEach(([to, from]) => {
        let fromFormatted = from;
        if (`${from}`.includes(".")) {
            fromFormatted = `${from}`.replace(".", "-");
        }
        let value = `${(0, dot_wild_1.get)(rowNormalized, rowKeys[`${fromFormatted}`.toUpperCase()], "")}`.trim();
        if (to.match(/\|/)) {
            const pipe = to.split(/\|/g);
            to = pipe.shift();
            pipe.forEach((pipe) => {
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
    console.log(hydrated);
    return hydrated;
};
const normalize = (obj) => {
    return Object.keys(obj).reduce((carrier, to) => {
        switch (true) {
            case Array.isArray(obj[to]):
                carrier[to] = obj[to].map(normalize);
                break;
            case "object" === typeof obj[to]:
                carrier[to] = normalize(obj[to]);
                break;
            default:
                carrier[to.toUpperCase()] = obj[to];
        }
        return carrier;
    }, {});
};
exports.default = Hydrator;
