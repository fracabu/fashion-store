import Image from 'next/image';
import Link from 'next/link';

const newArrivals = [
 {
   id: 1,
   name: 'Cappotto in Cashmere',
   price: 299.99,
   image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
   description: 'Lussuoso cappotto in cashmere, perfetto per l\'inverno'
 },
 {
   id: 2,
   name: 'Maglione a Collo Alto',
   price: 129.99,
   image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
   description: 'Elegante maglione a collo alto in lana merino' 
 },
 {
   id: 3,
   name: 'Pantaloni in Velluto',
   price: 159.99,
   image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf',
   description: 'Raffinati pantaloni in velluto a coste'
 }
];

export default function NewCollection() {
 return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
     {/* Hero Section */}
     <div className="relative h-[50vh] mb-16 rounded-lg overflow-hidden">
       <Image
         src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
         alt="Nuova Collezione"
         fill
         sizes="100vw"
         className="object-cover"
       />
       <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-8">
         <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
           Nuova Collezione
         </h1>
         <p className="text-lg text-white/90 max-w-xl">
           Scopri le ultime tendenze della moda con la nostra nuova collezione Autunno/Inverno 2024. 
           Design esclusivi che uniscono stile e comfort.
         </p>
       </div>
     </div>

     {/* Featured Products */}
     <h2 className="text-3xl font-light mb-8">Nuovi Arrivi</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
       {newArrivals.map((product) => (
         <div key={product.id} className="group">
           <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
             <Image
               src={product.image}
               alt={product.name}
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover object-center group-hover:scale-105 transition duration-300"
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
           </div>
           <h3 className="text-lg font-medium">{product.name}</h3>
           <p className="text-sm text-gray-600 mb-2">{product.description}</p>
           <p className="text-lg">€{product.price}</p>
         </div>
       ))}
     </div>

     {/* Collection Details */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       <div>
         <h2 className="text-3xl font-light mb-6">La Collezione</h2>
         <p className="text-lg text-gray-600 mb-6">
           La nostra nuova collezione Autunno/Inverno 2024 rappresenta l'equilibrio perfetto 
           tra eleganza contemporanea e comfort quotidiano. Ogni capo è stato accuratamente 
           progettato per garantire versatilità e stile.
         </p>
         <ul className="space-y-4 text-gray-600">
           <li>• Materiali premium selezionati</li>
           <li>• Design esclusivi</li>
           <li>• Produzione sostenibile</li>
           <li>• Attenzione ai dettagli</li>
         </ul>
         <Link href="/products/donna" 
           className="inline-block mt-8 px-8 py-4 bg-black text-white hover:bg-black/90 transition">
           Scopri tutti i prodotti
         </Link>
       </div>
       <div className="grid grid-cols-2 gap-4">
         <Image
           src="https://images.unsplash.com/photo-1445205170230-053b83016050"
           alt="Collection Detail 1"
           width={300}
           height={400}
           className="rounded-lg"
         />
         <Image
           src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e"
           alt="Collection Detail 2"
           width={300}
           height={400}
           className="rounded-lg"
         />
       </div>
     </div>
   </div>
 );
}