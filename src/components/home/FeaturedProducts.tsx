import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 'donna',
    title: 'Donna',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    link: '/products/donna'
  },
  {
    id: 'uomo',
    title: 'Uomo', 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
    link: '/products/uomo'
  },
  {
    id: 'accessori',
    title: 'Accessori',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    link: '/products/accessori'
  }
] as const

export default function Categories() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light mb-8">Categorie in evidenza</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.link}
              className="group relative h-96 block overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl text-white font-light">{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}