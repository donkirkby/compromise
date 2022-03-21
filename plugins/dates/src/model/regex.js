export default [
  // 30sec
  [/^[0-9]+(min|sec|hr|d)s?$/, 'Duration', '30min'],
  // 2012-06
  [/^[0-9]{4}-[0-9]{2}$/, 'Date', '2012-06'],
  // 13h30
  [/^[0-9]{2}h[0-9]{2}$/, 'Time', '13h30'],
  // 03/02
  [/^[0-9]{2}\/[0-9]{2}/, 'Date', '03/02'],
  // iso-time
  [/^[0-9]{4}[:-][0-9]{2}[:-][0-9]{2}T[0-9]/, 'Time', 'iso-time-tag']

]