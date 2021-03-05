const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (dateString) => {
  let date = dateString.split("-");
  let year = date[0];
  let monthIndex = parseInt(date[1]) - 1;
  let month = months[monthIndex];
  let day = date[2];
  return `${month} ${day}, ${year}`;
};

export default formatDate;
