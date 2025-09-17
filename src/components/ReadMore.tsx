import { useState } from "react";
import MagneticButton from "./MagneticButton";

type ReadMoreProps = {
  preview: string;
  fullText: string;
  className?: string;
};

const ReadMore = ({ preview, fullText, className = "" }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-gray-700">
        {expanded ? fullText : preview}
      </p>
      <MagneticButton
        className="px-4 py-2 bg-black text-white rounded-lg text-sm"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Read Less" : "Read More"}
      </MagneticButton>
    </div>
  );
};

export default ReadMore;
