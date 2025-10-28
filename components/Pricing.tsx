export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to get started. One price, no hidden fees.
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="bg-white border-2 border-blue-600 rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-slate-900">Professional Package</h3>
          <p className="text-gray-600 mt-1">Complete solution for your business</p>
        </div>

        <div className="p-8">
          <div className="flex items-baseline mb-8">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-xl text-gray-600 ml-2">one-time payment</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wide">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wide">Included</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-700 uppercase tracking-wide">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">Responsive Design</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Mobile, tablet & desktop optimized</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">Custom Domain</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Connect your own domain name</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">SEO Optimization</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Search engine ready setup</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">Fast Loading Speed</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Optimized performance & caching</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">Contact Forms</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Integrated contact & inquiry forms</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">Analytics Integration</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Track visitors & performance</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">SSL Security</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">HTTPS encryption included</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-gray-900 font-medium">Lifetime Updates</td>
                  <td className="py-4 px-4 text-center">
                    <svg className="w-6 h-6 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </td>
                  <td className="py-4 px-4 text-gray-600 text-sm">Free updates & improvements</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button 
              onClick={() => window.location.href = 'https://buy.stripe.com/test_xxxxxxxxxx'}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              Get Started Now - $29
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Secure payment powered by Stripe • One-time payment, no subscriptions
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-gray-600">
        Questions? <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact us</a> for more information
      </p>
    </div>
  </div>
</section>
  );
}