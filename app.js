const moment = require('moment');

const today = moment();
console.log(today.format());
console.log(today.format());

console.log(moment("2020-01-01", "YYYY-MM-DD").isValid()); // true
console.log(moment("not-sdfsfsdfsdfsdfsdfsfa-date", "YYYY-MM-DD").isValid()); // false

console.log(
    moment("2019 was a great year because I got married", "YYYY-MM-DD").isValid()
  );
  // Returns true because 2019 matches YYYY

moment().add(7, 'days');    // adds 7 days to current date
moment().add(7, 'months');  // adds 7 months to current date
moment().add(7, 'years');   // adds 7 years to current date

