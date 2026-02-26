import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { UtensilsCrossed, Star } from 'lucide-react';

export const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 40, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, damping: 15 }
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-12 bg-orange-500/5">
            {/* Playful Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 text-center"
            >
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <div className="bg-orange-500 text-white p-4 rounded-3xl shadow-xl rotate-3 flex items-center gap-2">
                        <UtensilsCrossed size={28} />
                        <span className="font-black text-sm uppercase tracking-widest">Lo mejor de la zona</span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight text-stone-900"
                >
                    ¡El sabor que te hace <span className="text-orange-500">feliz!</span> 🥟
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    Empanaditas recién hechas y almuerzos con ese toque casero que tanto te gusta. ¡Pide ahora y disfruta!
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                        ¡Ver el Menú! 😋
                    </Button>
                    <div className="flex items-center gap-2 text-stone-500 font-bold bg-white px-6 py-4 rounded-3xl shadow-sm border-2 border-orange-50">
                        <Star className="text-orange-500 fill-orange-500" size={20} />
                        <span>4.9 (500+ reseñas)</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
