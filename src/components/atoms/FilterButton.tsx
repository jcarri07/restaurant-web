import { motion } from 'framer-motion';

interface FilterButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            onClick={onClick}
            className={`px-6 py-2 rounded-xl transition-all duration-200 font-bold ${isActive
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/40'
                    : 'bg-white text-stone-500 border-2 border-orange-100 hover:border-orange-500 hover:text-orange-500'
                }`}
        >
            {label}
        </motion.button>
    );
};
