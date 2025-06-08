
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, Target, BookOpen, ExternalLink } from "lucide-react";

interface ProjectSuggestionsProps {
  analysisData: any;
  onNext: () => void;
  onBack: () => void;
}

export const ProjectSuggestions = ({ analysisData, onNext, onBack }: ProjectSuggestionsProps) => {
  const mockProjects = [
    {
      id: 1,
      skill: "TypeScript",
      title: "Build a Task Management App with TypeScript",
      description: "Create a full-featured todo application using TypeScript, showcasing type safety and modern ES6+ features.",
      duration: "2-3 weeks",
      difficulty: "Intermediate",
      deliverables: [
        "GitHub repository with clean TypeScript code",
        "Live demo deployed on Vercel/Netlify",
        "Comprehensive README with setup instructions",
        "Unit tests with Jest and TypeScript"
      ],
      techStack: ["TypeScript", "React", "Node.js", "Express"],
      priority: "High"
    },
    {
      id: 2,
      skill: "Node.js",
      title: "RESTful API with Authentication",
      description: "Build a robust backend API with user authentication, data validation, and proper error handling.",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      deliverables: [
        "Complete API documentation",
        "Secure authentication system",
        "Database integration with MongoDB",
        "Comprehensive API testing"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      priority: "High"
    },
    {
      id: 3,
      skill: "Docker",
      title: "Containerize a Full-Stack Application",
      description: "Learn Docker by containerizing a web application with proper multi-stage builds and orchestration.",
      duration: "1-2 weeks",
      difficulty: "Beginner",
      deliverables: [
        "Dockerfile for frontend and backend",
        "Docker Compose configuration",
        "CI/CD pipeline setup",
        "Documentation on deployment"
      ],
      techStack: ["Docker", "Docker Compose", "nginx", "CI/CD"],
      priority: "Medium"
    },
    {
      id: 4,
      skill: "AWS",
      title: "Deploy Scalable Web App on AWS",
      description: "Deploy a web application using AWS services like EC2, S3, RDS, and learn cloud infrastructure.",
      duration: "4-6 weeks",
      difficulty: "Advanced",
      deliverables: [
        "Production-ready AWS deployment",
        "Infrastructure as Code with Terraform",
        "Monitoring and logging setup",
        "Cost optimization report"
      ],
      techStack: ["AWS", "Terraform", "CloudWatch", "RDS"],
      priority: "Medium"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Learning Projects
        </h2>
        <p className="text-muted-foreground text-lg">
          Personalized projects to help you close skill gaps and build an impressive portfolio
        </p>
      </div>

      <div className="grid gap-6">
        {mockProjects.map((project) => (
          <Card key={project.id} className="backdrop-blur-sm bg-card/50 border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="text-xs">
                      {project.skill}
                    </Badge>
                    <Badge 
                      className={`text-xs ${getDifficultyColor(project.difficulty)}`}
                    >
                      {project.difficulty}
                    </Badge>
                    <Badge 
                      variant={project.priority === 'High' ? 'destructive' : 'secondary'}
                      className="text-xs"
                    >
                      {project.priority} Priority
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2 flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>Deliverables</span>
                  </h4>
                  <ul className="space-y-1">
                    {project.deliverables.map((deliverable, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full" size="sm">
                <BookOpen className="mr-2 h-4 w-4" />
                View Detailed Project Guide
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Analysis
        </Button>
        <Button
          onClick={onNext}
          className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          Start Building Portfolio
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
