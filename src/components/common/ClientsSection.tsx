import React from 'react';
import { motion } from 'framer-motion';

interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

// Sample clients - these can be easily updated from your database
const clients: Client[] = [
  {
    id: '1',
    name: 'TWM Group',
    logo: `https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/TWM-Group.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvVFdNLUdyb3VwLnBuZyIsImlhdCI6MTc1MzM1NDI4MSwiZXhwIjoxNzg0ODkwMjgxfQ.UYvlFpCzcRvk4r4ga47g2HfCBFU5a8KOQEHJDPkk3Ro`,
    website: 'https://twm.com.pg'
  },
  {
    id: '2',
    name: 'UNCDF',
    logo: 'https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/UNCDF.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvVU5DREYucG5nIiwiaWF0IjoxNzUzMzU0MjEyLCJleHAiOjE3ODQ4OTAyMTJ9.VHZrAwgpGkbxMkAhbV-EFHD5x5EP0mT_aTAEZIMu0L8',
    website: 'https://www.uncdf.org'
  },
  {
    id: '3',
    name: 'Abt Global',
    logo: `https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/ABT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvQUJULnBuZyIsImlhdCI6MTc1MzM1NDM4NSwiZXhwIjoxNzg0ODkwMzg1fQ.9Lu7PqagnlKJV3q0ImA5VF-PRjKp5oAp47MRwtE91h8`,
    website: 'https://www.abtglobal.com/locations/asia-pacific/papua-new-guinea'
  },
  {
    id: '4',
    name: 'APTC',
    logo: 'https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/APTC.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvQVBUQy5qcGVnIiwiaWF0IjoxNzUzMzU0NDIzLCJleHAiOjE3ODQ4OTA0MjN9.bozYjXdjA3XRaC93ZvDRo1htUEzzajsvuzkVEG1rGHU',
    website: 'https://aptc.edu.au/papua-new-guinea-country-office'
  },
  {
    id: '5',
    name: 'NiuPower',
    logo: `https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/NUI%20POWER.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTlVJIFBPV0VSLnBuZyIsImlhdCI6MTc1MzM1NDYzMSwiZXhwIjoxNzg0ODkwNjMxfQ.5x_gX_qcGdKd_U-BBnuU98bo3soKoVTa5SKZYTCTP3I`,
    website: 'https://www.niupower.com.pg'
  },
  {
    id: '6',
    name: 'St John PNG',
    logo: `https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/St-John-New-Logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvU3QtSm9obi1OZXctTG9nby5wbmciLCJpYXQiOjE3NTMzNTQ3MjQsImV4cCI6MTc4NDg5MDcyNH0.HdafMVxtHx2NNUYvsBtXK-jZCR4ueVbow-wBGBvSrZo`,
    website: 'https://stjohn.org.pg'
  }
];

interface ClientsSectionProps {
  customClients?: Client[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ customClients }) => {
  const displayClients = customClients || clients;
  
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...displayClients, ...displayClients];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-900 via-dark-800 to-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #0ea5e9 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Organizations<span className="text-accent-500">.</span>
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            We're proud to have worked with some of Papua New Guinea's most respected organizations and brands.
          </p>
        </motion.div>

        {/* Rotating Clients Carousel */}
        <div className="relative">
          {/* Enhanced gradient overlays with colors */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary-900 via-primary-800/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-secondary-900 via-secondary-800/80 to-transparent z-10"></div>
          
            <div className="overflow-hidden">
              <motion.div
                className="flex space-x-12 md:space-x-20"
                animate={{
                  x: [0, -50 * displayClients.length + '%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: displayClients.length * 10, // Slightly slower due to larger size
                    ease: "linear",
                  },
                }}
              >
                {duplicatedClients.map((client, index) => (
                  <motion.div
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-44 h-32 md:w-64 md:h-44 lg:w-80 lg:h-56 bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 flex items-center justify-center relative overflow-hidden border border-primary-200/20">
                      {client.website ? (
                        <a
                          href={client.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full flex items-center justify-center"
                        >
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </a>
                      ) : (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      )}
                      
                      {/* Enhanced hover overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <span className="text-white text-sm md:text-lg font-bold text-center leading-tight">
                          {client.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
  
          {/* Enhanced Stats Section with Colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 pt-16 border-t border-primary-700/30"
          >
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">30+</div>
              <div className="text-primary-100 text-base md:text-lg font-medium">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-primary-100 text-base md:text-lg font-medium">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-primary-100 text-base md:text-lg font-medium">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-accent-400 via-primary-500 to-secondary-500 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-primary-100 text-base md:text-lg font-medium">Client Satisfaction</div>
            </div>
          </motion.div>

        {/* Enhanced Call to Action with Gradient Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-primary-100 mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-dark-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Project
            </a>
            <a href="/gallery" className="btn bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border-2 border-primary-400/50 text-white hover:bg-gradient-to-r hover:from-primary-600/30 hover:to-secondary-600/30 hover:border-primary-300 backdrop-blur-sm">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;