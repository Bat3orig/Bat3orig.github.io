import FadeContent from "./ui/FadeContent";
import StarBorder from "./ui/StarBorder";

export default function Bio({ text }) {
  return (
    <FadeContent
      blur={false}
      duration={1000}
      easing="ease-out"
      delay={1000}
      initialOpacity={0}
    >
      <StarBorder as="button" color="red" speed="6s">
        <p className="text-justify">{text}</p>
      </StarBorder>
    </FadeContent>
  );
}
