import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="glow" style={{ top: '20%', left: '10%' }}></div>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        
        <motion.div 
          style={{ flex: '1 1 400px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Biotechnology Engineer</span>
          <h1 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
            Hi, I'm <span className="text-gradient">Ayush Raj</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            A passionate B.Tech Biotechnology student at LPU with a strong foundation in problem-solving and programming. Building impactful projects and interactive experiences.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ 
            width: '350px', 
            height: '350px', 
            borderRadius: '50%', 
            padding: '10px',
            background: 'var(--accent-gradient)',
            position: 'relative'
          }}>
            <img 
              src="/profile.jpg" 
              alt="Ayush Raj" 
              style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '50%', 
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '4px solid var(--bg-primary)'
              }} 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
