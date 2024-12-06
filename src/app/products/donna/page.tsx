import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 'abito-sera',
    title: 'Abito da Sera',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    description: 'Elegante abito da sera in seta',
    price: '399,00 €',
  },
  {
    id: 'cappotto-elegante',
    title: 'Cappotto Elegante',
    image: 'https://images.unsplash.com/photo-1576425560340-0e2563a80c98',
    description: 'Cappotto invernale in lana',
    price: '299,00 €',
  },
  {
    id: 'blusa-seta',
    title: 'Blusa in Seta',
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8',
    description: 'Blusa in pura seta',
    price: '159,00 €',
  }
] as const

export default function DonnaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
      <h1 className="text-4xl font-light mb-8">Collezione Donna</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/donna/${product.id}`}
            className="group relative h-96 block overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-2xl text-white font-light mb-2">{product.title}</h2>
                <p className="text-white/80 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {product.description}
                </p>
                <span className="mt-4 px-4 py-2 border border-white text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Scopri di più
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}