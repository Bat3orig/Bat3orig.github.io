import { motion } from "motion/react";

export default function SplitText({
  text,
  style,
  delay = 0,
  delay_divider = 50,
}) {
  const letters = text.split("").map((letter) => letter);

  return (
    <div className={`flex text-center ${style}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index / delay_divider,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
