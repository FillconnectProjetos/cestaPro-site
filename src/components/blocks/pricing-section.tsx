
import { Pricing } from "../ui/pricing";

export const PricingSectionWrapper = () => {
    return (
        <section id="precos" className="bg-neutral-50 py-16 md:py-24 border-t border-neutral-200">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-graphite">
                    Planos flexíveis para <span className="text-brand">todas as fases</span>
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Comece grátis, cresça com segurança e economize nos planos de longo prazo.
                </p>
            </div>

            <Pricing />
        </section>
    );
};
