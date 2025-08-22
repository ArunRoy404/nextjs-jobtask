
'use client'
import { useState } from 'react';
import { Plus, ArrowLeft, Save } from 'lucide-react';



const AddProductPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        rating: '',
        image: '',
        features: [''],
        description: '',
        brand: '',
        stock: '',
        color: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData(prev => ({
            ...prev,
            features: newFeatures
        }));
    };

    const addFeature = () => {
        setFormData(prev => ({
            ...prev,
            features: [...prev.features, '']
        }));
    };

    const removeFeature = (index) => {
        if (formData.features.length > 1) {
            const newFeatures = formData.features.filter((_, i) => i !== index);
            setFormData(prev => ({
                ...prev,
                features: newFeatures
            }));
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        // Convert price and rating to numbers
        const processedData = {
            ...formData,
            price: parseFloat(formData.price),
            rating: parseFloat(formData.rating),
            stock: parseInt(formData.stock),
            features: formData.features.filter(feature => feature.trim() !== '')
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
                method: 'POST',
                body: JSON.stringify(processedData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!res.ok) {
                alert("Something went wrong!")
            } else {
                alert("Product added")
            }

        } catch (error) {
            alert("Something went wrong!")
        } finally {
            setIsLoading(false)
        }


    };

    return (
        <div className="min-h-screen text-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-indigo-300 hover:text-indigo-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>
                    <h1 className="text-3xl font-bold text-white">Add New Product</h1>
                    <div className="w-20"></div> {/* Spacer for balance */}
                </div>

                {/* Product Form */}
                <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Product Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Product Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                    placeholder="Enter product name"
                                />
                            </div>

                            {/* Category and Brand */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                                        Category *
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                    >
                                        <option value="">Select category</option>
                                        <option value="Smartphone">Smartphone</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Tablet">Tablet</option>
                                        <option value="Headphones">Headphones</option>
                                        <option value="Wearable">Wearable</option>
                                        <option value="Gaming Console">Gaming Console</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="brand" className="block text-sm font-medium text-gray-300 mb-2">
                                        Brand *
                                    </label>
                                    <input
                                        type="text"
                                        id="brand"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                        placeholder="Enter brand"
                                    />
                                </div>
                            </div>

                            {/* Price, Rating, and Stock */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">
                                        Price ($) *
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        step="0.01"
                                        className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                        placeholder="0.00"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="rating" className="block text-sm font-medium text-gray-300 mb-2">
                                        Rating *
                                    </label>
                                    <input
                                        type="number"
                                        id="rating"
                                        name="rating"
                                        value={formData.rating}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                        placeholder="4.5"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="stock" className="block text-sm font-medium text-gray-300 mb-2">
                                        Stock *
                                    </label>
                                    <input
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                        placeholder="Quantity"
                                    />
                                </div>
                            </div>

                            {/* Color */}
                            <div>
                                <label htmlFor="color" className="block text-sm font-medium text-gray-300 mb-2">
                                    Color *
                                </label>
                                <input
                                    type="text"
                                    id="color"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                    placeholder="Enter color"
                                />
                            </div>

                            {/* Image URL */}
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                                    Image URL *
                                </label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-3 transition-colors duration-200"
                                    placeholder="Enter detailed product description..."
                                />
                            </div>

                            {/* Features */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Features *
                                </label>
                                <div className="space-y-3">
                                    {formData.features.map((feature, index) => (
                                        <div key={index} className="flex gap-2 items-center">
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></div>
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                                required={index === 0}
                                                className="flex-1 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 transition-colors duration-200"
                                                placeholder={`Feature ${index + 1}`}
                                            />
                                            {formData.features.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeFeature(index)}
                                                    className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="flex items-center text-indigo-400 hover:text-indigo-300 text-sm mt-2"
                                    >
                                        <Plus className="w-4 h-4 mr-1" />
                                        Add Another Feature
                                    </button>
                                </div>
                            </div>

                            {/* Preview Section */}
                            <div className="pt-4 border-t border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-3">Preview</h3>
                                {formData.image ? (
                                    <div className="rounded-lg overflow-hidden border border-gray-700">
                                        <img
                                            src={formData.image}
                                            alt="Product preview"
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center">
                                        <p className="text-gray-500">Image preview will appear here</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                            disabled={isLoading}
                        >
                            {
                                isLoading
                                    ?
                                    <div role="status">
                                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>

                                    : <>
                                        <Save className="w-5 h-5 mr-2" />
                                        Save Product
                                    </>
                            }

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductPage;