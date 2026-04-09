import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();

  const whatsappNumber = '919363590700';
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl transition-shadow">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block">
        <div className="bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
