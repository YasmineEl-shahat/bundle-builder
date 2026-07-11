import ReviewItem from "./ReviewItem";
import { ReviewItem as ReviewItemType } from "@/types/bundle";

interface Props {
  title: string;
  items: ReviewItemType[];
}

export default function ReviewSection({ title, items }: Props) {
  if (!items.length) return null;

  return (
    <section>
      <h3 className="mb-2 text-xs uppercase text-gray-c-600">{title}</h3>

      <div className="space-y-3">
        {items.map((item) => (
          <ReviewItem
            key={`${item.productId}-${item.variantLabel}`}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
