import { ArrowRight, ArrowUp, MapPin } from "lucide-react";
import { GitHubMark } from "@/components/brand-icons";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-wrap mx-auto w-[calc(100%-2rem)] max-w-[1160px] xs:w-[calc(100%-3rem)]">
        <div className="creative-cta footer-creative-cta grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(230px,0.8fr)] xl:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)]">
          <div className="creative-cta-main grid grid-cols-[46px_minmax(0,1fr)] gap-x-3 min-h-[190px] px-5 py-6 xs:grid-cols-[62px_minmax(0,1fr)] xs:min-h-[210px] xs:gap-x-4 xs:px-8 xs:py-8">
            <span className="cta-flower text-5xl xs:text-6xl" aria-hidden="true">
              ✺
            </span>
            <div>
              <p>Let&apos;s create</p>
              <h3>
                Something <span>Amazing!</span>
              </h3>
            </div>
            <div className="cta-details gap-3 xs:gap-5">
              {profile.email && (
                <a href={`mailto:${profile.email}`}>
                  <span aria-hidden="true">✉</span>
                  {profile.email}
                </a>
              )}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubMark />
                GitHub profile
              </a>
              <span>
                <MapPin size={16} aria-hidden="true" />
                Worldwide collaboration
              </span>
            </div>
          </div>
          <div className="creative-cta-side min-h-[180px] xs:min-h-[210px]">
            <span className="cta-doodle" aria-hidden="true">
              ➤
            </span>
            <p>
              Have a project
              <br />
              in mind?
            </p>
            <span className="cta-copy">
              Let&apos;s bring your ideas to life with thoughtful code and strategy.
            </span>
            <a className="button-primary" href="#contact">
              Get in touch{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="back-top absolute right-4 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#087d96]" href="#home" aria-label="Back to top" title="Back to top">
              <ArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}