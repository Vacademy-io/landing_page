"use client";

import { motion, type MotionProps } from "framer-motion";
import * as React from "react";

type MotionDivProps = React.ComponentPropsWithoutRef<"div"> & MotionProps;

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} {...props}>
        {children}
      </motion.div>
    );
  },
);

MotionDiv.displayName = "MotionDiv";


