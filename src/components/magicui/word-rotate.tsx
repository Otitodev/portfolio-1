"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: readonly string[];
  duration?: number;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 2500,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(words.length - 1);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setIndex((prev) => {
          prevIndex.current = prev;
          return (prev + 1) % words.length;
        }),
      duration
    );
    return () => clearInterval(interval);
  }, [words, duration]);

  // All words are stacked in the same grid cell, so the container is
  // always as wide as the widest word — the line never reflows.
  return (
    <span className="inline-grid overflow-hidden align-bottom">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className={cn(
            "col-start-1 row-start-1 inline-block whitespace-nowrap",
            className
          )}
          initial={false}
          animate={
            i === index
              ? { opacity: 1, y: 0 }
              : i === prevIndex.current
                ? { opacity: 0, y: 20 }
                : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-hidden={i !== index}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
