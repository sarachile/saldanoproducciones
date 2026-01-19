import Image from 'next/image';
import Link from 'next/link';

export default function WhatsAppButton() {
  const phoneNumber = "56993382819";
  const message = "Hola quiero cotizar un evento";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 h-[60px] w-[60px] rounded-full bg-[#25D366] p-3 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whattsap.png"
        alt="WhatsApp"
        width={40}
        height={40}
        className="object-contain"
      />
    </Link>
  );
}
