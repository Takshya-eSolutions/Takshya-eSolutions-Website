import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { PremiumLogo } from "./PremiumLogo";
import { footerContent, footerServices, quickLinks, socialLinks } from "../constants/footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-white/[0.05] bg-grid-small-black/[0.05]" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 relative">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center border-b border-primary-foreground/10"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
            {footerContent.cta.title}
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {footerContent.cta.description}
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {footerContent.cta.buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Footer Links */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="focus:outline-none"
                aria-label="Scroll to top"
              >
                <PremiumLogo size="md" variant="dark" />
              </button>
              <p className="text-primary-foreground/80 leading-relaxed">
                {footerContent.company.description}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="font-semibold text-lg">Our Services</h4>
              <ul className="space-y-3">
                {footerServices.map((service, index) => (
                  <li key={index}>
                    <span className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm text-left group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="font-semibold text-lg">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-primary-foreground/80">Email</div>
                    <div className="text-sm">{footerContent.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-primary-foreground/80">Phone</div>
                    <div className="text-sm">{footerContent.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-primary-foreground/80">Head Quarters</div>
                    <div className="text-sm">{footerContent.contact.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/10 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              &copy; {currentYear} {footerContent.legal.copyright}
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}