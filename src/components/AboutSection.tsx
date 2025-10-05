import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Award, Users, Globe, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { highlights, achievements } from "../constants/about";
import { imageUrls } from "../constants/images";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                About Us
              </div>
              <h2 className="text-3xl lg:text-4xl leading-tight">
                Why Choose <span className="text-primary">Takshya eSolutions?</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just another IT consulting firm. We're your strategic technology partner, 
                committed to understanding your unique challenges and delivering solutions that drive 
                measurable business results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of certified experts brings deep industry knowledge and hands-on experience 
                across various technologies and business sectors. We combine technical excellence with 
                business acumen to ensure every solution we implement adds tangible value to your organization.
              </p>
            </div>
            
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/20">
              <ImageWithFallback
                src={imageUrls.about.teamDiscussion}
                alt="Executive business team discussion boardroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            </div>
            
            {/* Floating Achievement Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 hidden sm:block bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Expert Team</div>
                  <div className="text-sm text-muted-foreground">Certified professionals</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 hidden sm:block bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">300% ROI</div>
                  <div className="text-sm text-muted-foreground">Average Growth</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-secondary/5">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}