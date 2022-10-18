import {Fade, Slide} from 'react-awesome-reveal' 
 import Head from "next/head";
 
export default function Home() {
  return (
    <>
    <Head>
      <title>Aaron's Portfolio</title>
    </Head>
    <section className="LandingPage text-center">
      <Slide>
        <h1 className="LandingPage-title mt-36">Hi I Am Aaron Anglin!!!</h1>
        </Slide>
        <section className="mt-12">
        <Fade delay={1e3} cascade damping={0.1}>
          <p className="LandingPage-Fade">
            I am a Front-End | Back-End | MERN Stack Developer!
          </p>
          </Fade>
        </section>
      </section>
      </>
    
  
);
}
   
     
