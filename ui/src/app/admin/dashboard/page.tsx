import AdminLayout from "@/components/layout/AdminLayout";
import { ArrowUp, User, Zap, TrendingUp, FolderOpen, ChevronRight } from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-lg">
        {/* KPI Metric Cards: Bento Grid Style */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Total Students */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-l-4 border-primary flex items-start justify-between hover:shadow-md transition-all group active:scale-95 duration-200">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Registered Students</p>
              <h3 className="font-display-lg text-primary text-[40px]">1,250</h3>
              <p className="font-label-sm text-label-sm text-emerald-600 flex items-center mt-2">
                <ArrowUp className="w-4 h-4 mr-1" />
                +12% from last month
              </p>
            </div>
            <div className="bg-primary-fixed p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
              <User className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
          </div>
          {/* Total Skills Mapped */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-l-4 border-secondary flex items-start justify-between hover:shadow-md transition-all group active:scale-95 duration-200">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Skills Mapped</p>
              <h3 className="font-display-lg text-primary text-[40px]">4,800</h3>
              <p className="font-label-sm text-label-sm text-emerald-600 flex items-center mt-2">
                <ArrowUp className="w-4 h-4 mr-1" />
                +8.4% growth
              </p>
            </div>
            <div className="bg-secondary-fixed p-3 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors">
              <Zap className="w-6 h-6 text-secondary group-hover:text-white" />
            </div>
          </div>
          {/* Total Portfolios */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-l-4 border-tertiary flex items-start justify-between hover:shadow-md transition-all group active:scale-95 duration-200">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Submitted Portfolios</p>
              <h3 className="font-display-lg text-primary text-[40px]">620</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center mt-2">
                <TrendingUp className="w-4 h-4 mr-1" />
                Active tracking enabled
              </p>
            </div>
            <div className="bg-tertiary-fixed p-3 rounded-lg group-hover:bg-tertiary group-hover:text-white transition-colors">
              <FolderOpen className="w-6 h-6 text-tertiary group-hover:text-white" />
            </div>
          </div>
        </section>

        {/* Chart & Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {/* Submission Trends Chart */}
          <section className="lg:col-span-2 bg-surface-container-lowest p-md rounded-xl shadow-sm relative overflow-hidden h-[400px]">
            <div className="flex items-center justify-between mb-md">
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Submission Trends</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Engagement activity over the last 6 months</p>
              </div>
              <select className="bg-surface-container-low border-none rounded-lg font-label-md text-label-md px-3 py-1 text-on-surface">
                <option>Last 6 Months</option>
                <option>Year to Date</option>
              </select>
            </div>
            <div className="flex items-end justify-between h-64 w-full px-4 gap-4">
              <div className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full bg-secondary-container rounded-t-lg h-[45%] group-hover:bg-secondary transition-colors cursor-pointer"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">JAN</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full bg-secondary-container rounded-t-lg h-[60%] group-hover:bg-secondary transition-colors cursor-pointer"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">FEB</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full bg-secondary-container rounded-t-lg h-[55%] group-hover:bg-secondary transition-colors cursor-pointer"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">MAR</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full bg-secondary-container rounded-t-lg h-[85%] group-hover:bg-secondary transition-colors cursor-pointer"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">APR</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full bg-secondary-container rounded-t-lg h-[70%] group-hover:bg-secondary transition-colors cursor-pointer"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">MAY</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full bg-secondary rounded-t-lg h-[95%] cursor-pointer"></div>
                <span className="font-label-sm text-label-sm text-primary font-bold">JUN</span>
              </div>
            </div>
          </section>

          {/* Skill Distribution (Donut Style Representation) */}
          <section className="bg-surface-container-lowest p-md rounded-xl shadow-sm">
            <h4 className="font-headline-md text-headline-md text-primary mb-base">Skill Distribution</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-md">Top performing categories</p>
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface">Data Science</span>
                  <span className="font-bold">38%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[38%] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface">Digital Marketing</span>
                  <span className="font-bold">24%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[24%] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface">UI/UX Design</span>
                  <span className="font-bold">21%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-container w-[21%] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-label-md">
                  <span className="text-on-surface">Software Eng.</span>
                  <span className="font-bold">17%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-outline-variant w-[17%] rounded-full"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-lg py-3 rounded-lg border border-primary text-primary font-label-md hover:bg-primary hover:text-white transition-all">
              Generate Full Report
            </button>
          </section>
        </div>

        {/* Pending Verifications Mini-List */}
        <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="px-md py-4 flex items-center justify-between border-b border-outline-variant bg-surface-container-low">
            <h4 className="font-headline-md text-headline-md text-primary">Recent Pending Verifications</h4>
            <a className="text-primary font-label-md hover:underline" href="#">View All Verifications</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50 text-label-sm uppercase tracking-wider text-on-surface-variant">
                  <th className="px-md py-4 font-semibold">Student</th>
                  <th className="px-md py-4 font-semibold">Credential</th>
                  <th className="px-md py-4 font-semibold">Date Submitted</th>
                  <th className="px-md py-4 font-semibold">Status</th>
                  <th className="px-md py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/* Entry 1 */}
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">AS</div>
                      <div>
                        <p className="font-label-md text-on-surface">Alex Stanford</p>
                        <p className="font-label-sm text-on-surface-variant">Computer Science</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-4 font-label-md text-on-surface">Python Advanced Cert.</td>
                  <td className="px-md py-4 font-label-md text-on-surface">Oct 24, 2023</td>
                  <td className="px-md py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed">
                      Pending Review
                    </span>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="text-primary hover:bg-primary-fixed p-2 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
                {/* Entry 2 */}
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-xs">ML</div>
                      <div>
                        <p className="font-label-md text-on-surface">Maya Lopez</p>
                        <p className="font-label-sm text-on-surface-variant">Business Analytics</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-4 font-label-md text-on-surface">Tableau Visual Specialist</td>
                  <td className="px-md py-4 font-label-md text-on-surface">Oct 23, 2023</td>
                  <td className="px-md py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed">
                      Pending Review
                    </span>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="text-primary hover:bg-primary-fixed p-2 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
                {/* Entry 3 */}
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-on-surface font-bold text-xs">JC</div>
                      <div>
                        <p className="font-label-md text-on-surface">Jordan Chen</p>
                        <p className="font-label-sm text-on-surface-variant">Mechanical Engineering</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-4 font-label-md text-on-surface">AutoCAD Pro Design</td>
                  <td className="px-md py-4 font-label-md text-on-surface">Oct 22, 2023</td>
                  <td className="px-md py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed">
                      Pending Review
                    </span>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="text-primary hover:bg-primary-fixed p-2 rounded-lg transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
