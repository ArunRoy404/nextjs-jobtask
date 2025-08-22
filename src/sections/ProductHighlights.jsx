import ProductCard from '@/app/components/ProductCard/ProductCard';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import Link from 'next/link';

const ProductHighlights = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const data = await res.json();
    const products = await data?.data



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
                    {products.slice(0, 4).map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href={'/products'}>
                        <button className="border border-indigo-600 hover:bg-indigo-600 text-white hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlights;