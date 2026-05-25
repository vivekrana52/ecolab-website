'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DemoVideo() {
  return (
    <SectionWrapper dark={true}>
      <AnimatedSection variant="fadeUp" className="flex flex-col items-center">
        {/* Section label */}
        <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
          See ECOLAB In Action
        </span>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 text-center">
          Watch How It Works
        </h2>

        {/* Video placeholder */}
        <div className="mt-10 w-full max-w-4xl">
          {/* TODO: Replace with video player. Add video src here */}
          <div className="aspect-video bg-gray-100 rounded-2xl border-2 border-dashed border-[#1E1E1E] flex flex-col items-center justify-center gap-4">
            {/* Play button */}
            <div className="w-20 h-20 rounded-full bg-[#2563EB] flex items-center justify-center shadow-lg shadow-blue-500/20 cursor-pointer hover:scale-105 transition-transform">
              <svg
                className="w-8 h-8 text-white ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
              </svg>
            </div>

            <span className="text-gray-400 text-sm font-medium">
              Demo Coming Soon
            </span>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
