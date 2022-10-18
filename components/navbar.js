import Link from "next/link";

export default function Navbar() {
  return (
    <div className="Navigation">
      <ul className="nav-tabs">
        <li className="nav-item ">
          <Link href="/" id="anchor">
            <a>Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" id="anchor">
            <a>About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects" id="anchor">
            <a>Projects</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" id="anchor">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
    
