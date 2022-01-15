// a bunch of tests copy+pasted from the chronic date parser,
// by Tom Preston-Werner ❤️
// https://github.com/mojombo/chronic/edit/master/test/test_parsing.rb

import test from 'tape'
import spacetime from 'spacetime'
import nlp from './_lib.js'

const fmt = (iso) => (iso ? spacetime(iso).format('iso-short') : '-')

const mk = function (y, m, d, h, sec, mil) {
  let s = spacetime.now().year(y)
  if (m) {
    s = s.month(m - 1)
  }
  if (d) {
    s = s.date(d)
  }
  if (h) {
    s = s.hour(h)
  }
  if (sec) {
    s = s.second(sec)
  }
  if (mil) {
    s = s.millisecond(mil)
  }
  return fmt(s)
}

test('chronic-tests-one', (t) => {
  let arr = [
    ['2012-08-02T13:00:00', mk(2012, 8, 2, 13)],
    ['aug 3', mk(2007, 8, 3, 12)],
    ['aug. 3', mk(2007, 8, 3, 12)],
    ['aug-20', mk(2007, 8, 20, 12)],
    ['may 27', mk(2007, 5, 27, 12)],
    ['may 28', mk(2007, 5, 28, 12)],
    ['may 28 5pm', mk(2007, 5, 28, 17)],
    ['may 28 at 5pm', mk(2007, 5, 28, 17)],
    // ['may 28 at 5:32.19pm', mk(2006, 5, 28, 17, 32, 19)],
    // ['may 28 at 5:32:19.764', mk(2007, 5, 28, 17, 32, 19, 764000)],
    ['5pm on may 28', mk(2007, 5, 28, 17)],
    ['5pm may 28', mk(2007, 5, 28, 17)],
    ['5 on may 28', mk(2007, 5, 28, 5)],
    ['may 27th', mk(2007, 5, 27, 12)],
    ['may 27th 5:00 pm', mk(2007, 5, 27, 17)],
    ['may 27th at 5pm', mk(2007, 5, 27, 17)],
    // ['may 27th at 5', mk(2007, 5, 27, 5)],
    // ['fifteenth of this month', mk(2007, 8, 15, 12)],
    ['22nd February', mk(2007, 2, 22, 12)],
    ['31st of may at 6:30pm', mk(2007, 5, 31, 18, 30)],
    ['11th december 8am', mk(2006, 12, 11, 8)],
    // ['2009 May 22nd', mk(2009, 05, 22, 12)],
    ['22 February', mk(2007, 2, 22, 12)],
    ['22 feb', mk(2007, 2, 22, 12)],
    ['22-feb', mk(2007, 2, 22, 12)],
    ['31 of may at 6:30pm', mk(2007, 5, 31, 18, 30)],
    ['11 december 8am', mk(2006, 12, 11, 8)],
    ['5:00 pm may 27th', mk(2007, 5, 27, 17)],
    ['05:00 pm may 27th', mk(2007, 5, 27, 17)],
    ['5pm on may 27th', mk(2007, 5, 27, 17)],
    // ['5 on may 27th', mk(2007, 5, 27, 5)],
    // ["may '97", mk(1997, 5, 16, 12)],
    // ['may 33', mk(2033, 5, 16, 12)],
    // ['may 32', mk(2032, 5, 16, 12, 0, 0)],
    // ["may '01", mk(2001, 5, 16, 12, 0, 0)],
    ['November 18, 2010', mk(2010, 11, 18, 12)],
    ['Jan 1, 2010', mk(2010, 1, 1, 12)],
    ['February 14, 2004', mk(2004, 2, 14, 12)],
    ['jan 3 2010', mk(2010, 1, 3, 12)],
    ['jan 3 2010 midnight', mk(2010, 1, 3, 0)],
    ['jan 3 2010 at midnight', mk(2010, 1, 3, 0)],
    ['jan 3 2010 at 4', mk(2010, 1, 3, 4)],
    ['may 27, 1979', mk(1979, 5, 27, 12)],
    // ["may 27 '79", mk(1979, 5, 27, 12)],
    // ['may 27 79 4:30', mk(1979, 5, 27, 16, 30)],
    // ['may 27 79 at 4:30', mk(1979, 5, 27, 4, 30)],
    // ['may 27 32', mk(2032, 5, 27, 12, 0, 0)],
    // ['oct 5 2012 1045pm', mk(2012, 10, 5, 22, 45)],
    // ['may 1st 01', mk(2001, 5, 1, 12)],
    ['November 18th 2010', mk(2010, 11, 18, 12)],
    ['November 18th, 2010', mk(2010, 11, 18, 12)],
    ['November 18th 2010 midnight', mk(2010, 11, 18, 0)],
    // ['November 18th 2010 at midnight', mk(2010, 11, 19, 0)],
    ['November 18th 2010 at 4', mk(2010, 11, 18, 16)],
    ['November 18th 2010 at 4', mk(2010, 11, 18, 4)],
    ['March 30th, 1979', mk(1979, 3, 30, 12)],
    // ['March 30th 79', mk(1979, 3, 30, 12)],
    // ['March 30th 79 4:30', mk(1979, 3, 30, 16, 30)],
    // ['March 30th 79 at 4:30', mk(1979, 3, 30, 4, 30)],
    ['22nd February 2012', mk(2012, 2, 22, 12)],
    // ['11th december 79', mk(1979, 12, 11, 12)],
    ['3 jan 2010', mk(2010, 1, 3, 12)],
    ['3 jan 2010 4pm', mk(2010, 1, 3, 16)],
    ['27 Oct 2006 7:30pm', mk(2006, 10, 27, 19, 30)],
    // ['3 jan 10', mk(2010, 1, 3, 12)],
    // ['3 jan 10', mk(2010, 1, 3, 12)],
    // ['3 jan 10', mk(2010, 1, 3, 12)],
    ['5/27/1979', mk(1979, 5, 27, 12), 'iso-times'],
    ['5/27/1979 4am', mk(1979, 5, 27, 4), 'iso-times'],
    // ['7/12/11', mk(2011, 7, 12, 12), 'iso-times'],
    // ['7/12/11', mk(2011, 12, 7, 12), 'iso-times'],
    ['9/19/2011 6:05:57 PM', mk(2011, 9, 19, 18, 5, 57), 'iso-times'],
    ['2013-03-12 17:00', mk(2013, 3, 12, 17, 0, 0), 'iso-times'],
    ['27/5/1979', mk(1979, 5, 27, 12)],
    ['27/5/1979 @ 0700', mk(1979, 5, 27, 7)],
    ['03/18/2012 09:26 pm', mk(2012, 3, 18, 21, 26)],
    // ['30.07.2013 16:34:22', mk(2013, 7, 30, 16, 34, 22)],
    // ['09.08.2013', mk(2013, 8, 9, 12)],
    // ['9.8.2013', mk(2013, 8, 9, 12)],
    ['30-07-2013 21:53:49', mk(2013, 7, 30, 21, 53, 49), 'iso-short'],
    ['2000-1-1', mk(2000, 1, 1, 12), 'iso-short'],
    ['2006-08-20', mk(2006, 8, 20, 12), 'iso-short'],
    ['2006-08-20 7pm', mk(2006, 8, 20, 19), 'iso-short'],
    ['2006-08-20 03:00', mk(2006, 8, 20, 3), 'iso-short'],
    ['2006-08-20 03:30:30', mk(2006, 8, 20, 3, 30, 30), 'iso-short'],
    ['2006-08-20 15:30:30', mk(2006, 8, 20, 15, 30, 30), 'iso-short'],
    ['2006-08-20 15:30.30', mk(2006, 8, 20, 15, 30, 30), 'iso-short'],
    ['1902-08-20', mk(1902, 8, 20, 12, 0, 0), 'iso-short'],
    ['2013.07.30 11:45:23', mk(2013, 7, 30, 11, 45, 23)],
    ['2013.08.09', mk(2013, 8, 9, 12, 0, 0)],

    // ['2012:05:25 22:06:50', mk(2012, 5, 25, 22, 6, 50)],
    // ['05/06', mk(2007, 5, 6, 12)],
    // ['05/06', mk(2007, 6, 5, 12)],
    // ['05/06 6:05:57 PM', mk(2007, 5, 6, 18, 05, 57)],
    // ['05/06 6:05:57 PM', mk(2007, 6, 5, 18, 05, 57)],
    // ['13/09', mk(2006, 9, 13, 12),'dd/mm'],
    // ['1/13', mk(2007, 1, 13, 12),'dd/mm'],
    // ['3/13', mk(2006, 3, 13, 12),'dd/mm'],
    // ['12/1', mk(2005, 12, 1, 12),'dd/mm'],
    // ['12/1', mk(2006, 12, 1, 12),'dd/mm'],
    // ['12/1', mk(2006, 12, 1, 12),'dd/mm'],
    // ['8/1', mk(2006, 8, 1, 12),'dd/mm'],
    // ['8/1', mk(2007, 8, 1, 12),'dd/mm'],
    // ['8/1', mk(2006, 8, 1, 12),'dd/mm'],
    // ['1/1', mk(2006, 1, 1, 12),'dd/mm'],
    // ['1/1', mk(2007, 1, 1, 12),'dd/mm'],
    // ['1/1', mk(2006, 1, 1, 12),'dd/mm'],
    ['2012-06', mk(2012, 6, 1)],
    // ['2013/12', mk(2013, 12, 1, 0)],
  ]
  let context = {
    today: [2006, 8, 24],
  }
  arr.forEach(a => {
    let found = nlp(a[0]).dates(context).json()[0] || {}
    let have = fmt(found.dates.start)
    t.equal(have, a[1], a[0])
  })
  t.end()
})

