'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      {/* Title */}
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m an aspiring AI and software development enthusiast with hands-on experience in computer vision, 
          web development, and data visualization. I&apos;ve contributed to research-driven projects involving deep learning
          for object detection and tracking, and developed user-focused tools like an AI accessibility assistant and resume analyzer. 
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
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
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>PostgreSQL</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
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
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Shooting Stars Fellow</h3>
            <p className="text-primary mb-2">Shooting Stars Foundation • Aug 2024 – Aug 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Participated and executed multiple leadership programs.</li>
              <li>Helped organize and implement Scholarship and STEM Programs.</li>
              <li>Engaged with stakeholders to promote community involvement and outreach.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">AI Research Intern</h3>
            <p className="text-primary mb-2">Proglint • Jun 2025 – Jul 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Conducted literature reviews on state-of-the-art computer vision techniques.</li>
              <li>Assisted in dataset collection, annotation, and preprocessing.</li>
              <li>Implemented and fine-tuned deep learning models for object detection and tracking.</li>
              <li>Evaluated model performance and documented technical insights.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">CoachIn Mentee</h3>
            <p className="text-primary mb-2">LinkedIn • Mar 2025 – Jul 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Completed mentorship under the LinkedIn CoachIn program.</li>
              <li>Focused on improving knowledge in Data Structures, Algorithms, and Networking.</li>
              <li>Gained career guidance and technical exposure through hands-on sessions.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Web Development Intern</h3>
            <p className="text-primary mb-2">Plasmid • May 2024 – Jul 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed responsive web designs using HTML, CSS, JavaScript, and Bootstrap.</li>
              <li>Collaborated with mentors to adopt and apply industry best practices.</li>
              <li>Assisted in optimizing performance and enhancing user experience of web interfaces.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">B.Tech in Electronics and Communication with Artificial Intelligence</h3>
            <p className="text-primary mb-2">Indira Gandhi Delhi Technical University for Women • 2023 - 2027</p>
            <p className="text-secondary">
              Pursuing undergraduate studies with a focus on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
