import {Bounce} from 'react-awesome-reveal'
import Link from "next/link";
import Head from 'next/head';

export default function Contact() {
    return (
      <>
       <Head>
      <title>Aaron's Portfolio</title>
    </Head>
      <div className="Contact grid  leading-10  place-items-center">
      <Bounce>
        <h1 className="Contact-title m-40">Contact Me</h1>
        <p className="Contact-P">
          If you would like to get intouch with me, you can email me at{" "}
          <a href="mailto:aaron.anglin101@gmail.com">
            aaron.anglin101@gmail.com
          </a>
        </p>
        <br></br>
        <p className="Contact-P m-12">
          You can also visit my Github page as well as my Linkedin page.
        </p>
      
      
        <div className="Contact-Links flex m-12">
          <Link
          href="https://www.github.com/aanglin/" 
          >
            <a
            target="_blank" 
            rel="noreferrer"
            >
            <svg
              stroke="currentColor"
              href="github.com"
              fill="#E6B45A"
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
  
          <Link
           href="https://www.linkedin.com/in/aaronanglin/" 
           >
            <a
            target="_blank" 
            rel="noreferrer"
            >
            <svg
              stroke="currentColor"
              fill="#E6B45A"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="3em"
              width="10em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
            </svg>
            </a>
          </Link>
        </div>
        </Bounce>
    </div>
    </>
    );
  }
  