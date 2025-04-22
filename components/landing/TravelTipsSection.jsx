import Link from "next/link";

export default function TravelTipsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Travel Tips &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Guides
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Best Time to Visit",
              description:
                "Learn about peak seasons and weather conditions for your destination.",
            },
            {
              title: "Local Transportation",
              description:
                "Navigate like a local with our comprehensive transport guides.",
            },
            {
              title: "Hidden Gems",
              description:
                "Discover secret spots and off-the-beaten-path attractions.",
            },
            {
              title: "Food & Dining",
              description:
                "Find the best local cuisine and dining experiences.",
            },
            {
              title: "Safety Tips",
              description:
                "Stay safe and prepared with our essential travel safety guidelines.",
            },
            {
              title: "Budget Planning",
              description:
                "Plan your trip with our cost-saving tips and recommendations.",
            },
          ].map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
              <Link
                href="#"
                className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
