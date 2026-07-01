import { Filter, Download, ArrowUpDown, Star, ArrowRight, Database } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";
import { serverFetch } from "@/lib/api/serverApi";

export default async function AdminDirectory({ searchParams }: { searchParams: Promise<{ skill?: string, major?: string }> }) {
  const { skill, major } = await searchParams;
  let url = "/admin/students";
  const params = new URLSearchParams();
  if (skill) params.append("skill", skill);
  if (major) params.append("major", major);
  
  if (params.toString()) url += "?" + params.toString();

  let students = [];
  try {
    students = await serverFetch(url);
  } catch(e) {}

  return (
    <AdminLayout>
      {/* Filters Row (Bento Style) */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-sm mb-lg" method="GET">
        {/* Skills Filter */}
        <div className="bg-surface-container-lowest p-sm rounded-xl border border-outline-variant shadow-sm flex flex-col gap-base">
          <label className="text-label-sm text-outline-variant uppercase tracking-wider">Skill Category</label>
          <select name="skill" defaultValue={skill || ""} className="w-full bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer">
            <option value="">All Skills</option>
            <option value="Python">Python</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Figma">Figma</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Golang">Golang</option>
          </select>
        </div>
        {/* Major Filter */}
        <div className="bg-surface-container-lowest p-sm rounded-xl border border-outline-variant shadow-sm flex flex-col gap-base">
          <label className="text-label-sm text-outline-variant uppercase tracking-wider">Academic Major</label>
          <select name="major" defaultValue={major || ""} className="w-full bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer">
            <option value="">All Majors</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Admin">Business Admin</option>
            <option value="Visual Arts">Visual Arts</option>
            <option value="Mechanical Eng">Mechanical Eng</option>
          </select>
        </div>
        {/* CTA Actions */}
        <div className="flex items-end gap-base">
          <button type="submit" className="flex-1 h-14 bg-primary text-on-primary font-bold rounded-lg hover:bg-secondary transition-all flex items-center justify-center gap-base active:scale-95">
            <Filter className="w-5 h-5" />
            Apply Filters
          </button>
          <button type="button" className="w-14 h-14 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-variant transition-colors text-primary" title="Export to CSV">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Table Header & Summary */}
      <div className="flex justify-between items-center mb-md">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">Student Directory</h3>
          <p className="text-on-surface-variant text-body-md">Showing <span className="font-bold text-primary">{students?.length || 0}</span> high-performing students</p>
        </div>
        <div className="flex gap-base">
          <button className="px-md py-xs bg-surface-container-lowest border border-outline-variant rounded-full text-label-md text-on-surface-variant hover:bg-surface-variant flex items-center gap-xs">
            <ArrowUpDown className="w-4 h-4" />
            Recently Active
          </button>
        </div>
      </div>

      {/* Student Data Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-md overflow-hidden mb-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low text-on-surface-variant font-label-md border-b border-outline-variant">
            <tr>
              <th className="px-gutter py-md">Student</th>
              <th className="px-gutter py-md">Major</th>
              <th className="px-gutter py-md">Key Skills</th>
              <th className="px-gutter py-md">Total Points</th>
              <th className="px-gutter py-md text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {students?.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-xl text-on-surface-variant font-bold">No students found matching filters</td>
              </tr>
            ) : students?.map((profile: any) => (
              <tr key={profile.id} className="hover:bg-secondary-container/5 transition-colors group">
                <td className="px-gutter py-md">
                  <div className="flex items-center gap-md">
                    {profile.user?.pfp_url ? (
                      <img className="w-10 h-10 rounded-full object-cover" data-alt={profile.user?.username} src={profile.user?.pfp_url}/>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {profile.user?.username?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-primary group-hover:text-secondary transition-colors">{profile.user?.username}</p>
                      <p className="text-[12px] text-on-surface-variant uppercase">ID: #{profile.id.substring(0,6)}</p>
                    </div>
                  </div>
                </td>
                <td className="px-gutter py-md text-body-md">{profile.major || "-"}</td>
                <td className="px-gutter py-md">
                  <div className="flex gap-xs flex-wrap">
                    {profile.student_skills?.slice(0, 3).map((ss: any) => (
                      <span key={ss.id} className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">{ss.skill?.name}</span>
                    ))}
                    {profile.student_skills?.length > 3 && (
                      <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">+{profile.student_skills.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="px-gutter py-md">
                  <div className="flex items-center gap-xs">
                    <Star className="w-5 h-5 text-tertiary fill-tertiary" />
                    <span className="font-bold text-primary">{profile.total_points}</span>
                  </div>
                </td>
                <td className="px-gutter py-md text-right">
                  <a className="inline-flex items-center gap-xs text-primary font-bold hover:underline" href="#">
                    View Profile
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="fixed bottom-lg right-lg bg-tertiary-container text-on-tertiary-container w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50 group">
        <Database className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <div className="absolute right-20 bg-primary text-on-primary px-sm py-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-label-md shadow-xl">
          Generate Report
        </div>
      </button>
    </AdminLayout>
  );
}
