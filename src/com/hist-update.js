var h = require('hyperscript')
var nicedate = require('nicedate')
var u = require('../util')

module.exports = function (update, diff, opts) {
  opts = opts || {}
  var desc, adds=0, dels=0
  try {
    desc = update.value.content.desc
    adds = diff.adds.length
    dels = diff.dels.length
  } catch (e) {}

  return h('p',
    h('label',
      h('input', { type: 'checkbox', checked: true, onclick: u.handler(opts.ontoggle, true), value: update.key }),
      h('strong', desc || h('em', 'no commit message')),
      h('br'),
      h('small',
        '(', h('span.adds', '+', adds), ' ', h('span.dels', '-', dels), ') ',
        nicedate(update.value.timestamp, true),
        ' by ', update.value.author
      )
    )
  )
}