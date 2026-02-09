import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Send, Clock, Star, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { contactContent, contactInfo, contactBenefits } from "../constants/contact";
import { EMAILJS_CONFIG, EMAIL_TEMPLATE_PARAMS, DEFAULT_RECIPIENT } from "../constants/emailjs";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (only needs to be done once)
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        [EMAIL_TEMPLATE_PARAMS.FROM_NAME]: formData.name,
        [EMAIL_TEMPLATE_PARAMS.FROM_EMAIL]: formData.email,
        [EMAIL_TEMPLATE_PARAMS.COMPANY]: formData.company || 'Not specified',
        [EMAIL_TEMPLATE_PARAMS.MESSAGE]: formData.message,
        [EMAIL_TEMPLATE_PARAMS.TO_NAME]: DEFAULT_RECIPIENT.name,
        [EMAIL_TEMPLATE_PARAMS.TO_EMAIL]: DEFAULT_RECIPIENT.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Success feedback
      toast.success("Thank you! Your message has been sent successfully. Our team will reach out within 4 hours.");
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error feedback with fallback
      toast.error(
        "Sorry, there was an issue sending your message. Please try again or contact us directly at " + 
        DEFAULT_RECIPIENT.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Explicitly preserve the value including spaces
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Additional handler to ensure spaces are captured
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // This ensures space key is not prevented by any parent handlers
    if (e.key === ' ') {
      e.stopPropagation();
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent)]" />
        <div className="absolute inset-0 bg-grid-small-black/[0.02] bg-grid-small-white/[0.02]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Send className="w-4 h-4" />
            {contactContent.badge}
          </div>
          <h2 className="text-3xl lg:text-4xl">{contactContent.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {contactContent.description}
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border border-border/30 shadow-2xl bg-gradient-to-br from-background via-background to-secondary/5 backdrop-blur-sm">
              <CardHeader className="pb-6 lg:pb-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
                <CardTitle className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {contactContent.form.title}
                </CardTitle>
                <CardDescription className="text-base lg:text-lg text-muted-foreground">
                  {contactContent.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label htmlFor="name" className="font-medium">{contactContent.form.fields.name.label}</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="h-12"
                        placeholder={contactContent.form.fields.name.placeholder}
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label htmlFor="email" className="font-medium">{contactContent.form.fields.email.label}</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="h-12"
                        placeholder={contactContent.form.fields.email.placeholder}
                        required
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="company" className="font-medium">{contactContent.form.fields.company.label}</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      className="h-12"
                      placeholder={contactContent.form.fields.company.placeholder}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="font-medium">{contactContent.form.fields.message.label}</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder={contactContent.form.fields.message.placeholder}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          {contactContent.form.button}
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start space-x-4 p-4 rounded-xl bg-background border border-border/50 transition-all duration-300 group ${
                      info.title === 'LinkedIn' 
                        ? 'hover:shadow-lg cursor-pointer' 
                        : 'cursor-default' 
                    }`}
                    onClick={() => {
                      if (info.title === 'LinkedIn' && info.action) {
                        window.open(info.action, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color} ${
                      info.title === 'LinkedIn' ? 'group-hover:scale-110' : ''
                    } transition-transform`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-muted-foreground text-sm">{info.details}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Response Promise Cards - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Why Choose Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-border/50 shadow-lg bg-gradient-to-br from-background to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 group"
                  >
                    <benefit.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Response Time Promise Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-border/50">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2">{contactContent.responsePromise.title}</h4>
              <p className="text-muted-foreground">
                {contactContent.responsePromise.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}