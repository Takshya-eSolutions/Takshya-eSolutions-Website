import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { services, servicesContent } from "../constants/services";

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            {servicesContent.badgeText}
          </div>

          <h2 className="text-3xl lg:text-4xl">
            {servicesContent.sectionTitle}
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {servicesContent.sectionDescription}
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={service.comingSoon ? {} : { y: -5 }}
              className="relative h-full"
              style={{ overflow: 'visible' }}
            >
              <Card
                className={`group h-full relative border border-border/50 shadow-xl transition-all duration-500
                  bg-gradient-to-br from-background via-background to-secondary/5
                  ${
                    service.comingSoon
                      ? "opacity-80 grayscale-[70%] cursor-not-allowed"
                      : "hover:shadow-2xl"
                  }
                `}
                style={{ borderRadius: "1rem" }}
              >
                {/* COMING SOON RIBBON */}
                {service.comingSoon && (
                  <div 
                    className="absolute pointer-events-none"
                    style={{
                      top: '-5px',
                      right: '-5px',
                      width: '150px',
                      height: '150px',
                      overflow: 'hidden',
                      zIndex: 100
                    }}
                  >
                    <div
                      className="absolute bg-black text-center font-bold shadow-2xl"
                      style={{
                        transform: 'rotate(45deg)',
                        top: '32px',
                        right: '-37px',
                        width: '170px',
                        padding: '8px 0',
                        fontSize: '11px',
                        letterSpacing: '1px',
                        color: 'black',
                        background: 'linear-gradient(45deg, black, rgba(255, 255, 255, 0.7))',
                      }}
                    >
                      COMING SOON
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient}
                    opacity-0 ${
                      !service.comingSoon && "group-hover:opacity-100"
                    } transition-opacity duration-500`}
                  style={{ borderRadius: "1rem" }}
                />

                <CardHeader className="relative pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.iconBg}
                      rounded-2xl flex items-center justify-center mb-6 shadow-lg
                      ${
                        !service.comingSoon &&
                        "group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      }`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  <CardTitle
                    className={`text-xl font-bold transition-colors
                      ${!service.comingSoon && "group-hover:text-primary"}`}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient.replace(
                            "/10",
                            ""
                          )}`}
                        />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">
              {servicesContent.customSolutionTitle}
            </h3>

            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {servicesContent.customSolutionDescription}
            </p>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {servicesContent.customSolutionButtonText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}