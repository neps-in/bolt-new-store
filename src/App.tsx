import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <div className="flex items-center space-x-4">
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Jewelry</option>
              <option>Men's Clothing</option>
              <option>Women's Clothing</option>
            </select>
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
          </div>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
}