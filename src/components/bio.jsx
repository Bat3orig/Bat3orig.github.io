import FadeContent from "./ui/FadeContent";
import StarBorder from "./ui/StarBorder";

export default function Bio({ text }) {
  return (
    <FadeContent
      blur={false}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <StarBorder as="button" color="red" speed="6s">
        {text}
      </StarBorder>
    </FadeContent>
  );
}
