
import { Star, ShoppingCart, Heart, Shield, Truck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';



const page = async ({params}) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${params.id}`);
    const product = await res.json();

    return (
        <div className="min-h-screen text-white py-30">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Back Button */}
                <Link href={'/products'}>
                    <button
                        className="flex items-center text-indigo-300 hover:text-indigo-400 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Products
                    </button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="rounded-2xl overflow-hidden border border-gray-700">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Category and Rating */}
                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-sm rounded-full">
                                {product.category}
                            </span>
                            <div className="flex items-center">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
                            </div>
                        </div>

                        {/* Title and Brand */}
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                            <p className="text-indigo-300">by {product.brand}</p>
                        </div>

                        {/* Price */}
                        <div className="text-2xl font-bold text-indigo-300">${product.price}</div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">{product.description}</p>

                        {/* Features */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>



                        {/* Color and Stock */}
                        <div className="flex items-center justify-between text-sm">
                            <div>
                                <span className="text-gray-400">Color: </span>
                                <span className="text-white">{product.color}</span>
                            </div>
                            <div>
                                <span className="text-gray-400">In Stock: </span>
                                <span className="text-white">{product.stock} units</span>
                            </div>
                        </div>
                    </div>



                    <div>
                        {/* Trust Badges */}
                        <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-700">
                            <button className="p-3 border border-gray-700 hover:border-indigo-400 rounded-lg transition-colors">
                                <Heart className="w-6 h-6 text-gray-400 hover:text-red-400" />
                            </button>
                            <div className="flex items-center text-sm text-gray-400">
                                <Truck className="w-4 h-4 mr-1" />
                                Free Shipping
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                                <Shield className="w-4 h-4 mr-1" />
                                2-Year Warranty
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* CTA Buttons */}
                        <div className="flex  gap-4 pt-4">
                            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;