
import { Section } from '../ui/section';
import { AnimatedTestimonials } from '../ui/animated-testimonials';

const testimonials = [
    {
        name: "Ana Carla",
        designation: "Proprietária, Cestas & Amores",
        src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop",
        quote: "O financeiro era meu pesadelo. Depois do CestaPro+, sei exatamente meu lucro. O suporte é rápido e o sistema não trava. Mudou minha vida.",
    },
    {
        name: "Patrícia Silva",
        designation: "Fundadora, Pati Presentes",
        src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
        quote: "Uso o plano Anual e valeu cada centavo. A organização dos pedidos em datas comemorativas se pagou na primeira semana. Simplesmente essencial.",
    },
    {
        name: "Fernanda Costa",
        designation: "Empreendedora Digital",
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        quote: "Profissional, direto e sem frufru. É uma ferramenta de trabalho de verdade, feita para quem quer ganhar dinheiro com cestas de forma séria.",
    },
    {
        name: "Mariana Souza",
        designation: "Gerente, Floricultura Bela Vista",
        src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop",
        quote: "Conseguimos reduzir o desperdício de estoque em 40% nas primeiras semanas. As fichas técnicas automáticas são um diferencial incrível.",
    },
    {
        name: "Roberto Almeida",
        designation: "CEO, Cestas Premium",
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        quote: "A facilidade de emitir orçamentos profissionais pelo celular enquanto visito fornecedores agilizou muito nosso processo de vendas.",
    }
];

export const Testimonials = () => {
    return (
        <Section id="depoimentos" className="bg-white">
            <div className="text-center mb-8 px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-graphite">
                    Confiança de quem <span className="text-brand">vende todo dia</span>
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light">
                    Junte-se a centenas de empreendedoras que profissionalizaram sua operação com o CestaPro+.
                </p>
            </div>

            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </Section>
    );
};
