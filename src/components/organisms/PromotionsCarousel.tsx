import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const PROMOTIONS = [
    {
        id: 1,
        title: "Martes de Convite",
        subtitle: "Lleva 10 empanadas y te regalamos 2 más",
        image: "https://images.unsplash.com/photo-1628102422230-6831d1024226?q=80&w=2070&auto=format&fit=crop",
        discount: "12x10"
    },
    {
        id: 2,
        title: "Almuerzo Amigo",
        subtitle: "Si vienes con 3 amigos, ¡tú almuerzo va por la casa!",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
        discount: "4x3 ALMUERZOS"
    },
    {
        id: 3,
        title: "Sábado de Sancocho",
        subtitle: "El sancocho más pedido con jarra de jugo gratis",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
        discount: "REGALO ESPECIAL"
    }
];

export const PromotionsCarousel = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="rounded-[2.5rem] overflow-hidden h-[450px] md:h-[550px] shadow-2xl border-4 border-white"
                >
                    {PROMOTIONS.map((promo) => (
                        <SwiperSlide key={promo.id}>
                            <div className="relative w-full h-full group">
                                <img
                                    src={promo.image}
                                    alt={promo.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-600/20 to-transparent">
                                    <div className="absolute bottom-20 left-8 md:left-20 max-w-2xl px-4">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            className="inline-block bg-white text-orange-600 px-6 py-2 rounded-2xl text-lg font-black mb-8 shadow-xl -rotate-2"
                                        >
                                            {promo.discount}
                                        </motion.div>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-md leading-[1.1]"
                                        >
                                            {promo.title}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="text-white/95 text-lg md:text-2xl font-bold leading-normal"
                                        >
                                            {promo.subtitle}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
