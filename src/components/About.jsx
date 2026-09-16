import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Brain, Trophy } from 'lucide-react';

const skills = [
  { name: 'C++', icon: <Code2 size={24} /> },
  { name: 'Python', icon: <Code2 size={24} /> },
  { name: 'C', icon: <Code2 size={24} /> },
  { name: 'Problem Solving', icon: <Brain size={24} /> },
  { name: 'Project Management', icon: <PenTool size={24} /> },
  { name: 'Adaptability', icon: <Trophy size={24} /> }
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">About Me</h2>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            
            <div style={{ flex: '1 1 400px' }}>
              <h3 className="heading-sm">Education</h3>
              <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Lovely Professional University (LPU)</h4>
                <p>Bachelor of Technology - Biotechnology</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>August 2024 - July 2028 | CGPA: 6.5</p>
              </div>
              <div className="glass-card">
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Progressive Central High School</h4>
                <p>Intermediate (12th)</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>June 2020 - May 2022 | 71%</p>
              </div>
            </div>

            <div style={{ flex: '1 1 400px' }}>
              <h3 className="heading-sm">Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                {skills.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    className="glass-card"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1.5rem' }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div style={{ color: 'var(--accent-primary)' }}>{skill.icon}</div>
                    <span style={{ fontSize: '0.9rem', textAlign: 'center' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
