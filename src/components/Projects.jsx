import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Study of Dengue in Female Anopheles Mosquitoes',
    date: 'December 2024',
    description: 'Conducted a study on dengue and its interaction with female Anopheles mosquitoes, focusing on understanding why the mosquito is not adversely affected by dengue infection. Reviewed biological factors and analyzed relevant information.',
    github: 'https://github.com/ayush-raj05',
    tags: ['Research', 'Biology', 'Data Analysis']
  },
  {
    title: 'Arduino-Based Staircase Light System',
    date: 'October 2024',
    description: 'Developed an Arduino-based automatic staircase lighting system using IR/motion sensors and LEDs for energy-efficient smart lighting automation.',
    github: 'https://github.com/ayush-raj05',
    tags: ['Arduino', 'C++', 'Embedded Systems', 'IoT']
  },
  {
    title: 'Microbiology Game – Interactive HTML5 Game',
    date: 'September 2024',
    description: 'Developed an interactive HTML5 Canvas-based educational game that combines microbiology concepts with engaging gameplay. Features timed quizzes and progressive difficulty.',
    github: 'https://github.com/ayush-raj05',
    tags: ['HTML5', 'Javascript', 'Canvas', 'Game Dev']
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md">Featured Projects</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="glass-card"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 className="heading-sm" style={{ color: 'var(--text-primary)', marginBottom: 0 }}>{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                    <FaGithub size={24} className="hover:text-accent-primary" />
                  </a>
                </div>
                
                <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.date}</p>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="badge" style={{ fontSize: '0.75rem' }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
