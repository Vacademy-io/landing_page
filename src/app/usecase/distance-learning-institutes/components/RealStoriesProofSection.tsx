"use client";

import { motion } from "framer-motion";
import { Quote, MapPin, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

// 🎯 Section content
const sectionContent = {
  headline: "Trusted by distance tutors worldwide.",
};

// 💬 Testimonials
const testimonials = [
  {
    quote: "I used to spend hours managing my batches. Now it all happens in the background — I finally have evenings free again.",
    author: "Ravi Kumar",
    role: "Physics Tutor",
    location: "Singapore",
  },
  {
    quote: "Vacademy transformed my teaching workflow. I can now focus on creating great content instead of administrative tasks.",
    author: "Sarah Chen",
    role: "Mathematics Teacher",
    location: "United States",
  },
  {
    quote: "The automation is incredible. My students get timely updates and I don't have to manually track everything anymore.",
    author: "Ahmed Hassan",
    role: "Chemistry Instructor",
    location: "UAE",
  },
  {
    quote: "Best decision I made for my online tutoring business. Everything just works seamlessly in the background.",
    author: "Maria Rodriguez",
    role: "Language Teacher",
    location: "Spain",
  },
];

// 📍 Locations (for global map visualization)
const locations = [
  { city: "New York", tutors: 180, top: "30%", left: "20%" },
  { city: "London", tutors: 150, top: "25%", left: "48%" },
  { city: "Singapore", tutors: 140, top: "65%", left: "75%" },
  { city: "Dubai", tutors: 120, top: "40%", left: "55%" },
  { city: "Sydney", tutors: 95, top: "80%", left: "85%" },
  { city: "Toronto", tutors: 110, top: "28%", left: "18%" },
  { city: "Berlin", tutors: 100, top: "27%", left: "50%" },
];

// 👥 Educator Placeholders
const educators = [
  { name: "Sarah C.", subject: "Mathematics", location: "USA" },
  { name: "Ahmed H.", subject: "Chemistry", location: "UAE" },
  { name: "Li Wei", subject: "Biology", location: "Singapore" },
  { name: "Emma B.", subject: "Physics", location: "UK" },
  { name: "Carlos M.", subject: "English", location: "Spain" },
  { name: "Yuki T.", subject: "Economics", location: "Japan" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function RealStoriesProofSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6">
            {sectionContent.headline}
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16 relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-0 flex-[0_0_100%] px-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 opacity-10">
                      <Quote className="w-20 h-20 text-[#ED7424]" />
                    </div>

                    {/* Quote */}
                    <div className="relative z-10">
                      <p className="font-body text-2xl md:text-3xl text-[#111827] leading-relaxed mb-8 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#ED7424] to-[#FF9B55] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-heading text-lg font-bold text-[#111827]">
                            {testimonial.author}
                          </div>
                          <div className="font-body text-sm text-[#6B7280]">
                            {testimonial.role}, {testimonial.location}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-[#ED7424] text-[#ED7424]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#ED7424]/10 to-transparent rounded-tl-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#ED7424] hover:bg-[#ED7424] hover:text-white transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#ED7424] hover:bg-[#ED7424] hover:text-white transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 bg-gradient-to-r from-[#ED7424] to-[#FF9B55]"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Visual Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 relative overflow-hidden"
          >
            <h3 className="font-heading text-2xl font-bold text-[#111827] mb-6">
              Global Reach
            </h3>
            
            {/* Global Map Representation */}
            <div className="relative h-96 bg-gradient-to-br from-[#F8FAFC] to-[#E8EAF6] rounded-2xl overflow-hidden">
              {/* Map placeholder - world map */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 50 Q 50 30, 100 50 T 200 50" stroke="#ED7424" strokeWidth="0.5" fill="none"/>
                  <circle cx="20" cy="30" r="15" fill="#ED7424"/>
                  <circle cx="100" cy="50" r="20" fill="#ED7424"/>
                  <circle cx="170" cy="65" r="12" fill="#ED7424"/>
                </svg>
              </div>

              {/* City Markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="absolute cursor-pointer group"
                  style={{ top: location.top, left: location.left }}
                >
                  {/* Pin */}
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="w-8 h-8 bg-gradient-to-br from-[#ED7424] to-[#FF9B55] rounded-full shadow-lg flex items-center justify-center"
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    
                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 bg-[#ED7424] rounded-full"
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                        <div className="font-semibold">{location.city}</div>
                        <div className="text-gray-300">{location.tutors}+ tutors</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#ED7424]/10 to-[#FF9B55]/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#ED7424]">1000+</div>
                <div className="text-sm text-[#6B7280]">Active Tutors</div>
              </div>
              <div className="bg-gradient-to-br from-[#ED7424]/10 to-[#FF9B55]/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-[#ED7424]">50+</div>
                <div className="text-sm text-[#6B7280]">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Educator Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-[#111827] mb-6">
              Educators We Support
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {educators.map((educator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
                >
                  {/* Avatar Placeholder */}
                  <div className="w-full aspect-square bg-gradient-to-br from-[#ED7424] to-[#FF9B55] rounded-xl mb-3 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                    {educator.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <div className="font-heading text-sm font-bold text-[#111827] mb-1">
                      {educator.name}
                    </div>
                    <div className="text-xs text-[#6B7280] mb-1">{educator.subject}</div>
                    <div className="flex items-center justify-center gap-1 text-xs text-[#ED7424]">
                      <MapPin className="w-3 h-3" />
                      {educator.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-heading text-lg font-bold text-[#111827]">
                    Growing Global Community
                  </div>
                  <div className="text-sm text-[#6B7280]">Join tutors from around the world who trust Vacademy</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default RealStoriesProofSection;

