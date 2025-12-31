
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/logo.png';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="h-12 w-auto rounded-lg overflow-hidden">
                            <img src={logo} alt="CestaPro+" className="h-full w-auto object-contain" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#como-funciona" className="text-neutral-600 hover:text-brand transition-colors text-sm font-medium">Como Funciona</a>
                        <a href="#beneficios" className="text-neutral-600 hover:text-brand transition-colors text-sm font-medium">Benefícios</a>
                        <a href="#depoimentos" className="text-neutral-600 hover:text-brand transition-colors text-sm font-medium">Depoimentos</a>
                        <a href="#precos" className="text-neutral-600 hover:text-brand transition-colors text-sm font-medium">Planos</a>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-brand">Entrar</Button>
                        <Button size="sm" className="shadow-brand/20">Começar Grátis</Button>
                    </div>

                    <button
                        className="md:hidden p-2 text-neutral-600 hover:text-graphite transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-7 h-7" />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-[60] bg-white md:hidden"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                                <span className="font-bold text-xl text-graphite">Menu</span>
                                <button
                                    className="p-2 text-neutral-500 hover:text-graphite"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="w-7 h-7" />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 gap-6 text-center">
                                <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-graphite font-medium hover:text-brand">Como Funciona</a>
                                <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-graphite font-medium hover:text-brand">Benefícios</a>
                                <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-graphite font-medium hover:text-brand">Depoimentos</a>
                                <a href="#precos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-graphite font-medium hover:text-brand">Planos</a>
                                <hr className="border-neutral-100 my-4" />
                                <Button variant="primary" size="lg" className="w-full">Criar conta grátis</Button>
                                <Button variant="ghost" size="lg" className="w-full">Entrar</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
