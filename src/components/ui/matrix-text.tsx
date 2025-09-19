"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LetterState {
    char: string;
    isMatrix: boolean;
    isSpace: boolean;
}

interface MatrixTextProps {
    text?: string;
    className?: string;
    initialDelay?: number;
    letterAnimationDuration?: number;
    letterInterval?: number;
    repeatInterval?: number;
}

export const MatrixText = ({
    text = "HelloWorld!",
    className,
    initialDelay = 200,
    letterAnimationDuration = 500,
    letterInterval = 100,
    repeatInterval,
}: MatrixTextProps) => {
    const initialLetters = useMemo(() =>
        text.split("").map((char) => ({
            char,
            isMatrix: false,
            isSpace: char === " ",
        })), [text]
    );

    const [letters, setLetters] = useState<LetterState[]>(initialLetters);
    const isAnimatingRef = useRef(false);

    const getRandomChar = useCallback(
        () => (Math.random() > 0.5 ? "1" : "0"),
        []
    );

    const animateLetter = useCallback(
        (index: number) => {
            if (index >= text.length) return;

            requestAnimationFrame(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (!newLetters[index].isSpace) {
                        newLetters[index] = {
                            ...newLetters[index],
                            char: getRandomChar(),
                            isMatrix: true,
                        };
                    }
                    return newLetters;
                });

                setTimeout(() => {
                    setLetters((prev) => {
                        const newLetters = [...prev];
                        newLetters[index] = {
                            ...newLetters[index],
                            char: text[index],
                            isMatrix: false,
                        };
                        return newLetters;
                    });
                }, letterAnimationDuration);
            });
        },
        [getRandomChar, text, letterAnimationDuration]
    );

    const startAnimation = useCallback(() => {
        if (isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        setLetters(initialLetters);
        
        let currentIndex = 0;

        const animate = () => {
            if (currentIndex >= text.length) {
                isAnimatingRef.current = false;
                return;
            }

            animateLetter(currentIndex);
            currentIndex++;
            setTimeout(animate, letterInterval);
        };
        
        setTimeout(animate, 100);

    }, [animateLetter, text, letterInterval, initialLetters]);

    useEffect(() => {
        const startTimer = setTimeout(startAnimation, initialDelay);

        if (repeatInterval && repeatInterval > 0) {
            const intervalId = setInterval(() => {
                startAnimation();
            }, repeatInterval);

            return () => {
                clearTimeout(startTimer);
                clearInterval(intervalId);
            };
        }

        return () => clearTimeout(startTimer);
    }, [startAnimation, initialDelay, repeatInterval]);

    const motionVariants = useMemo(
        () => ({
            matrix: {
                color: "#00ff00",
                textShadow: "0 2px 4px rgba(0, 255, 0, 0.5)",
            },
            normal: {
                color: "inherit",
                textShadow: "none",
            }
        }),
        []
    );

    return (
        <div
            className={cn(
                "flex flex-wrap",
                className
            )}
            aria-label="Matrix text animation"
        >
            {letters.map((letter, index) => (
                <motion.div
                    key={`${index}-${letter.char}`}
                    className="font-mono w-[1ch] text-center overflow-hidden"
                    initial="initial"
                    animate={letter.isMatrix ? "matrix" : "normal"}
                    variants={motionVariants}
                    transition={{
                        duration: 0.1,
                        ease: "easeInOut",
                    }}
                    style={{
                        display: "inline-block",
                        fontVariantNumeric: "tabular-nums",
                    }}
                >
                    {letter.isSpace ? "\u00A0" : letter.char}
                </motion.div>
            ))}
        </div>
    );
};