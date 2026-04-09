import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Users, TreeDeciduous } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import exteriorImage from '@/assets/images/exterior-main.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="max-w-7xl mx-auto flex flex-col gap-10"
        >
          {/* 1. Header Section */}
          <div className="grid md:grid-cols-2 gap-8 items-end border-b border-primary/10 pb-8">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
                <Heart className="w-4 h-4 fill-primary/20" />
                {t('nav.about')}
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                About <br />
                <span className="text-primary italic">NovaHeaven</span>
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="md:pb-2">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t('about.description')}
              </p>
            </motion.div>
          </div>

          {/* 2. Main Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

            {/* Card A: Our Story (Span 2) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[400px]"
            >
              <div className="absolute inset-0">
                <img
                  src={exteriorImage}
                  alt="NovaHeaven Exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">
                <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-4 border border-white/10 text-white">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-display text-4xl text-white mb-3 shadow-sm">
                  {t('about.title')}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                  {t('about.description').split('.')[0]}. {/* Reusing first sentence as summary */}
                </p>
              </div>
            </motion.div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-6">

              {/* Card B: Our Philosophy (Green) */}
              <motion.div
                variants={itemVariants}
                className="flex-1 bg-secondary rounded-3xl p-8 relative overflow-hidden shadow-lg group hover:bg-secondary/90 transition-colors"
              >
                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="p-3 bg-white/10 w-fit rounded-xl mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-white mb-2">Our Philosophy</h4>
                    <p className="text-white/90 leading-relaxed">
                      {t('about.highlight1')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card C: Our Commitment (Terracotta) */}
              <motion.div
                variants={itemVariants}
                className="flex-1 bg-primary rounded-3xl p-8 relative overflow-hidden shadow-lg group hover:bg-primary/90 transition-colors"
              >
                <div className="absolute bottom-0 left-0 p-32 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="p-3 bg-white/10 w-fit rounded-xl mb-4">
                    <TreeDeciduous className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-white mb-2">Our Commitment</h4>
                    <p className="text-white/90 leading-relaxed">
                      {t('about.highlight2')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3. Footer Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-8 rounded-2xl bg-muted/50 border border-muted"
          >
            <p className="font-medium text-foreground/70 uppercase tracking-widest text-sm">
              Backed by tradition, designed for comfort
            </p>
            <div className="flex gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Concept Icons representing "Values" */}
              <div className="flex items-center gap-2" title="Heritage">
                <Home className="w-5 h-5" />
                <span className="text-xs font-semibold hidden md:inline">HERITAGE</span>
              </div>
              <div className="flex items-center gap-2" title="Nature">
                <TreeDeciduous className="w-5 h-5" />
                <span className="text-xs font-semibold hidden md:inline">NATURE</span>
              </div>
              <div className="flex items-center gap-2" title="Community">
                <Users className="w-5 h-5" />
                <span className="text-xs font-semibold hidden md:inline">COMMUNITY</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


export default About;
