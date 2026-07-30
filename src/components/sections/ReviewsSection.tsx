import { reviews } from "@/content/reviews";

export function ReviewsSection() {
  const verifiedReviews = reviews.filter((review) => review.verified);
  if (verifiedReviews.length === 0) return null;
  return (
    <section className="section-pad" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title">Vos retours</h2>
        {verifiedReviews.map((review) => <blockquote key={`${review.author}-${review.quote}`}><p>“{review.quote}”</p><cite>{review.author} · {review.source}</cite></blockquote>)}
      </div>
    </section>
  );
}
