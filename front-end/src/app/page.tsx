import ProductList from "@/components/ProductList";
import Reviews from "@/components/Reviews";
import mockReviews from "@/mock-tool/reviewsMockData";

export default async function Home() {
  return (
    <main className="flex flex-col items-center">
      <ProductList />
      <div className="my-16" />
      <Reviews reviews={mockReviews} />
    </main>
  );
}
