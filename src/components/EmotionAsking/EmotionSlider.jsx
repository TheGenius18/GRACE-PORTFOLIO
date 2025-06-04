import React from 'react';
import { motion } from 'framer-motion';

const EmotionSlider = ({ emotionLevel, handleEmotionChange }) => {
  return (
    <div className="w-full max-w-md mb-8">
      <motion.label 
        htmlFor="emotion-range"
        className="block text-lg font-medium text-gray-700 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Current emotion: {emotionLevel}%
      </motion.label>
      
      <input
        type="range"
        id="emotion-range"
        min="0"
        max="100"
        value={emotionLevel}
        onChange={(e) => handleEmotionChange(parseInt(e.target.value))}
        className="w-full h-2 bg-cyan rounded-full appearance-none cursor-pointer"
      />
      
      <div className="flex justify-between text-sm text-gray-600 mt-3">
        <span>😔 Sad</span>
        <span>😐 Neutral</span>
        <span>😊 Happy</span>
      </div>
    </div>
  );
};

export default EmotionSlider;