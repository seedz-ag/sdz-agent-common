import { APIEntity, DatabaseRow, HydratorMapping } from "sdz-agent-types";
/**
 * Map column name to object correspondent attribute
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
declare const Hydrator: (mapping: HydratorMapping, row: DatabaseRow) => APIEntity;
export default Hydrator;
