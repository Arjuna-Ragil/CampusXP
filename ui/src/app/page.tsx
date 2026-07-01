import StudentLayout from "@/components/layout/StudentLayout";
import OnboardingModal from "@/components/OnboardingModal";
import { IdCard, TrendingUp, Code, Users, Award, Brain, Send, Rocket, Sparkles } from "lucide-react";

import { serverFetch } from "@/lib/api/serverApi";

export default async function StudentDashboard() {
  let profile = null;
  try {
    const res = await serverFetch("/students/profile");
    profile = res;
  } catch (err) {
    console.error("Failed to fetch profile", err);
  }

  return (
    <StudentLayout>
      <OnboardingModal nim={profile?.profile?.nim} major={profile?.profile?.major} />
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden mb-xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-primary-container to-transparent opacity-90"></div>
        </div>
        <div className="relative z-10 p-lg md:p-xl flex flex-col md:flex-row justify-between items-center gap-lg">
          <div className="text-on-primary">
            <h2 className="font-display-lg text-display-lg mb-xs">Welcome back, {profile?.profile?.full_name || "Student"}!</h2>
            <p className="font-headline-md text-headline-md opacity-90">{profile?.profile?.major || "Unknown Major"}</p>
            <div className="flex items-center gap-sm mt-md opacity-80">
              <IdCard className="w-6 h-6" />
              <span className="font-label-md text-label-md">Student ID: {profile?.profile?.nim || "Unknown"}</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-md bg-surface-container-lowest/10 backdrop-blur-md rounded-xl border border-white/20 animate-float">
            <span className="font-label-sm text-label-sm text-on-primary opacity-70 uppercase tracking-widest mb-xs">Current Ranking</span>
            <span className="font-display-lg text-display-lg text-tertiary-fixed">Top 5%</span>
            <div className="mt-sm px-sm py-base bg-emerald-500/20 text-emerald-400 rounded-full text-label-sm font-label-sm flex items-center gap-xs">
              <TrendingUp className="w-4 h-4" />
              +12 positions this week
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: Gamification Card */}
        <div className="lg:col-span-4 flex flex-col gap-gutter">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30">
            <div className="p-md bg-primary-container text-on-primary">
              <h3 className="font-label-md text-label-md uppercase tracking-wider opacity-70">Total Reward Points</h3>
              <div className="flex items-baseline gap-xs mt-base">
                <span className="font-display-lg text-display-lg text-tertiary-fixed">{profile?.total_points || 0}</span>
                <span className="font-label-md text-label-md">PTS</span>
              </div>
            </div>

          </div>
        </div>
        {/* Right: AI Recommendations (Bento Grid Style) */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          <div className="flex items-center justify-between mb-base">
            <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-sm">
              <Award className="text-secondary w-6 h-6 fill-secondary/20" />
              Your Portfolio & Skills
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Achievements Column */}
            <div className="flex flex-col gap-base">
              <h4 className="font-label-lg font-bold text-on-surface">Recent Achievements</h4>
              {profile?.profile?.achievements?.length > 0 ? (
                profile.profile.achievements.map((ach: any) => (
                  <div key={ach.id} className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-xs">
                      <h5 className="font-label-md font-bold text-on-surface">{ach.title}</h5>
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                        ach.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' :
                        ach.status === 'REJECTED' ? 'bg-error-container text-error' :
                        'bg-tertiary-container/20 text-tertiary'
                      }`}>{ach.status || 'PENDING'}</span>
                    </div>
                    <p className="font-body-sm text-sm text-on-surface-variant mb-sm">{ach.description}</p>
                    <div className="flex items-center gap-xs">
                      <span className="font-label-md font-bold text-primary">+{ach.points} PTS</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-surface-container-lowest p-md rounded-xl border border-dashed border-outline-variant text-center">
                  <p className="font-label-sm text-on-surface-variant">No achievements yet. Start participating!</p>
                </div>
              )}
            </div>
            
            {/* Skills Column */}
            <div className="flex flex-col gap-base">
              <h4 className="font-label-lg font-bold text-on-surface">Verified Skills</h4>
              {profile?.profile?.student_skills?.length > 0 ? (
                <div className="flex flex-wrap gap-sm">
                  {profile.profile.student_skills.map((ss: any) => (
                    <div key={ss.id} className="bg-primary-container/10 text-primary px-sm py-xs rounded-lg font-label-md flex items-center gap-2 border border-primary/20">
                      <Code className="w-4 h-4 opacity-70" />
                      {ss.skill?.name || "Unknown Skill"}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-surface-container-lowest p-md rounded-xl border border-dashed border-outline-variant text-center">
                  <p className="font-label-sm text-on-surface-variant">No skills added yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
