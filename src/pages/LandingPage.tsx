import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { Audience } from '../components/sections/Audience';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Benefits } from '../components/sections/Benefits';
import { ProductProof } from '../components/sections/ProductProof';
import { Testimonials } from '../components/sections/Testimonials';
import { PricingSectionWrapper } from '../components/blocks/pricing-section';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/sections/Footer';

export function LandingPage() {
    return (
        <main className="min-h-screen bg-neutral-50 font-sans selection:bg-brand-light selection:text-brand-dark">
            <Navbar />
            <Hero />
            <Audience />
            <HowItWorks />
            <Benefits />
            <ProductProof />
            <Testimonials />
            <PricingSectionWrapper />
            <FAQ />
            <Footer />
        </main>
    );
}
