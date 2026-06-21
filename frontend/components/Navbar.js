import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="container">
        <Link href="/">
          <a className="logo">Jee Mock</a>
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/create-test">
              <a>Create Test</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
