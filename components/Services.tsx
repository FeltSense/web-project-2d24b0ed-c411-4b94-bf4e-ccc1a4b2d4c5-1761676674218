export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Why Choose Harrytos
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experience exceptional dining with our commitment to quality, convenience, and customer satisfaction
      </p>
    </div>

    {/* Four Column Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Service Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Fresh Local Ingredients
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We source only the finest, locally-sourced ingredients to ensure every dish is fresh, flavorful, and sustainable
        </p>
      </div>

      {/* Service Card 2 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Online Ordering
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Convenient online ordering and fast delivery service brings Harrytos directly to your door with just a few clicks
        </p>
      </div>

      {/* Service Card 3 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Easy Reservations
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Book your table effortlessly with our simple reservation system and enjoy a seamless dining experience
        </p>
      </div>

      {/* Service Card 4 */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Diverse Menu Options
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Explore our extensive menu featuring vegetarian, vegan, gluten-free, and other dietary options for every preference
        </p>
      </div>
    </div>

    {/* Optional Bottom CTA */}
    <div className="text-center mt-12">
      <p className="text-gray-600 mb-6">
        Ready to experience the Harrytos difference?
      </p>
      <button className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200">
        View Our Menu
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</section>
  );
}