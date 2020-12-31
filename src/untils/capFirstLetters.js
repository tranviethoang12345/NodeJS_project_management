// capitalizes the first letter of every word in a phrase
export const capFirstLetters = phrase => {
  return phrase
  .toLowerCase()
  .split(' ')
  .map(e => e.charAt(0).toUpperCase() + e.substring(1))
  .join(' ');
} 
