import { APIEntity, DatabaseRow } from "sdz-agent-types";
/**
 * Convert
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
declare const Hydrator: (mapping: any, row: DatabaseRow) => APIEntity;
export default Hydrator;
