import { siteContent } from '@/content/site';

/** wa.me link with a pre-filled message, so every WhatsApp trigger tells the team what the visitor wanted. */
export function whatsappLink(message = 'Hi 211 OVERSEAS, I would like to know more about studying or working abroad.') {
  return `${siteContent.brand.whatsapp}?text=${encodeURIComponent(message)}`;
}
