
import { Section } from '../ui/section';
import { SocialLinks } from '../ui/social-links';
import { SparkleButton } from '../ui/sparkle-button';
import logo from '../../assets/logo.png';
import iconInstagram from '../../assets/instagram_transparente.png';
import iconFacebook from '../../assets/facebook_transparente.png';
import iconWhatsapp from '../../assets/whatsapp_transparente.png';

const socialLinks = [
    {
        name: "Instagram",
        image: iconInstagram,
        href: "https://instagram.com"
    },
    {
        name: "Facebook",
        image: iconFacebook,
        href: "https://facebook.com"
    },
    {
        name: "WhatsApp",
        image: iconWhatsapp,
        href: "https://wa.me/5565999020404"
    }
];


export const Footer = () => {
    return (
        <footer className="bg-neutral-50 text-neutral-600 pt-20 pb-10">
            <Section className="!py-0">
                {/* Final CTA */}
                <div className="text-center mb-20 bg-gradient-to-br from-neutral-800 to-neutral-900 p-10 rounded-3xl border border-white/5 mx-4 md:mx-0 shadow-2xl relative overflow-hidden">
                    {/* Decorative glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white relative z-10">
                        Pronta para escalar <span className="text-brand">seu negócio de cestas?</span>
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8 relative z-10">
                        Comece grátis hoje. Sem cartão, sem compromisso, sem letras miúdas.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <SparkleButton
                            className="shadow-brand/40 shadow-lg hover:shadow-glow transition-all duration-300 bg-gradient-to-r from-brand via-brand-dark to-brand"
                        />
                    </div>
                </div>

                <hr className="border-neutral-200 mb-10" />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10 text-sm px-4 md:px-0">
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <div className="font-bold text-xl flex items-center gap-2">
                            <img src={logo} alt="CestaPro+" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-neutral-600 leading-relaxed font-light">
                            Tecnologia profissional para quem transforma cestas em negócios lucrativos.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-graphite uppercase tracking-wider text-xs opacity-70">Navegação</h4>
                        <ul className="space-y-3 text-neutral-600">
                            <li><a href="#" className="hover:text-brand transition-colors">Início</a></li>
                            <li><a href="#como-funciona" className="hover:text-brand transition-colors">Funcionalidades</a></li>
                            <li><a href="#precos" className="hover:text-brand transition-colors">Planos e Preços</a></li>
                            <li><a href="#para-quem" className="hover:text-brand transition-colors">Para quem é</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Atualizações</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-graphite uppercase tracking-wider text-xs opacity-70">Institucional</h4>
                        <ul className="space-y-3 text-neutral-600">
                            <li><a href="#" className="hover:text-brand transition-colors">Sobre</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Legal</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-graphite uppercase tracking-wider text-xs opacity-70">Contato</h4>
                        <ul className="space-y-3 text-neutral-600">
                            <li>
                                <a href="mailto:contato@cestapro.com.br" className="hover:text-brand transition-colors block">
                                    contato@cestapro.com.br
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/5565999020404" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors block">
                                    WhatsApp: +55 (65) 99902-0404
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h4 className="font-bold mb-6 text-graphite uppercase tracking-wider text-xs opacity-70">Redes Sociais</h4>
                        <SocialLinks socials={socialLinks} className="mt-8" />
                    </div>
                </div>

                <div className="text-center text-neutral-500 text-xs pt-8 border-t border-neutral-200">
                    © 2026 CestaPro+. Todos os direitos reservados.
                </div>
            </Section>
        </footer>
    );
};
