import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterButton } from '../atoms/FilterButton';
import { MenuCard } from '../molecules/MenuCard';
import empanada1 from '../../assets/empanada1.avif';
import empanada2 from '../../assets/empanada2.webp';

const MENU_ITEMS = [
    {
        id: 1,
        name: "Empanada de Carne",
        description: "Carne picadita, cebollín y especias secretas. ¡La favorita!",
        price: "$2.50",
        image: empanada1,
        category: "Empanadas"
    },
    {
        id: 2,
        name: "Almuerzo Ejecutivo",
        description: "Plato del día: Proteína, arroz, frijoles, ensalada y jugo natural.",
        price: "$10.00",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
        category: "Almuerzos"
    },
    {
        id: 3,
        name: "Sancocho de Gallina",
        description: "El de mamá, con todo el sabor criollo. Acompañado de arroz y aguacate.",
        price: "$12.00",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
        category: "Almuerzos"
    },
    {
        id: 4,
        name: "Combo Familiar (12)",
        description: "Docena de empanadas variadas + Gaseosa grande para compartir.",
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=2070&auto=format&fit=crop",
        category: "Combos"
    },
    {
        id: 5,
        name: "Empanada de Queso",
        description: "Muuucho queso derretido. Simplemente deliciosa.",
        price: "$2.00",
        image: empanada2,
        category: "Empanadas"
    },
    {
        id: 6,
        name: "Jugo de Lulo Natural",
        description: "Refrescante y recién hecho. 100% fruta natural.",
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1974&auto=format&fit=crop",
        category: "Bebidas"
    }
];

const CATEGORIES = ["Todos", "Empanadas", "Almuerzos", "Bebidas", "Combos"];

export const DigitalMenu = () => {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredItems = activeCategory === "Todos"
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-24 bg-white/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-black text-sm mb-4 uppercase tracking-widest"
                    >
                        Nuestra Carta
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-stone-900">
                        ¡Para chuparse los <span className="text-orange-500">dedos!</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {CATEGORIES.map(cat => (
                            <FilterButton
                                key={cat}
                                label={cat}
                                isActive={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
