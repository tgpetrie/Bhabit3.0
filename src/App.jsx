import React from "react";
import {
  NavBar,
  HeroSection,
  AboutSection,
  SmartContractsSection,
  TokenomicsSection,
  ChallengeSection,
  BornVaultSection,
  RoadmapSection,
  JoinSection,
} from "../BhabitSiteSections";
import { TickerBanner } from "../BhabitSiteSections/TickerBanner";

// Import the SVG as a ReactComponent if using SVGR, or use as an <img> background
import background from "./assets/background-linear.svg";

function App() {
  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        background: `url(${background}) center center / cover no-repeat, linear-gradient(to bottom, #18122B, #2D3250, #232946)`,
      }}
    >
      <NavBar />
      <TickerBanner />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-16 relative z-10">
        <HeroSection />
        <AboutSection />
        <SmartContractsSection />
        <TokenomicsSection />
        <ChallengeSection />
        <BornVaultSection />
        <RoadmapSection />
        <JoinSection />
      </main>
      {/* Optionally add a semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
    </div>
  );
}

export default App;
