"use client";

import { useEffect, useMemo, useState, useId } from "react";
import { loadFull } from "tsparticles";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { cn } from "../../lib/utils";

const options: ISourceOptions = {
    key: "star",
    name: "Star",
    particles: {
        number: {
            value: 20,
            density: {
                enable: false,
            },
        },
        color: {
            // Brand Colors: Lilás Pro (#8B7CF6), Light (#EBE9FE), Dark (#6F5CC2) + White
            value: ["#8B7CF6", "#EBE9FE", "#6F5CC2", "#ffffff", "#d8b4fe"],
        },
        shape: {
            type: "star",
            options: {
                star: {
                    sides: 4,
                },
            },
        },
        opacity: {
            value: 0.8,
        },
        size: {
            value: { min: 1, max: 4 },
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            enable: true,
            direction: "clockwise",
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        links: {
            enable: false,
        },
        reduceDuplicates: true,
        move: {
            enable: true,
            center: {
                x: 120,
                y: 45,
            },
        },
    },
    interactivity: {
        events: {},
    },
    smooth: true,
    fpsLimit: 120,
    background: {
        color: "transparent",
        size: "cover",
    },
    fullScreen: {
        enable: false,
    },
    detectRetina: true,
    absorbers: [
        {
            enable: true,
            opacity: 0,
            size: {
                value: 1,
                density: 1,
                limit: {
                    radius: 5,
                    mass: 5,
                },
            },
            position: {
                x: 110,
                y: 45,
            },
        },
    ],
    emitters: [
        {
            autoPlay: true,
            fill: true,
            life: {
                wait: true,
            },
            rate: {
                quantity: 5,
                delay: 0.5,
            },
            position: {
                x: 110,
                y: 45,
            },
        },
    ],
};

interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export const SparkleButton = ({ className, text = "Criar Conta Grátis", ...props }: SparkleButtonProps) => {
    const [particleState, setParticlesReady] = useState<"loaded" | "ready">();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setParticlesReady("loaded");
        });
    }, []);

    const id = useId();
    const modifiedOptions = useMemo(() => {
        options.autoPlay = isHovering;
        return options;
    }, [isHovering]);

    return (
        <button
            className={cn(
                "group relative rounded-full bg-gradient-to-r from-brand-light/80 via-white to-brand-light/80 p-0.5 text-white transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand/30",
                className
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...props}
        >
            <div className="relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand via-brand to-brand-dark px-8 py-3 text-white font-bold h-12 md:h-14 md:text-lg">
                <span>{text}</span>
            </div>
            {!!particleState && (
                <Particles
                    id={id}
                    className={cn(
                        "pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity",
                        {
                            "group-hover:opacity-100": particleState === "ready",
                        }
                    )}
                    particlesLoaded={async () => {
                        setParticlesReady("ready");
                    }}
                    options={modifiedOptions}
                />
            )}
        </button>
    );
};
