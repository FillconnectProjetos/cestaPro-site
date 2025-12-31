
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Gratuito",
        price: "R$ 0",
        period: "/sempre",
        description: "Para dar os primeiros passos.",
        features: ["Até 5 produtos", "Gestão de pedidos básica", "Relatório simples"],
        cta: "Começar Grátis",
        variant: "outline"
    },
    {
        name: "Mensal",
        price: "R$ 49,90",
        period: "/mês",
        description: "Flexibilidade total para você.",
        features: ["Produtos ilimitados", "Gestão financeira", "Suporte WhatsApp"],
        cta: "Assinar Mensal",
        variant: "secondary"
    },
    {
        name: "Trimestral",
        price: "R$ 134,70",
        period: "/3 meses",
        description: "Economize 10% no total.",
        features: ["Tudo do mensal", "Economia garantida", "Prioridade no suporte"],
        cta: "Assinar Trimestral",
        variant: "secondary"
    },
    {
        name: "Semestral",
        price: "R$ 239,50",
        period: "/6 meses",
        description: "Mais tempo para focar.",
        savings: "Economize 20%",
        features: ["Tudo do mensal", "Consultoria inicial (30min)", "Badge Pro no perfil"],
        cta: "Assinar Semestral",
        variant: "secondary"
    },
    {
        name: "Anual",
        price: "R$ 419,90",
        period: "/ano",
        description: "A melhor decisão para o seu negócio.",
        savings: "Economize 30%",
        features: ["Acesso vitalício aos cursos", "Consultoria completa (1h)", "Mentoria em grupo"],
        cta: "Assinar Anual",
        variant: "primary",
        highlight: true
    }
];

export const Pricing = () => {
    return (
        <Section id="precos" className="bg-neutral-50 border-t border-neutral-200">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-graphite">
                    Planos flexíveis para <span className="text-brand">todas as fases</span>
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Comece grátis, cresça com segurança e economize nos planos de longo prazo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4 items-start">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`
                relative rounded-2xl p-6 flex flex-col h-full border transition-all duration-300
                ${plan.highlight
                                ? 'bg-white border-brand shadow-xl scale-105 z-10 ring-4 ring-brand/10'
                                : 'bg-white border-neutral-200 hover:border-brand-light shadow-sm'
                            }
            `}
                    >
                        {plan.savings && (
                            <div className={`
                    absolute top-0 right-0 left-0 text-center text-[10px] font-bold py-1.5 uppercase tracking-wider rounded-t-xl
                    ${plan.highlight ? 'bg-brand text-white' : 'bg-green-100 text-green-700'}
                `}>
                                {plan.savings}
                            </div>
                        )}

                        <div className={`mb-6 ${plan.savings ? 'mt-4' : ''}`}>
                            <h3 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-brand' : 'text-graphite'}`}>{plan.name}</h3>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-graphite">{plan.price}</span>
                                <span className="text-xs text-neutral-500">{plan.period}</span>
                            </div>
                            <p className="text-xs text-neutral-500 mt-3 h-8">{plan.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                    <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-brand' : 'text-neutral-400'}`} />
                                    <span className="leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            // @ts-ignore
                            variant={plan.variant}
                            className={`w-full text-sm font-semibold ${plan.highlight ? 'bg-brand hover:bg-brand-dark shadow-brand/20 shadow-lg' : ''}`}
                        >
                            {plan.cta}
                        </Button>

                        {plan.highlight && (
                            <p className="text-center text-[10px] text-neutral-400 mt-3">
                                Parcelamento em até 12x
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full text-neutral-600 text-sm shadow-sm">
                    <Info className="w-4 h-4 text-brand" />
                    7 dias de garantia incondicional em todos os planos pagos.
                </div>
            </div>
        </Section>
    );
};
