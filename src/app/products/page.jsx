import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import ProductCard from '../components/ProductCard/ProductCard';

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
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;