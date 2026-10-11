import { profile, socials } from "@/data/profile";

const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React, Vite and Tailwind
      </p>
      <div className="flex gap-5">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
