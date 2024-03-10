import IReview from "@/interfaces/IReview";
import { time } from "@/lib/time";
import { RiStarFill, RiStarLine } from "react-icons/ri";

interface ReviewProps extends IReview {}

const Review: React.FC<ReviewProps> = (props) => {
  const { id, name, publishedAt, rating, comment } = props;
  return (
    <div>
      <div className="text-xl font-medium">{name}</div>
      <div className="text-xs">{time(publishedAt)}</div>
      {rating && (
        <div className="flex gap-1 mt-1">
          {Array.from({ length: rating }).map((_, i) => (
            <RiStarFill
              key={`review-${id}-filled-star-${i}`}
              className="text-cyan-800"
            />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <RiStarLine
              key={`review-${id}-line-star-${i}`}
              className="text-cyan-800"
            />
          ))}
        </div>
      )}
      <div className="mt-4">{comment}</div>
      <button className="uppercase underline underline-offset-4 font-bold text-sm mt-3">
        read more
      </button>
    </div>
  );
};

export default Review;
