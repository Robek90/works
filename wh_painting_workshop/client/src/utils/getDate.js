export default function getCurrentDate(separator='.'){

  let newDate = new Date()
  let date = String(newDate.getDate()).padStart(2, '0');
  let month = String(newDate.getMonth() + 1);
  let year = newDate.getFullYear();
  
  return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
  }