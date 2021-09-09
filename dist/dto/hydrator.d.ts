/**
 * Convert
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
declare const Hydrator: (mapping: any, row: any) => any;
export default Hydrator;
