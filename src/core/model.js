const db = require('../helpers/query')

function Model (options) {
  if (!options.table) {
    throw new Error('Table name option not specified in @Model() decorator')
  }

  return function (target) {
    Object.defineProperty(target.prototype, '_type', {
      get: () => 'model',
      set: () => {
        throw new Error('Illegal Option')
      }
    })

    if (options.table) {
      target.prototype.table = options.table
    }

    target.prototype.db = db(options.table)

    return target
  }
}
module.exports = Model
