import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-30 xl:pt-50 xl:pb-30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2">
            {/* Subtitle */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-700/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></div>
              <p className="text-indigo-300 text-sm font-medium">Premium Tech Destination</p>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Welcome to <span className="text-indigo-300">GadgetSphere</span>
            </h1>
            
            {/* Overview */}
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Your ultimate destination for cutting-edge technology and innovative gadgets. 
              Discover the latest tech trends, compare products, and shop with confidence.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group">
                Explore Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="border border-gray-600 hover:border-indigo-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group">
                Join Our Community
              </button>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-gray-800">
              <div className="flex items-center">
                <div className="bg-indigo-900/30 p-2 rounded-lg mr-3">
                  <Zap className="text-indigo-300" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Fast Delivery</p>
                  <p className="text-gray-400 text-sm">Free shipping over $99</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-900/30 p-2 rounded-lg mr-3">
                  <Shield className="text-indigo-300" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Secure Payment</p>
                  <p className="text-gray-400 text-sm">100% protected</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute -inset-8 bg-indigo-500/10 rounded-3xl blur-3xl -z-10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl -z-10"></div>
              
              {/* Main Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                  alt="GadgetSphere - Tech Products Collection"
                  className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-700/30"
                />
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 bg-gray-800/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-700">
                  <div className="flex items-center">
                    <div className="bg-indigo-500 p-2 rounded-lg mr-3">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">1000+ Products</p>
                      <p className="text-indigo-300 text-xs">Updated Daily</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-gray-800/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-700">
                  <p className="text-white text-sm font-medium">4.8<span className="text-indigo-300">/5</span></p>
                  <p className="text-gray-400 text-xs">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;