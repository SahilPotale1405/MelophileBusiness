import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/919322210102?text=Hello%20Melophile%2C%20I%20would%20like%20to%20know%20about%20music%20classes"
      target="_blank"
      rel="noreferrer"
    >
      <span>◉</span>
      WhatsApp
    </a>
  );
}

export default WhatsAppButton;