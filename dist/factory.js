"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dot_wild_1 = require("dot-wild");
/**
 * Map column name to object correspondent attribute
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
const Factory = (mapping, row) => {
    const json = JSON.stringify(row).replace(/\"([a-z0-9_-]{0,})\"\:/gi, (match, group) => `"${group.toUpperCase()}":`);
    const upperCased = JSON.parse(json);
    return Object.keys(mapping).reduce((carrier, to) => {
        carrier[to] = (0, dot_wild_1.get)(upperCased, mapping[to].toUpperCase(), "");
        return carrier;
    }, {});
};
exports.default = Factory;
