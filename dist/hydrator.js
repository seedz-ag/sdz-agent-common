"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
const Hydrator = (mapping, row) => {
    const hydrated = {};
    Object.entries(mapping).map(([to, from]) => {
        hydrated[to] = `${(from && row[from]) || ""}`.trim();
    });
    return hydrated;
};
exports.default = Hydrator;
