"use client";

import { useEffect, useRef } from "react";
import "./cinematic.css";

import { initCinematicScroll } from "./scrollEngine";

import SceneHero from "../scenes/SceneHero";
import SceneRoadmap from "../scenes/SceneRoadmap";
import SceneAIGrading from "../scenes/SceneAIGrading";
import SceneQuizBank from "../scenes/SceneQuizBank";
import SceneFlexible from "../scenes/SceneFlexible";
import SceneNewsletter from "../scenes/SceneNewsletter";

export default function CinematicHome() {
  const vignetteRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<HTMLElement[]>([]);
  sceneRefs.current = [];

  const registerScene = (el: HTMLElement | null) => {
    if (el && !sceneRefs.current.includes(el)) sceneRefs.current.push(el);
  };

  useEffect(() => {
    const cleanup = initCinematicScroll(sceneRefs.current, {
      onVignette: (opacity) => {
        if (vignetteRef.current) vignetteRef.current.style.opacity = String(opacity);
      },
    });
    return cleanup;
  }, []);

  return (
    <div className="cine-world">
      <div ref={vignetteRef} className="cine-vignette" aria-hidden="true" />
      <div className="cine-scroll-hint" aria-hidden="true">
        <span>Cuộn xuống</span>
        <span className="cine-scroll-hint__line" />
      </div>

      <SceneHero ref={registerScene} />
      <SceneRoadmap ref={registerScene} />
      <SceneAIGrading ref={registerScene} />
      <SceneQuizBank ref={registerScene} />
      <SceneFlexible ref={registerScene} />
      <SceneNewsletter ref={registerScene} />
    </div>
  );
}
