import { APIEntity, DatabaseRow, HydratorMapping } from "sdz-agent-types";

import { get } from "dot-wild";

const pipes = {
  Append: (row, value, append) => `${value || ``}${append}`,
  Capitalize: (row, value) => value && value.toUpperCase(),
  Concat: (row, value, field) => {
    return value + (row[field] || '')
  },
  Prepend: (row, value, prepend) => `${prepend}${value || ``}`,
  SetValue: (row, value, newValue) => newValue
}

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

  Object.entries(mapping).forEach(([to, from]) => {
      let value = `${get(row, rowKeys[`${from}`.toUpperCase()], "")}`.trim();
      if (to.match(/\|/)) {
        const pipe = to.split(/\|/g)
        to = pipe.shift();
        pipe.forEach(pipe => {
          const reg = new RegExp(/(.*?)\((.*?)\)/g);
          const matches = reg.exec(pipe);
          matches.shift();
          const f = matches.shift();
          const a = matches.shift().split(/,/g)
          value = pipes[f](row, value, ...a)
        })
      }
      hydrated[to] = value
    });
  return hydrated;
};

const normalize = (obj: any): any => {
  return Object.keys(obj).reduce((carrier: any, to) => {
    switch (true) {
      case (Array.isArray(obj[to])):
        carrier[to] = obj[to].map(normalize)
        break;
      case ('object' === typeof obj[to]):
        carrier[to] = normalize(obj[to])
        break;
    default:
      carrier[to.toUpperCase()] = obj[to];
    }
    return carrier;
  }, {});
}

export default Hydrator;
