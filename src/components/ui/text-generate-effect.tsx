"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  sentences,
  className,
}: {
  sentences: string[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const wordsArray = sentences[currentSentenceIndex].split(" ");

  useEffect(() => {
    const animateWords = () => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 3,
          delay: stagger(0.2),
        }
      );
    };

    animateWords();

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      animate("span", { opacity: 0 }, { duration: 2 }); // Reset opacity to 0 before reanimating
      animateWords();
    }, 20000); // Change the interval duration as needed

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSentenceIndex, sentences]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-3xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
