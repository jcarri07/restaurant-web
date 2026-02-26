import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(251, 191, 36, 0.05)"
            }}
            className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col gap-4 text-center items-center group cursor-pointer"
        >
            <div className="p-4 rounded-2xl bg-slate-900 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};
