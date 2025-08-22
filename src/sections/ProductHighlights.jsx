import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductHighlights = () => {
    // Dummy product data
    const products = [
        {
            id: 1,
            name: "Quantum X Pro",
            category: "Smartphone",
            price: "$899",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            features: ["48MP Camera", "120Hz Display", "5G Connectivity"]
        },
        {
            id: 2,
            name: "ProBook Elite",
            category: "Laptop",
            price: "$1,299",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            features: ["Intel i7 Processor", "16GB RAM", "1TB SSD"]
        },
        {
            id: 3,
            name: "AudioMax Pro",
            category: "Headphones",
            price: "$249",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            features: ["Noise Cancelling", "30hr Battery", "Wireless Charging"]
        },
        {
            id: 4,
            name: "SmartWatch Series 7",
            category: "Wearable",
            price: "$349",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
            features: ["Health Monitoring", "Water Resistant", "7-day Battery"]
        }
    ];

    return (
        <section className="py-30 xl:py-50">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-700/30 mb-4">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></div>
                        <p className=" text-sm font-medium">Featured Collection</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Popular <span className="text-indigo-300">Products</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Discover our most sought-after gadgets loved by tech enthusiasts worldwide
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800/60 transition-all duration-300 group border border-gray-700/30">
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

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="border border-indigo-600 hover:bg-indigo-600 text-white hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlights;