import Reviews from "@/components/Reviews";
import mockReviews from "@/mock-tool/reviewsMockData";

export default async function ReviewsPage() {
  return (
    <main className="flex flex-col items-center">
      <Reviews reviews={mockReviews} />
    </main>
  );
}
