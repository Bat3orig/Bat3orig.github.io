import SplitText from "./ui/SplitText";

export default function Name({ text, delay = 100 }) {
  return (
    <SplitText
      text={text}
      className="text-2xl text-center font-semibold"
      delay={delay}
      animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={() => {}}
    />
  );
}
