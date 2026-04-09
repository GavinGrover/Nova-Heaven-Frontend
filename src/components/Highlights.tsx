import React from 'react';
import { motion } from 'framer-motion';
import { Home, PartyPopper, Droplets, TreePine } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const highlights = [
  {
    icon: Home,
    titleKey: 'highlights.accommodation.title',
    descKey: 'highlights.accommodation.desc',
    gradient: 'from-terracotta to-terracotta-light',
  },
  {
    icon: PartyPopper,
    titleKey: 'highlights.events.title',
    descKey: 'highlights.events.desc',
    gradient: 'from-earth-green to-earth-green-light',
  },
  {
    icon: Droplets,
    titleKey: 'highlights.well.title',
    descKey: 'highlights.well.desc',
    gradient: 'from-blue-500 to-blue-400',
  },
  {
    icon: TreePine,
    titleKey: 'highlights.peaceful.title',
    descKey: 'highlights.peaceful.desc',
    gradient: 'from-secondary to-accent',
  },
];

const Highlights: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            {t('highlights.title')}
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${highlight.gradient} mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {t(highlight.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(highlight.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
