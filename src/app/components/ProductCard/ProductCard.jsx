import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
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
                    <Link href={`/products/${product._id}`}>
                        <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;