"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const EASE = [0.22, 1, 0.36, 1] as const;

function FeatureCard({ index, children }: { index: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function ChecklistItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
      <div>
        <p className="text-primary text-xs sm:text-sm font-medium">{title}</p>
        <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5">{description}</p>
      </div>
    </li>
  );
}

function LearnMoreLink() {
  return (
    <a
      href="#"
      className="mt-6 inline-flex items-center gap-2 text-primary text-xs sm:text-sm group w-fit"
    >
      Learn more
      <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export default function StudioFeatures() {
  return (
    <section className="relative min-h-screen bg-black py-20 sm:py-24 md:py-28 px-4 md:px-6 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
            segments={[{ text: "Studio-grade workflows for visionary creators.", className: "text-primary" }]}
          />
          <div className="mt-2">
            <WordsPullUpMultiStyle
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
              segments={[{ text: "Built for pure vision. Powered by art.", className: "text-gray-500" }]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 - Video */}
          <FeatureCard index={0}>
            <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 text-base sm:text-lg font-medium text-[#E1E0CC]">
                Your creative canvas.
              </p>
            </div>
          </FeatureCard>

          {/* Card 2 - Project Storyboard */}
          <FeatureCard index={1}>
            <div className="bg-[#212121] rounded-2xl h-full p-5 sm:p-6 flex flex-col">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                alt="Project Storyboard"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
              />
              <h3 className="mt-5 sm:mt-6 text-primary text-base sm:text-lg font-medium">
                Project Storyboard. <span className="text-gray-500">(01)</span>
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                <ChecklistItem title="Scene sequencing" description="Arrange and reorder scenes with drag and drop simplicity." />
                <ChecklistItem title="Shot list builder" description="Plan every shot with camera notes and reference frames." />
                <ChecklistItem title="Collaborative review" description="Invite collaborators to comment directly on storyboards." />
                <ChecklistItem title="Version history" description="Track every revision and roll back whenever you need." />
              </ul>
              <LearnMoreLink />
            </div>
          </FeatureCard>

          {/* Card 3 - Smart Critiques */}
          <FeatureCard index={2}>
            <div className="bg-[#212121] rounded-2xl h-full p-5 sm:p-6 flex flex-col">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                alt="Smart Critiques"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
              />
              <h3 className="mt-5 sm:mt-6 text-primary text-base sm:text-lg font-medium">
                Smart Critiques. <span className="text-gray-500">(02)</span>
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                <ChecklistItem title="AI-powered analysis" description="Get instant feedback on pacing, color and composition." />
                <ChecklistItem title="Creative notes" description="Leave timestamped notes directly on the footage." />
                <ChecklistItem title="Tool integrations" description="Sync critiques with your favorite editing software." />
              </ul>
              <LearnMoreLink />
            </div>
          </FeatureCard>

          {/* Card 4 - Immersion Capsule */}
          <FeatureCard index={3}>
            <div className="bg-[#212121] rounded-2xl h-full p-5 sm:p-6 flex flex-col">
              <img
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                alt="Immersion Capsule"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
              />
              <h3 className="mt-5 sm:mt-6 text-primary text-base sm:text-lg font-medium">
                Immersion Capsule. <span className="text-gray-500">(03)</span>
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                <ChecklistItem title="Notification silencing" description="Mute distractions the moment you enter focus mode." />
                <ChecklistItem title="Ambient soundscapes" description="Curated audio environments to deepen creative flow." />
                <ChecklistItem title="Schedule syncing" description="Block out deep work sessions across your calendar." />
              </ul>
              <LearnMoreLink />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
