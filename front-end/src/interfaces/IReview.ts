export default interface IReview {
  id: number;
  name: string;
  publishedAt: number;
  rating?: number;
  comment: string;
}
