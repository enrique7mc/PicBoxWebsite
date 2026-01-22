import { motion } from "framer-motion";
import { AccentSquare } from "../ui";
import styles from "./Testimonial.module.css";

export function Testimonial() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <AccentSquare
          color="gold"
          size={20}
          rotate={12}
          className={styles.accentTop}
        />

        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>
            Finally, a photo frame app that feels like it was made by people who
            actually care about design. My old iPad now lives on my desk and I
            couldn't be happier.
          </p>
          <footer className={styles.attribution}>
            <span className={styles.author}>Sarah M.</span>
            <span className={styles.role}>Early Beta Tester</span>
          </footer>
        </blockquote>

        <AccentSquare
          color="sage"
          size={14}
          rotate={-8}
          className={styles.accentBottom}
        />
      </motion.div>
    </section>
  );
}
