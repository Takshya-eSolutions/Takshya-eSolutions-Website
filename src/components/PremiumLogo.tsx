import { motion } from "motion/react";
import React from "react";

interface PremiumLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function PremiumLogo({ variant = "light", size = "md" }: PremiumLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  const bgClass = variant === "light" 
    ? "bg-gradient-to-br from-primary to-primary/80" 
    : "bg-primary-foreground";
    
  const textClass = variant === "light" 
    ? "text-primary-foreground" 
    : "text-primary";

  const logoTextClass = variant === "light"
    ? "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
    : "bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text";

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-3"
    >
      <div className={`${sizeClasses[size]} ${bgClass} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Animated background effect */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
              "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
              "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        <span className={`${textClass} font-bold text-sm relative z-10`}>TE</span>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold ${textSizeClasses[size]} ${logoTextClass} leading-tight`}>
          Takshya
        </span>
        <span className={`text-xs text-muted-foreground font-medium tracking-wider uppercase leading-none ${variant === "dark" ? "text-primary-foreground/60" : ""}`}>
          eSolutions
        </span>
      </div>
    </motion.div>
  );
}