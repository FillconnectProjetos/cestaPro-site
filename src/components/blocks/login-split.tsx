import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, ClipboardList, Layers, Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';
import { toast, Toaster } from 'sonner';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { cn } from '../../lib/utils';
import logoFull from '../../assets/logo.png';

export function LoginSplit() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage(null);

        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            setSuccessMessage("Bem-vindo de volta! Login realizado com sucesso.");
            toast.success("Login realizado com sucesso!");
            console.log("Login successful");
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
    };

    return (
        <div className="min-h-screen w-full bg-neutral-50 text-neutral-900 font-sans flex flex-col md:flex-row md:items-stretch overflow-hidden">
            <Toaster position="top-right" richColors />
            {/* LEFT COLUMN (Login Form) */}
            <div className="flex flex-col justify-center items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12 bg-white relative w-full md:w-1/2 order-2 md:order-2">
                <div className="w-full max-w-sm space-y-6">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center space-y-2">
                        <Link to="/" className="mb-6 hover:opacity-80 transition-opacity">
                            <img src={logoFull} alt="CestaPro" className="h-10 sm:h-12 w-auto" />
                        </Link>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">Bem-vindo de volta!</h2>
                        <p className="text-sm text-neutral-500">Insira seus dados para acessar o painel de controle.</p>
                    </div>

                    {/* Success Alert */}
                    {successMessage && (
                        <div
                            className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-md flex items-center gap-3 text-sm shadow-sm"
                        >
                            <CheckCircle2 className="h-5 w-5 shrink-0" />
                            {successMessage}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="seu@email.com"
                                    type="email"
                                    required
                                    className="h-10"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Senha</Label>
                                    <Link to="#" className="text-sm font-medium text-brand hover:underline">
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        placeholder="••••••••"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="h-10 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label
                                htmlFor="remember"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-600"
                            >
                                Manter conectado
                            </label>
                        </div>

                        <Button
                            className={cn(
                                "w-full h-10 text-sm font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/30 transition-all",
                                isLoading && "opacity-80 cursor-not-allowed"
                            )}
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Entrando...
                                </>
                            ) : (
                                "Entrar na Plataforma"
                            )}
                        </Button>
                    </form>

                    {/* Footer / Sign Up */}
                    <div className="text-center text-xs text-neutral-500 pt-1">
                        Ainda não tem conta?{' '}
                        <Link to="#" className="font-semibold text-brand hover:underline underline-offset-4">
                            Começar grátis
                        </Link>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN (Visual/Benefits) */}
            <div className="relative flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12 bg-neutral-50 overflow-hidden w-full md:w-1/2 order-1 md:order-1">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-md mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-5 w-fit mx-auto"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                        </span>
                        <span className="text-xs font-semibold text-neutral-700 tracking-wide uppercase">Gestão profissional para Cestas Afetivas</span>
                    </motion.div>

                    {/* Headlines */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 mb-4 leading-[1.1]"
                    >
                        Gerencie pedidos e lucro com <span className="text-brand">segurança</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base text-neutral-600 mb-8 leading-relaxed"
                    >
                        Centralize pedidos, produtos e financeiro em um só lugar. Menos improviso, mais controle no dia a dia.
                    </motion.p>
                    {/* REMOVED DEBUG STEP TEXT */}

                    {/* Benefits List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-4"
                    >
                        {/* Benefit 1 */}
                        <motion.div variants={itemVariants} className="group relative p-4 rounded-2xl bg-white border border-neutral-100 shadow-soft hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex items-start gap-4 text-left">
                                <div className="h-9 w-9 shrink-0 rounded-xl bg-brand-light/30 flex items-center justify-center text-brand group-hover:text-white group-hover:bg-brand transition-all duration-300">
                                    <ClipboardList className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 group-hover:text-brand-dark transition-colors">Central de Pedidos</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed mt-1">Organize encomendas, prazos e status sem confusão ou retrabalho.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Benefit 2 */}
                        <motion.div variants={itemVariants} className="group relative p-4 rounded-2xl bg-white border border-neutral-100 shadow-soft hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex items-start gap-4 text-left">
                                <div className="h-9 w-9 shrink-0 rounded-xl bg-brand-light/30 flex items-center justify-center text-brand group-hover:text-white group-hover:bg-brand transition-all duration-300">
                                    <TrendingUp className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 group-hover:text-brand-dark transition-colors">Precificação e Lucro</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed mt-1">Saiba exatamente quanto você ganha em cada cesta, sem achismos.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Benefit 3 */}
                        <motion.div variants={itemVariants} className="group relative p-4 rounded-2xl bg-white border border-neutral-100 shadow-soft hover:shadow-glow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex items-start gap-4 text-left">
                                <div className="h-9 w-9 shrink-0 rounded-xl bg-brand-light/30 flex items-center justify-center text-brand group-hover:text-white group-hover:bg-brand transition-all duration-300">
                                    <Layers className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 group-hover:text-brand-dark transition-colors">Produtos e Fichas Técnicas</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed mt-1">Padronize itens, custos e montagem para ganhar tempo e consistência.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
