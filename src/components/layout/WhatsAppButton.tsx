import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919167370622';
  const message = 'Hello! I would like to know more about SFIT admissions.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline text-sm font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
