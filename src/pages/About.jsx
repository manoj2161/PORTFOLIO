import ArrowLink from "../components/ArrowLink";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Router",
  "Context API",
  "Tailwind CSS",
  "API Integration",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "JWT Authentication",
  "bcrypt",
  "Git & GitHub",
];

function About() {
  return (
    <div className="w-full py-12 lg:py-20">
      <div className="gap-8 lg:grid-cols-[0.32fr_1fr]">
        <Reveal className="px-0 lg:pl-0 pb-4">
          <SectionLabel>About / Me</SectionLabel>
        </Reveal>
        <div>
          <Reveal className="border-4 border-black p-6 sm:p-10">
            <p className="font-mono text-xs font-bold uppercase">SHORT STORY</p>
            <h1 className="mt-7 max-w-5xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Frontend first.
              <br />
              Full stack next.
            </h1>
            <p className="mt-10 max-w-3xl text-base leading-7 sm:text-lg">
              I am a BCA graduate and MERN Stack Trainee at Apnitor Solutions,
              Mohali. I focus on building responsive interfaces with React,
              JavaScript, TypeScript, and Tailwind CSS while developing
              full-stack skills with Node.js, Express.js, MongoDB, and REST APIs.
              I learn by building practical projects, integrating APIs,
              implementing authentication, debugging issues, and improving my
              code. My projects include Habitly, a habit-tracking application,
              and Campusly, a college event registration portal.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-8 grid border-4 border-black sm:grid-cols-2"
          >
            <div className="border-b-4 border-black p-6 sm:border-r-4 sm:border-b-0">
              <p className="font-mono text-xs font-bold uppercase">CURRENT</p>
              <p className="mt-8 text-3xl font-black uppercase leading-none">
                MERN
                <br />
                TRAINEE
              </p>
              <p className="mt-4 font-mono text-xs uppercase">
                Apnitor Solutions / Mohali
              </p>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs font-bold uppercase">EDUCATION</p>
              <p className="mt-8 text-3xl font-black uppercase leading-none">
                BCA
                <br />
                GRADUATE
              </p>
              <p className="mt-4 font-mono text-xs uppercase">
                Career Point University
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
            <Reveal className="border-4 border-black p-6 sm:p-8">
              <SectionLabel number="02">Skills</SectionLabel>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`border-2 border-black p-4 font-mono text-sm font-bold uppercase transition duration-300 hover:bg-black hover:text-white ${index === skills.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    {String(index + 1).padStart(2, "0")} / {skill}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal
              delay={100}
              className="border-4 border-black bg-black p-6 text-white sm:p-8"
            >
              <SectionLabel number="03">Direction</SectionLabel>
              <p className="mt-10 text-4xl font-black uppercase leading-[0.88] tracking-[-0.05em]">
                Looking for a junior MERN role.
              </p>
              <p className="mt-6 text-sm leading-6 text-white/75">
                I want to contribute to real-world applications, strengthen my
                full-stack development skills, and work with a team where I can
                solve problems, learn from feedback, and grow as a developer.
              </p>
              <div className="mt-8 text-black">
                <ArrowLink to="/projects">See My Work</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
