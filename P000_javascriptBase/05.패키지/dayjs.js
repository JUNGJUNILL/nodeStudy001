var dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime')
var updateLocale = require('dayjs/plugin/updateLocale')
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: '%d seconds',
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    }
  })

//1시간전.. 
const now = new Date();
console.log(now)
console.log(dayjs().to(dayjs(now.setMinutes(now.getMinutes()-2)))); 
console.log(dayjs(new Date()).format('YYYY/MM/DD/HH:mm:ss'))
console.log(dayjs(now.setHours(now.getHours()-1)).format('YYYY/MM/DD/HH:mm:ss'))
console.log(dayjs('2021-02-08T01:44:21.000Z').format('YYYY/MM/DD/HH:mm:ss'))