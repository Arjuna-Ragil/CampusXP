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
            <div className="p-md">
              <div className="flex justify-between items-center mb-sm">
                <h4 className="font-label-md text-label-md text-on-surface-variant font-bold">Recent Activity</h4>
                <button className="text-primary font-label-sm text-label-sm hover:underline">See all</button>
              </div>
              <div className="space-y-md">
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="grow">
                    <p className="font-label-md text-label-md text-on-surface">Python Project Subm.</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Yesterday, 4:30 PM</p>
                  </div>
                  <span className="font-label-md text-label-md text-emerald-600 font-bold">+150</span>
                </div>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="grow">
                    <p className="font-label-md text-label-md text-on-surface">Mentorship Session</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Oct 12, 11:00 AM</p>
                  </div>
                  <span className="font-label-md text-label-md text-emerald-600 font-bold">+50</span>
                </div>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="grow">
                    <p className="font-label-md text-label-md text-on-surface">Cloud Cert. Verified</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Oct 10, 2:15 PM</p>
                  </div>
                  <span className="font-label-md text-label-md text-emerald-600 font-bold">+500</span>
                </div>
              </div>
              <div className="mt-lg p-md bg-surface-container-low rounded-lg border border-dashed border-outline">
                <p className="font-label-sm text-label-sm text-center italic text-on-surface-variant">"You're only 50 points away from the Silver Badge!"</p>
                <div className="w-full bg-surface-variant h-2 rounded-full mt-sm overflow-hidden">
                  <div className="bg-tertiary-container h-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: AI Recommendations (Bento Grid Style) */}
        <div className="lg:col-span-8 flex flex-col gap-gutter">
          <div className="flex items-center justify-between mb-base">
            <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-sm">
              <Brain className="text-secondary w-6 h-6 fill-secondary/20" />
              AI Talent Matches &amp; Opportunities
            </h3>
            <span className="font-label-sm text-label-sm bg-secondary-container/20 text-on-secondary-container px-sm py-xs rounded-full">Updated 1h ago</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Match 1: Collaborator */}
            <div className="glass-card rounded-xl p-md border border-outline-variant hover:shadow-lg transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-md">
                <div className="w-12 h-12 rounded-lg bg-primary-container/5 overflow-hidden flex items-center justify-center border border-primary-container/10">
                  <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSSjtkwQXtklgrR5gS5aQ7RL01dSAAfB3Bp-RO94ptlN0kRNKeLuOU_DmPfpl80EzLpT-jlLAp3IogcnQXnR2qtLs4BCKQRlEMsG4onWUZ7qMrphuzkqEFj5ZnUUEOqOgaXAG-Be_iUujNTGCZfN8jXobjdNlt8L2Bs7tpc9QR54fH3D73vsJKYuJFY2X6BivALiZknvYNpNVQb-F-JBGk_OQr6xfn1k39-G96uhLsnP1OkSRd6e9Te9zHWVptRMAg7NPFgS6EIhE"/>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-sm py-base rounded-full font-label-sm text-label-sm border border-emerald-100">98% Match</div>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">Sarah Chen</h4>
              <p className="font-label-md text-label-md text-on-surface-variant mb-md">B.F.A. Interaction Design</p>
              <div className="flex flex-wrap gap-xs mb-md">
                <span className="px-xs py-base bg-surface-container text-on-surface-variant rounded text-label-sm font-label-sm">UI/UX</span>
                <span className="px-xs py-base bg-surface-container text-on-surface-variant rounded text-label-sm font-label-sm">Figma</span>
                <span className="px-xs py-base bg-surface-container text-on-surface-variant rounded text-label-sm font-label-sm">Prototyping</span>
              </div>
              <p className="text-label-md font-label-md text-on-surface mb-lg grow">"Looking for a Computer Science partner for the upcoming Fintech Hackathon. Your Python skills would be a perfect fit."</p>
              <button className="w-full py-sm px-md border border-primary text-primary font-label-md text-label-md rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-xs">
                Connect &amp; Chat
                <Send className="w-5 h-5" />
              </button>
            </div>
            {/* Match 2: Project */}
            <div className="bg-surface-container-high rounded-xl p-md border border-outline-variant hover:shadow-lg transition-all group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-md">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center">
                    <Rocket className="text-primary w-8 h-8" />
                  </div>
                  <div className="bg-tertiary-fixed text-on-tertiary-fixed px-sm py-base rounded-full font-label-sm text-label-sm">High Value</div>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Global Tech Initiative</h4>
                <p className="font-label-md text-label-md text-on-surface-variant mb-md">Project Opportunity</p>
                <p className="text-label-md font-label-md text-on-surface mb-lg">A multi-disciplinary research project focusing on AI Ethics and Sustainable Computing. Seeking students with strong Backend logic.</p>
                <div className="flex items-center gap-md mb-lg">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Reward</span>
                    <span className="font-label-md text-label-md text-primary font-bold">1,200 PTS</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Deadline</span>
                    <span className="font-label-md text-label-md text-on-surface font-bold">In 3 days</span>
                  </div>
                </div>
                <button className="w-full py-sm px-md bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-secondary transition-all">
                  Apply for Role
                </button>
              </div>
            </div>
            {/* Match 3: Peer Learning (Wide Item) */}
            <div className="md:col-span-2 glass-card rounded-xl p-md border border-outline-variant hover:shadow-lg transition-all flex flex-col md:flex-row gap-md items-center">
              <div className="w-full md:w-1/3 h-40 rounded-lg overflow-hidden relative">
                <img className="w-full h-full object-cover" data-alt="University lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdmblGSOhCD_y1GoyjxQQb-TFooBmG9nz9IMrmN1ousp2Uw6bH6Yok9-aDmQTvb6egALK4b270BXdHq3O-K7ONIIQJQvfxde_L1Ku9ibtE_91-55p39VW4j1DRsoL05tyCj1nDAtm6HE1xtoTdUQYYmjrHL0fkh702n8Y69WMZbUfL6W0PajkI9AYGZxbP8DMm78s31NhiqEhIKnyCEVXfnGl-DwTWXz4ezJq5aCKpLLlRju75CtXQ-8zxyIHryqepav5dTnkvCCQ"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-sm">
                  <span className="text-white font-label-sm text-label-sm">Student Lounge: Live Study Group</span>
                </div>
              </div>
              <div className="grow">
                <div className="flex items-center gap-xs mb-xs">
                  <Sparkles className="text-secondary w-4 h-4" />
                  <span className="text-secondary font-label-sm text-label-sm font-bold uppercase tracking-widest">Skill Boost Recommendation</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-xs">Next Gen Cloud Computing Workshop</h4>
                <p className="text-label-md font-label-md text-on-surface-variant mb-md">Based on your interest in backend engineering and your current progress in Python, this weekend's workshop will help you secure the "Cloud Master" badge.</p>
                <div className="flex flex-wrap gap-md items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-outline-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-outline-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-outline-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+12</div>
                  </div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">friends are attending</span>
                  <button className="ml-auto py-sm px-md bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:opacity-90 transition-all">
                    Reserve My Spot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
