
import { Section } from '../ui/section';
import { PackagePlus, ClipboardList, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: PackagePlus,
        title: "1. Cadastre seus Produtos",
        description: "Crie fichas técnicas completas, defina custos e preços de venda com precisão.",
    },
    {
        icon: ClipboardList,
        title: "2. Centralize Pedidos",
        description: "Receba e organize pedidos em um painel único. Nada de papel ou planilhas soltas.",
    },
    {
        icon: PieChart,
        title: "3. Acompanhe o Lucro",
        description: "Visualize relatórios automáticos e saiba exatamente quanto sua empresa está faturando.",
    }
];

export const HowItWorks = () => {
    return (
        <Section id="como-funciona" className="bg-neutral-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3B3F46_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="text-center mb-16 relative z-10 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-graphite">
                    Gestão simplificada em <span className="text-brand">3 passos</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 px-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="group relative flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-soft border border-neutral-100 hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="w-14 h-14 bg-brand-light/30 rounded-xl flex items-center justify-center mb-6 relative text-brand group-hover:text-white group-hover:bg-brand transition-all duration-300">
                            <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand text-white font-bold text-xs rounded-full flex items-center justify-center border-2 border-white shadow-sm group-hover:border-brand-light transition-colors duration-300">
                                {index + 1}
                            </span>
                            <step.icon className="w-7 h-7 transition-colors duration-300" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-graphite group-hover:text-brand-dark transition-colors">{step.title.split('. ')[1]}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
