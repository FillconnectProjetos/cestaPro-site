
import { Section } from '../ui/section';
import { SparkleButton } from '../ui/sparkle-button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <Section className="pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-40 overflow-hidden relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center">

            {/* Premium Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-hero-gradient"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#3B3F46_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.03]"></div>

            <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative z-10 px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand/20 text-brand-dark text-sm font-semibold mb-8 shadow-sm"
                >
                    <span className="relative flex h-2.5 w-2.5 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                    </span>
                    Gestão profissional para Cestas Afetivas
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-graphite tracking-tight mb-6 leading-[1.1]"
                >
                    Organize pedidos, controle o <span className="text-brand relative inline-block mx-2">
                        lucro
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                        </svg>
                    </span> e cresça com segurança.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    O CestaPro+ transforma sua paixão em um negócio escalável. Chega de amadorismo. Tenha uma operação eficiente hoje.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <Link to="/login">
                        <SparkleButton
                            text="Começar Grátis"
                            className="w-full sm:w-auto shadow-brand/40 shadow-lg hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-brand via-brand-dark to-brand"
                        />
                    </Link>
                </motion.div>


            </div>
        </Section>
    );
};
