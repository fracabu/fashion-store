import ProductGrid from '@/components/products/ProductGrid'

export default function AccessoriPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
      <h1 className="text-4xl font-light mb-8">Accessori</h1>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">36 prodotti</p>
          <select className="border p-2 rounded">
            <option>Più recenti</option>
            <option>Prezzo crescente</option>
            <option>Prezzo decrescente</option>
          </select>
        </div>
      </div>
      <ProductGrid category="accessori" />
    </div>
  );
}