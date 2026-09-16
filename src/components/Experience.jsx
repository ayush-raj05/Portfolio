import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">Experience</h2>
          
          <div style={{ marginTop: '3rem', position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '24px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'var(--glass-border)',
              zIndex: 0
            }}></div>

            <motion.div 
              className="glass-card"
              style={{ position: 'relative', zIndex: 1, marginLeft: '4rem' }}
              whileHover={{ y: -5 }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-4rem',
                top: '2rem',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)'
              }}>
                <Briefcase size={20} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 className="heading-sm" style={{ color: 'var(--accent-primary)' }}>India Glycols Limited – Pharma City, Dehradun</h3>
                  <p style={{ fontWeight: 500 }}>Summer Intern</p>
                </div>
                <span className="badge">July 2026</span>
              </div>
              
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Studied the extraction, biotransformation, purification, and finishing processes involved in the industrial production of thiocolchicoside.</li>
                <li>Gained practical exposure to upstream fermentation/bioconversion and downstream purification operations.</li>
                <li>Learned about downstream processing involving column chromatography, solvent recovery, and filtration.</li>
                <li>Observed the use of pH meters, TLC, UV-Vis spectrophotometry, centrifuges, and reactors for process monitoring.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
