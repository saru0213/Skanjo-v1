
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StepIndicator } from "@/components/analyze/StepIndicator";
import { ResumeUpload } from "@/components/analyze/ResumeUpload";
import { JobDescriptionInput } from "@/components/analyze/JobDescriptionInput";
import { SkillGapAnalysis } from "@/components/analyze/SkillGapAnalysis";
import { ProjectSuggestions } from "@/components/analyze/ProjectSuggestions";
import { ProjectSubmission } from "@/components/analyze/ProjectSubmission";

const Analyze = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState(null);
  const [jobData, setJobData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);

  const steps = [
    { number: 1, title: "Resume Input", description: "Upload CV or LinkedIn" },
    { number: 2, title: "Job Description", description: "Target job details" },
    { number: 3, title: "Skill Analysis", description: "Gap identification" },
    { number: 4, title: "Project Plans", description: "Learning roadmap" },
    { number: 5, title: "Submissions", description: "Portfolio building" },
  ];

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ResumeUpload onNext={(data) => { setResumeData(data); setCurrentStep(2); }} />;
      case 2:
        return <JobDescriptionInput onNext={(data) => { setJobData(data); setCurrentStep(3); }} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <SkillGapAnalysis resumeData={resumeData} jobData={jobData} onNext={(data) => { setAnalysisData(data); setCurrentStep(4); }} onBack={() => setCurrentStep(2)} />;
      case 4:
        return <ProjectSuggestions analysisData={analysisData} onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />;
      case 5:
        return <ProjectSubmission onBack={() => setCurrentStep(4)} />;
      default:
        return <ResumeUpload onNext={(data) => { setResumeData(data); setCurrentStep(2); }} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <StepIndicator steps={steps} currentStep={currentStep} />
            <div className="mt-12">
              {renderCurrentStep()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Analyze;
