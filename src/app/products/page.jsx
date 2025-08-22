import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const data = await res.json();
    const products = await data?.data
    return (
        <div className='pt-40 py-30'>
            <div className='container px-4 sm:px-6 lg:px-8 mx-auto'>
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-700/30 mb-4">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></div>
                        <p className="text-indigo-300 text-sm font-medium">Explore Our Collection</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        All <span className="text-indigo-300">Products</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Discover our complete range of cutting-edge gadgets and tech innovations
                    </p>
                </div>


                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product._id} className="flex flex-col bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300 group border border-gray-700/30">
                            {/* Product Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                                    {product.category}
                                </div>
                                <div className="absolute top-3 right-3 flex flex-col gap-2">
                                    <button className="bg-gray-900/80 hover:bg-indigo-600 p-2 rounded-full transition-colors">
                                        <Heart className="h-4 w-4 text-white" />
                                    </button>
                                    <button className="bg-gray-900/80 hover:bg-indigo-600 p-2 rounded-full transition-colors">
                                        <Eye className="h-4 w-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Product Info Container*/}
                            <div className="p-4 flex flex-col justify-between flex-1">

                                {/* Product Info */}
                                <div className=''>
                                    <h3 className="text-lg text-white font-bold mb-2">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center mb-3">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-400 ml-2">{product.rating}</span>
                                    </div>

                                    {/* Features */}
                                    <div className="mb-4">
                                        {product.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-indigo-900/30 text-indigo-300 text-xs px-2 py-1 rounded mr-2 mb-2"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price and CTA */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-indigo-300">{product.price}</span>
                                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                                        <ShoppingCart className="h-4 w-4 mr-1" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;