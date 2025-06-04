import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import FeatureCard from "./FeatureCard";

const FeaturesContainer = () => {
  const features = [
    {
      title: "AI Symptom Screaning",
      summary:
        "21-question BDI (Beck Depression Inventory) assessment via AI chatbot to track depression symptoms.",
      details: [
        "Clinically validated BDI test evaluates depression severity",
        "AI chatbot provides instant, confidential results",
        "Personalized recommendations",
        "AI clinical intervew & cognitive screaning",
      ],
      iconName: "brain",
    },
    {
      title: "Your Therapy Journey",
      summary:
        "personalized support. real therapists, connect for sessions and chats",
      details: [
        "Algorithm matches you with specialists, Based on therapy approach, language, specializations",
        "Includes video sessions, secure messaging",
        "Customizable plans and progress tracking",
      ],
      iconName: "userMd",
    },
    {
      title: "Your Well-Being Toolkit",
      summary: "10+ evidence-based exercises & relaxation tools.",
      details: [
        "Mindfulness and calm",
        "CBT worksheets and coping strategies",
        "Skills Builders",
        "reflection and practice",
        "daily self-care",
      ],
      iconName: "heartbeat",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 ">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

export default FeaturesContainer;
