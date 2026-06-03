const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#estimate-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Estimate request: ${data.get("service")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Service: ${data.get("service")}`,
    "",
    "Project details:",
    data.get("message"),
  ].join("\n");

  window.location.href = `mailto:info@fixwithcare.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
