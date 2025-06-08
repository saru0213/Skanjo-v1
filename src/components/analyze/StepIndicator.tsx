
import { Check } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${step.number < currentStep
                    ? 'bg-primary border-primary text-primary-foreground'
                    : step.number === currentStep
                    ? 'bg-primary border-primary text-primary-foreground animate-pulse'
                    : 'bg-background border-border text-muted-foreground'
                  }
                `}
              >
                {step.number < currentStep ? (
                  <Check className="h-6 w-6" />
                ) : (
                  <span className="text-sm font-semibold">{step.number}</span>
                )}
                
                {step.number === currentStep && (
                  <div className="absolute -inset-1 bg-primary/20 rounded-full blur animate-pulse" />
                )}
              </div>
              
              {/* Step Info */}
              <div className="mt-3 text-center">
                <div className={`text-sm font-medium ${step.number <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.title}
                </div>
                <div className={`text-xs ${step.number <= currentStep ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                  {step.description}
                </div>
              </div>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 mb-8">
                <div
                  className={`
                    h-0.5 transition-all duration-300
                    ${step.number < currentStep ? 'bg-primary' : 'bg-border'}
                  `}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
