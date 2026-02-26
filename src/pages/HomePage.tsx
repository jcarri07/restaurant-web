import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/organisms/Hero';
import { PromotionsCarousel } from '../components/organisms/PromotionsCarousel';
import { DigitalMenu } from '../components/organisms/DigitalMenu';
import { Services } from '../components/organisms/Services';
import { useQRDetection } from '../hooks/useQRDetection';

const HomePage = () => {
    const { isQRSource } = useQRDetection();

    return (
        <div className="relative">
            <AnimatePresence>
                {isQRSource && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-2xl border-2 border-slate-950"
                    >
                        ✨ ¡Bienvenido! Descubre nuestra carta digital
                    </motion.div>
                )}
            </AnimatePresence>

            <Hero />
            <PromotionsCarousel />
            <DigitalMenu />
            <Services />

            <footer className="py-12 border-t border-slate-800 text-center text-slate-500">
                <p>&copy; 2024 Modern Restaurant SPA. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default HomePage;
