import StudentLayout from "@/components/layout/StudentLayout";
import { Medal, Clock, Trophy, Star, ChevronDown } from "lucide-react";

export default function StudentLeaderboard() {
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
        <div className="flex items-center gap-md">
          <div className="bg-surface-container-lowest px-md py-sm rounded-xl border border-outline-variant shadow-sm flex items-center gap-sm">
            <Medal className="text-tertiary w-6 h-6" />
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Top Major</p>
              <p className="font-label-md text-label-md text-primary">Computer Science</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest px-md py-sm rounded-xl border border-outline-variant shadow-sm flex items-center gap-sm">
            <Clock className="text-secondary w-6 h-6" />
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant">Next Refresh</p>
              <p className="font-label-md text-label-md text-primary">2h 45m</p>
            </div>
          </div>
        </div>
      </div>
      {/* BENTO GRID LEADERBOARD LAYOUT */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-lg items-start">
        {/* LEFT COLUMN: TOP 3 PODIUM */}
        <div className="xl:col-span-4 space-y-md">
          <h3 className="font-headline-md text-headline-md text-primary mb-sm">The Podium</h3>
          {/* Rank 1 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-md border-t-4 border-tertiary relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-tertiary-fixed p-1">
                  <img className="w-full h-full rounded-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW0q0cEKyBysMyXekVMDtjqTcEfRypHhjNbMcaPiePpvXHEEVHS_duxl2JHwf7VmguLQdiEBPOyD-BgLuyBDkwBSBugr6FVVvcBLsgPmv-1XLWfJVnz7rVeO0ge6d53GNf8OLWa9DT5e6eYC-_sssFMuGgMqb8sAUvDVraDpcMkY-aL64AFQ08NdQrNe8yiYbHzyrrS-eRQLF9gEpW5phMsvtLgSSMPAxRja00EKXvXCQ1lzMxQ65bF8sCDAZrXFPLx181A8i7JPE"/>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-tertiary-container text-on-tertiary-container w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-surface-container-lowest">1</div>
              </div>
              <div>
                <p className="font-label-md text-label-md text-tertiary uppercase tracking-widest">Global Leader</p>
                <h4 className="font-headline-md text-headline-md text-primary">Alex Rivera</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Applied Mathematics</p>
                <div className="flex items-center gap-xs mt-base text-tertiary font-bold">
                  <Star className="fill-tertiary w-4 h-4" />
                  <span>12,450 pts</span>
                </div>
              </div>
            </div>
          </div>
          {/* Rank 2 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-t-2 border-outline-variant hover:shadow-md transition-all group">
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-outline-variant p-1">
                  <img className="w-full h-full rounded-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJuQEtgcNId8_7Gs09oGvBtPRn8V3YtxggLlpnt3Pl1RAjWnYt0t5Wwk3MiMusU1Jr_AYK0Fv_p6Sr3KmOH7uEZDQo8zizbILGyFUuQtFpfxQke6Ie3d9fr152Ve5TcM_dCbLlDcUFELtB1INcMj_ZtXBznMaqE8sVlbmS7vfDjSv3qpmpB2l6vpxQGJcRlk_CIb0gBEFqjGFUx0L1tiJGLn7QVsg_IFYmnfF5fHrSlPomi40Kjto6qXFw6CjSNgj7YvMyFBRb9s"/>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-outline-variant text-on-surface w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-surface-container-lowest">2</div>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Jordan Lee</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Economics & Data Science</p>
                <div className="flex items-center gap-xs mt-xs text-primary/70 font-semibold text-sm">
                  <Star className="w-4 h-4 fill-primary/70 text-primary/70" />
                  <span>11,920 pts</span>
                </div>
              </div>
            </div>
          </div>
          {/* Rank 3 */}
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border-t-2 border-tertiary-fixed-dim/30 hover:shadow-md transition-all group">
            <div className="flex items-center gap-md">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-tertiary-fixed-dim/30 p-1">
                  <img className="w-full h-full rounded-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVCkVuoZQzG9xue3u0cuxL08MDCucsWm939DeWOI0ysJ-ICuPOdhErNA2U7MThxXgjVK6inuxKhCcUiriM1uh6wxBRMlTcFRJnj1OyUz_V7uYjtULgjSWw3Hsvy5jM2kbF7S8wwWyGprhWGX9l9SrtgnEzTDj0xCur2HAwlNvvts-_T97i8ftCQBWO1Z7yY6Tx2AYkgHO3VpPyhoc4rSWMZtK0BuNYTFp8HwFnGWjEsSMTkAJynoN5YQvEohWpIEt2HaELSyTXko"/>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-tertiary-fixed-dim text-on-tertiary-container w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-surface-container-lowest">3</div>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">Sam Taylor</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Software Engineering</p>
                <div className="flex items-center gap-xs mt-xs text-primary/70 font-semibold text-sm">
                  <Star className="w-4 h-4 fill-primary/70 text-primary/70" />
                  <span>11,105 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN: MAIN LIST & USER STATUS */}
        <div className="xl:col-span-8 flex flex-col gap-lg">
          {/* CURRENT USER STICKY RANK */}
          <div className="bg-secondary-container text-on-secondary-container p-md rounded-xl shadow-md flex justify-between items-center relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-on-secondary-container/20"></div>
            <div className="flex items-center gap-md relative z-10">
              <div className="w-12 h-12 rounded-full border-2 border-on-secondary-container/30 overflow-hidden">
                <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHgmCEqTmpdRlUzIa0e1BOSFDOAc5XUEJTXcvwhpaD1AELXpgHEmmQyU6sMVPuVOpLp8YcLbTEMT7BssMhN7orQapygFfPpY1UMJUuMFLCnTx7GWYrYG6e99wo-_x614AukkJVvEvmTMc6VUFfIW6bRIOMQMRghrC3AREQ9ljC0y4VX1xv1YdbQhjhUXVeK9N7o0o3Q1K-x63z7ECO6M8cMMPfEPOdr3bwVCTcKvheX0UQfWVSWAKeUstnH2SWo9YKgumi5Im5TWI"/>
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-tighter opacity-80">Your Current Standings</span>
                <div className="flex items-baseline gap-xs">
                  <h4 className="font-headline-md text-headline-md font-bold">Rank #42</h4>
                  <span className="font-label-md text-label-md opacity-90">/ 2,450 Students</span>
                </div>
              </div>
            </div>
            <div className="text-right relative z-10">
              <p className="font-label-sm text-label-sm opacity-80">Points to Next Rank</p>
              <p className="font-headline-md text-headline-md font-bold">145</p>
              <div className="w-32 h-1.5 bg-on-secondary-container/20 rounded-full mt-xs overflow-hidden">
                <div className="h-full bg-on-secondary-container w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>
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
                <tr className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors group cursor-pointer">
                  <td className="px-md py-md font-bold text-primary">#4</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                        <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr70mbivSzNlPIYnmxrgN2muAcDxSt46udZzGKxub91ljHm_ny0PVzfrJF5cj74Q4oP4sh2A9rrqJhdYXgxM7uspvlFkiI27kaT16bEvJ3GL1T9OVn83aYbJ8lHgS5W3SztGv-_1LemxY2Ke111zVvPwnKy0dAyp4QHg05NwsIxw439OsZUp_QteXYxNCgwnon8M4oAtSlqUUhHJlSfGPQryzhyMJFJCyZhEGioh5Z65HJOziV3gnvQjZMc91QC6XpymsmFFjZGbQ"/>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface">Elena Gilbert</span>
                    </div>
                  </td>
                  <td className="px-md py-md font-body-md text-body-md text-on-surface-variant hidden md:table-cell">Law & Justice</td>
                  <td className="px-md py-md text-right font-bold text-primary">10,950</td>
                </tr>
                <tr className="border-b border-outline-variant/50 hover:bg-surface-container transition-colors group cursor-pointer">
                  <td className="px-md py-md font-bold text-primary">#5</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                        <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-83jD1yUo0pw2tZfMXRhWWUmn7vWCdLfXI5Bl8tMOTAIIdMoqK1dTEz6nRg9MlOkZlMrSbwQX5KV4c5fzRTjLNVn6kCYGs1z4ZLKc9D4xWOBWvQg8i_FoOY7ILnvLXCFEw3YKDJLOPjmW1nnDwh_y9hF_TxaUBqQlwfQepEYqS46f5gfGCeXrGbpDMT6eEKlVWdHT9Ui4ySjvNsTAtfN0jVezPFinyExtvR0ujDJlrTxw_72BuKFcyNrIdoHTCjBZWmO1LuUkgVU"/>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface">Marcus Chen</span>
                    </div>
                  </td>
                  <td className="px-md py-md font-body-md text-body-md text-on-surface-variant hidden md:table-cell">Interactive Media</td>
                  <td className="px-md py-md text-right font-bold text-primary">10,820</td>
                </tr>
                <tr className="bg-secondary/10 border-b border-secondary/20 hover:bg-secondary/20 transition-colors group cursor-pointer relative">
                  <td className="px-md py-md font-bold text-secondary">#42</td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-secondary bg-surface-variant">
                        <img className="w-full h-full object-cover" data-alt="Student avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz77FNDavK-KFpkbF14Jfiup4q7u3KIls2n4lHCmYeycrMPltDd-ZfB2lEtGWDcn6rj9gne6kzBhKBu8eNd6NX57Zu4wVhU-7XA-fifKv-19MmhFCjPl0qJ07XuUCq36Lufl5Xl9yVjrFV-CFguLeVQGg5-da74xjBZdNuwW7MRkLQCdP8qAeUYglje-fu7U7RUDG1aovLw3oHEeElXAzjRT2lR9nHjHO-sEdeOPqSg49dRvlyuiVBKS6v1JwFc0Be-5sjx9RVtkY"/>
                      </div>
                      <span className="font-label-md text-label-md text-primary font-bold">You (Alex Johnson)</span>
                    </div>
                  </td>
                  <td className="px-md py-md font-body-md text-body-md text-on-surface-variant hidden md:table-cell">Graphic Design</td>
                  <td className="px-md py-md text-right font-bold text-secondary">8,420</td>
                </tr>
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
      
      {/* FAB for quick action (contextual to Leaderboard/Home) */}
      <button className="fixed bottom-margin right-margin w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <Medal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    </StudentLayout>
  );
}
