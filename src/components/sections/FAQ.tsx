
import { useState } from 'react';
import { Section } from '../ui/section';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Preciso de cartão de crédito para começar?",
        answer: "Não. Você pode começar gratuitamente sem informar cartão de crédito. No plano gratuito, basta se cadastrar e usar o CestaPro+. O cartão só é solicitado se você decidir contratar um plano pago."
    },
    {
        question: "Posso mudar de plano depois?",
        answer: "Sim. Você pode mudar de plano a qualquer momento, fazendo upgrade ou downgrade conforme a necessidade do seu negócio."
    },
    {
        question: "O sistema funciona no meu celular?",
        answer: "Sim. O CestaPro+ funciona em qualquer dispositivo com acesso à internet, como celular, tablet ou computador, sem precisar instalar nada."
    },
    {
        question: "Como funciona o suporte?",
        answer: "Oferecemos suporte por WhatsApp e canais digitais. O tempo de resposta e o nível de atendimento variam de acordo com o plano contratado."
    },
    {
        question: "Meus dados estão seguros?",
        answer: "Sim. Seus dados são protegidos com padrões de segurança e boas práticas de mercado. A privacidade e a segurança das informações do seu negócio são prioridade para nós."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className="bg-neutral-50">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-graphite">
                    Perguntas Frequentes
                </h2>
            </div>

            <div className="max-w-2xl mx-auto px-4 space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-brand-light transition-colors group">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-5 bg-white text-left"
                        >
                            <div className="flex items-center gap-3">
                                <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-brand' : 'text-neutral-400'}`} />
                                <span className="font-bold text-graphite">{faq.question}</span>
                            </div>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-brand" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-brand-dark" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-5 pt-0 text-neutral-600 bg-white ml-8">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
};
