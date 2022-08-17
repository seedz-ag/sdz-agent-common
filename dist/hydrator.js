"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.entries(mapping).map(([to, from]) => (hydrated[to] = `${(from && isValid(row[rowKeys[`${from}`.toUpperCase()]])) ? (row[rowKeys[`${from}`.toUpperCase()]]) : ""}`.trim()));
    return hydrated;
};
exports.default = Hydrator;
