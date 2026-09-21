export function cn(...classes) {
  return classes
    .filter(Boolean)
    .join(" ");
}

export function scrollToSection(id) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}