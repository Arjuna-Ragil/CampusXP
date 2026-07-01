"use client";

import { useState, useEffect } from "react";
import { updateProfileAction } from "@/app/actions/studentActions";

export default function OnboardingModal({ nim, major }: { nim: string, major: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (nim === "N/A" || major === "Undeclared" || !nim || !major) {
      setIsOpen(true);
    }
  }, [nim, major]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl w-full max-w-[450px] border border-outline-variant animate-fade-in-up">
        <h2 className="font-headline-md text-headline-md text-primary mb-2">Welcome to CampusXP!</h2>
        <p className="font-body-md text-on-surface-variant mb-lg">
          Please complete your profile to access all features.
        </p>

        <form action={async (formData) => {
          await updateProfileAction(formData);
          setIsOpen(false);
        }} className="space-y-md">
          
          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface">NIM (Student ID)</label>
            <input 
              name="nim" 
              required 
              defaultValue={nim !== "N/A" ? nim : ""}
              placeholder="e.g. 2024-88592"
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all" 
              type="text" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface">Major</label>
            <input 
              name="major" 
              required 
              defaultValue={major !== "Undeclared" ? major : ""}
              placeholder="e.g. Computer Science"
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all" 
              type="text" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface">Bio (Optional)</label>
            <textarea 
              name="bio" 
              placeholder="Tell us a bit about yourself..."
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all resize-none" 
              rows={3}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 bg-primary hover:bg-secondary text-on-primary font-bold py-3 rounded-lg shadow-sm transition-all active:scale-95"
          >
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
}
