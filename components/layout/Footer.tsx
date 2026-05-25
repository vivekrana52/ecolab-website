import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
}

const solutionLinks: FooterLink[] = [
  { name: 'Real Estate', href: '/solutions/real-estate' },
  { name: 'Gyms', href: '/solutions/gyms' },
  { name: 'Ecommerce', href: '/solutions/ecommerce' },
  { name: 'Agencies', href: '/solutions/agencies' },
  { name: 'Coaches', href: '/solutions/coaches' },
];

const companyLinks: FooterLink[] = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
];

const legalLinks: FooterLink[] = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Refund Policy', href: '#' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-white">ECOLAB</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              AI Systems That Automate Sales, Followups &amp; Customer
              Communication
            </p>
          </div>

          {/* Column 2 — Solutions */}
          <FooterColumn title="Solutions" links={solutionLinks} />

          {/* Column 3 — Company */}
          <FooterColumn title="Company" links={companyLinks} />

          {/* Column 4 — Legal */}
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ECOLAB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
