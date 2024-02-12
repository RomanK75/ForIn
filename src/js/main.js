export default function orderByProps(object, order) {
  const sorted = [];

  for (const key of order) {
    if (key in object) {
      sorted.push({ key, value: object[key] });
    }
  }
  const rest = Object.keys(object).filter((key) => !order.includes(key));
  rest.sort().forEach((key) => {
    sorted.push({ key, value: object[key] });
  });
  return sorted;
}
