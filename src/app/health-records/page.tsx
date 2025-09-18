"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { analyzeHealthRecord, HealthRecordAnalysisOutput } from '@/ai/flows/health-record-analysis';
import { Loader2, Upload, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export default function HealthRecordsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<HealthRecordAnalysisOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Limit file size to 5MB
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size should not exceed 5MB.");
        return;
      }
      setFile(selectedFile);
      setAnalysis(null);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file || !filePreview) {
      setError("Please select a file to analyze.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await analyzeHealthRecord({ documentDataUri: filePreview });
      setAnalysis(result);
      toast({
        title: "Analysis Complete",
        description: "Your health record has been successfully analyzed.",
      });
    } catch (e) {
      console.error("Analysis failed:", e);
      setError("Failed to analyze the document. Please try again with a clear image of a medical record.");
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not process the uploaded document.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          AI Health Records Analyzer
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Upload a health document image to get an AI-powered summary and explanation.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Upload Your Record</CardTitle>
            <CardDescription>Select an image of your medical report (e.g., blood test results). Supports JPG, PNG formats.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="file-upload" className="flex items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {filePreview ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={filePreview} alt="Preview" className="h-40 object-contain rounded-md" />
                        ) : (
                            <>
                                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG (MAX. 5MB)</p>
                            </>
                        )}
                    </div>
                </label>
                <Input id="file-upload" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} className="hidden" />
            </div>

            {file && <p className="text-sm text-muted-foreground">Selected file: {file.name}</p>}
            
            <Button onClick={handleAnalyze} disabled={!file || loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" /> Analyze Record
                </>
              )}
            </Button>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. AI Analysis</CardTitle>
            <CardDescription>The AI will summarize the key findings from your document.</CardDescription>
          </CardHeader>
          <CardContent>
            {loading && (
              <div className="space-y-4">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <br/>
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {!loading && !analysis && (
              <div className="text-center text-muted-foreground py-10">
                <FileText className="mx-auto h-12 w-12 mb-4" />
                <p>Your analysis results will appear here.</p>
              </div>
            )}
            {analysis && (
              <div className="space-y-6 text-sm">
                <div className="space-y-2">
                  <h3 className="font-semibold text-base text-primary">Summary</h3>
                  <p className="text-muted-foreground">{analysis.summary}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base text-primary">Key Findings</h3>
                   <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {analysis.key_findings.map((finding, index) => (
                      <li key={index}>
                        <span className="font-semibold text-foreground">{finding.test}:</span> {finding.value} - {finding.interpretation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
