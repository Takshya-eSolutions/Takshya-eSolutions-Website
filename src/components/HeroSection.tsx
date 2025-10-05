import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { PremiumImageCarousel } from "./PremiumImageCarousel";
import { heroContent, trustIndicators, heroStats, floatingCards } from "../constants/hero";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-24 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-l from-secondary/10 via-primary/5 to-secondary/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full font-medium shadow-lg"
            >
              <heroContent.badge.icon className="w-5 h-5" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {heroContent.badge.text}
              </span>
              <Sparkles className="w-4 h-4 text-primary/60" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.3] font-bold pb-2"
            >
              {heroContent.title.main}
              <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent leading-tight mb-0.5 [text-shadow:0_1px_1px_rgba(var(--primary),0.8)]">
                {heroContent.title.highlight}
              </span>
              <span className="text-4xl lg:text-5xl xl:text-6xl text-muted-foreground font-normal">
                {heroContent.title.suffix}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {heroContent.description}
            </motion.p>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <indicator.icon className="w-5 h-5 text-green-600" />
                  <span>{indicator.text}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary/90 hover:to-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
              >
                {heroContent.buttons.primary}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToTestimonials}
                className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary text-lg px-8 py-4 backdrop-blur-sm group"
              >
                <Play className="w-5 h-5 mr-2" />
                {heroContent.buttons.secondary}
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-background via-background to-secondary/20 border border-border/50 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative group"
          >
            {/* Premium Image Carousel */}
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <PremiumImageCarousel autoAdvanceInterval={6000} />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </motion.div>
            
            {/* Single Floating Card - Lightning Fast */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 bg-background/95 backdrop-blur-md border border-border/50 rounded-3xl p-6 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${floatingCards[1].bgColor} rounded-2xl flex items-center justify-center`}>
                  {React.createElement(floatingCards[1].icon, { className: `w-7 h-7 ${floatingCards[1].iconColor}` })}
                </div>
                <div>
                  <div className="font-bold text-lg">{floatingCards[1].title}</div>
                  <div className="text-sm text-muted-foreground">{floatingCards[1].subtitle}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}