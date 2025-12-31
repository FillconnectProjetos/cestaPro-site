"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

interface Social {
    name: string
    image: string
    href: string
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
    socials: Social[]
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
    const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null)
    const [rotation, setRotation] = React.useState<number>(0)
    const [clicked, setClicked] = React.useState<boolean>(false)

    const animation = {
        scale: clicked ? [1, 1.3, 1] : 1,
        transition: { duration: 0.3 },
    }

    React.useEffect(() => {
        const handleClick = () => {
            setClicked(true)
            setTimeout(() => {
                setClicked(false)
            }, 200)
        }
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [clicked])

    return (
        <div
            className={cn("flex items-center gap-4", className)}
            {...props}
        >
            {socials.map((social, index) => (
                <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "relative cursor-pointer px-2 py-2 transition-opacity duration-200 block",
                        hoveredSocial && hoveredSocial !== social.name
                            ? "opacity-50"
                            : "opacity-100"
                    )}
                    key={index}
                    onMouseEnter={() => {
                        setHoveredSocial(social.name)
                        setRotation(Math.random() * 20 - 10)
                    }}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onClick={() => {
                        setClicked(true)
                    }}
                >
                    {/* Static Image (visible by default - grayscale) */}
                    <div className="relative z-10 block grayscale group-hover:grayscale-0 transition-all duration-300">
                        <img src={social.image} alt={social.name} className="w-8 h-8 object-contain opacity-70" />
                    </div>

                    {/* Animated Image (popup on hover) */}
                    <AnimatePresence>
                        {hoveredSocial === social.name && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center z-20 pointer-events-none"
                                animate={animation}
                            >
                                <motion.div
                                    key={social.name}
                                    className="flex items-center justify-center"
                                    initial={{
                                        y: 0,
                                        rotate: rotation,
                                        opacity: 0,
                                        filter: "blur(2px)",
                                        scale: 0.5
                                    }}
                                    animate={{ y: -40, opacity: 1, filter: "blur(0px)", scale: 1.5 }}
                                    exit={{ y: 0, opacity: 0, filter: "blur(2px)", scale: 0.5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img src={social.image} alt={social.name} className="w-10 h-10 object-contain drop-shadow-xl" />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </a>
            ))}
        </div>
    )
}
