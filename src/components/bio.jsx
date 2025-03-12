import { motion } from "motion/react";

export default function Bio({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
      className="w-full"
    >
      <p className="text-justify text-zinc-600 text-sm">{text}</p>
    </motion.div>
  );
}
