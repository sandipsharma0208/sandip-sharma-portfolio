import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><div><p className="eyebrow">Page not found</p><h1>404</h1><p>This page doesn&apos;t exist or may have moved. Let&apos;s get you back to the portfolio.</p><Link className="button-primary" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link></div></main>;
}