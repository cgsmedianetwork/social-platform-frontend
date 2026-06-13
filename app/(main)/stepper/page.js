"use client";

import CompleteProfileForm from "@/components/CompleteProfileForm/CompleteProfileForm";
import { useState } from "react";

const StepperPage = () => {
  const steps = [
    {
      description: "Share you basics so we can tailor your experience.",
      step: 1,
      title: "Set up your profile",
    },
    {
      description: "Tell us your goals to get the most relevant insights.",
      step: 2,
      title: "Personalize your dashboard",
    },
    {
      description: "Connect platforms to track everything in one place.",
      step: 3,
      title: "Link you social accounts",
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* <Stepper onValueChange={setCurrentStep} value={currentStep}>
        {steps.map(({ step, title, description }) => (
          <StepperItem
            className="relative flex-1 flex-col!"
            key={step}
            step={step}
          >
            <StepperTrigger className="flex-col gap-3 rounded">
              <StepperIndicator />
              <div className="space-y-0.5 px-2">
                <StepperTitle>{title}</StepperTitle>
                <StepperDescription className="max-sm:hidden">
                  {description}
                </StepperDescription>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="-order-1 -translate-y-1/2 absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] m-0 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
            )}
          </StepperItem>
        ))}
      </Stepper>
      {currentStep === 1 ? (
        <BasicInfo setStep={setCurrentStep} currentStep={currentStep} />
      ) : currentStep === 2 ? (
        <PersonalQuiz setStep={setCurrentStep} currentStep={currentStep} />
      ) : (
        <ConnectPlatforms setStep={setCurrentStep} currentStep={currentStep} />
      )} */}
      <CompleteProfileForm />
    </div>
  );
};

export default StepperPage;
