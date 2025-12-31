"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import NumberFlow from "@number-flow/react";
import { useMediaQuery } from "../../hooks/use-media-query";

type PlanDuration = "mensal" | "mensal_cupom" | "trimestral" | "semestral" | "anual";

interface PricingState {
    total: number;
    monthly: number;
    label: string;
    description: string;
    buttonText: string;
}

const PRICING_DATA: Record<PlanDuration, PricingState> = {
    mensal: {
        total: 89.90,
        monthly: 89.90,
        label: "Mensal",
        description: "Assine mensalmente e cancele quando quiser.",
        buttonText: "Escolher Mensal"
    },
    mensal_cupom: {
        total: 80.91,
        monthly: 80.91,
        label: "Mensal + Cupom",
        description: "Ganhe 10% de desconto no seu primeiro mês.",
        buttonText: "Quero 10% OFF"
    },
    trimestral: {
        total: 242.70,
        monthly: 80.90,
        label: "Trimestral",
        description: "Economize 1 mês no ano: sua mensalidade sai por R$ 80,90.",
        buttonText: "Economizar Agora"
    },
    semestral: {
        total: 458.50,
        monthly: 76.41,
        label: "Semestral",
        description: "Sua mensalidade sai por apenas R$ 76,41.",
        buttonText: "Escolher Semestral"
    },
    anual: {
        total: 838.80,
        monthly: 69.90,
        label: "Anual",
        description: "O melhor custo-benefício. Apenas R$ 69,90/mês.",
        buttonText: "Assinar Anual"
    }
};

const DURATION_OPTIONS: PlanDuration[] = [
    "mensal",
    "mensal_cupom",
    "trimestral",
    "semestral",
    "anual"
];

const FEATURES = [
    "Acesso completo ao sistema",
    "Produtos ilimitados",
    "Relatórios financeiros",
    "Suporte VIP via WhatsApp"
];

export function Pricing() {
    const [selectedDuration, setSelectedDuration] = useState<PlanDuration>("anual");
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const handleConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8B7CF6', '#6F5CC2', '#ffffff']
        });
    };

    // Construct the 3 logical cards based on selection
    // Card 0: The specific plan selected by the user (Left)
    // Card 1: The Recommended Anual plan (Center, highlighted)
    // Card 2: The Semestral plan (Right, as alternative)

    // If Anual is selected, we show Anual on left? No, duplicate logic.
    // Let's adopt a "Plan View" logic.
    // Actually, to match the visuals, we need 3 *visual* cards.
    // Let's hardcode the positions:
    // Left: Selected Plan
    // Center: Recommended (Anual) - UNLESS selected is Anual, then??
    // Right: Semestral - UNLESS selected is Semestral, then?? 

    // To be safe and simple: 
    // Left Card always updates with selection.
    // Middle Card is always Anual (Recommended).
    // Right Card is always Semestral.
    // Visuals will handle the "Popular" look for the middle one.

    const cards = [
        {
            id: 'selected',
            data: PRICING_DATA[selectedDuration] ?? PRICING_DATA.anual,
            type: 'standard',
            active: true // Always active essentially
        },
        {
            id: 'recommended',
            data: PRICING_DATA.anual,
            type: 'popular',
            active: selectedDuration === 'anual'
        },
        {
            id: 'intermediate',
            data: PRICING_DATA.semestral,
            type: 'standard',
            active: selectedDuration === 'semestral'
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* Duration Selector */}
            <div className="flex justify-center mb-16 overflow-x-auto pb-4 md:pb-0">
                <div className="bg-brand p-1.5 rounded-xl inline-flex gap-1 shadow-lg shadow-brand/20 ring-1 ring-white/10">
                    {DURATION_OPTIONS.map((key) => {
                        const plan = PRICING_DATA[key];
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setSelectedDuration(key)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap",
                                    selectedDuration === key
                                        ? "bg-white text-brand shadow-sm"
                                        : "text-neutral-100 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {plan.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Cards Grid with 3D Transforms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-center justify-center perspective-[1000px]">
                {cards.map((card, index) => {
                    const isPopular = card.type === 'popular';

                    return (
                        <motion.div
                            key={card.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={
                                isDesktop
                                    ? {
                                        y: isPopular ? -20 : 0,
                                        opacity: 1,
                                        x: index === 2 ? -20 : index === 0 ? 20 : 0,
                                        scale: isPopular ? 1.0 : 0.95,
                                    }
                                    : { opacity: 1, y: 0 }
                            }
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.0,
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                delay: index * 0.1,
                            }}
                            className={cn(
                                "relative flex flex-col p-6 lg:p-8 rounded-3xl border-2 bg-white transition-all duration-300 h-full",
                                isPopular
                                    ? "border-brand shadow-2xl z-10"
                                    : "border-neutral-200 shadow-lg z-0 mt-5 md:mt-0",
                                // Only apply 3D transforms if desktop to avoid mobile weirdness
                                // But Tailwind classes for transform are additive? 
                                // We use framer motion for the heavy lifting.
                            )}
                        >
                            {isPopular && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-brand text-white py-1 px-3 rounded-full flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand/20">
                                    <Star className="w-3.5 h-3.5 fill-current" />
                                    <span>Recomendado</span>
                                </div>
                            )}

                            <div className="mb-6 mt-2 text-center md:text-left">
                                <h3 className={cn("text-xl font-bold mb-4", isPopular ? "text-brand" : "text-graphite")}>
                                    {card.data.label}
                                </h3>

                                <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                                    <span className="text-sm font-medium text-neutral-400">R$</span>
                                    <NumberFlow
                                        value={card.data.monthly}
                                        format={{ style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                                        className="text-5xl font-bold text-graphite tracking-tight"
                                        willChange
                                    />
                                    <span className="text-neutral-400 font-medium">/mês</span>
                                </div>

                                <p className="text-xs text-neutral-500 h-6 flex items-center justify-center md:justify-start">
                                    {card.data.total !== card.data.monthly && (
                                        <>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(card.data.total)}</>
                                    )}
                                </p>

                                <p className="text-sm text-neutral-600 font-medium mt-6 min-h-[48px] border-l-2 border-brand/10 pl-3 flex items-center text-left">
                                    {card.data.description}
                                </p>
                            </div>

                            <div className="w-full h-px bg-neutral-100 my-6" />

                            <ul className="space-y-4 mb-8 flex-1">
                                {FEATURES.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                                        <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-brand" />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={isPopular ? handleConfetti : undefined}
                                className={cn(
                                    "w-full h-12 text-base font-semibold transition-all duration-300 rounded-xl",
                                    isPopular
                                        ? "bg-brand hover:bg-brand-dark shadow-xl shadow-brand/20 text-white hover:-translate-y-1"
                                        : "bg-white border-2 border-neutral-200 text-graphite hover:border-brand hover:text-brand hover:-translate-y-1"
                                )}
                            >
                                {isPopular ? "Assinar Agora" : "Escolher Plano"}
                            </Button>

                            {card.data.label.includes("Cupom") && (
                                <p className="text-center text-[10px] text-neutral-400 mt-3 font-medium">
                                    *Desconto na 1ª fatura
                                </p>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
