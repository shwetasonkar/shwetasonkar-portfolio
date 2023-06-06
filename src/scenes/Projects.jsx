import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-200 w-100 opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-20 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">

        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-40 pb-40">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Here , are my few projects to show !
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
           {/* ROW 1 */}
           <div className="flex justify-center text-center items-center p-22 h-300 w-600 bg-red text-4xl font-playfair font-semibold">
  TO-DO APPLICATION USING FLASK AND PYTHON
</div>
          <Project title="Project 1" />
          <div
            className="flex justify-center text-center items-center p-22 bg-blue
              max-w-[900px] max-h-[600px] text-4xl font-playfair font-semibold"
          >
             E-COMMERCE WEB PORTAL USING REACTJS
          </div>
          <Project title="Project 2" />
          <div
            className="flex justify-center text-center items-center p-22 bg-red
              max-w-[900px] max-h-[600px] text-4xl font-playfair font-semibold"
          >
            EXPENSE TRACKER APP USING MERN STACK
          </div>
          <Project title="Project 3" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
