import { APIEntity, DatabaseRow, HydratorMapping } from "sdz-agent-types";

/**
 * Map column name to object correspondent attribute
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */
const Hydrator = (mapping: HydratorMapping, row: DatabaseRow): APIEntity => {
  const hydrated = {};
  const rowKeys = {};

  Object.keys(row).map((key) => (rowKeys[`${key}`.toUpperCase()] = key));

  Object.entries(mapping).map(
    ([to, from]) =>
      (hydrated[to] = `${
        (from && row[rowKeys[`${from}`.toUpperCase()]]) || ""
      }`.trim())
  );

  return hydrated;
};

export default Hydrator;
