import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Face = ({ emotionLevel, scaleLevel, blushOpacity }) => {
  const [eyeDirection, setEyeDirection] = useState({ x: 0, y: 0 });
  const [headRotation, setHeadRotation] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);
  const [lastBlinkTime, setLastBlinkTime] = useState(Date.now());
  const faceRef = useRef();
  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  // Enhanced cursor tracking with head movement and precise eye boundaries
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!faceRef.current || !eyeLeftRef.current || !eyeRightRef.current) return;
      
      const faceRect = faceRef.current.getBoundingClientRect();
      const faceCenterX = faceRect.left + faceRect.width / 2;
      const faceCenterY = faceRect.top + faceRect.height / 2;
      
      // Calculate cursor position relative to face center
      const cursorX = e.clientX - faceCenterX;
      const cursorY = e.clientY - faceCenterY;
      
      // Calculate head rotation based on cursor position (subtle movement)
      const headRotationX = Math.min(Math.max(cursorY / (faceRect.height * 2), 0.1));
      const headRotationY = Math.min(Math.max(cursorX / (faceRect.width * 3), -0.2), 0.2);
      setHeadRotation({ x: headRotationX, y: headRotationY });
      
      // Get eye elements' positions
      const leftEyeRect = eyeLeftRef.current.getBoundingClientRect();
      const rightEyeRect = eyeRightRef.current.getBoundingClientRect();
      
      // Calculate pupil positions for each eye with boundary constraints
      const calculatePupilPosition = (eyeRect) => {
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        // Relative position from eye center (-1 to 1 range)
        let relX = (e.clientX - eyeCenterX) / (eyeRect.width * 0.8);
        let relY = (e.clientY - eyeCenterY) / (eyeRect.height * 0.8);
        
        // Apply boundary constraints (elliptical boundary)
        const distance = Math.sqrt(relX * relX + relY * relY);
        if (distance > 1) {
          relX /= distance;
          relY /= distance;
        }
        
        // Apply non-linear response curve for more natural movement
        relX = Math.sign(relX) * Math.pow(Math.abs(relX), 1.5);
        relY = Math.sign(relY) * Math.pow(Math.abs(relY), 1.5);
        
        return { x: relX, y: relY };
      };
      
      const leftPupil = calculatePupilPosition(leftEyeRect);
      const rightPupil = calculatePupilPosition(rightEyeRect);
      
      // Average the eye movements for consistent direction
      setEyeDirection({
        x: (leftPupil.x + rightPupil.x) / 2,
        y: (leftPupil.y + rightPupil.y) / 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random blinking mechanism
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      const now = Date.now();
      if (now - lastBlinkTime > 3000 + Math.random() * 4000) {
        setBlink(true);
        setTimeout(() => setBlink(false), 100 + Math.random() * 100);
        setLastBlinkTime(now);
      }
    }, 100);
    return () => clearInterval(blinkInterval);
  }, [lastBlinkTime]);

  const getFaceExpression = () => {
    if (emotionLevel < 20) return 'extreme-sad';
    if (emotionLevel < 40) return 'sad';
    if (emotionLevel < 60) return 'neutral';
    if (emotionLevel < 80) return 'happy';
    return 'extreme-happy';
  };

  const expression = getFaceExpression();
  
  // Calculate pupil offsets with limits
  const maxPupilMovement = 6;
  const pupilOffsetX = eyeDirection.x * maxPupilMovement;
  const pupilOffsetY = eyeDirection.y * maxPupilMovement;

  // Mouth paths
  const mouthVariants = {
    'extreme-sad': { d: "M60,110 Q90,90 120,110", strokeWidth: 3 },
    'sad': { d: "M60,100 Q90,90 120,100", strokeWidth: 3 },
    'neutral': { d: "M60,95 Q90,95 120,95", strokeWidth: 3 },
    'happy': { d: "M60,90 Q90,110 120,90", strokeWidth: 3 },
    'extreme-happy': { d: "M50 80 Q90 120 130 80", strokeWidth: 3 }
  };

  return (
    <motion.div 
      ref={faceRef}
      className="face-container mb-12 w-72 h-[18.5rem] relative"
      style={{ scale: scaleLevel }}
    >
      {/* Face base with head rotation */}
      <motion.div 
        className="bg-[#FFf] rounded-full w-full h-full relative overflow-hidden shadow-lg"
        animate={{
          rotateX: `${headRotation.x * 10}deg`,
          rotateY: `${headRotation.y * 10}deg`,
          rotate: emotionLevel > 70 ? [0, 3, -3, 0] : [0],
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          duration: emotionLevel > 70 ? 4 : 0.3,
          repeat: emotionLevel > 70 ? Infinity : 0,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: `
            0 4px 8px rgba(0, 0, 0, 0.5),
            inset 0 -10px 20px -4px rgba(139, 69, 19, 1),
            inset 0 10px 20px -4px rgba(139, 69, 19, 1)
          `,
          background: `
            radial-gradient(
              circle at 20% 20%,
              rgba(255, 255, 190, 0.9) 0%,
              rgba(255, 255, 177, 1) 20%,
              #FF8 60%
            )
          `,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Shiny spot */}
        <div className="absolute top-[15%] left-[25%] w-8 h-8 bg-white rounded-full opacity-80 blur-[6px]"></div>
        
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              transparent 60%,
              rgba(139, 69, 19, 0.3) 100%
            )
          `
        }}></div>

        <Eyebrows expression={expression} />
        <Eyes 
          pupilOffsetX={pupilOffsetX} 
          pupilOffsetY={pupilOffsetY} 
          blink={blink}
          emotionLevel={emotionLevel}
          leftEyeRef={eyeLeftRef}
          rightEyeRef={eyeRightRef}
        />
        <Mouth expression={expression} mouthVariants={mouthVariants} />
        <Blush blushOpacity={blushOpacity} emotionLevel={emotionLevel} />
      </motion.div>
    </motion.div>
  );
};

const Eyebrows = ({ expression }) => (
  <div className="absolute top-[25%] w-full flex justify-center space-x-16">
    {/* Left eyebrow */}
    <motion.div 
      className="w-12 h-2 bg-[#371b07] rounded-full relative"
      animate={{
        y: expression.includes('happy') ? 2 : expression.includes('sad') ? -1 : 0,
        rotate: expression.includes('happy') ? -4 : expression.includes('sad') ? -15 : 0,
        scaleX: 0.9,
        scaleY: expression.includes('happy') ? 1.2 : 1
      }}
      style={{
        clipPath: 'ellipse(50% 50% at 50% 50%)',
        transformOrigin: 'center center'
      }}
    >
      <div className="absolute inset-0 bg-[#371b07] rounded-full" 
            style={{ clipPath: 'ellipse(50% 30% at 50% 50%)' }} />
    </motion.div>
    
    {/* Right eyebrow */}
    <motion.div 
      className="w-12 h-2 bg-[#2d1606] rounded-full relative"
      animate={{
        y: expression.includes('happy') ? 2 : expression.includes('sad') ? -1 : 0,
        rotate: expression.includes('happy') ? 4 : expression.includes('sad') ? +15 : 0,
        scaleX: 0.9,
        scaleY: expression.includes('happy') ? 1.2 : 1
      }}
      style={{
        clipPath: 'ellipse(50% 50% at 50% 50%)',
        transformOrigin: 'center center'
      }}
    >
      <div className="absolute inset-0 bg-[#2d1606] rounded-full" 
            style={{ clipPath: 'ellipse(50% 30% at 50% 50%)' }} />
    </motion.div>
  </div>
);

const Eyes = ({ pupilOffsetX, pupilOffsetY, blink, emotionLevel, leftEyeRef, rightEyeRef }) => (
  <div className="absolute top-[35%] w-full flex justify-center space-x-16">
    <Eye 
      pupilOffsetX={pupilOffsetX} 
      pupilOffsetY={pupilOffsetY} 
      side="left" 
      blink={blink}
      emotionLevel={emotionLevel}
      eyeRef={leftEyeRef}
    />
    <Eye 
      pupilOffsetX={pupilOffsetX} 
      pupilOffsetY={pupilOffsetY} 
      side="right" 
      blink={blink}
      emotionLevel={emotionLevel}
      eyeRef={rightEyeRef}
    />
  </div>
);

const Eye = ({ pupilOffsetX, pupilOffsetY, side, blink, emotionLevel, eyeRef }) => {
  // Calculate additional movement based on emotion level
  const emotionMovement = emotionLevel > 70 ? Math.sin(Date.now() / 300) * 0.5 : 0;
  
  return (
    <div className="relative" ref={eyeRef}>
      {/* Eyelash */}
      <div 
        className={`absolute -top-[-1rem] ${side === 'left' ? '-left-4' : '-right-4'} w-5 h-2`}
        style={{
          clipPath: side === 'left' 
            ? 'polygon(0 100%, 100% 0, 100% 100%)' 
            : 'polygon(0 0, 100% 100%, 0 100%)',
          background: '#371b07',
          transform: side === 'left' ? 'rotate(+10deg)' : 'rotate(-10deg)'
        }}
      />
      
      {/* Eye container */}
      <motion.div 
        className="w-10 h-[3.1rem] bg-white rounded-full relative overflow-hidden shadow-md"
        animate={{
          height: blink ? '0.1rem' : '3.1rem',
          y: blink ? '1.5rem' : 0,
        }}
        transition={{
          duration: 0.1,
          ease: 'easeOut'
        }}
      >
        {!blink && (
          <div className="absolute inset-1 bg-[#ffffff] rounded-full overflow-hidden">
            {/* Pupil with precise boundary constraints */}
            <motion.div 
              className="absolute top-[25%] left-[18%] w-6 h-6 bg-[#09545b] rounded-full overflow-hidden"
              style={{
                transform: `translate(calc(-50% + ${pupilOffsetX}px), calc(-50% + ${pupilOffsetY}px))`,
                boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.3)'
              }}
              animate={{
                x: pupilOffsetX + emotionMovement,
                y: pupilOffsetY + emotionMovement,
                scale: emotionLevel > 70 ? [1, 1.05, 1] : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 25,
                mass: 0.5,
                restDelta: 0.001
              }}
            >
              <div className="absolute inset-0 bg-[#042a30] rounded-full"></div>
              <div className="absolute top-1 left-3 w-3 h-3 bg-white rounded-full opacity-90 blur-[1px]"></div>
              <div className="absolute top-3 left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
              <div 
                className="absolute top-2 left-2 w-1 h-1 bg-[#00e5ff] rounded-full opacity-70"
                style={{ boxShadow: '0 0 4px rgba(0, 229, 255, 0.8)' }}
              ></div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Mouth = ({ expression, mouthVariants }) => (
  <svg 
    className="absolute bottom-[23%] left-[50%] transform -translate-x-1/2 z-10" 
    width="180" 
    height="100" 
    viewBox="0 0 180 110"
  >
    <motion.path
      initial={mouthVariants['neutral']}
      animate={mouthVariants[expression]}
      fill="#f01"
      stroke="#371b07"
      strokeLinecap="round"
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 15,
        duration: 0.3
      }}
    />
  </svg>
);

const Blush = ({ blushOpacity, emotionLevel }) => (
  <>
    <motion.div 
      className="absolute top-[50%] left-[15%] w-10 h-8 rounded-full opacity-0"
      style={{ 
        opacity: blushOpacity,
        filter: "drop-shadow(0 0 30px rgba(255, 5, 46, 0.9))",
        background: "radial-gradient(circle, #ff052e 30%, rgba(255,5,46,0.9) 100%)"
      }}
      animate={{
        scale: emotionLevel > 70 ? [1, 1.1, 1] : 1
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror"
      }}
    />
    <motion.div 
      className="absolute top-[50%] right-[15%] w-10 h-8 rounded-full opacity-0"
      style={{ 
        opacity: blushOpacity,
        filter: "drop-shadow(0 0 30px rgba(255, 5, 46, 1))",
        background: "radial-gradient(circle, #ff052e 30%, rgba(255,5,46,1) 100%)"
      }}
      animate={{
        scale: emotionLevel > 70 ? [1, 1.1, 1] : 1
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror"
      }}
    />
  </>
);

export default Face;