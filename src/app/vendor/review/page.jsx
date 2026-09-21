import Link from "next/link";
import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Priya Kulkarni",
    rating: 5,
    date: "2 days ago",
    text: "Food quality is really good and the monthly subscription is convenient.",
  },
  {
    name: "Rohan Patel",
    rating: 5,
    date: "5 days ago",
    text: "Good variety of meals. Delivery and service are always on time.",
  },
  {
    name: "Abhinav Sharma",
    rating: 4,
    date: "1 week ago",
    text: "Affordable and close to the hostel. Overall a good experience.",
  },
];

export default function VendorReviews() {
  return (
    <main className="min-h-screen bg-[#f8f4f5]">

      <header className="border-b bg-white px-6 py-5">

        <div className="mx-auto flex max-w-7xl justify-between gap-4">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9a7c70]">
              Vendor Portal
            </p>

            <h1 className="text-3xl font-bold text-[#424b55]">
              Student Reviews
            </h1>

            <p className="text-sm text-gray-500">
              See what students think about your service.
            </p>
          </div>

          <Link
            href="/vendor"
            className="h-fit rounded-xl border px-5 py-3 font-semibold"
          >
            ← Dashboard
          </Link>

        </div>

      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Rating */}
        <section className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-yellow-50 p-6">

            <Star className="fill-yellow-500 text-yellow-500" />

            <p className="mt-4 text-sm text-yellow-700">
              Overall Rating
            </p>

            <p className="text-4xl font-bold text-yellow-900">
              4.8
            </p>

            <div className="mt-2 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  className="fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>

          </div>

          <div className="rounded-2xl bg-purple-50 p-6">

            <p className="text-sm text-purple-700">
              Total Reviews
            </p>

            <p className="mt-2 text-4xl font-bold text-purple-900">
              312
            </p>

            <p className="mt-2 text-sm text-purple-700">
              +24 this month
            </p>

          </div>

          <div className="rounded-2xl bg-emerald-50 p-6">

            <ThumbsUp className="text-emerald-600" />

            <p className="mt-4 text-sm text-emerald-700">
              Positive Reviews
            </p>

            <p className="text-4xl font-bold text-emerald-900">
              94%
            </p>

            <p className="mt-2 text-sm text-emerald-700">
              Students recommend your service
            </p>

          </div>

        </section>

        {/* Reviews */}
        <section className="mt-8 space-y-4">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex flex-col justify-between gap-3 sm:flex-row">

                <div>
                  <h3 className="font-bold">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {review.date}
                  </p>
                </div>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      className={
                        star <= review.rating
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

              </div>

              <p className="mt-4 leading-7 text-gray-600">
                "{review.text}"
              </p>

            </div>

          ))}

        </section>

      </div>
    </main>
  );
}