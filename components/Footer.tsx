import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="brand">
            Kast<span style={{ color: "#C9A84C" }}>zer</span>
          </Link>
          <p>
            A multi-vertical company building thoughtful work across software, skin care,
            coffee, and real estate.
          </p>
          <p>
            <a href="mailto:operations@kastzer.com">operations@kastzer.com</a>
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {year} Kastzer. All rights reserved.</span>
        <span>Engineering the future. Nurturing the present.</span>
      </div>
    </footer>
  );
}
