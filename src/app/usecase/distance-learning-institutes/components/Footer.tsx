"use client";

import { motion } from "framer-motion";
import { Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

// 🎯 Footer content
const footerContent = {
  brand: {
    name: "Vacademy",
    tagline: "Making digital teaching effortless for educators worldwide.",
  },
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "FAQ", href: "/faq" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Get updates, tips, and news delivered to your inbox.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand / Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#ED7424] to-[#FF9B55] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <h3 className="font-heading text-2xl font-bold">
                  {footerContent.brand.name}
                </h3>
              </div>
              
              {/* Tagline */}
              <p className="font-body text-gray-300 leading-relaxed">
                {footerContent.brand.tagline}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="font-heading text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-gray-300 hover:text-white transition-colors duration-200 block"
                   
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources / Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="font-heading text-lg font-semibold mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerContent.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="font-body text-gray-300 hover:text-white transition-colors duration-200 block"
                   
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="font-heading text-lg font-semibold mb-6">
              {footerContent.newsletter.title}
            </h4>
            <p className="font-body text-gray-300 mb-4 text-sm">
              {footerContent.newsletter.description}
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footerContent.newsletter.placeholder}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED7424] focus:border-transparent transition-all duration-200"
                 
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-[#ED7424] to-[#FF9B55] text-white rounded-lg font-medium hover:brightness-110 transition-all duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">{footerContent.newsletter.buttonText}</span>
                  <span className="sm:hidden">Sub</span>
                </motion.button>
              </div>
              
              {/* Success Message */}
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm font-medium"
                >
                  ✓ Thank you for subscribing!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 my-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-body text-gray-400 text-sm">
              © 2024 Vacademy. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {footerContent.socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ED7424] transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
