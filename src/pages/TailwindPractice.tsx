function TailwindPractice() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">

      {/* Header - Flexbox */}
      <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
          Tailwind Practice Page
        </h1>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Utility-First UI
        </span>
      </header>

      {/* Main Section */}
      <main className="p-6">

        {/* Description */}
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          This page demonstrates Tailwind CSS concepts using image cards.
        </p>

        {/* Cards Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          2xl:grid-cols-5
          gap-6
        ">

          {/* Card */}
          {[
            {
              title: "Nature",
              img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            },
            {
              title: "Mountains",
              img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            },
            {
              title: "Coding",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            },
            {
              title: "Travel",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            },
            {
              title: "Design",
              img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Responsive Tailwind card layout.
                </p>
              </div>
            </div>
          ))}

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        Built with Tailwind CSS • Practice Project
      </footer>
    </div>
  );
}

export default TailwindPractice;
