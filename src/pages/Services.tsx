import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Truck, Home, Package, Clock, Globe, 
  Warehouse, Car, Container, ShoppingBag, Boxes 
} from 'lucide-react';

const services = [
  {
    icon: <Box />,
    title: 'Office Packing and Moving',
    description: 'Professional packing and relocation services for offices of all sizes.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  },
  {
    icon: <Home />,
    title: 'House Packing and Moving',
    description: 'Comprehensive residential moving services with careful attention to detail.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80'
  },
  {
    icon: <Package />,
    title: 'Furniture Dismantling',
    description: 'Expert furniture disassembly and reassembly services.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80'
  },
  {
    icon: <Package />,
    title: 'Fragile Item Packing',
    description: 'Specialized packing services for delicate and valuable items.',
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80'
  },
  {
    icon: <Clock />,
    title: 'Storage Solutions',
    description: 'Short and long-term storage options in secure facilities.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80'
  },
  {
    icon: <Globe />,
    title: 'International Shipping',
    description: 'Reliable international shipping services worldwide.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80'
  },
  {
    icon: <Car />,
    title: 'Car Transportation',
    description: 'Safe and secure vehicle transportation services.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80'
  },
  {
    icon: <Truck />,
    title: 'Truck Transport',
    description: 'Professional truck transport services for commercial needs.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80'
  },
  {
    icon: <ShoppingBag />,
    title: 'Packing Supplies',
    description: 'High-quality packing materials and supplies.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80'
  }
];

const Services = () => {
  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white transform scale-150">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Contact us today for a free consultation and personalized quote
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Get a Free Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;