import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Globe2,
  GraduationCap,
  MapPin,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { GitHubMark } from "@/components/brand-icons";
import { ContactForm } from "@/components/contact-form";
import { HeroVisual } from "@/components/hero-visual";
import { SectionReveal } from "@/components/section-reveal";
import {
  experience,
  profile,
  projects,
  services,
  skillGroups,
} from "@/data/portfolio";

function SectionHeading({
  kicker,
  title,
  note,
}: Readonly<{ kicker: string; title: string; note?: string }>) {
  return (
    <div className="section-heading flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title text-3xl xs:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {note && <p className="section-note text-sm xs:text-base">{note}</p>}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section pt-3 pb-7 xs:pt-4 xs:pb-8 sm:pt-5 sm:pb-10 lg:pt-4 lg:pb-14">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <div className="hero-grid grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,.96fr)] lg:gap-12">
          <SectionReveal>
            <p className="eyebrow">Frontend engineer · Mumbai, India</p>
            <h1 className="hero-title text-[2.4rem] xs:text-5xl sm:text-6xl lg:text-[4.65rem]">
              Building Digital Experiences <span>That Make an Impact.</span>
            </h1>
            <p className="hero-copy">
              I&apos;m a React Developer specializing in building scalable web
              applications and cross-platform mobile experiences using React,
              Next.js and React Native.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                View my work <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                className="button-secondary"
                href="/Sandip_Sharma_Resume.pdf"
                download="Sandip_Sharma_Resume.pdf"
              >
                Download resume <ArrowDownToLine size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="availability flex-wrap">
              <span className="availability-dot" aria-hidden="true" />
              Available for freelance and full-time opportunities
              <span className="hero-socials">
                <a
                  href={profile.github}
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubMark />
                </a>
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    aria-label="LinkedIn profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                )}
              </span>
            </div>
          </SectionReveal>
          <HeroVisual />
        </div>
        <div className="hero-bottom flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-8">
          <span>React · Next.js · React Native</span>
          <span>Design-minded engineering</span>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section-alt py-14 sm:py-20 xl:py-28" id="about">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <SectionHeading
          kicker="A little about me"
          title="Good work is built with intention."
        />
        <div className="about-grid grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <p className="about-copy">
              I&apos;m a passionate frontend developer with{" "}
              <strong>2+ years of experience</strong> building scalable web and
              mobile applications. I specialize in React.js, React Native,
              JavaScript and TypeScript, with hands-on experience developing
              enterprise applications, banking platforms and InsurTech
              solutions.
            </p>
            <div className="about-note">
              <Sparkles size={17} aria-hidden="true" />
              <span>
                My focus is clear interfaces, reusable architecture and the
                details that make a product feel dependable.
              </span>
            </div>
            <div className="about-meta">
              <span>
                <MapPin size={15} aria-hidden="true" />
                {profile.location}
              </span>
              <span>
                <GraduationCap size={16} aria-hidden="true" />
                {profile.education}
              </span>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="about-facts">
              <div className="fact p-4 xs:p-5">
                <span className="fact-number text-xl xs:text-2xl sm:text-3xl">
                  02+
                </span>
                <span className="fact-label">
                  Years of professional experience
                </span>
              </div>
              <div className="fact p-4 xs:p-5">
                <span className="fact-number text-xl xs:text-2xl sm:text-3xl">
                  Web
                  <br />+ Mobile
                </span>
                <span className="fact-label">Experiences across platforms</span>
              </div>
              <div className="fact p-4 xs:p-5">
                <span className="fact-number text-xl xs:text-2xl sm:text-3xl">
                  Enterprise
                </span>
                <span className="fact-label">
                  Banking and InsurTech products
                </span>
              </div>
              <div className="fact p-4 xs:p-5">
                <span className="fact-number text-xl xs:text-2xl sm:text-3xl">
                  Reusable
                </span>
                <span className="fact-label">
                  Component architecture and systems
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section py-14 sm:py-20 xl:py-28" id="experience">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <SectionHeading
          kicker="Where I have worked"
          title="Experience, in practice."
          note="A steady progression through web, mobile and enterprise product work."
        />
        <div className="timeline">
          {experience.map((job) => (
            <SectionReveal
              key={job.company}
              className="timeline-item grid grid-cols-1 gap-2 sm:grid-cols-[minmax(145px,0.32fr)_minmax(0,1fr)] sm:gap-6 lg:gap-10"
            >
              <div className="timeline-date">{job.dates}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul className="timeline-bullets">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section
      className="section section-alt py-14 sm:py-20 xl:py-28"
      id="skills"
    >
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <SectionHeading
          kicker="Tools of the trade"
          title="A toolkit for shipping."
          note="A practical stack for building and maintaining modern web and mobile applications."
        />
        <div className="skills-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {skillGroups.map((group) => (
            <SectionReveal key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="skill-list flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ variant }: Readonly<{ variant: string }>) {
  if (variant === "buddy")
    return (
      <div
        className="project-preview project-preview--buddy"
        aria-label="Illustrative Talk to Buddy login interface preview"
      >
        <div className="buddy-login">
          <div className="buddy-brand">
            Talk to
            <br />
            Buddy
          </div>
          <div className="buddy-form">
            <div className="buddy-tabs">
              <span>Login</span>
              <span>Sign Up</span>
            </div>
            <span className="buddy-label">
              Email Address <b>*</b>
            </span>
            <span className="buddy-input">Enter Your Email Address</span>
            <span className="buddy-label">
              Password <b>*</b>
            </span>
            <span className="buddy-input">
              Enter password <i>Show</i>
            </span>
            <span className="buddy-submit">Login</span>
          </div>
        </div>
      </div>
    );
  if (variant === "course")
    return (
      <div className="project-preview project-preview--image">
        <Image
          src="/images/course-management.png"
          alt="Screenshot of the Course Management dashboard"
          fill
          sizes="(max-width: 700px) 100vw, 560px"
        />
      </div>
    );
  if (variant === "fixora")
    return (
      <div
        className="project-preview project-preview--fixora"
        aria-label="Illustrative mobile application frame for Fixora"
      >
        <div className="fixora-device">
          <div className="fixora-status">
            <span>9:41</span>
            <span>●●● ▰</span>
          </div>
          <div className="fixora-screen">
            <div className="fixora-brand">
              <span className="fixora-mark">F</span>
              <span>Fixora</span>
            </div>
            <div className="fixora-lines">
              <i />
              <i />
              <i />
            </div>
            <div className="fixora-content">
              <span />
              <span />
              <span />
            </div>
            <div className="fixora-nav">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <span className="fixora-caption">EXPO · MOBILE APP</span>
      </div>
    );
  return (
    <div className="project-preview project-preview--martial-arts">
      <Image
        src="/images/martial-arts-academy.png"
        alt="Screenshot of the JK Martial Arts Academy homepage"
        fill
        sizes="(max-width: 700px) 100vw, 560px"
      />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="section py-14 sm:py-20 xl:py-28" id="projects">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <SectionHeading
          kicker="Selected work"
          title="Projects with a point of view."
          note="A selection of live products and web experiences."
        />
        <div className="projects-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
          {projects.map((project) => (
            <SectionReveal key={project.number} className="project-card">
              <ProjectPreview variant={project.preview} />
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div
                  className="project-tags"
                  aria-label={
                    project.tags.length
                      ? "Project technologies"
                      : "Project scope"
                  }
                >
                  {(project.tags.length
                    ? project.tags
                    : ["Stack details in source repository"]
                  ).map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <a
                      className="project-link"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live project <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source code <GitHubMark />
                    </a>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceIcons = [Code2, Globe2, Smartphone, Braces, Database, Zap];

export function ServicesSection() {
  return (
    <section
      className="section section-alt py-14 sm:py-20 xl:py-28"
      id="services"
    >
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <SectionHeading
          kicker="How I can help"
          title="From first screen to shipped product."
        />
        <div className="service-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Code2;
            return (
              <SectionReveal className="service-item" key={service}>
                <span className="service-icon">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <h3>{service}</h3>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section py-14 sm:py-20 xl:py-28" id="contact">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <SectionHeading
          kicker="Start a conversation"
          title="Let's build something useful."
        />
        <div className="contact-grid grid grid-cols-1 gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="contact-copy">
              Have a role, a freelance project or a thoughtful collaboration in
              mind? Send a note and I&apos;ll get back to you.
            </p>
            <div className="contact-links">
              <span className="contact-link">
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </span>
              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubMark />
                GitHub profile <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              {profile.linkedin && (
                <a
                  className="contact-link"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight size={16} aria-hidden="true" />
                  LinkedIn profile
                </a>
              )}
              {profile.email && (
                <a className="contact-link" href={`mailto:${profile.email}`}>
                  <ArrowUpRight size={16} aria-hidden="true" />
                  {profile.email}
                </a>
              )}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
