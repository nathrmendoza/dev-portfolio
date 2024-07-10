import { motion } from "framer-motion"

const animations = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], duration: 1.6
        }
    },
    final: {opacity: 0, y: -100,
        transition: {
            duration: 0.6
        }
    },
}

const PageAnimWrapper = ({children}) => {
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