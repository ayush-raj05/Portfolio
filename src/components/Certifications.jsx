import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Hone Communication & Public Speaking Skills for a Successful Career',
    issuer: 'LPU',
    link: 'https://drive.google.com/file/d/10T621ZQ8X88OIt6pEe8GZVZV7ueyq1t5/view?usp=drive_link'
  },
  {
    title: 'Introduction to Molecular and Cellular Biology',
    issuer: 'Saylor Academy',
    link: 'https://drive.google.com/file/d/1KZWwX83N3NjWJJO3BmD2vy5sqkdQDHla/view?usp=drive_link'
  },
  {
    title: 'Python And Django Framework For Beginners Complete Course',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/103fhG-55VUP3jCu5Ifp_rjnZvYaESDr4/view?usp=drive_link'
  },
  {
    title: 'Whole genome sequencing of bacterial genomes tools and applications',
    issuer: 'Coursera',
    link: 'https://drive.google.com/file/d/1BFbHvSRdqNhp2YUiTLutZro_EqR_ud5g/view?usp=drive_link'
  },
  {
    title: 'International Conference "BIOINNOVATE 2025"',
    issuer: 'LPU',
    link: 'https://drive.google.com/file/d/1tDVfJnQG6tSSgVMSvPen4izSFvdNGFRn/view?usp=drive_link'
  }
];

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">Certifications & Achievements</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                className="glass-card"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              >
                <div style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  <Award size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem', lineHeight: 1.4 }}>{cert.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>{cert.issuer}</p>
                  
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 500 }}>
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
