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
    const flattened = flatten(row);
    let normalized = {};
    Object.keys(flattened).map((key) => {
        normalized = (0, dot_wild_1.set)(normalized, key, flattened[key]);
    });
    Object.entries(mapping).forEach(([to, from]) => {
        hydrated[to] = (0, dot_wild_1.get)(normalized, String(from).toUpperCase());
    });
    return hydrated;
};
const flatten = (obj) => {
    let result = {};
    for (const i in obj) {
        if (Array.isArray(obj[i])) {
            for (const j in obj[i]) {
                const temp = flatten(obj[i][j]);
                Object.keys(temp).forEach((key) => (result[`${j.toUpperCase()}.${key}`] = temp[key]));
            }
        }
        else if (typeof obj[i] === "object") {
            const temp = flatten(obj[i]);
            for (const j in temp) {
                result[i.toUpperCase() + "." + j.toUpperCase()] = temp[j];
            }
        }
        else {
            result[i.toUpperCase()] = obj[i];
        }
    }
    return result;
};
exports.default = Hydrator;
