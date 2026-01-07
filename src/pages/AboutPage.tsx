import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import OptimizedImage from '../components/common/OptimizedImage';
import { Users, Award, Target, Zap, Instagram, Linkedin } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={32} className="text-accent-500" />,
  Zap: <Zap size={32} className="text-accent-500" />,
  Target: <Target size={32} className="text-accent-500" />,
  Users: <Users size={32} className="text-accent-500" />,
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  instagram_url?: string;
  linkedin_url?: string;
  facebook_url?: string;
}

interface SiteValue {
  id: string;
  title: string;
  description: string;
  icon_name: string;
}

const AboutPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [values, setValues] = useState<SiteValue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teamRes, valuesRes] = await Promise.all([
          supabase.from('team_members').select('*').order('display_order', { ascending: true }),
          supabase.from('site_values').select('*').order('display_order', { ascending: true })
        ]);

        if (teamRes.data) setTeam(teamRes.data);
        if (valuesRes.data) setValues(valuesRes.data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-40 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <OptimizedImage
            src='https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/Cooperate%20Photoshoot.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvQ29vcGVyYXRlIFBob3Rvc2hvb3QuanBnIiwiaWF0IjoxNzY3NTc4NjQ5LCJleHAiOjE3OTkxMTQ2NDl9.8FMEKf4gsxDxtc6igD1uIIRmK-0ypmp4T_zBNeDtcvs'
            alt="About Us"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            quality={85}
            lazy={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent z-10"></div>

        <div className="container-custom relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white mb-6 text-6xl md:text-8xl font-black tracking-tighter"
          >
            About <span className="text-gradient">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-dark-100 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            We are a team of creative professionals dedicated to visual excellence
            and memorable storytelling through multimedia.
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-950 to-transparent z-20"></div>
      </section>

      {/* Story Section */}
      <section className="section bg-dark-950 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <SectionHeading 
                title="Our Story" 
                subtitle="Passion in every frame"
                gradientTitle
              />
              <div className="space-y-6 text-dark-300 text-lg leading-relaxed">
                <p>
                  Fokal Solutions Limited, is a 100% Papua New Guinean-owned company that delivers integrated creative solutions across media production, marketing, research, and live events.
                </p>
                <p>
                  We blend innovation, storytelling, and strategy to help brands, communities, and organisations connect, engage, and grow. From compelling photo and video production to full-scale marketing campaigns, we are committed to excellence.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="h-1 w-12 bg-accent-500 rounded-full"></div>
                  <span className="text-white font-display font-bold uppercase tracking-widest text-sm">Est. 2024</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-accent-500/10 rounded-2xl blur-2xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]">
                <OptimizedImage
                  src='https://pixzptkgvkiyzdaeffqc.supabase.co/storage/v1/object/sign/images/Chris%20Snipe.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMmZiYjA1NS0zYzg5LTRmMmMtODZiOS1lNDkwNDFhZWU4NWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvQ2hyaXMgU25pcGUuanBnIiwiaWF0IjoxNzUzMzQ2ODY3LCJleHAiOjE3ODQ4ODI4Njd9.HrStcV-WwvAstCKT0ec8RetU6frnoHgacMZslEPHYpU'
                  alt="Our studio" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  width={800}
                  height={600}
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border border-white/10 shadow-xl hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                    <Zap size={20} className="text-dark-900" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Quality Driven</p>
                    <p className="text-dark-400 text-xs">Unmatched standards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px]"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Our Values"
            subtitle="Core principles guiding our approach"
            centered
            gradientTitle
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 shadow-xl border-white/5 hover:border-accent-500/30 transition-all duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {iconMap[value.icon_name] || <Award size={32} className="text-accent-500" />}
                </div>
                <h3 className="text-white mb-4 text-xl font-bold">{value.title}</h3>
                <p className="text-dark-300 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-dark-950">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The creative professionals behind our vision"
            centered
            gradientTitle
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[3/4] w-full shadow-2xl">
                  <OptimizedImage
                    src={member.image_url}
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={500}
                    height={667}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                    <div className="flex space-x-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {member.instagram_url && (
                        <a href={member.instagram_url} className="text-white hover:text-accent-500 transition-colors">
                          <Instagram size={24} />
                        </a>
                      )}
                      {member.linkedin_url && (
                        <a href={member.linkedin_url} className="text-white hover:text-accent-500 transition-colors">
                          <Linkedin size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-white text-3xl font-bold mb-2 group-hover:text-accent-500 transition-colors duration-300">{member.name}</h3>
                  <p className="text-accent-500 font-semibold tracking-widest uppercase text-xs mb-4">{member.role}</p>
                  <p className="text-dark-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section mesh-gradient relative py-24">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto glass p-12 rounded-3xl border-white/10 shadow-3xl">
            <h2 className="text-white mb-8 text-4xl md:text-5xl font-black">Ready to Start a <span className="text-gradient">Project?</span></h2>
            <p className="text-dark-200 text-xl mb-12 font-light">
              We're always looking for new challenges and exciting projects. Get in touch to discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn btn-accent px-12 py-4 text-lg font-bold shadow-xl hover:shadow-accent-500/20 transform hover:-translate-y-1 transition-all">
                Contact Us
              </a>
              <a href="/gallery" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-12 py-4 text-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all">
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;