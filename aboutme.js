"strict mode";

// !this is todays date :'D
const myDate = new Date(); // Returns the current date and time.
//Date Method:
// console.log(myDate);

const myformattedDate = new Intl.DateTimeFormat("en-NZ").format(myDate);
// console.log(`Looks like you also found todays the due date 😅 ${myformattedDate}`);

const options = {
  day: "numeric",
  month: "long",
  year: "2-digit", //only takes numeric and 2-digit
  timeZoneName: "short",
};

// options can be replaced so you can choose a specific option e.g. below

// !my birthday !!!!
const birthday = new Date("2002-09-18"); //or new Date("October 23, 2004")
// console.log("I was born on tis day...", birthday);
// console.log("My birthdate is on the:", birthday.getDate(), "🥳");

const mybirthdate = new Intl.DateTimeFormat("en-NZ", { day: "numeric" }).format(
  birthday,
);
const mybirthmonth = new Intl.DateTimeFormat("en-NZ", { month: "long" }).format(
  birthday,
);

console.log(
  `Looks like you found my birthday! Its on the ${mybirthdate}th of ${mybirthmonth} 🥳`,
);

const mybirthday1 = new Intl.DateTimeFormat("en-NZ", options).format(birthday);

function myFunction() {
  document.getElementById("demo").innerHTML =
    "If you inspect this page you can find my birthday 🙂";
}
