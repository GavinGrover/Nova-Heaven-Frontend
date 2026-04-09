import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // Scroll to top if no hash
        if (hash === '') {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
        // Scroll to hash element
        else {
            // Small timeout to ensure DOM is ready
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToAnchor;
