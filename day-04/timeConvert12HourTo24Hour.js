// const time = '12:10AM';

// function convertTo24HrsFormat(time) {
//     // write your solution here

//     return
// }

// console.log(`Converted time: ${convertTo24HrsFormat(time)}`)


const time = '05:00 PM';
const convertTo24HrsFormat = time => {
   const [timeString, modifier] = time.split(' ');
   let [hours, minutes] = timeString.split(':');
   if (hours === '12') {
      hours = '00';
   }
   if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
   }
   return `${hours}:${minutes}`;
};
console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
