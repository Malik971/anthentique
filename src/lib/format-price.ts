export function formatPrice(price: number | undefined, currency = "EUR") {
  if (price === undefined) return null;
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency }).format(price);
}
