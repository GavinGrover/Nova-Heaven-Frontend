import React from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from '@/components/ui/PillNav';
import { useLanguage } from '@/contexts/LanguageContext';
import dayaInfraaLogo from '@/assets/images/daya-infraa-logo.png';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeHref, setActiveHref] = React.useState('/');

  React.useEffect(() => {
    setActiveHref(location.pathname + location.hash);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          logo={dayaInfraaLogo}
          logoAlt="NovaHeaven Logo"
          items={[
            { label: t('nav.home'), href: '/' },
            { label: t('nav.about'), href: '/#about' },
            { label: t('nav.gallery'), href: '/#gallery' },
            { label: t('nav.location'), href: '/#contact' },
            { label: t('nav.contact'), href: '/#contact' }
          ]}
          activeHref={activeHref}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="hsl(28, 35%, 25%)"
          pillColor="hsl(39, 45%, 96%)"
          hoveredPillTextColor="hsl(12, 65%, 45%)"
          pillTextColor="hsl(28, 35%, 25%)"
          initialLoadAnimation={true}
        />
      </div>
    </div>
  );
};

export default Header;
