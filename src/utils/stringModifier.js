export default function modifyString(num, str) {
  if (num % 10 === 1 && num % 100 !== 11) {
    return  str === 'день' ? `${num} день` : `${num} отель`;
  } else if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num % 100)) {
    return str === 'день' ? `${num} дня` : `${num} отеля`;
  } else {
    return str === 'день' ? `${num} дней` : `${num} отелей`;
  }
}
