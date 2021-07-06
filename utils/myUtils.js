const sortArray = (a, b) => (a > b ? 1 : -1);

const dateString = (() => {
  const today = new Date();

  const year = today.getFullYear();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const hours =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
  const seconds =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  const str = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
  return str;
})();

module.exports = { sortArray, dateString };
