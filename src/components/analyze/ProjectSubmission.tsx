
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Github, Upload, ExternalLink, Star, CheckCircle, AlertTriangle, BookOpen } from "lucide-react";

interface ProjectSubmissionProps {
  onBack: () => void;
}

interface MockFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
  skillProgress: Record<string, number>;
}

export const ProjectSubmission = ({ onBack }: ProjectSubmissionProps) => {
  const [submissionType, setSubmissionType] = useState<'github' | 'link' | 'file'>('github');
  const [githubUrl, setGithubUrl] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<MockFeedback | null>(null);

  // Mock feedback data
  const mockFeedback: MockFeedback = {
    score: 85,
    strengths: [
      "Clean and well-structured code with proper TypeScript typing",
      "Comprehensive error handling and input validation",
      "Good use of modern React patterns and hooks",
      "Excellent documentation and README"
    ],
    improvements: [
      "Add unit tests for critical components",
      "Implement proper loading states for async operations",
      "Consider adding TypeScript strict mode",
      "Add accessibility features (ARIA labels, keyboard navigation)"
    ],
    nextSteps: [
      "Learn and implement React Testing Library",
      "Study advanced TypeScript features like generics",
      "Explore state management with Redux Toolkit",
      "Add internationalization (i18n) support"
    ],
    skillProgress: {
      "TypeScript": 75,
      "React": 80,
      "Code Quality": 90,
      "Documentation": 95
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    // Simulate submission and feedback generation
    setTimeout(() => {
      setIsSubmitted(true);
      setFeedback(mockFeedback);
    }, 2000);
  };

  const isFormValid = () => {
    switch (submissionType) {
      case 'github':
        return githubUrl.trim() !== '';
      case 'link':
        return projectUrl.trim() !== '';
      case 'file':
        return selectedFile !== null;
      default:
        return false;
    }
  };

  if (isSubmitted && feedback) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Project Feedback
          </h2>
          <p className="text-muted-foreground text-lg">
            AI mentor has reviewed your submission
          </p>
        </div>

        {/* Overall Score */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Overall Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold text-primary">{feedback.score}/100</div>
              <div className="flex-1">
                <Progress value={feedback.score} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">
                  Great work! You're showing strong progress in TypeScript development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Progress */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle>Skill Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(feedback.skillProgress).map(([skill, progress]) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill}</span>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths */}
          <Card className="backdrop-blur-sm bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span>What You Did Well</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {feedback.strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">{strength}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card className="backdrop-blur-sm bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Areas for Improvement</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {feedback.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">{improvement}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>What to Learn Next</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {feedback.nextSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-primary to-primary/80">
            Submit Another Project
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Submit Your Project
        </h2>
        <p className="text-muted-foreground text-lg">
          Share your work and get AI-powered feedback to improve your skills
        </p>
      </div>

      <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-2xl shadow-primary/10">
        <CardHeader>
          <div className="flex justify-center space-x-4 mb-6">
            <Button
              variant={submissionType === 'github' ? 'default' : 'outline'}
              onClick={() => setSubmissionType('github')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
            <Button
              variant={submissionType === 'link' ? 'default' : 'outline'}
              onClick={() => setSubmissionType('link')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </Button>
            <Button
              variant={submissionType === 'file' ? 'default' : 'outline'}
              onClick={() => setSubmissionType('file')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Upload className="h-4 w-4" />
              <span>Upload File</span>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {submissionType === 'github' && (
            <div className="space-y-4">
              <Label htmlFor="github-url" className="text-base font-medium">
                GitHub Repository URL
              </Label>
              <Input
                id="github-url"
                type="url"
                placeholder="https://github.com/username/repository"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
            </div>
          )}

          {submissionType === 'link' && (
            <div className="space-y-4">
              <Label htmlFor="project-url" className="text-base font-medium">
                Live Demo URL
              </Label>
              <Input
                id="project-url"
                type="url"
                placeholder="https://your-project-demo.com"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
            </div>
          )}

          {submissionType === 'file' && (
            <div className="space-y-4">
              <Label htmlFor="project-file" className="text-base font-medium">
                Upload Project Files (ZIP)
              </Label>
              <Input
                id="project-file"
                type="file"
                accept=".zip,.rar,.tar.gz"
                onChange={handleFileChange}
                className="cursor-pointer h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
              {selectedFile && (
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <Upload className="h-4 w-4" />
                  <span>{selectedFile.name}</span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <Label htmlFor="description" className="text-base font-medium">
              Project Description (Optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Describe what you built, challenges you faced, and what you learned..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] resize-none rounded-xl border-2 focus:border-primary transition-all duration-300"
            />
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 h-12 rounded-xl border-2 hover:bg-accent/50 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              {isSubmitted ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  Get AI Feedback
                  <Star className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
