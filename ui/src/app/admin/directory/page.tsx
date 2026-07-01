import { Filter, Download, ArrowUpDown, Star, ArrowRight, Database } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function AdminDirectory() {
  return (
    <AdminLayout>
      {/* Filters Row (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-sm mb-lg">
        {/* Skills Filter */}
        <div className="bg-surface-container-lowest p-sm rounded-xl border border-outline-variant shadow-sm flex flex-col gap-base">
          <label className="text-label-sm text-outline-variant uppercase tracking-wider">Skill Category</label>
          <select className="w-full bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer">
            <option>All Skills</option>
            <option>Python Development</option>
            <option>Graphic Design</option>
            <option>Data Analytics</option>
            <option>UX Research</option>
            <option>Public Speaking</option>
          </select>
        </div>
        {/* Major Filter */}
        <div className="bg-surface-container-lowest p-sm rounded-xl border border-outline-variant shadow-sm flex flex-col gap-base">
          <label className="text-label-sm text-outline-variant uppercase tracking-wider">Academic Major</label>
          <select className="w-full bg-transparent border-none font-semibold text-primary focus:ring-0 cursor-pointer">
            <option>All Majors</option>
            <option>Computer Science</option>
            <option>Business Admin</option>
            <option>Visual Arts</option>
            <option>Mechanical Eng</option>
          </select>
        </div>
        {/* Point Range Filter */}
        <div className="bg-surface-container-lowest p-sm rounded-xl border border-outline-variant shadow-sm flex flex-col gap-base">
          <div className="flex justify-between items-center">
            <label className="text-label-sm text-outline-variant uppercase tracking-wider">Point Threshold</label>
            <span className="text-label-md font-bold text-secondary" id="point-val">500+</span>
          </div>
          <input className="w-full h-2 bg-secondary-container rounded-lg appearance-none cursor-pointer accent-primary" max="5000" min="0" step="100" type="range"/>
        </div>
        {/* CTA Actions */}
        <div className="flex items-end gap-base">
          <button className="flex-1 h-14 bg-primary text-on-primary font-bold rounded-lg hover:bg-secondary transition-all flex items-center justify-center gap-base active:scale-95">
            <Filter className="w-5 h-5" />
            Apply Filters
          </button>
          <button className="w-14 h-14 border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-variant transition-colors text-primary" title="Export to CSV">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Table Header & Summary */}
      <div className="flex justify-between items-center mb-md">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">Student Directory</h3>
          <p className="text-on-surface-variant text-body-md">Showing <span className="font-bold text-primary">1,248</span> high-performing students</p>
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
            {/* Student Row 1 */}
            <tr className="hover:bg-secondary-container/5 transition-colors group">
              <td className="px-gutter py-md">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="Student Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARb-mI9v25rO7CbFIrnBu0pdVT4cLIHXJI2_wC_XT2d-n5-oz_1Je7DUhWnK6w2NLWrH6K8aF23xAEVjgAV11beWSXcpi1clAxNQ77IV-LHbQXicXHfI4MEO8xsta7y4rR6Gs7p6ePl59yAH91DWGLNckB9VzFfFDnk9B-6Rq3TAleidJb3ARVfxH9_mQ_KkU64960z4t9meYDyQgyg4ggcK9Em5sl5Q5yPrkLBJheNliTvTgK9Bu31lm_K9paumlUcnrt51y4fOY"/>
                  </div>
                  <div>
                    <p className="font-bold text-primary group-hover:text-secondary transition-colors">Alex Rivera</p>
                    <p className="text-[12px] text-on-surface-variant uppercase">ID: #29481</p>
                  </div>
                </div>
              </td>
              <td className="px-gutter py-md text-body-md">Computer Science</td>
              <td className="px-gutter py-md">
                <div className="flex gap-xs flex-wrap">
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">Python</span>
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">React</span>
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">+2</span>
                </div>
              </td>
              <td className="px-gutter py-md">
                <div className="flex items-center gap-xs">
                  <Star className="w-5 h-5 text-tertiary fill-tertiary" />
                  <span className="font-bold text-primary">4,820</span>
                </div>
              </td>
              <td className="px-gutter py-md text-right">
                <a className="inline-flex items-center gap-xs text-primary font-bold hover:underline" href="#">
                  View Profile
                  <ArrowRight className="w-4 h-4" />
                </a>
              </td>
            </tr>
            {/* Student Row 2 */}
            <tr className="hover:bg-secondary-container/5 transition-colors group">
              <td className="px-gutter py-md">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="Student Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1wu2OlVvCgpkP3tgymv-ICUdivEOMkfGlI10rgTtWbdfVx8s9Oj4ASjPQgv0bAUmFW-fF8uxjma07raZcZ1tK0NxVVLcSk6_eK8XIcFTICtmnyWAiTUjt7ETB3BuJQFQbYo-Ev1RjFZP_8YdJEOhl_VCxSqJkvUEJTCDYr2XTQVdbq9VNBE9LUQ-ifzPHv9N29uRT6Y9DSUB9A2LPe_4WoOREjrfvGefHeEm06k1qO8R07CDeSTsX3sNSyOmXVckHnqyVG795l94"/>
                  </div>
                  <div>
                    <p className="font-bold text-primary group-hover:text-secondary transition-colors">Elena Petrova</p>
                    <p className="text-[12px] text-on-surface-variant uppercase">ID: #30192</p>
                  </div>
                </div>
              </td>
              <td className="px-gutter py-md text-body-md">Visual Arts</td>
              <td className="px-gutter py-md">
                <div className="flex gap-xs flex-wrap">
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">Graphic Design</span>
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">UI/UX</span>
                </div>
              </td>
              <td className="px-gutter py-md">
                <div className="flex items-center gap-xs">
                  <Star className="w-5 h-5 text-tertiary fill-tertiary" />
                  <span className="font-bold text-primary">3,950</span>
                </div>
              </td>
              <td className="px-gutter py-md text-right">
                <a className="inline-flex items-center gap-xs text-primary font-bold hover:underline" href="#">
                  View Profile
                  <ArrowRight className="w-4 h-4" />
                </a>
              </td>
            </tr>
            {/* Student Row 3 */}
            <tr className="hover:bg-secondary-container/5 transition-colors group">
              <td className="px-gutter py-md">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="Student Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALjJ7mnWUmwlS92sROIsRQYJWlAzyISJCfjBqDFmQlinKur1_ts39JhdvMz6Bx8WA2AExsNaxZueW7_bs27qHWhJ0KDc58VHBxWrjoMchuyuLC4Tcb71Fx2fZbl5eGKJTSzlM87LfupsVsyuwCaY-a__XLdAmXslAUZw7waDrOFOUmxBj8KQ5iTFZPOdlSyoZ2F4fHktsN4CRdQNBJvxc6lc1VEmNl298EkwjpU5A_2HBwgMm1oRVqABOYCLD_lE4-vG9kETDX2jA"/>
                  </div>
                  <div>
                    <p className="font-bold text-primary group-hover:text-secondary transition-colors">Jordan Smith</p>
                    <p className="text-[12px] text-on-surface-variant uppercase">ID: #28551</p>
                  </div>
                </div>
              </td>
              <td className="px-gutter py-md text-body-md">Business Admin</td>
              <td className="px-gutter py-md">
                <div className="flex gap-xs flex-wrap">
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">Strategy</span>
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">Excel</span>
                  <span className="px-xs py-1 rounded bg-secondary-container/20 text-on-secondary-container text-[11px] font-bold uppercase">+1</span>
                </div>
              </td>
              <td className="px-gutter py-md">
                <div className="flex items-center gap-xs">
                  <Star className="w-5 h-5 text-tertiary fill-tertiary" />
                  <span className="font-bold text-primary">2,100</span>
                </div>
              </td>
              <td className="px-gutter py-md text-right">
                <a className="inline-flex items-center gap-xs text-primary font-bold hover:underline" href="#">
                  View Profile
                  <ArrowRight className="w-4 h-4" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Pagination Placeholder */}
        <div className="p-md bg-surface-container-low flex justify-between items-center border-t border-outline-variant">
          <span className="text-label-sm text-on-surface-variant">Showing 1 to 10 of 1,248 students</span>
          <div className="flex gap-base">
            <button className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-lowest transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center font-bold">1</button>
            <button className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-lowest transition-colors">2</button>
            <button className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-lowest transition-colors">3</button>
            <button className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-lowest transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
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
