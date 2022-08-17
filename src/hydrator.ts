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
  
  const isValid = (input: any ):boolean => {
    if(input === false || input === null || typeof input === 'undefined') {
      return false
    }
    return true;
  };

  Object.keys(row).map((key) => (rowKeys[`${key}`.toUpperCase()] = key));

  Object.entries(mapping).map(
    ([to, from]) =>
      (hydrated[to] = `${
        (from && isValid(row[rowKeys[`${from}`.toUpperCase()]])) ? (row[rowKeys[`${from}`.toUpperCase()]]) : ""
      }`.trim())
  );
  return hydrated;
};

export default Hydrator;
