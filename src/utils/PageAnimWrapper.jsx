import { motion } from "framer-motion"
import { useTransition } from "../contexts/PageTransitionContext";

const PageAnimWrapper = ({children}) => {
    const { getTransitionDelay } = useTransition();

    const animations = {
        initial: {opacity: 0, y: 100},
        animate: {
            opacity: 1, y: 0,
            transition: {
                ease: [0.6, 0.01, 0.05, 0.95], 
                duration: 1.6,
                delay: getTransitionDelay()
            }
        },
        final: {opacity: 0, y: -100,
            transition: {
                duration: 0.6
            }
        },
    }

    return (
        <motion.div
            variants={animations}
            initial="initial" 
            animate="animate"
            exit="final" >
            {children}
        </motion.div>
    )
}

export default PageAnimWrapper