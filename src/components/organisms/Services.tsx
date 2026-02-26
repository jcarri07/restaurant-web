import { motion } from 'framer-motion';
import { ShoppingBag, Truck, Users } from 'lucide-react';
import { ServiceCard } from '../molecules/ServiceCard';

const SERVICES = [
    {
        title: "Para Llevar",
        description: "Pide por WhatsApp y recoge en tienda caliente y listo. ¡Sin esperas!",
        icon: <ShoppingBag size={32} />
    },
    {
        title: "Domicilios",
        description: "Llegamos a tu oficina o casa con tus almuerzos y empanadas favoritas.",
        icon: <Truck size={32} />
    },
    {
        title: "Reuniones",
        description: "¿Tienes un evento? Nuestras bandejas de empanadas son el alma de la fiesta.",
        icon: <Users size={32} />
    }
];

export const Services = () => {
    return (
        <section id="servicios" className="py-24 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-stone-900">¿Cómo <span className="text-orange-500">disfrutarlo?</span></h2>
                    <p className="text-stone-500 max-w-xl mx-auto font-bold">Te lo ponemos fácil para que nunca te falte ese saborcito criollo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            viewport={{ once: true }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
