import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function ScrollAnimTo({ children }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    return (
        <motion.div ref={ref} style={{ scaleY: scrollYProgress, opacity: scrollYProgress }}>
            {children}
        </motion.div>
    );
}