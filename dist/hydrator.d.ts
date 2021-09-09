import { APIEntity, DatabaseRow, HydratorMapping } from "sdz-agent-types";
/**
 * Convert
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
declare const Hydrator: (mapping: HydratorMapping, row: DatabaseRow) => APIEntity;
export default Hydrator;
