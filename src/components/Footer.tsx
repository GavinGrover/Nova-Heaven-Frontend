import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
            {language === 'en' ? 'NovaHeaven' : 'நோவாஹீவன்'}
          </h3>

          {/* Tagline */}
          <p className="text-background/70 mb-6">
            {t('footer.tagline')}
          </p>

          {/* Contact */}
          <p className="text-background/80 mb-8">
            {t('contact.phone')}
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-background/20 mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-background/60 text-sm flex flex-col items-center justify-center gap-2">
            <span className="flex items-center gap-1">
              © {currentYear} NovaHeaven. {t('footer.rights')}.
              <span className="mx-1">Made with</span>
              <Heart className="w-4 h-4 text-primary inline fill-primary" />
            </span>
            <span className="text-background/40 text-xs">
              {t('footer.devBy')}
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
