import { Bounce, Fade } from 'react-awesome-reveal';
import Head from 'next/head';

export default function About() {
  return (
    <>
    <Head>
      <title>Aaron's Portfolio</title>
    </Head>
    <div className="About">
        <Bounce>
          <h1 className="text-center About-Title"> Who Am I!!!</h1>
        </Bounce>
        <Fade delay={1e3} cascade damping={0.1}>
          <p className="About-P text-center m-12">
            Full Stack | Front-end | Back-end web developer leveraging service
            industry background to build a more intuitive user experience on the
            web. Recently earned a certificate in full stack development from the
            University of Texas Austin Coding Bootcamp, with newly developed skills
            in JavaScript, CSS, Node.js, Mysql2, MongoDB, React.js, and responsive
            web design. Known as a hard-worker who focuses on developing code that
            solves the problem at hand, and as a team player I'm excited to leverage
            my skills as part of a fast-paced, quality-driven team to build better
            experiences with an application..
          </p>
        </Fade>
      </div>
      </>
  );
}

