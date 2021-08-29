export function formatReal(number: number) {
  let numberString = `${number}`;
  numberString = numberString.replace(/([0-9]{2})$/g, ',$1');
  if (numberString.length > 6)
    numberString = numberString.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');

  return `R$ ${numberString}`;
}
