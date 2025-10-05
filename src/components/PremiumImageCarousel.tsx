import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTY4ODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Modern corporate team collaboration",
    title: "Collaborative Excellence",
    description: "Empowering teams with cutting-edge solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGF0YSUyMGNlbnRlciUyMHRlY2hub2xvZ3klMjBzZXJ2ZXJzfGVufDF8fHx8MTc1Njg4ODM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Enterprise data center technology",
    title: "Enterprise Infrastructure",
    description: "Scalable solutions for modern business"
  },
  {
    src: "https://images.unsplash.com/photo-1709803857154-d20ee16ff763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZXMlMjBib2FyZHJvb20lMjBtZWV0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU2ODg4MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Business executives strategic meeting",
    title: "Strategic Leadership",
    description: "Guiding digital transformation initiatives"
  },
  {
    src: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRpZ2l0YWwlMjBpbm5vdmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1Njg4ODM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Cloud computing innovation workspace",
    title: "Cloud Innovation",
    description: "Next-generation cloud solutions"
  },
  {
    src: "https://images.unsplash.com/photo-1662638600476-d563fffbb072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMG1vbml0b3JpbmclMjBjb250cm9sJTIwcm9vbXxlbnwxfHx8fDE3NTY4ODg0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Cybersecurity monitoring control room",
    title: "Security Operations",
    description: "Advanced cybersecurity monitoring"
  }
];

interface PremiumImageCarouselProps {
  autoAdvanceInterval?: number;
  className?: string;
}

export function PremiumImageCarousel({ 
  autoAdvanceInterval = 5000, 
  className = "" 
}: PremiumImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [dragConstraint, setDragConstraint] = useState(0);

  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Handle drag/swipe gestures
  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      nextSlide(); // Swipe right goes to next slide
    } else if (info.offset.x < -swipeThreshold) {
      prevSlide(); // Swipe left goes to previous slide
    }
  }, [nextSlide, prevSlide]);

  // Auto-advance functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(nextSlide, autoAdvanceInterval);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide, autoAdvanceInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === " ") {
        event.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, togglePlayPause]);

  const currentImage = carouselImages[currentIndex];

  return (
    <div 
      className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/20 group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100, position: 'absolute' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 0.98 }}
          >
            <ImageWithFallback
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </motion.button>

      {/* Play/Pause Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlayPause}
        className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-md border border-border/50 rounded-xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background z-10"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-foreground" />
        ) : (
          <Play className="w-4 h-4 text-foreground ml-0.5" />
        )}
      </motion.button>

      {/* Image Info Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        key={`info-${currentIndex}`}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <h3 className="font-bold text-lg mb-1">{currentImage.title}</h3>
        <p className="text-sm text-muted-foreground">{currentImage.description}</p>
      </motion.div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 z-10">
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 h-2.5 bg-primary rounded-full shadow-lg" 
                : "w-2.5 h-2.5 bg-background/60 hover:bg-background/80 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-background/10 via-background/20 to-background/10">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 shadow-sm"
          initial={{ width: "0%" }}
          animate={{ width: isPlaying && !isHovered ? "100%" : "0%" }}
          transition={{ 
            duration: autoAdvanceInterval / 1000, 
            ease: "linear",
            repeat: isPlaying && !isHovered ? Infinity : 0
          }}
          key={`progress-${currentIndex}-${isPlaying}-${isHovered}`}
        />
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden">
        <div className="w-8 h-0.5 bg-background/60 rounded-full" />
        <div className="text-xs text-background/80 px-2">Swipe</div>
        <div className="w-8 h-0.5 bg-background/60 rounded-full" />
      </div>

      {/* Keyboard Controls Indicator (Desktop) */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg p-2 text-xs text-muted-foreground">
          <div>← → Navigate</div>
          <div>Space Play/Pause</div>
        </div>
      </div>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {carouselImages.length}: {currentImage.title}. {currentImage.description}
      </div>
    </div>
  );
}