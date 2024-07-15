"use client";
import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-auto flex items-center bg-transparent justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();

  const restartAnimation = () => {
    controls.start({
      backgroundSize: ["0% 100%", "100% 100%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 10,
        delay: 2,
      },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", restartAnimation);
    restartAnimation();

    return () => {
      window.removeEventListener("scroll", restartAnimation);
    };
  }, [controls]);

  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={controls}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-teal-500 to-teal-800`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
