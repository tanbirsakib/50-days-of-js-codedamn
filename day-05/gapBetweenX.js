const str = 'XeroX';

function getTheGapX(str) {
   const firstIndexOf__X = str.indexOf('X');
   const lastIndexOf__X = str.lastIndexOf('X');
   if(firstIndexOf__X === -1) {
       return -1;
   }
   const gapBetween__X = lastIndexOf__X - firstIndexOf__X; 

    return gapBetween__X
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
