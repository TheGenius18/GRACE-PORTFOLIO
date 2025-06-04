import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ThankYouMessage = ({ emotionLevel, feelingDescription, setFeelingDescription }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = () => {
    setSubmittedText(feelingDescription);
    setSubmitted(true);
    console.log("Feeling description:", feelingDescription);
  };

  return (
    <motion.div 
      className="mt-6 p-6 bg-gradient-to-r from-[#24025333] to-[#01092336] bg-opacity-10 rounded-xl shadow-md border border-[#1a6864]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-[cyan] mb-4">Thank you for sharing!</h3>
      <p className="text-[#ffffff] mb-4">
        Your feeling: {emotionLevel < 40 ? "😔 Sad" : emotionLevel < 60 ? "😐 Neutral" : "😊 Happy"} ({emotionLevel}%)
      </p>
      
      {!submitted ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="feeling-description" className="block text-sm font-medium text-[#00ffd9] mb-1">
              What makes you feel this way?
            </label>
            <input
              type="text"
              id="feeling-description"
              value={feelingDescription}
              onChange={(e) => setFeelingDescription(e.target.value)}
              className="w-full px-4 py-2 bg-cyan bg-opacity-10 border border-[#006e89] rounded-lg focus:ring-2 focus:ring-cyan focus:border-darkCyan"
              placeholder="Share what's on your mind..."
            />
          </div>
          
          <button
            className="px-6 py-2 border border-[darkCyan] text-[cyan] font-medium rounded-lg hover:border-[cyan] transition-colors duration-300"
            onClick={handleSubmit}
          >
            Submit Reflection
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-[#ffffff08] rounded-lg border border-[#1a686433]"
        >
          <p className="text-[#ffffff]">
            <span className="font-medium text-[#00ffd9]">Your reflection:</span> {submittedText}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ThankYouMessage;