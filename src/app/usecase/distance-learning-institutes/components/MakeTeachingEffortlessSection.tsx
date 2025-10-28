"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, BarChart3, Send } from "lucide-react";
import { useState, useEffect } from "react";

// 🎯 Section content
const sectionContent = {
  headline: "You bring the lessons. We'll do the legwork.",
  subtext: "Attendance, feedback, and progress updates — all automated.\nSession reminders and reports — sent on your behalf.\nStudent and parent summaries — ready before you ask.\nYou focus on teaching; everything else takes care of itself.",
};

// 📊 Timeline Steps
const timelineSteps = [
  {
    number: 1,
    icon: CheckCircle,
    title: "Attendance Tracked",
    description: "Automatically marked for all students",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: 2,
    icon: FileText,
    title: "Feedback Collected",
    description: "Student responses gathered instantly",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 3,
    icon: BarChart3,
    title: "Progress Report Generated",
    description: "Performance analytics compiled",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 4,
    icon: Send,
    title: "Summary Ready",
    description: "Student and parent notifications sent",
    color: "from-orange-500 to-red-500",
  },
];

export function MakeTeachingEffortlessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Auto-progress through timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % timelineSteps.length;
        if (next === 0) {
          setCompletedSteps([]);
        } else if (!completedSteps.includes(prev)) {
          setCompletedSteps((completed) => [...completed, prev]);
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [completedSteps]);

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ED7424 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {sectionContent.headline}
          </h2>
          <div className="max-w-4xl mx-auto">
            {sectionContent.subtext.split('\n').map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-body text-lg md:text-xl text-[#4B5563] leading-relaxed mb-2" 
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200 rounded-full" />
              
              {/* Animated Progress Line */}
              <motion.div
                className="absolute top-20 left-0 h-1 bg-gradient-to-r from-[#ED7424] to-[#FF9B55] rounded-full"
                initial={{ width: "0%" }}
                animate={{ 
                  width: activeStep === 0 ? "0%" : 
                         activeStep === 1 ? "33.33%" : 
                         activeStep === 2 ? "66.66%" : 
                         "100%" 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Moving Dot on Line */}
              <motion.div
                className="absolute top-[75px] w-4 h-4 bg-[#ED7424] rounded-full shadow-lg"
                animate={{ 
                  left: activeStep === 0 ? "0%" : 
                       activeStep === 1 ? "33.33%" : 
                       activeStep === 2 ? "66.66%" : 
                       "calc(100% - 16px)" 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#ED7424] rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Timeline Steps */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-4 gap-8 relative z-10"
              >
                {timelineSteps.map((step, index) => {
                  const isActive = activeStep === index;
                  const isCompleted = completedSteps.includes(index);
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        y: isActive ? -10 : 0,
                      }}
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      {/* Step Card */}
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                        isActive ? 'border-[#ED7424] shadow-xl' : 
                        isCompleted ? 'border-green-500 shadow-md' : 
                        'border-gray-200 shadow-md'
                      }`}>
                        {/* Icon Container */}
                        <div className="flex justify-center mb-4">
                          <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                            <step.icon className="w-10 h-10 text-white" />
                            
                            {/* Pulse Animation for Active */}
                            {isActive && (
                              <motion.div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                              />
                            )}

                            {/* Checkmark for Completed */}
                            {isCompleted && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                              >
                                <CheckCircle className="w-5 h-5 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Step Number */}
                        <div className="text-center mb-2">
                          <span className="text-xs font-semibold text-[#6B7280]">STEP {step.number}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-lg font-bold text-[#111827] text-center mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#6B7280] text-center leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
                          {step.description}
                        </p>

                        {/* Progress Bar for Active Step */}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED7424] to-[#FF9B55]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 3, ease: "linear" }}
                            style={{ transformOrigin: "left" }}
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="lg:hidden space-y-6">
            {timelineSteps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = completedSteps.includes(index);
              
              return (
                <div key={index} className="relative">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step Card */}
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                      isActive ? 'border-[#ED7424] shadow-xl' : 
                      isCompleted ? 'border-green-500 shadow-md' : 
                      'border-gray-200 shadow-md'
                    }`}>
                      <div className="flex items-start gap-4">
                        {/* Icon Container */}
                        <div className="flex-shrink-0">
                          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                            <step.icon className="w-8 h-8 text-white" />
                            
                            {/* Pulse Animation for Active */}
                            {isActive && (
                              <motion.div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                              />
                            )}

                            {/* Checkmark for Completed */}
                            {isCompleted && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                              >
                                <CheckCircle className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="mb-1">
                            <span className="text-xs font-semibold text-[#6B7280]">STEP {step.number}</span>
                          </div>
                          <h3 className="font-heading text-lg font-bold text-[#111827] mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar for Active Step */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED7424] to-[#FF9B55]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 3, ease: "linear" }}
                          style={{ transformOrigin: "left" }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Connecting Line (Mobile) */}
                  {index < timelineSteps.length - 1 && (
                    <div className="flex justify-center py-3">
                      <motion.div
                        className={`w-1 h-8 rounded-full ${
                          isCompleted || isActive ? 'bg-gradient-to-b from-[#ED7424] to-[#FF9B55]' : 'bg-gray-200'
                        }`}
                        animate={{
                          scaleY: isCompleted || isActive ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MakeTeachingEffortlessSection;
