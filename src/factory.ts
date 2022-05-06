import { get } from "dot-wild";

/**
 * Map column name to object correspondent attribute
 *
 * @param {object} mapping JSON DTO mapping
 * @param {object} row     Database returned row
 * @returns {object}       Mapped Entity
 */

 const Factory = (mapping: any, row: any): any => {
  const json = JSON.stringify(row).replace(
    /\"([a-z0-9_-]{0,})\"\:/gi,
    (match, group) => `"${group.toUpperCase()}":`
  );
  const upperCased = JSON.parse(json);

  return Object.keys(mapping).reduce((carrier: any, to) => {
    carrier[to] = get(upperCased, mapping[to].toUpperCase(), "");
    return carrier;
  }, {});
};

export default Factory;
