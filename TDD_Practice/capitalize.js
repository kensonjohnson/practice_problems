export function capitalize(string) {
  if (typeof string !== "string") return null;
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}
