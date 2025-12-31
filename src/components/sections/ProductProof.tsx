
import { Section } from '../ui/section';
import { Check } from 'lucide-react';

export const ProductProof = () => {
    return (
        <Section className="bg-neutral-900 text-white overflow-hidden py-16 md:py-24 border-t border-white/5">
            <div className="text-center mb-16 px-4 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-100">
                    Interface <span className="text-brand">Limpa e Poderosa</span>
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light text-center">
                    Desenvolvemos o CestaPro+ para ser intuitivo. Toda a complexidade acontece nos bastidores.
                </p>
            </div>

            {/* Mockup Container */}
            <div className="relative max-w-5xl mx-auto px-4">
                <div className="rounded-xl bg-neutral-800 p-2 md:p-3 shadow-2xl ring-1 ring-white/10 group">
                    <div className="rounded-lg bg-neutral-900 overflow-hidden aspect-video relative flex items-center justify-center">
                        <img
                            src="/assets/financeiro-preview.png"
                            alt="Interface Financeira CestaPro+"
                            className="w-full h-full object-contain p-0.5"
                            loading="eager"
                            style={{
                                imageRendering: '-webkit-optimize-contrast',
                                transform: 'translateZ(0)' // Force GPU to avoid subpixel jitter
                            }}
                        />
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        "Controle automático de estoque",
                        "Fichas técnicas detalhadas",
                        "Acesso em qualquer dispositivo"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm font-medium text-neutral-200">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
