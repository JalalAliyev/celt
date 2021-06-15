export const useNavigate = (str, isVisible) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      result += str[i].toUpperCase();
    } else if (str[i] === '-') {
      result += ' ';
      result += str[i + 1].toUpperCase();
      i++;
    } else {
      result += str[i];
    }
  }

  return result;
};
