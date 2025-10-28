export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://source.unsplash.com/1600x900/?restaurant,food,dining" 
      alt="Harrytos Restaurant" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-slate-900/70"></div>
  </div>

  {/* Centered Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Fresh Ingredients,<br />Delivered to Your Table
    </h1>
    <p className="text-xl text-slate-100 mb-4 max-w-2xl mx-auto leading-relaxed">
      Experience exceptional dining with locally-sourced ingredients prepared fresh daily. Order online for delivery or reserve your table in minutes.
    </p>
    
    {/* Key Value Props */}
    <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-200">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-medium">Fresh, Locally-Sourced</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-medium">Online Ordering & Delivery</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-medium">Easy Table Reservations</span>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg w-full sm:w-auto">
        Order Online Now
      </button>
      <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto">
        Reserve a Table
      </button>
    </div>

    {/* Subtle Trust Indicator */}
    <p className="mt-10 text-sm text-slate-300">
      Serving the community since 1995 • Over 50,000 satisfied customers
    </p>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
    <div className="flex flex-col items-center gap-2 text-white animate-bounce">
      <span className="text-xs uppercase tracking-wider text-slate-300">Explore Menu</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</section>
  );
}