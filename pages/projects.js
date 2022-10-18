import {Bounce, Slide} from 'react-awesome-reveal'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
    <Head>
      <title>Aaron's Portfolio</title>
    </Head>
    <div className="Project Contact grid  leading-10  place-items-center">
    <Bounce>
    <h1 className="Project-title ">Projects</h1>
    
    <h3 className="Project-scroll mt-8">
      If you want to see more projects please scroll down!!
    </h3>
    <h3>You can also click the image to take you to the app site!!</h3>
    </Bounce>
    <div className="Project-content1 m-8">
      <div className="Project-content">
        <div className="Project-Github">
          <Link
          href="https://www.github.com/aanglin/pokemon" 
          >
            <a 
          target="_blank" 
          rel="noreferrer"
            >
            <svg
            className='mt-8'
              stroke="currentColor"
              href="github.com"
              fill="black"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="3em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
            </a>
          </Link>
        </div>

        <Link
          href="https://aanglin.github.io/pokemon"
          title="Pokemon"
          >
          <a
          className="Project-Portfolio m-32"
          target="_blank"
          rel="noreferrer"
          >
          <Image
          src="/images/pokemon.png"
          alt="..." 
          height={400}
          width={900}
          />
          </a>
        </Link>
      </div>

      <div className="Project-content">
          <Slide>
        <p className="Project-description text-center pl-64">
          A pokemon card game that builds on the concepts of props and how
          they are passed down from the parent element. Created with css.
        </p>
        </Slide>
      </div>
    </div>
    <div className="Project-content1 m-8">
      <div className="Project-content">
        <div className="Project-Github">
          <Link
           href="https://www.github.com/aanglin/lotto" 
           >
            <a
             target="_blank" 
             rel="noreferrer"
            >
            <svg
            className='mt-8'
              stroke="currentColor"
              href="github.com"
              fill="black"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="3em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
            </a>
          </Link>
        </div>
        <Link
          href="https://aanglin.github.io/lotto"
          
          title="Lotto"
        >
          <a 
          className="Project-Portfolio1 m-32"
          target="_blank"
          rel="noreferrer"
          >
          <Image
          src="/images/lotto.png" 
          alt="..."
          height={400}
          width={900}
          />
          </a>
        </Link>
      </div>

      <div className="Project-content">
        <Slide>
        <p className="Project-description text-center pl-64">
          This lotto program is a training reference for react using state and
          props. It was to further training on React State Patterns. Some
          basic css was used to style.
        </p>
        </Slide>
      </div>
    </div>
    <div className="Project-content1 m-8">
      <div className="Project-content">
        <div className="Project-Github">
          <Link
          href="https://www.github.com/aanglin/colorbox" 
          >
            <a
            target="_blank" 
            rel="noreferrer"
            >
            <svg
            className='mt-8'
              stroke="currentColor"
              href="github.com"
              fill="black"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="3em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
            </a>
          </Link>
        </div>
        <Link
          href="https://aanglin.github.io/colorbox"
          title="Colorbox"
        >
          <a
          className="Project-Portfolio2 m-32"
          target="_blank"
          rel="noreferrer"
          >
          <Image
          src="/images/colorbox.png" 
          alt="..."
          height={400}
          width={900}
          />
          </a>
        </Link>
      </div>

      <div className="Project-content">
        <Slide>
        <p className="Project-description text-center pl-64">
        
          This colorbox program made using react uses state and props and
          event handlers. It is to showcase knowledge of how to change state
          and parent and child components. It also had props in it. Some css
          was used to style.
        </p>
        </Slide>
      </div>
    </div>
    <div className="Project-content1 m-8">
      <div className="Project-content">
        <div className="Project-Github">
          <Link 
          href="https://www.github.com/aanglin/dice"
           >
            <a
            target="_blank" 
            rel="noreferrer"
            >
            <svg
            className='mt-8'
              stroke="currentColor"
              href="github.com"
              fill="black"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="3em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
                ></path>
            </svg>
                </a>
          </Link>
        </div>
        <Link
          href="https://aanglin.github.io/dice"
          title="Dice"
          
        >
          <a
          className="Project-Portfolio3 m-32"
          target="_blank"
          rel="noreferrer"
          >
          <Image
          src="/images/dice.png" 
          alt="..." 
          height={400}
          width={900}
          />
          </a>
        </Link>
      </div>

      <div className="Project-content">
        <Slide>
        <p className="Project-description text-center pl-64">
          
          This dice program is a training reference for react using state. It
          is to showcase knowledge of how to change state and parent and child
          components. It also had props in it. Some css was used to style.{" "}
        </p>
        </Slide>
      </div>
    </div>
    <div className="Project-content1 m-8">
      <div className="Project-content">
        <div className="Project-Github">
          <Link
            href="https://www.github.com/aanglin/coinflipper"
            >
            <a
            target="_blank"
            rel="noreferrer"
            >
            <svg
            className='mt-8'
              stroke="currentColor"
              href="github.com"
              fill="black"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="3em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
            </a>
          </Link>
        </div>
        <Link
          href="https://aanglin.github.io/coinflipper"
          title="Coinflipper"
          >
          <a
          className="Project-Portfolio4 m-32"
          target="_blank"
          rel="noreferrer">
          <Image 
          src="/images/coinflipper.png" 
          alt="..."
          height={400}
          width={900}
          />
          </a>
        </Link>
      </div>

      <div className="Project-content">
        <Slide>
        <p className="Project-description text-center pl-64">
          
          This coin flipper program builds upon the fundamentals of react by
          using state and props. It was to further training on how to change
          state and parent and child components. Css was used to style.
        </p>
        </Slide>
      </div>
    </div>
  </div>
  </>
  );
}
