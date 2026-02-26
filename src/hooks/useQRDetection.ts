import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useQRDetection = () => {
    const location = useLocation();
    const [isQRSource, setIsQRSource] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('source') === 'qr') {
            setIsQRSource(true);

            // Smooth scroll to menu after a short delay for animations
            setTimeout(() => {
                const menuElement = document.getElementById('menu');
                if (menuElement) {
                    menuElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 1500);
        }
    }, [location]);

    return { isQRSource };
};
