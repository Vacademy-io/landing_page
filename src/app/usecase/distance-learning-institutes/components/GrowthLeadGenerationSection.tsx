"use client";

import { motion } from "framer-motion";
import { Search, Mail, CheckCircle, Bell, Clock } from "lucide-react";
import { useState, useEffect } from "react";

// 🎯 Section content
const sectionContent = {
  headline: "More teaching. Less marketing.",
  subtext: "You don't need to run ads or chase leads. We quietly help you attract and manage new students while you teach.",
  bottomText: "Your next student could already be in your inbox — you just teach, we handle the rest.",
};

// 🔄 Workflow Steps
const workflowSteps = [
  {
    number: 1,
    icon: Search,
    title: "New Lead Detected",
    description: "Priya discovered your Math course",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    icon: Mail,
    title: "AI Sends Invite",
    description: "Personalized message sent automatically",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Enrollment Confirmed",
    description: "Priya enrolled in Advanced Math",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: 4,
    icon: Bell,
    title: "You're Notified",
    description: "New student joined your batch!",
    color: "from-orange-500 to-red-500",
  },
];

export function GrowthLeadGenerationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Cycle through steps automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-white py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#ED7424 1px, transparent 1px), linear-gradient(90deg, #ED7424 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
          <p className="font-body text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
            {sectionContent.subtext}
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 p-6 md:p-10 relative overflow-hidden"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-[#111827]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Live Automation Dashboard
              </h3>
              <p className="text-sm text-[#6B7280] mt-1">Watching your leads in real-time</p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700">Active</span>
            </motion.div>
          </div>

          {/* Workflow Steps Container */}
          <div className="space-y-0">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.02 : 1,
                    opacity: activeStep === index ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                    activeStep === index ? 'border-[#ED7424] shadow-xl' : 'border-gray-200 shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                        {activeStep === index && (
                          <motion.div
                            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color}`}
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.3, opacity: 0 }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#6B7280]">STEP {step.number}</span>
                        {activeStep === index && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-1 text-xs font-medium text-[#ED7424]"
                          >
                            <Clock className="w-3 h-3" />
                            Processing...
                          </motion.div>
                        )}
                      </div>
                      <h4 className="font-heading text-lg font-bold text-[#111827] mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Karla, sans-serif' }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex-shrink-0">
                      {activeStep > index ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      ) : activeStep === index ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 rounded-full border-3 border-[#ED7424] border-t-transparent"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-semibold text-sm">
                          {step.number}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {activeStep === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ED7424] to-[#FF9B55]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 3.5, ease: "linear" }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.div>

                {/* Connecting Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <motion.div
                      className="w-0.5 h-8 bg-gradient-to-b from-[#ED7424] to-transparent"
                      animate={{
                        scaleY: activeStep >= index ? 1 : 0.3,
                        opacity: activeStep >= index ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Notification Popup */}
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-200 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#ED7424] to-[#FF9B55] flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#111827] mb-1">New Activity</h5>
                  <p className="text-xs text-[#6B7280]">{workflowSteps[activeStep].description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-body text-lg md:text-xl text-[#4B5563] font-medium italic" style={{ fontFamily: 'Karla, sans-serif' }}>
            {sectionContent.bottomText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default GrowthLeadGenerationSection;
