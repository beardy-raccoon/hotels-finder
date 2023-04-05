import { BASE_URL } from "./consts";

export default async function mainApi(query) {

  const { city, checkinDate, checkoutDate } = query;
  const url = `${BASE_URL}location=${city}&currency=rub&checkIn=${checkinDate}&checkOut=${checkoutDate}&limit=30`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res);
      }
      return res.json();
    })
    .catch(error => {
      console.error("Request failed:", error);
      return null;
    });
}
