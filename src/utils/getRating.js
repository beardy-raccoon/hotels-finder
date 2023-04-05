export default function getRating(hotel) {
  let result = [];
  let counter = hotel.stars;
  for(let i = 0; i < 5; i++) {
    counter > 0 ? result.push(1) : result.push('');
    counter-=1;
  }
  return result;
}