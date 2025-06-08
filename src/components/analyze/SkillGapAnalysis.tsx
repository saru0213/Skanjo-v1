import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

interface SkillGapAnalysisProps {
  resumeData: any;
  jobData: any;
  onNext: (data: any) => void;
  onBack: () => void;
}

export const SkillGapAnalysis = ({ resumeData, jobData, onNext, onBack }: SkillGapAnalysisProps) => {
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mock analysis data - in real app this would come from API
  const mockAnalysis = {
    overallMatch: 75,
    existingSkills: [
      { name: "JavaScript", level: "Advanced", match: true },
      { name: "React", level: "Intermediate", match: true },
      { name: "Python", level: "Beginner", match: true },
      { name: "Git", level: "Intermediate", match: true },
    ],
    missingSkills: [
      { name: "TypeScript", priority: "High", estimatedLearningTime: "2-3 weeks" },
      { name: "Node.js", priority: "High", estimatedLearningTime: "3-4 weeks" },
      { name: "Docker", priority: "Medium", estimatedLearningTime: "1-2 weeks" },
      { name: "AWS", priority: "Medium", estimatedLearningTime: "4-6 weeks" },
    ],
    improvements: [
      { skill: "React", suggestion: "Learn React hooks and context API", priority: "Medium" },
      { skill: "Python", suggestion: "Focus on data structures and algorithms", priority: "High" },
    ]
  };

  useEffect(() => {
    // Simulate analysis progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setAnalysisComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    onNext(mockAnalysis);
  };

  if (!analysisComplete) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Analyzing Your Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            AI is comparing your resume with the job requirements...
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Analysis Progress</span>
                <span className="text-sm text-muted-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full" />
                  <span>Processing your professional profile...</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Skill Gap Analysis
        </h2>
        <p className="text-muted-foreground text-lg">
          Here's how your skills match with the job requirements
        </p>
      </div>

      {/* Overall Match Score */}
      <Card className="backdrop-blur-sm bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Overall Match Score</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-primary">{mockAnalysis.overallMatch}%</div>
            <div className="flex-1">
              <Progress value={mockAnalysis.overallMatch} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                You're a strong candidate! A few skill improvements could make you even better.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Existing Skills */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span>Matching Skills</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockAnalysis.existingSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">{skill.level}</div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  ✓ Match
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Missing Skills */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-600">
              <AlertCircle className="h-5 w-5" />
              <span>Skills to Learn</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockAnalysis.missingSkills.map((skill, index) => (
              <div key={index} className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{skill.name}</div>
                  <Badge 
                    variant={skill.priority === 'High' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {skill.priority}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Est. learning time: {skill.estimatedLearningTime}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          Generate Learning Plan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
