import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedNameProps {
  className?: string;
}

const AnimatedName: React.FC<AnimatedNameProps> = ({ className }) => {
  const name = "Vishnu Adari";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.3,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <div className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-2xl font-bold tracking-wider"
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-300 hover:to-red-500 transition-all duration-300 cursor-default"
            whileHover={{ 
              scale: 1.1, 
              y: -2,
              rotateY: 5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedName;