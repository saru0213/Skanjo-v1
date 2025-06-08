
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, FileText, Link, Briefcase } from "lucide-react";

interface JobDescriptionInputProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export const JobDescriptionInput = ({ onNext, onBack }: JobDescriptionInputProps) => {
  const [inputMethod, setInputMethod] = useState<'file' | 'url' | 'text'>('text');
  const [jobUrl, setJobUrl] = useState('');
  const [jobText, setJobText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    let data;
    switch (inputMethod) {
      case 'file':
        data = { type: 'file', file: selectedFile };
        break;
      case 'url':
        data = { type: 'url', url: jobUrl };
        break;
      case 'text':
        data = { type: 'text', description: jobText };
        break;
    }
    onNext(data);
  };

  const isFormValid = () => {
    switch (inputMethod) {
      case 'file':
        return selectedFile !== null;
      case 'url':
        return jobUrl.trim() !== '';
      case 'text':
        return jobText.trim() !== '';
      default:
        return false;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Job Description
        </h2>
        <p className="text-muted-foreground text-lg">
          Tell us about the job you're targeting
        </p>
      </div>

      <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-2xl shadow-primary/10">
        <CardHeader>
          <div className="flex justify-center space-x-2 mb-6 flex-wrap">
            <Button
              variant={inputMethod === 'text' ? 'default' : 'outline'}
              onClick={() => setInputMethod('text')}
              className="flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <Briefcase className="h-4 w-4" />
              <span>Paste Text</span>
            </Button>
            <Button
              variant={inputMethod === 'url' ? 'default' : 'outline'}
              onClick={() => setInputMethod('url')}
              className="flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <Link className="h-4 w-4" />
              <span>Job URL</span>
            </Button>
            <Button
              variant={inputMethod === 'file' ? 'default' : 'outline'}
              onClick={() => setInputMethod('file')}
              className="flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <FileText className="h-4 w-4" />
              <span>Upload File</span>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {inputMethod === 'text' && (
            <div className="space-y-4">
              <Label htmlFor="job-description" className="text-base font-medium">
                Job Description
              </Label>
              <Textarea
                id="job-description"
                placeholder="Paste the complete job description here..."
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                className="min-h-[200px] resize-none rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
            </div>
          )}

          {inputMethod === 'url' && (
            <div className="space-y-4">
              <Label htmlFor="job-url" className="text-base font-medium">
                Job Posting URL
              </Label>
              <Input
                id="job-url"
                type="url"
                placeholder="https://example.com/job-posting"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                className="h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
            </div>
          )}

          {inputMethod === 'file' && (
            <div className="space-y-4">
              <Label htmlFor="job-file" className="text-base font-medium">
                Upload Job Description File
              </Label>
              <Input
                id="job-file"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="cursor-pointer h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
              />
              {selectedFile && (
                <div className="flex items-center space-x-2 text-sm text-green-600 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <FileText className="h-4 w-4" />
                  <span>{selectedFile.name}</span>
                </div>
              )}
            </div>
          )}

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
              Analyze Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
