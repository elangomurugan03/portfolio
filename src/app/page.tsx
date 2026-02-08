"use client";

import dynamic from "next/dynamic";

// Dynamic imports with no SSR for client components
const Hero = dynamic(() => import("@/components/sections/hero"), { ssr: false });
const BentoGrid = dynamic(() => import("@/components/sections/bento-grid"), { ssr: false });
const CodeSnippetShowcase = dynamic(() => import("@/components/sections/code-snippet-showcase"), { ssr: false });
const ProjectsPreview = dynamic(() => import("@/components/sections/projects-preview"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

// Page Transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background dark:bg-black">
        <main className="flex justify-center items-center flex-col mx-auto">
          {/* Hero - Full screen with negative margin */}
          <div id="hi" className="w-full min-h-screen overflow-hidden -mt-24 md:mt-0">
            <Hero />
          </div>
          
          {/* Rest of the content */}
          <div className="w-full max-w-7xl mx-auto">
            <BentoGrid />
            <CodeSnippetShowcase />
            <ProjectsPreview />
            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
