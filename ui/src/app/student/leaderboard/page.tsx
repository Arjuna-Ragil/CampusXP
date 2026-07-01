import StudentLayout from "@/components/layout/StudentLayout";
import { Medal, Clock, Trophy, Star, ChevronDown } from "lucide-react";

import { serverFetch } from "@/lib/api/serverApi";

export default async function StudentLeaderboard() {
  let leaderboard: any[] = [];
  try {
    const res = await serverFetch("/students/leaderboard");
    leaderboard = res || [];
  } catch (err) {
    console.error("Failed to fetch leaderboard", err);
  }

  const top1 = leaderboard[0];
  const top2 = leaderboard[1];
  const top3 = leaderboard[2];
  const rest = leaderboard.slice(3);

  return (
    <StudentLayout>
      {/* FILTER & TOGGLE */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-lg">
        <div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-base">Real-time standings across the institution</p>
          <div className="flex bg-surface-container-high p-1 rounded-xl w-fit">
            <button className="px-md py-xs rounded-lg font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm transition-all">Overall</button>
            <button className="px-md py-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all">By Major</button>
          </div>
        </div>
      </div>
      {/* BENTO GRID LEADERBOARD LAYOUT */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-lg items-start">
        {/* LEFT COLUMN: TOP 3 PODIUM */}
        <div className="xl:col-span-4 space-y-md">
          <h3 className="font-headline-md text-headline-md text-primary mb-sm">The Podium</h3>
          
          {/* Rank 1 */}
          {top1 && (
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-md border-t-4 border-tertiary relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-tertiary-fixed p-1 bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant text-2xl">
                  {top1.full_name?.charAt(0) || "U"}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-tertiary-container text-on-tertiary-container w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-surface-container-lowest">1</div>
              </div>
              <div>
                <p className="font-label-md text-label-md text-tertiary uppercase tracking-widest">Global Leader</p>
                <h4 className="font-headline-md text-headline-md text-primary">{top1.full_name || "Unknown"}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{top1.major || ""}</p>
                <div className="flex items-center gap-xs mt-base text-tertiary font-bold">
                  <Star className="fill-tertiary w-4 h-4" />
                  <span>{top1.total_points} pts</span>
                </div>
              </div>
            </div>
          </div>
          )}
          
          {/* Rank 2 */}
          {top2 && (
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-t-2 border-outline-variant hover:shadow-md transition-all group">
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-outline-variant p-1 bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant text-xl">
                  {top2.full_name?.charAt(0) || "U"}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-outline-variant text-on-surface w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-surface-container-lowest">2</div>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">{top2.full_name || "Unknown"}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{top2.major || ""}</p>
                <div className="flex items-center gap-xs mt-xs text-primary/70 font-semibold text-sm">
                  <Star className="w-4 h-4 fill-primary/70 text-primary/70" />
                  <span>{top2.total_points} pts</span>
                </div>
              </div>
            </div>
          </div>
          )}
          
          {/* Rank 3 */}
          {top3 && (
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-t-2 border-tertiary-fixed-dim/30 hover:shadow-md transition-all group">
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-tertiary-fixed-dim/30 p-1 bg-surface-variant flex items-center justify-center font-bold text-on-surface-variant text-xl">
                  {top3.full_name?.charAt(0) || "U"}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-tertiary-fixed-dim text-on-tertiary-container w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-surface-container-lowest">3</div>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">{top3.full_name || "Unknown"}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{top3.major || ""}</p>
                <div className="flex items-center gap-xs mt-xs text-primary/70 font-semibold text-sm">
                  <Star className="w-4 h-4 fill-primary/70 text-primary/70" />
                  <span>{top3.total_points} pts</span>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
        {/* RIGHT COLUMN: MAIN LIST & USER STATUS */}
        <div className="xl:col-span-8 flex flex-col gap-lg">
          {/* RANKINGS TABLE */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Rank</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Student</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider hidden md:table-cell">Major</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Points</th>
                </tr>
              </thead>
              <tbody>
                {rest.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-xl text-center text-on-surface-variant">No more students found.</td>
                  </tr>
                ) : (
                  rest.map((student, index) => (
                    <tr key={student.id} className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors group cursor-pointer">
                      <td className="px-md py-md font-bold text-primary">#{index + 4}</td>
                      <td className="px-md py-md">
                        <div className="flex items-center gap-sm">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center font-bold text-xs">
                            {student.full_name?.charAt(0) || "U"}
                          </div>
                          <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">{student.full_name || "Unknown"}</span>
                        </div>
                      </td>
                      <td className="px-md py-md font-body-md text-body-md text-on-surface-variant hidden md:table-cell">{student.major || ""}</td>
                      <td className="px-md py-md text-right font-bold text-primary">{student.total_points}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="p-md bg-surface-container-low flex justify-center">
              <button className="flex items-center gap-xs font-label-md text-label-md text-primary hover:underline transition-all">
                Load More Rankings
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
