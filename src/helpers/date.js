import moment from "moment";

export default function formatDate(date, pattern = "Do MMMM YYYY HH:mm") {
  return moment(date).format(pattern);
}
