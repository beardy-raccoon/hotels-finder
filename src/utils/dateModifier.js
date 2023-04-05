export default function modifyDate(date, lang) {
    let months;
    if (lang === 'ru') {
      months = [
        "января", "февраля", "марта", "апреля",
        "мая", "июня", "июля", "августа",
        "сентября", "октября", "ноября", "декабря"
      ];
    } else {
      months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
    }

    const dateArr = date.split("-");
    const year = dateArr[0];
    const month = months[dateArr[1] - 1];
    const day = (dateArr[2]);
    let formatMonth;
    if (lang === 'en') {
      formatMonth = `${month},`;
    } else {
      formatMonth = `${month}`;
    }


    return `${day} ${formatMonth} ${year}`;
  }
