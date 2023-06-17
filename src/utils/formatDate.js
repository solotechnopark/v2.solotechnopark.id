export function formatDate(originalDate) {
  const formattedDate = new Date(originalDate).toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return formattedDate; // Output: 17 Juni 2023 17:29
}
