import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const TYPE_MS = 70;
const DELETE_MS = 40;
const HOLD_MS = 2200;
const GAP_MS = 500;

/**
 * Typt zinnen letter voor letter, wacht, wist ze weer en gaat door
 * naar de volgende zin. Valt terug op statische tekst bij reduced motion.
 */
export function useTypewriter(phrases: string[]) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = phrases[index];

    let delay: number;
    if (!deleting && text === current) {
      delay = HOLD_MS;
    } else if (deleting && text === "") {
      delay = GAP_MS;
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, reduce]);

  if (reduce) return phrases[0];
  return text;
}
