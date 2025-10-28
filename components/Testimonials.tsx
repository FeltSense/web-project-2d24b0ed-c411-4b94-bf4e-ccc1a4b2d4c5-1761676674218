export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See what our clients say about their experience with Harrytos
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Testimonial Card 1 */}
      <div className="group relative">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer hover:shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-lg">
              SM
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-slate-900">Sarah Mitchell</h4>
              <p className="text-sm text-slate-600">Operations Director, TechFlow Inc</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed line-clamp-4">
            "Harrytos reduced our operational overhead by 40% in the first quarter. Their systematic approach to process optimization is unmatched."
          </p>
          <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read full review →
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="hidden group-hover:block absolute top-0 left-0 w-full z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg border border-slate-300 p-8 mt-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                SM
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-slate-900 text-lg">Sarah Mitchell</h4>
                <p className="text-sm text-slate-600">Operations Director, TechFlow Inc</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              "Harrytos reduced our operational overhead by 40% in the first quarter. Their systematic approach to process optimization is unmatched. The team took time to understand our unique challenges and delivered solutions that actually work in practice, not just theory."
            </p>
            <p className="text-slate-700 leading-relaxed">
              "What impressed me most was their follow-through. They didn't just implement and leave—they stayed engaged, measured results, and continuously refined the approach. This is partnership, not just service delivery."
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Card 2 */}
      <div className="group relative">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer hover:shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-lg">
              JC
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-slate-900">James Chen</h4>
              <p className="text-sm text-slate-600">CEO, Meridian Solutions</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed line-clamp-4">
            "The ROI was evident within 60 days. Harrytos brought clarity to our scaling challenges and provided actionable frameworks we still use today."
          </p>
          <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read full review →
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="hidden group-hover:block absolute top-0 left-0 w-full z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg border border-slate-300 p-8 mt-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                JC
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-slate-900 text-lg">James Chen</h4>
                <p className="text-sm text-slate-600">CEO, Meridian Solutions</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              "The ROI was evident within 60 days. Harrytos brought clarity to our scaling challenges and provided actionable frameworks we still use today. As a CEO, I've worked with numerous consultants, but few deliver tangible value this quickly."
            </p>
            <p className="text-slate-700 leading-relaxed">
              "They helped us identify bottlenecks we didn't even know existed and implemented solutions that scaled with our growth. Our team velocity increased by 3x, and employee satisfaction scores went up significantly. That's the kind of impact that matters."
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Card 3 */}
      <div className="group relative">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer hover:shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-lg">
              ER
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-slate-900">Emily Rodriguez</h4>
              <p className="text-sm text-slate-600">VP of Strategy, Apex Dynamics</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed line-clamp-4">
            "Harrytos transformed how we approach strategic planning. Their data-driven insights helped us pivot at exactly the right moment, saving us from a costly misstep."
          </p>
          <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read full review →
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="hidden group-hover:block absolute top-0 left-0 w-full z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg border border-slate-300 p-8 mt-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                ER
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-slate-900 text-lg">Emily Rodriguez</h4>
                <p className="text-sm text-slate-600">VP of Strategy, Apex Dynamics</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              "Harrytos transformed how we approach strategic planning. Their data-driven insights helped us pivot at exactly the right moment, saving us from a costly misstep. The market analysis they provided was thorough, nuanced, and actionable."
            </p>
            <p className="text-slate-700 leading-relaxed">
              "What sets them apart is their ability to translate complex data into clear strategic recommendations. They don't just present findings—they help you understand the implications and guide you through implementation. Our board was thoroughly impressed with the quality of work."
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Card 4 */}
      <div className="group relative lg:col-start-2">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer hover:shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-lg">
              MP
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-slate-900">Michael Patel</h4>
              <p className="text-sm text-slate-600">CFO, Northstar Ventures</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed line-clamp-4">
            "Working with Harrytos was a masterclass in efficiency. They streamlined our financial reporting process, cutting review time from 5 days to 8 hours."
          </p>
          <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read full review →
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="hidden group-hover:block absolute top-0 left-0 w-full z-50 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg border border-slate-300 p-8 mt-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xl">
                MP
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-slate-900 text-lg">Michael Patel</h4>
                <p className="text-sm text-slate-600">CFO, Northstar Ventures</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              "Working with Harrytos was a masterclass in efficiency. They streamlined our financial reporting process, cutting review time from 5 days to 8 hours. The automation they implemented was elegant and robust—exactly what we needed."
            </p>
            <p className="text-slate-700 leading-relaxed">
              "Beyond the technical implementation, they trained our team thoroughly and created documentation that actually makes sense. Six months later, we're still discovering efficiencies from their work. This is the kind of partnership that pays dividends long after the engagement ends."
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-16 text-center">
      <div className="inline-flex items-center space-x-8 text-slate-600">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">500+</div>
          <div className="text-sm">Clients Served</div>
        </div>
        <div className="h-12 w-px bg-slate-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">98%</div>
          <div className="text-sm">Satisfaction Rate</div>
        </div>
        <div className="h-12 w-px bg-slate-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">4.9/5</div>
          <div className="text-sm">Average Rating</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}