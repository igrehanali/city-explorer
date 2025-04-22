export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Works
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -z-10"></div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Create an Account</h3>
            <p className="text-gray-600">
              Sign up for free and set up your profile to get started.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Explore Locations</h3>
            <p className="text-gray-600">
              Browse through our curated list of amazing places in various
              cities.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Save & Share</h3>
            <p className="text-gray-600">
              Save your favorite spots and share them with friends and family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
