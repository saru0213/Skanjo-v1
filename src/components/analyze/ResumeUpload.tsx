
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, Linkedin, ArrowRight } from "lucide-react";

interface ResumeUploadProps {
  onNext: (data: any) => void;
}

export const ResumeUpload = ({ onNext }: ResumeUploadProps) => {
  const [uploadMethod, setUploadMethod] = useState<'file' | 'linkedin'>('file');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    const data = uploadMethod === 'file' 
      ? { type: 'file', file: selectedFile }
      : { type: 'linkedin', url: linkedinUrl };
    
    onNext(data);
  };

  const isFormValid = uploadMethod === 'file' ? selectedFile : linkedinUrl.trim() !== '';

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Upload Your Resume
        </h2>
        <p className="text-muted-foreground text-lg">
          Choose how you'd like to share your professional information
        </p>
      </div>

      <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-2xl shadow-primary/10">
        <CardHeader>
          <div className="flex justify-center space-x-4 mb-6">
            <Button
              variant={uploadMethod === 'file' ? 'default' : 'outline'}
              onClick={() => setUploadMethod('file')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <FileText className="h-4 w-4" />
              <span>Upload File</span>
            </Button>
            <Button
              variant={uploadMethod === 'linkedin' ? 'default' : 'outline'}
              onClick={() => setUploadMethod('linkedin')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn URL</span>
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {uploadMethod === 'file' ? (
            <div className="space-y-4">
              <Label htmlFor="resume-file" className="text-base font-medium">
                Select your resume file (PDF or DOCX)
              </Label>
              <div className="relative">
                <Input
                  id="resume-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="cursor-pointer h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                />
                <Upload className="absolute right-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
              {selectedFile && (
                <div className="flex items-center space-x-2 text-sm text-green-600 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <FileText className="h-4 w-4" />
                  <span>{selectedFile.name}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <Label htmlFor="linkedin-url" className="text-base font-medium">
                Enter your LinkedIn profile URL
              </Label>
              <div className="relative">
                <Input
                  id="linkedin-url"
                  type="url"
                  placeholder="https://linkedin.com/in/your-profile"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="pl-12 h-12 rounded-xl border-2 focus:border-primary transition-all duration-300"
                />
                <Linkedin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            size="lg"
          >
            Continue to Job Description
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
