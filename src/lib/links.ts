export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function whatsappHref(
  phone: string,
  message = "Bonjour, je vous contacte depuis le site de L’Authentique.",
) {
  const number = phone.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
