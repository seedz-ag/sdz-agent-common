import { APIEntity, DatabaseRow, HydratorMapping } from "sdz-agent-types";

/**
 * Convert
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
const Hydrator = (mapping: HydratorMapping, row: DatabaseRow): APIEntity => {
  const hydrated = {};

  Object.entries(mapping).map(([to, from]) => {
    hydrated[to] = (from && row[from]) || "";
  });

  return hydrated;
};

export default Hydrator;
