import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";


const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          <p className="font-playfair font-semibold text-3xl mb-5">

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
          <p className="text-6xl font-playfair z-10 text-center md:text-start text-black">
          <div class="icon-container">
  <div class="icon-line">
    <i class="devicon-c-plain colored"></i>
    <i class="devicon-cplusplus-plain colored"></i>
    <i class="devicon-html5-plain-wordmark colored"></i>
    <i class="devicon-css3-plain-wordmark colored"></i>
    <i class="devicon-javascript-plain colored"></i>
    <i class="devicon-java-plain-wordmark colored"></i>

  </div>
  <div class="icon-line" >

  <i class="devicon-python-plain-wordmark colored"></i>
    <i class="devicon-mysql-plain-wordmark colored"></i>
    <i class="devicon-mongodb-plain-wordmark colored"></i>
    <i class="devicon-react-original-wordmark colored"></i>
    <i class="devicon-nodejs-plain-wordmark colored"></i>
    <i class="devicon-express-original-wordmark colored"></i>
    <i class="devicon-flask-original-wordmark"></i>
  </div>
</div>

                </p>
    </p>
    </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-13" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}


  <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-12">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">01  Creative</p>
              <p className="font-playfair font-semibold text-2xl mt-3">

              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Creative and curious person
          and do experiment with
          different mediums.

          </p>
    </motion.div>



        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-12">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">02 Innovative</p>
              <p className="font-playfair font-semibold text-2xl mt-3">

              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Like to explore new
          stuffs and do new things.

          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-12">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">03 Visionary</p>
              <p className="font-playfair font-semibold text-2xl mt-3">

              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Thoughful personality and take inspiration from the surroundings.

          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
