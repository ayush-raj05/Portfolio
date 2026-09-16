import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section" id="contact" style={{ position: 'relative' }}>
      <div className="glow" style={{ bottom: '10%', right: '10%' }}></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-md">Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="glass-card" style={{ height: '100%' }}>
                <h3 className="heading-sm" style={{ marginBottom: '1.5rem' }}>Contact Info</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <a href="mailto:raajayush07@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.5rem', color: 'var(--accent-primary)' }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</p>
                      <p style={{ fontWeight: 500 }}>raajayush07@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/ayush-raj-658179329/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.5rem', color: 'var(--accent-primary)' }}>
                      <FaLinkedin size={24} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>LinkedIn</p>
                      <p style={{ fontWeight: 500 }}>Ayush Raj</p>
                    </div>
                  </a>

                  <a href="https://github.com/ayush-raj05" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.5rem', color: 'var(--accent-primary)' }}>
                      <FaGithub size={24} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>GitHub</p>
                      <p style={{ fontWeight: 500 }}>ayush-raj05</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
              <form className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="input-group">
                  <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                  <input type="text" id="name" className="input-field" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                  <input type="email" id="email" className="input-field" placeholder="john@example.com" />
                </div>
                <div className="input-group">
                  <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                  <textarea id="message" className="input-field" rows="4" placeholder="Hello, I'd like to talk about..."></textarea>
                </div>
                <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
