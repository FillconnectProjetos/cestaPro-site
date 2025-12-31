
import { Section } from '../ui/section';
import { LayoutGrid, Calculator, Clock, CheckCircle } from 'lucide-react';

const benefits = [
    {
        icon: LayoutGrid,
        title: "Organização Profissional",
        description: "Centralize clientes, catálogo e pedidos. Sua empresa na palma da mão."
    },
    {
        icon: Calculator,
        title: "Precificação Inteligente",
        description: "Nunca mais tenha dúvida se está tendo lucro ou prejuízo."
    },
    {
        icon: Clock,
        title: "Produtividade Real",
        description: "Processos automatizados para você focar em vender e criar."
    },
    {
        icon: CheckCircle,
        title: "Zero Erros",
        description: "Alertas de entrega e checklist de itens para garantir a qualidade."
    }
];

export const Benefits = () => {
    return (
        <Section id="beneficios" className="bg-graphite text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-dark/10 to-transparent pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto px-4 relative z-10">
                <div>
                    <div className="inline-block px-3 py-1 bg-white/10 text-brand-light rounded-full text-xs font-semibold mb-6 tracking-wide uppercase border border-white/5">
                        Benefícios
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-neutral-100">
                        Por que escolher o <span className="text-brand">CestaPro+</span>?
                    </h2>
                    <p className="text-lg text-neutral-300 mb-10 font-light">
                        A ferramenta que substitui cadernos, planilhas complexas e a desorganização de forma definitiva.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex flex-col gap-3 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-video flex items-center justify-center shadow-2xl backdrop-blur-sm group hover:border-brand/30 transition-all duration-500">
                    <img
                        src="/assets/dashboard-preview.png"
                        alt="CestaPro+ Dashboard"
                        className="w-full h-full object-contain p-2 opacity-95 hover:opacity-100 transition-opacity duration-500 transform hover:scale-[1.02]"
                    />
                </div>
            </div>
        </Section>
    );
};
