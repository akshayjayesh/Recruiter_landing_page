import LandingHeader from "@/components/LandingHeader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductPromiseSection from "@/components/ProductPromiseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import ProductPreviewSection from "@/components/ProductPreviewSection";
import BenefitsSection from "@/components/BenefitsSection";
import RecruiterControlSection from "@/components/RecruiterControlSection";
import CTASection from "@/components/CTASection";
import LoginPreviewSection from "@/components/LoginPreviewSection";
import LandingFooter from "@/components/LandingFooter";

export const metadata = {
  title: "Kozker Recruiter AI | AI Recruitment Operations Platform",
  description: "AI-powered recruitment operations platform converting client requirements into job openings, parsing candidates, and generating screening pipelines.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0C0A09] text-white selection:bg-primary/30 selection:text-white font-sans antialiased">
      <LandingHeader />
      
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="problem"><ProblemSection /></div>
        <div id="product"><ProductPromiseSection /></div>
        <div id="how-it-works"><HowItWorksSection /></div>
        <div id="ai-workflow"><AIWorkflowSection /></div>
        <div id="preview"><ProductPreviewSection /></div>
        <div id="benefits"><BenefitsSection /></div>
        <div id="control"><RecruiterControlSection /></div>
        <div id="cta"><CTASection /></div>
        <div id="login-preview"><LoginPreviewSection /></div>
      </main>

      <LandingFooter />
    </div>
  );
}
