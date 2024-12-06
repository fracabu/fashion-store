import Hero from '@/components/home/Hero';
import Image from 'next/image';
import Link from 'next/link';

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
] as const;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Featured Categories */}
        <div className="mb-16">
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
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl text-white font-light">
                      {category.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="bg-neutral-100 p-16 text-center">
          <h2 className="text-3xl font-light mb-4">Resta aggiornato</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere aggiornamenti sulle nuove collezioni
            e offerte esclusive.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            <button className="px-6 py-2 bg-black text-white hover:bg-black/90">
              Iscriviti
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}