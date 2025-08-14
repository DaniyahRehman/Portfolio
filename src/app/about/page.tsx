'use client';

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
} from "@/utils/animations";
import type { MotionProps } from "framer-motion";

// Safely type card hover animations
const cardHover: MotionProps = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
};

const cardHoverSmall: MotionProps = {
  whileHover: { scale: 1.01 },
  transition: { type: "spring", stiffness: 250 },
};

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={fadeInDown}
        initial="hidden"
        animate="show"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        className="mb-16"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m an aspiring AI and software development enthusiast with
          hands-on experience in computer vision, web development, and data
          visualization. I&apos;ve contributed to research-driven projects
          involving deep learning for object detection and tracking, and
          developed user-focused tools like an AI accessibility assistant and
          resume analyzer.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            transition={cardHover.transition}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
              <li>JavaScript</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            transition={cardHover.transition}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            transition={cardHover.transition}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>VS Code</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-16"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Experience
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Shooting Stars Fellow",
              org: "Shooting Stars Foundation",
              duration: "Aug 2024 – Aug 2025",
              bullets: [
                "Participated and executed multiple leadership programs.",
                "Helped organize and implement Scholarship and STEM Programs.",
                "Engaged with stakeholders to promote community involvement and outreach.",
              ],
            },
            {
              title: "AI Research Intern",
              org: "Proglint",
              duration: "Jun 2025 – Jul 2025",
              bullets: [
                "Conducted literature reviews on state-of-the-art computer vision techniques.",
                "Assisted in dataset collection, annotation, and preprocessing.",
                "Implemented and fine-tuned deep learning models for object detection and tracking.",
                "Evaluated model performance and documented technical insights.",
              ],
            },
            {
              title: "CoachIn Mentee",
              org: "LinkedIn",
              duration: "Mar 2025 – Jul 2025",
              bullets: [
                "Completed mentorship under the LinkedIn CoachIn program.",
                "Focused on improving knowledge in Data Structures, Algorithms, and Networking.",
                "Gained career guidance and technical exposure through hands-on sessions.",
              ],
            },
            {
              title: "Web Development Intern",
              org: "Plasmid",
              duration: "May 2024 – Jul 2024",
              bullets: [
                "Developed responsive web designs using HTML, CSS, JavaScript, and Bootstrap.",
                "Collaborated with mentors to adopt and apply industry best practices.",
                "Assisted in optimizing performance and enhancing user experience of web interfaces.",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              whileHover={cardHoverSmall.whileHover}
              transition={cardHoverSmall.transition}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-primary mb-2">
                {item.org} • {item.duration}
              </p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
            transition={cardHoverSmall.transition}
          >
            <h3 className="text-xl font-semibold mb-2">
              B.Tech in Electronics and Communication with Artificial Intelligence
            </h3>
            <p className="text-primary mb-2">
              Indira Gandhi Delhi Technical University for Women • 2023 - 2027
            </p>
            <p className="text-secondary">
              Pursuing undergraduate studies with a focus on software
              engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
