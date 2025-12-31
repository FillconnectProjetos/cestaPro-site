
import { Section } from '../ui/section';
import { Heart, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const audiences = [
    {
        icon: Heart,
        title: "Empreendedoras Apaixonadas",
        description: "Que querem profissionalizar o negócio sem perder a essência do carinho em cada entrega."
    },
    {
        icon: TrendingUp,
        title: "Focadas em Crescimento",
        description: "Quem busca escalar vendas e precisa de processos organizados para não enlouquecer."
    },
    {
        icon: ShieldCheck,
        title: "Quem busca Segurança",
        description: "Para quem quer ter controle total do financeiro e do estoque, sem surpresas no fim do mês."
    }
];

export const Audience = () => {
    return (
        <Section className="bg-white relative">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-graphite">
                    Para quem foi feito o <span className="text-brand">CestaPro+</span>?
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Uma ferramenta séria para quem leva o trabalho com cestas a sério.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {audiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="group relative p-8 rounded-2xl bg-white border border-neutral-100 shadow-soft hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="w-14 h-14 bg-brand-light/30 rounded-xl flex items-center justify-center mb-6 text-brand group-hover:text-white group-hover:bg-brand transition-all duration-300">
                            <item.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-graphite group-hover:text-brand-dark transition-colors">{item.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
