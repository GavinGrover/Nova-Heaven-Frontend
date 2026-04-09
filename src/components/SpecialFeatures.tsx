import React from 'react';
import { Home, PartyPopper, Droplets, TreePine, Wifi, Wind, Bed, Music, Users, Calendar, Cloud, Sun, Moon, Star } from 'lucide-react';
import styles from './SpecialFeatures.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeatureCardProps {
    title: string;
    text: string;
    icon: React.ReactNode;
    amenityIcons: React.ReactNode[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, text, icon, amenityIcons }) => {
    return (
        <div className={styles.parent}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <span className={`${styles.circle} ${styles.circle1}`}></span>
                    <span className={`${styles.circle} ${styles.circle2}`}></span>
                    <span className={`${styles.circle} ${styles.circle3}`}></span>
                    <span className={`${styles.circle} ${styles.circle4}`}></span>
                    <span className={`${styles.circle} ${styles.circle5}`}>
                        {icon}
                    </span>
                </div>
                <div className={styles.glass}></div>
                <div className={styles.content}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.text}>{text}</span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.socialButtonsContainer}>
                        {amenityIcons.map((icon, index) => (
                            <div key={index} className={styles.socialIcon}>
                                {icon}
                            </div>
                        ))}
                    </div>
                    <div className={styles.viewMore}>
                        {/* View More button is decorative in this context */}
                        <button className={styles.viewMoreButton}>Discover</button>
                        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SpecialFeatures: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('highlights.accommodation.title'),
            text: t('highlights.accommodation.desc'),
            icon: <Home className="w-6 h-6" />,
            amenityIcons: [
                <Bed className="w-4 h-4" />,
                <Wifi className="w-4 h-4" />,
                <Wind className="w-4 h-4" />
            ]
        },
        {
            title: t('highlights.events.title'),
            text: t('highlights.events.desc'),
            icon: <PartyPopper className="w-6 h-6" />,
            amenityIcons: [
                <Users className="w-4 h-4" />,
                <Music className="w-4 h-4" />,
                <Calendar className="w-4 h-4" />
            ]
        },
        {
            title: t('highlights.well.title'),
            text: t('highlights.well.desc'),
            icon: <Droplets className="w-6 h-6" />,
            amenityIcons: [
                <Cloud className="w-4 h-4" />,
                <Sun className="w-4 h-4" />,
                <TreePine className="w-4 h-4" />
            ]
        },
        {
            title: t('highlights.peaceful.title'),
            text: t('highlights.peaceful.desc'),
            icon: <TreePine className="w-6 h-6" />,
            amenityIcons: [
                <Moon className="w-4 h-4" />,
                <Star className="w-4 h-4" />,
                <Wind className="w-4 h-4" />
            ]
        }
    ];

    return (
        <section id="special" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                        {t('highlights.title')}
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        A unique blend of history, nature, and authentic hospitality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-center items-center">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            text={feature.text}
                            icon={feature.icon}
                            amenityIcons={feature.amenityIcons}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialFeatures;