test('chronic-tests-two', (t) => {
  let context = {
    today: [2006, 7, 16],
  }
  let arr = [
    // ['9am on Saturday', mk(2006, 8, 19, 9)],
    ['on Tuesday', mk(2006, 8, 22, 12)],
    ['1:00:00 PM', mk(2006, 8, 16, 13)],
    ['01:00:00 PM', mk(2006, 8, 16, 13)],
    ['today at 02:00:00', mk(2006, 8, 16, 14)],
    ['today at 02:00:00 AM', mk(2006, 8, 16, 2)],
    ['today at 3:00:00', mk(2006, 8, 16, 3)],
    ['today at 03:00:00', mk(2006, 8, 16, 3)],
    // ['tomorrow at 4a.m.', mk(2006, 8, 17, 4)],
    // ['3rd month next year', mk(2007, 3, 1)],
    // ['3rd thursday this september', mk(2006, 9, 21, 12)],
    // ['3rd thursday this november', mk(2010, 11, 18, 12)],
    // ['4th day last week', mk(2006, 8, 9, 12)],
    // ['30-Mar-11', mk(2011, 3, 30, 12)],
    // ['31-Aug-12', mk(2012, 8, 31)],
    // //end of testing handlers
    ['friday', mk(2006, 8, 18, 12)],
    // ['tue', mk(2006, 8, 22, 12)],
    ['13:00', mk(2006, 8, 16, 13), 'times'],
    ['13:45', mk(2006, 8, 16, 13, 45), 'times'],
    ['1:01pm', mk(2006, 8, 16, 13, 1), 'times'],
    ['2:01pm', mk(2006, 8, 16, 14, 1), 'times'],
    ['november', mk(2006, 11, 1), 'times'],
    ['friday 13:00', mk(2006, 8, 18, 13), 'times'],
    ['monday 4:00', mk(2006, 8, 21, 16), 'times'],
    ['sat 4:00', mk(2006, 8, 19, 4), 'times'],
    ['sunday 4:20', mk(2006, 8, 20, 4, 20), 'times'],
    ['4 pm', mk(2006, 8, 16, 16), 'times'],
    ['4 am', mk(2006, 8, 16, 4), 'times'],
    ['12 pm', mk(2006, 8, 16, 12), 'times'],
    ['12:01 pm', mk(2006, 8, 16, 12, 1), 'times'],
    ['12:01 am', mk(2006, 8, 16, 0, 1), 'times'],
    ['12 am', mk(2006, 8, 16), 'times'],
    ['4:00 in the morning', mk(2006, 8, 16, 4), 'times'],
    // ['0:10', mk(2006, 8, 17, 0, 10),'times'],
    ['november 4', mk(2006, 11, 4, 12)],
    ['aug 24', mk(2006, 8, 24, 12)],
    ['friday 1 pm', mk(2006, 8, 18, 13)],
    // ['friday 11 at night', mk(2006, 8, 18, 23)],
    // ['friday 11 in the evening', mk(2006, 8, 18, 23)],
    ['sunday 6am', mk(2006, 8, 20, 6)],
    ['friday evening at 7', mk(2006, 8, 18, 19)],
    // //year
    ['this year', mk(2006, 1, 1)],
    // //month name
    ['last november', mk(2005, 11, 1)],
    // //fortnight
    // ['this fortnight', mk(2006, 8, 21, 19, 30)],
    // ['this fortnight', mk(2006, 8, 14, 19)],
    // //week
    ['this week', mk(2006, 8, 14)],
    // //week
    // ['this weekend', mk(2006, 8, 20)],
    // ['this weekend', mk(2006, 8, 13)],
    // ['last weekend', mk(2006, 8, 13)],
    // //day
    // ['this day', mk(2006, 8, 16, 19)],
    ['today', mk(2006, 8, 16, 19)],
    ['yesterday', mk(2006, 8, 15, 12)],
    ['tomorrow', mk(2006, 8, 17, 12)],
    // //day name
    // ['this tuesday', mk(2006, 8, 22, 12),'rel-dayname'],
    // ['next tuesday', mk(2006, 8, 22, 12),'rel-dayname'],
    // ['last tuesday', mk(2006, 8, 15, 12),'rel-dayname'],
    // ['this wed', mk(2006, 8, 23, 12),'rel-dayname'],
    // ['next wed', mk(2006, 8, 23, 12),'rel-dayname'],
    // ['last wed', mk(2006, 8, 9, 12),'rel-dayname'],
    // //day portion
    // ['this morning', mk(2006, 8, 16, 9)],
    // ['tonight', mk(2006, 8, 16, 22)],
    // //hour
    // ['next hr', mk(2006, 8, 16, 15, 30, 0)],
    // ['next hrs', mk(2006, 8, 16, 15, 30, 0)],
    // //minute
    // ['next min', mk(2006, 8, 16, 14, 1, 30)],
    // ['next mins', mk(2006, 8, 16, 14, 1, 30)],
    // ['next minute', mk(2006, 8, 16, 14, 1, 30)],
    // //second
    // ['next sec', mk(2006, 8, 16, 14, 0, 1)],
    // ['next secs', mk(2006, 8, 16, 14, 0, 1)],
    // ['this second', mk(2006, 8, 16, 14)],
    // ['this second', mk(2006, 8, 16, 14)],
    // ['next second', mk(2006, 8, 16, 14, 0, 1)],
    // ['last second', mk(2006, 8, 16, 13, 59, 59)],
    // ['yesterday at 4:00', mk(2006, 8, 15, 16)],
    ['today at 9:00', mk(2006, 8, 16, 9)],
    // ['today at 2100', mk(2006, 8, 16, 21)],
    // ['this day at 0900', mk(2006, 8, 16, 9)],
    // ['tomorrow at 0900', mk(2006, 8, 17, 9)],
    // ['yesterday at 4:00', mk(2006, 8, 15, 4)],
    // ['last friday at 4:00', mk(2006, 8, 11, 16)],
    // ['next wed 4:00', mk(2006, 8, 23, 16)],
    // ['yesterday afternoon', mk(2006, 8, 15, 15)],
    // ['last week tuesday', mk(2006, 8, 8, 12)],
    ['tonight at 7', mk(2006, 8, 16, 19)],
    // ['tonight 7', mk(2006, 8, 16, 19)],
    // ['7 tonight', mk(2006, 8, 16, 19)],
    ['today at 6:00pm', mk(2006, 8, 16, 18)],
    ['today at 6:00am', mk(2006, 8, 16, 6)],
    // ['this day 1800', mk(2006, 8, 16, 18)],
    ['yesterday at 4:00pm', mk(2006, 8, 15, 16)],
    ['tomorrow evening at 7', mk(2006, 8, 17, 19)],
    ['tomorrow morning at 5:30', mk(2006, 8, 17, 5, 30)],
    // ['next monday at 12:01 am', mk(2006, 8, 21, 0, 1)],
    // ['next monday at 12:01 pm', mk(2006, 8, 21, 12, 1)],
    // //with context
    // ['sunday at 8:15pm', mk(2006, 8, 13, 20, 15)],
    // ['afternoon yesterday', mk(2006, 8, 15, 15)],
    // ['tuesday last week', mk(2006, 8, 8, 12)],
    // ['An hour ago', mk(2006, 8, 16, 13)],
    ['A day ago', mk(2006, 8, 15, 14)],
    ['a month ago', mk(2006, 7, 16, 14)],
    ['a year ago', mk(2005, 8, 16, 14)],
    // //past
    ['3 years ago', mk(2003, 8, 16, 14), 'ago'],
    ['1 month ago', mk(2006, 7, 16, 14), 'ago'],
    // ['1 fortnight ago', mk(2006, 8, 2, 14),'ago'],
    // ['2 fortnights ago', mk(2006, 7, 19, 14),'ago'],
    ['3 weeks ago', mk(2006, 7, 26, 14), 'ago'],
    // ['2 weekends ago', mk(2006, 8, 5), 'ago'],
    ['3 days ago', mk(2006, 8, 13, 14), 'ago'],
    // ['5 mornings ago', mk(2006, 8, 12, 9),'ago'],
    // ['7 hours ago', mk(2006, 8, 16, 7), 'ago'],
    // ['3 minutes ago', mk(2006, 8, 16, 13, 57), 'ago'],
    // ['20 seconds before now', mk(2006, 8, 16, 13, 59, 40),'ago'],
    // //future
    ['3 years from now', mk(2009, 8, 16, 14, 0, 0), 'from now'],
    // ['6 months hence', mk(2007, 2, 16, 14)],
    // ['3 fortnights hence', mk(2006, 9, 27, 14)],
    ['1 week from now', mk(2006, 8, 23, 14, 0, 0), 'from now'],
    // ['1 weekend from now', mk(2006, 8, 19)],
    // ['2 weekends from now', mk(2006, 8, 26)],
    // ['1 day hence', mk(2006, 8, 17, 14)],
    // ['5 mornings hence', mk(2006, 8, 21, 9)],
    ['1 hour from now', mk(2006, 8, 16, 15), 'from now'],
    // ['20 minutes hence', mk(2006, 8, 16, 14, 20)],
    ['20 seconds from now', mk(2006, 8, 16, 14, 0, 20), 'from now'],
    // ['2 months ago', mk(2007, 1, 7, 23, 30)],
    // //Two repeaters
    ['25 minutes and 20 seconds from now', mk(2006, 8, 16, 14, 25, 20), 'from now'],
    // ['24 hours and 20 minutes from now', mk(2006, 8, 17, 14, 20, 0), 'from now'],
    ['24 hours 20 minutes from now', mk(2006, 8, 17, 14, 20, 0), 'from now'],
    ['in 3 hours', mk(2006, 8, 16, 17), 'from now'],
    // //past
    // ['3 years ago tomorrow', mk(2003, 8, 17, 12)],
    // ['3 years ago this friday', mk(2003, 8, 18, 12)],
    // ['3 months ago saturday at 5:00 pm', mk(2006, 5, 19, 17)],
    // ['2 days from this second', mk(2006, 8, 18, 14)],
    // ['7 hours before tomorrow at midnight', mk(2006, 8, 17, 17)],
    // //future
    // ['september 3 years ago', mk(2003, 9)],
    // ['3rd month next year', mk(2007, 3)],
    // ['3rd month next year', mk(2007, 3, 1)],
    // ['3rd thursday this september', mk(2006, 9, 21, 12)],
    // ['3rd thursday this november', mk(2010, 11, 18, 12)],
    // ['4th day last week', mk(2006, 8, 9, 12)],

    // ['this spring', mk(2007, 3, 20),'year'],
    // ['this winter', mk(2006, 12, 22),'year'],
    // ['last spring', mk(2006, 3, 20),'year'],
    // ['last winter', mk(2005, 12, 22),'year'],
    // ['next spring', mk(2007, 3, 20),'year'],
    // ['this quarter', mk(2006, 7, 1),'year'],
    // ['next quarter', mk(2006, 10, 1),'year'],
    // ['last quarter', mk(2006, 4, 1),'year'],
    // ['1 quarter ago', mk(2006, 4, 1),'year'],
    // ['2 quarters ago', mk(2006, 1, 1),'year'],
    // ['1 quarter from now', mk(2006, 10, 1),'year'],
    // ['Q1', mk(2006, 1, 1),'year'],
    // ['first quarter', mk(2007, 1, 1),'year'],
    // ['1st quarter', mk(2006, 1, 1),'year'],
    // ['q1 2005', mk(2005, 1, 1),'year'],
    // ['2005 q1', mk(2005, 1, 1),'year'],
    // ['q1 this year', mk(2006, 1, 1),'year'],
    // ['this year q1', mk(2006, 1, 1),'q1'],
    // ['q1 next year', mk(2007, 1, 1),'q1'],
    // ['next year q1', mk(2007, 1, 1),'q1'],
    // ['this q1', mk(2006, 1, 1),'q1'],
    // ['last q1', mk(2006, 1, 1),'q1'],
    // ['next q1', mk(2007, 1, 1),'q1'],
    // ['#q2 2005', mk(2005, 4, 1),'q1'],
    // ['2005 q2', mk(2005, 4, 1),'q1'],
    // ['q2 this year', mk(2006, 4, 1),'q1'],
    // ['this year q2', mk(2006, 4, 1),'q1'],
    // ['q2 next year', mk(2007, 4, 1),'q1'],
    // ['next year q2', mk(2007, 4, 1),'q1'],
    // ['this q2', mk(2006, 4, 1),'q1'],
    // ['last q2', mk(2006, 4, 1),'q1'],
    // ['next q2', mk(2007, 4, 1),'q1'],
    ['Q4', mk(2006, 10, 1), 'q4 #1'],
    ['fourth quarter', mk(2006, 10, 1), 'q4 #2'],
    // ['4th quarter', mk(2005, 10, 1), 'q4'],
    ['4th quarter 2005', mk(2005, 10, 1), 'q4 #3'],
    // ['2005 4th quarter', mk(2005, 10, 1), 'q4'],
    // ['4th quarter this year', mk(2006, 10, 1), 'q4'],
    // ['this year 4th quarter', mk(2006, 10, 1), 'q4'],
    // ['4th quarter next year', mk(2007, 10, 1), 'q4'],
    // ['next year 4th quarter', mk(2007, 10, 1), 'q4'],
    // ['this 4th quarter', mk(2006, 10, 1), 'q4'],
    // ['last 4th quarter', mk(2005, 10, 1), 'q4'],
    // ['next 4th quarter', mk(2006, 10, 1), 'q4'],
    // ['1st thursday in november', mk(2007, 11, 1, 12), 'thurs tests'],
    // ['1st friday in november', mk(2007, 11, 2, 12), 'thurs tests'],
    // ['1st saturday in november', mk(2007, 11, 3, 12), 'thurs tests'],
    ['2011-01-01 at noon', mk(2011, 1, 1, 12, 0), 'thurs tests'],
    ['Thu Aug 10', mk(2006, 8, 10, 12), 'thurs tests'],
    // ['Thursday July 31', mk(2006, 7, 31, 12), 'thurs tests')//],
    ['Thursday December 31', mk(2006, 12, 31, 12), 'thurs tests'],
    ['Thu Aug 10 4pm', mk(2006, 8, 10, 16), 'thurs tests'],
    ['Thu Aug 10 at 4pm', mk(2006, 8, 10, 16), 'thurs tests'],
    ['Thu Aug 10th at 4pm', mk(2006, 8, 10, 16), 'thurs tests'],
    // ['Thu 17th at 4pm', mk(2006, 8, 17, 16), 'thurs tests'],
    // ['Thu 16th at 4pm', mk(2006, 8, 16, 16), 'thurs tests'],
    // ['Thu 1st at 4pm', mk(2006, 9, 1, 16), 'thurs tests'],
    // ['Thu 17th', mk(2006, 8, 17, 12), 'thurs tests'],
    ['Thu Aug 10 2006', mk(2006, 8, 10, 12), 'thurs tests'],
    ['Thursday July 31 2006', mk(2006, 7, 31, 12), 'thurs tests'],
    ['Thursday December 31 2006', mk(2006, 12, 31, 12), 'thurs tests'],
    ['Thursday December 30 2006', mk(2006, 12, 30, 12), 'thurs tests'],
    ['Thu Aug 10th', mk(2006, 8, 10, 12), 'thurs tests'],
    // ['Thursday July 31st', mk(2006, 7, 31, 12), 'thurs tests'],
    ['Thursday December 31st', mk(2006, 12, 31, 12), 'thurs tests'],
    ['Thu Aug 10th 2005', mk(2005, 8, 10, 12), 'thurs tests'],
    ['Thursday July 31st 2005', mk(2005, 7, 31, 12), 'thurs tests'],
    ['Thursday December 31st 2005', mk(2005, 12, 31, 12), 'thurs tests'],
    ['Thursday December 30th 2005', mk(2005, 12, 30, 12), 'thurs tests'],
  ]
  arr.forEach(a => {
    let found = nlp(a[0]).dates(context).json()[0] || {}
    let have = fmt(found.dates.start)
    t.equal(have, a[1], a[3] || a[0])
  })
  t.end()
})
