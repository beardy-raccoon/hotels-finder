export default function getCheckoutDate(dateStr, numDays) {

  const date = new Date(dateStr);
  date.setDate(date.getDate() + parseInt(numDays));
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
