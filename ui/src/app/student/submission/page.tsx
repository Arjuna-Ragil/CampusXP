import StudentLayout from "@/components/layout/StudentLayout";
import { Star, PlusCircle, Upload, Send, Filter, CheckCircle, XCircle, FileText, Lightbulb } from "lucide-react";

import { serverFetch } from "@/lib/api/serverApi";
import { submitAchievement } from "@/app/actions/studentActions";

export default async function StudentSubmission() {
  let achievements: any[] = [];
  try {
    const res = await serverFetch("/students/achievements");
    achievements = res || [];
  } catch (err) {
    console.error("Failed to fetch achievements", err);
  }

  return (
    <StudentLayout>
      {/* TopAppBar Context */}
      <header className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Submission Center</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Document your journey and earn recognition for your achievements.</p>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-xs bg-tertiary-fixed text-on-tertiary-fixed px-sm py-base rounded-full shadow-sm">
            <Star className="w-5 h-5 fill-tertiary-fixed text-tertiary-fixed" />
            <span className="font-label-md text-label-md">1,240 pts</span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
            <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSq9bb_9BFdY8lAjCMaiB8kDajCFFwGzctjlSkJiHx9Oo4rJtAybMql0UtPxJPLPqeAJOrzrGTT0FFzhU7TGE7A52DgSNw0judHX_To5gUcltvW1PzHoxvyHtw_ptqMs4wbVIjNkjiqd14n3EB4qIHfk8uQ5yckruAjDUEIGxpj30iNQvPWvhGMaOao06lFeRk89etFVURMU2lukS6b5OtI7FfzVB-nABBRYDVThMphX1An2izFT5KEJL_CBF9iVm8rzlG95TtYQ"/>
          </div>
        </div>
      </header>
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-xl">
        {/* Add New Achievement Form */}
        <section className="xl:col-span-5">
          <div className="glass-card rounded-xl p-md shadow-sm border-t-2 border-primary">
            <div className="flex items-center gap-sm mb-md">
              <div className="bg-primary-container text-on-primary-fixed-dim p-base rounded-lg">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">Add New Achievement</h3>
            </div>
            <form className="space-y-md" action={submitAchievement}>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Achievement Title</label>
                <input name="title" required className="w-full p-sm rounded-lg bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary transition-all placeholder:text-outline" placeholder="e.g., Python Web Scraper Project" type="text"/>
              </div>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Type</label>
                <select name="type" required className="w-full p-sm rounded-lg bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary transition-all">
                  <option value="PORTFOLIO_PERSONAL">Portfolio Personal</option>
                  <option value="PORTFOLIO_FREELANCE">Portfolio Freelance</option>
                  <option value="PORTFOLIO_INDUSTRI">Portfolio Industri</option>
                  <option value="SERTIFIKAT_LOKAL">Sertifikat Lokal</option>
                  <option value="SERTIFIKAT_REGIONAL">Sertifikat Regional</option>
                  <option value="SERTIFIKAT_NASIONAL">Sertifikat Nasional</option>
                  <option value="SERTIFIKAT_INTERNASIONAL">Sertifikat Internasional</option>
                </select>
              </div>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Description</label>
                <textarea name="description" className="w-full p-sm rounded-lg bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary transition-all placeholder:text-outline" placeholder="Describe your contribution and what you learned..." rows={4}></textarea>
              </div>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Evidence (File/URL)</label>
                <div className="relative">
                  <input name="evidence_url" required className="w-full p-sm rounded-lg bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary transition-all placeholder:text-outline pr-xl" placeholder="https://github.com/your-username/repo" type="text"/>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-base text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" type="button">
                    <Upload className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-bold hover:bg-secondary transition-all active:scale-95 shadow-md flex justify-center items-center gap-sm" type="submit">
                Submit for Review
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </section>
        {/* Submissions Tracking Table */}
        <section className="xl:col-span-7 space-y-md">
          <div className="flex justify-between items-end">
            <h3 className="font-headline-md text-headline-md text-primary">Your Submissions</h3>
            <div className="flex gap-sm">
              <button className="flex items-center gap-xs px-sm py-base text-label-md font-label-md text-on-surface-variant bg-surface-container hover:bg-surface-variant rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant">
            <table className="w-full text-left zebra-stripe">
              <thead className="bg-surface-container-high text-on-surface-variant border-b border-outline-variant">
                <tr>
                  <th className="p-md font-label-md text-label-md">Achievement Name</th>
                  <th className="p-md font-label-md text-label-md">Date</th>
                  <th className="p-md font-label-md text-label-md">Type</th>
                  <th className="p-md font-label-md text-label-md">Status</th>
                </tr>
              </thead>
              <tbody id="submission-table-body">
                {/* Data Rows */}
                {achievements.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-xl text-center text-on-surface-variant">
                      No submissions found.
                    </td>
                  </tr>
                ) : (
                  achievements.map((ach) => (
                    <tr key={ach.id} className="transition-colors hover:bg-primary/5 cursor-default">
                      <td className="p-md">
                        <div className="font-bold text-on-surface">{ach.title}</div>
                        <div className="text-label-sm font-label-sm text-outline truncate max-w-[200px]">{ach.evidence_url}</div>
                      </td>
                      <td className="p-md text-label-md">{new Date(ach.created_at).toLocaleDateString()}</td>
                      <td className="p-md">
                        <span className="px-sm py-base rounded-full bg-surface-container text-on-surface-variant text-label-sm font-label-sm">{ach.type}</span>
                      </td>
                      <td className="p-md">
                        {ach.status === "APPROVED" ? (
                          <span className="flex items-center gap-xs text-on-primary-container font-bold text-label-sm uppercase tracking-wider">
                            <CheckCircle className="w-4 h-4" />
                            Approved
                          </span>
                        ) : ach.status === "REJECTED" ? (
                          <span className="flex items-center gap-xs text-error font-bold text-label-sm uppercase tracking-wider">
                            <XCircle className="w-4 h-4" />
                            Rejected
                          </span>
                        ) : (
                          <span className="flex items-center gap-xs text-tertiary-container font-bold text-label-sm uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                            Pending
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {/* Empty State (Hidden by default, shown if no rows) */}
            <div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-md" id="upload-modal">
              <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mb-md">
                <FileText className="text-outline w-12 h-12" />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">No submissions yet</h4>
              <p className="max-w-xs text-on-surface-variant mx-auto">Upload your first achievement to start building your professional portfolio and climb the leaderboard!</p>
              <button className="bg-secondary text-on-secondary px-lg py-sm rounded-lg font-bold hover:opacity-90 transition-all">Get Started</button>
            </div>
          </div>
          {/* Success Guidance Card */}
          <div className="bg-secondary-container/20 p-md rounded-xl border border-secondary-container flex gap-md items-start">
            <Lightbulb className="text-secondary-container w-8 h-8 fill-secondary-container" />
            <div>
              <h4 className="font-bold text-primary mb-base">Pro Tip: Boost Your Approval Odds</h4>
              <p className="text-label-md text-on-surface-variant leading-relaxed">
                Include a clear, public link to your project repository or certificate. Submissions with verifiable evidence are approved 80% faster by the Talent Board.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Success Toast Notification (JS driven) */}
      <div className="fixed bottom-margin right-margin transform translate-y-20 opacity-0 bg-inverse-surface text-inverse-on-surface px-md py-sm rounded-lg flex items-center gap-sm shadow-xl transition-all duration-300 z-[100]" id="success-toast">
        <CheckCircle className="text-tertiary-fixed-dim w-5 h-5" />
        <span className="font-label-md">Achievement submitted successfully!</span>
      </div>
    </StudentLayout>
  );
}
