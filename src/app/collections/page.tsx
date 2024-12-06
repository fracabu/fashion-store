import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 'winter-coat',
    title: 'Cappotto Invernale',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543',
    description: 'Elegante cappotto in lana per affrontare l\'inverno con stile',
    price: '299,00 €',
    link: '/products/winter-coat'
  },
  {
    id: 'cashmere-sweater',
    title: 'Maglione in Cashmere',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    description: 'Morbido maglione in puro cashmere',
    price: '189,00 €',
    link: '/products/cashmere-sweater'
  },
  {
    id: 'wool-scarf',
    title: 'Sciarpa in Lana',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9',
    description: 'Calda sciarpa in lana merino',
    price: '79,00 €',
    link: '/products/wool-scarf'
  }
] as const

export default function AutunnoInvernoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
      <h1 className="text-4xl font-light mb-8">Collezione Autunno/Inverno 2024</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.link}
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