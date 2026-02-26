import { motion } from 'framer-motion';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
}

interface MenuCardProps {
    item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="happy-card rounded-3xl overflow-hidden flex flex-col group font-sans"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-2xl text-lg font-black shadow-lg">
                    {item.price}
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-black mb-2 text-stone-900 group-hover:text-orange-600 transition-colors">
                    {item.name}
                </h3>
                <p className="text-stone-700 leading-snug flex-1">
                    {item.description}
                </p>
                <button className="mt-4 text-emerald-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    ¡Lo quiero! 🥟
                </button>
            </div>
        </motion.div>
    );
};
