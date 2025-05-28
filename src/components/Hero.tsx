import { motion } from "framer-motion";
import "../styles/Hero.scss";

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Bubbles */}
            <div className="bubbles">
                <span className="bubble bubble-1"></span>
                <span className="bubble bubble-2"></span>
                <span className="bubble bubble-3"></span>
                <span className="bubble bubble-4"></span>
                <span className="bubble bubble-5"></span>
            </div>
            {/* Background layers and decorations */}
            <div className="background-layer"></div>
            <div className="seaweed-3" style={{ left: "65%" }}>
                <div className="seaweed-inner"></div>
            </div>
            <div className="wreck"></div>

            {/* content */}
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
            >
                <h1>Jag är Anne-Lii</h1>
                <p>
                    Fullstackutvecklare med passion för backend, valar och vilda idéer.
                    Jag bygger digitala världar där API:er simmar fritt!
                </p>
                <motion.button
                    className="hero-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Dyk ner ↓
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
