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
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
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
    <section id="projects" className="pt-48 pb-48">
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
           <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[750px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            TO-DO APPLICATION USING FLASK
          </div>
          <Project title="Project 1" />

          {/* ROW 3 */}
          <Project title="Project 2" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[750px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
             E-COMMERCE WEB PORTAL USING MERN
          </div>
          </div>
          <Project title="Project 1" />

          {/* ROW 3 */}
          <Project title="Project 2" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[750px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
             E-COMMERCE WEB PORTAL USING MERN
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
