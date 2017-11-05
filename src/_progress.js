var Progress = require('progress')

module.exports = function _progress(params, callback) {
  if (!callback) callback = x=> !x
  return new Progress(`${params.name} :bar `, {
    complete: '\u001b[42m \u001b[0m',
    incomplete: '\u001b[43m \u001b[0m',
    total: params.total,
    clear: true,
    callback,
  })
}
