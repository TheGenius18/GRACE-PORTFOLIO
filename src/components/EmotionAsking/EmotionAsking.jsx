import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";
import Face from './Face';
import EmotionSlider from './EmotionSlider';
import ThankYouMessage from './ThankYouMessage';

const EmotionTracker = () => {
  const [emotionLevel, setEmotionLevel] = useState(50);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feelingDescription, setFeelingDescription] = useState("");
  const faceRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Smooth value for animations
  const motionEmotion = useMotionValue(50);
  const scaleLevel = useTransform(motionEmotion, [0, 100], [0.85, 1.01]);
  const blushOpacity = useTransform(motionEmotion, [70, 100], [0, 0.3]);

  // Track cursor position for pupil movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (faceRef.current) {
        const rect = faceRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100 - 50;
        const y = ((e.clientY - rect.top) / rect.height) * 100 - 50;
        setCursorPosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEmotionChange = (value) => {
    setEmotionLevel(value);
    animate(motionEmotion, value, { duration: 0.5 });
  };

  const handleSubmit = () => {
    setShowThankYou(true);
    setSubmitted(true);
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
        <motion.h1 
          className="text-3xl font-bold text-cyan mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          How are you feeling today?
        </motion.h1>
        
        <Face 
          emotionLevel={emotionLevel} 
          cursorPosition={cursorPosition} 
          scaleLevel={scaleLevel} 
          blushOpacity={blushOpacity} 
          ref={faceRef}
        />
        
        {!submitted ? (
          <>
            <EmotionSlider 
              emotionLevel={emotionLevel} 
              handleEmotionChange={handleEmotionChange} 
            />
            
            <motion.button
              onClick={handleSubmit}
              className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Emotion
            </motion.button>
          </>
        ) : (
          <div className="w-full max-w-md space-y-6">
            {showThankYou && (
              <ThankYouMessage 
                emotionLevel={emotionLevel}
                feelingDescription={feelingDescription}
                setFeelingDescription={setFeelingDescription}
              />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EmotionTracker;