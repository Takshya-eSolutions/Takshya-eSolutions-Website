import React from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { testimonials, testimonialStats } from "../constants/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our services.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden group">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-primary">{testimonial.achievement}</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-10 h-10 text-primary/15 absolute -top-3 -left-3 z-0" />
                    <p className="text-muted-foreground leading-relaxed pl-8 relative z-10 text-base">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 pt-6 border-t border-border/30">
                    {/* <div className="relative">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-muted ring-2 ring-primary/10">
                        <Avatar
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div> */}
                    <div className="flex-1">
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.position}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl px-8 py-6 sm:py-4 shadow-lg max-w-3xl mx-auto">
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-primary">{testimonialStats.averageRating}</div>
              <div className="text-sm text-muted-foreground mt-1">{testimonialStats.averageRatingLabel}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border/50"></div>
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-primary">{testimonialStats.happyClients}</div>
              <div className="text-sm text-muted-foreground mt-1">{testimonialStats.happyClientsLabel}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border/50"></div>
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-primary">{testimonialStats.retentionRate}</div>
              <div className="text-sm text-muted-foreground mt-1">{testimonialStats.retentionRateLabel}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}