"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "../../lib/utils";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, [autoplay, handleNext]);

    const isActive = (index: number) => index === active;

    const randomRotate = () => {
        return Math.floor(Math.random() * 21) - 10; // -10 to 10 degrees for better stack effect
    };

    return (
        <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-12 md:py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

                {/* Image Stack Section */}
                <div className="relative h-80 w-full max-w-[320px] mx-auto md:mx-0">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.src} // Use src or unique ID
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: -100,
                                    rotate: randomRotate(),
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.7,
                                    scale: isActive(index) ? 1 : 0.95,
                                    z: isActive(index) ? 0 : -100,
                                    rotate: isActive(index) ? 0 : randomRotate(),
                                    zIndex: isActive(index)
                                        ? 20
                                        : testimonials.length + 2 - index,
                                    y: isActive(index) ? [0, -80, 0] : 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                    z: 100,
                                    rotate: randomRotate(),
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 origin-bottom"
                            >
                                <img
                                    src={testimonial.src}
                                    alt={testimonial.name}
                                    draggable={false}
                                    className={cn(
                                        "h-full w-full rounded-3xl object-cover object-center shadow-2xl ring-4 ring-white/50",
                                        isActive(index) ? "grayscale-0" : "grayscale-[20%]"
                                    )}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Content Section */}
                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-graphite">
                                {testimonials[active].name}
                            </h3>
                            <p className="text-sm text-neutral-500 font-medium">
                                {testimonials[active].designation}
                            </p>
                        </div>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 w-8 h-8 text-brand/20 -z-10 transform -scale-x-100" />
                            <motion.p className="text-lg text-neutral-600 leading-relaxed italic">
                                "{testimonials[active].quote}"
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-12 md:pt-8 w-full justify-center md:justify-start">
                        <button
                            onClick={handlePrev}
                            className="group flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 hover:bg-brand/10 transition-all duration-300 focus:outline-none ring-1 ring-neutral-200 hover:ring-brand/30"
                            aria-label="Depoimento Anterior"
                        >
                            <ArrowLeft className="h-5 w-5 text-neutral-600 group-hover:text-brand transition-colors duration-300 group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-dark focus:outline-none hover:scale-105"
                            aria-label="Próximo Depoimento"
                        >
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
