/* ELEVATE DIGITAL — CONTACT SETTINGS
   Before publishing, replace these two placeholders with your real business details.
   WhatsApp format: country code + number, digits only (no +, spaces or hyphens).
   Example format only: 9715XXXXXXXX
*/
const BUSINESS_EMAIL = "fibron85@gmail.com";
const WHATSAPP_NUMBER = "971558895749";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

const emailIsSet = () => BUSINESS_EMAIL && BUSINESS_EMAIL !== "hello@yourbusiness.com";
const whatsappIsSet = () => WHATSAPP_NUMBER && WHATSAPP_NUMBER !== "971500000000" && /^[0-9]{8,15}$/.test(WHATSAPP_NUMBER);
function enquiryMessage() {
  const form = document.getElementById("contactForm");
  if (!form.reportValidity()) return null;
  const data = new FormData(form);
  return `Hello Elevate Digital,\n\nI'd like to enquire about your services.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\nGoals: ${data.get("message") || "Not specified"}\n\nPlease contact me to discuss the next steps.`;
}
function status(message) { document.getElementById("formNote").textContent = message; }
function sendWhatsApp(message) {
  if (!whatsappIsSet()) { status("Setup needed: replace WHATSAPP_NUMBER in script.js with your real business WhatsApp number, including country code and digits only."); return; }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
document.getElementById("whatsappLink").addEventListener("click", event => {
  event.preventDefault();
  sendWhatsApp("Hello Elevate Digital, I'd like to discuss digital marketing services for my business.");
});
document.getElementById("emailLink").addEventListener("click", event => {
  event.preventDefault();
  if (!emailIsSet()) { status("Setup needed: replace BUSINESS_EMAIL in script.js with your real business email before launch."); return; }
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Digital marketing enquiry — Elevate Digital")}`;
});
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const message = enquiryMessage(); if (!message) return;
  if (!emailIsSet()) { status("Setup needed: replace BUSINESS_EMAIL in script.js with your real business email. You can also use WhatsApp after setting your number."); return; }
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("New project enquiry — Elevate Digital")}&body=${encodeURIComponent(message)}`;
});
document.getElementById("whatsappForm");
