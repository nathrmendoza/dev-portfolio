import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const LogoAnimWrapper = ({children}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            style={{ display: 'inline-block', position: 'relative' }}
        >
            <AnimatePresence>
            {hovered && (
                <>
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: -10, opacity: 0.75 }}
                        exit={{ y: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        key="svg1"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    >
                        {children}
                    </motion.div>
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: -5, opacity: 0.5 }}
                        exit={{ y: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        key="svg2"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    >
                        {children}
                    </motion.div>
                </>
            )}
            </AnimatePresence>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: hovered ? -15 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default LogoAnimWrapper