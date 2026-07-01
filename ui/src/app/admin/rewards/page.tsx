import { Star, PlusCircle, Coins, Archive, Save, Package, Search, Briefcase, Edit2, Trash2, Laptop, Coffee, Ticket, ChevronLeft, ChevronRight } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function AdminRewards() {
  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Rewards Management</h1>
          <p className="text-on-surface-variant font-body-md max-w-2xl">Configure, update, and manage the digital and physical rewards available for students. Track point values and maintain inventory levels.</p>
        </div>
        <div className="flex items-center gap-sm">
          <div className="bg-tertiary-container/10 border border-tertiary-container/30 px-sm py-xs rounded-lg flex items-center gap-xs">
            <Star className="w-5 h-5 text-tertiary" />
            <span className="font-label-md text-tertiary font-bold">Total Rewards Claimed: 1,284</span>
          </div>
        </div>
      </div>

      {/* Dashboard Grid: Bento Layout for Actions and Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-md">
        {/* Create New Reward Form Section */}
        <section className="xl:col-span-1 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col h-fit">
          <div className="p-md border-b border-outline-variant bg-surface-container-low/50">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-xs">
              <PlusCircle className="w-6 h-6" />
              Create New Reward
            </h2>
          </div>
          <form className="p-md space-y-md">
            <div className="space-y-base">
              <label className="font-label-md text-label-md text-on-surface-variant">Reward Name</label>
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all" placeholder="e.g. Premium Career Coaching" type="text"/>
            </div>
            <div className="space-y-base">
              <label className="font-label-md text-label-md text-on-surface-variant">Description</label>
              <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all resize-none" placeholder="Describe the value and details of this reward..." rows={3}></textarea>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Point Cost</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm pl-8 focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all" placeholder="500" type="number"/>
                  <Coins className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-tertiary" />
                </div>
              </div>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Quota/Stock</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm pl-8 focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all" placeholder="100" type="number"/>
                  <Archive className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                </div>
              </div>
            </div>
            <div className="space-y-base pt-sm">
              <label className="font-label-md text-label-md text-on-surface-variant">Reward Category</label>
              <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:ring-2 focus:ring-secondary-container focus:border-secondary outline-none transition-all">
                <option>Professional Development</option>
                <option>Campus Merchandise</option>
                <option>Tech &amp; Gadgets</option>
                <option>Event Passes</option>
              </select>
            </div>
            <button className="w-full bg-primary hover:bg-secondary text-on-primary font-bold py-sm rounded-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-sm mt-md" type="button">
              <Save className="w-5 h-5" />
              Publish Reward
            </button>
          </form>
        </section>

        {/* Existing Rewards Management Table Section */}
        <section className="xl:col-span-2 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col">
          <div className="p-md border-b border-outline-variant bg-surface-container-low/50 flex flex-col md:flex-row justify-between items-center gap-sm">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-xs">
              <Package className="w-6 h-6" />
              Inventory Control
            </h2>
            <div className="relative w-full md:w-64">
              <input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 px-10 text-sm focus:ring-2 focus:ring-secondary-container outline-none transition-all" placeholder="Search rewards..." type="text"/>
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Reward Details</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Cost</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Stock</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-center">Status</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/* Reward Row 1 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Executive Mentorship Session</p>
                        <p className="text-xs text-on-surface-variant">1-on-1 with University Alumni</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs text-tertiary font-bold">
                      <Coins className="w-4 h-4" />
                      2,500
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-md text-on-surface">12 / 50</span>
                      <div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-[24%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </td>
                  <td className="px-md py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-lg transition-all">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-lg transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Reward Row 2 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center shrink-0">
                        <Laptop className="w-6 h-6 text-tertiary" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Tech Hub Rental Voucher</p>
                        <p className="text-xs text-on-surface-variant">24-hour premium lab access</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs text-tertiary font-bold">
                      <Coins className="w-4 h-4" />
                      750
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-md text-on-surface">Unlimited</span>
                      <div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </td>
                  <td className="px-md py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-lg transition-all">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-lg transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Reward Row 3 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-12 h-12 rounded-lg bg-on-secondary-container/20 flex items-center justify-center shrink-0">
                        <Coffee className="w-6 h-6 text-on-secondary-container" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Campus Coffee Pass</p>
                        <p className="text-xs text-on-surface-variant">5-pack medium barista drinks</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs text-tertiary font-bold">
                      <Coins className="w-4 h-4" />
                      450
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-md text-error font-bold">5 / 200</span>
                      <div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                        <div className="h-full bg-error w-[2.5%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </td>
                  <td className="px-md py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-lg transition-all">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-lg transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 4 (Inactive Sample) */}
                <tr className="hover:bg-surface-container-low transition-colors group opacity-70 grayscale-[0.5]">
                  <td className="px-md py-md">
                    <div className="flex items-center gap-sm">
                      <div className="w-12 h-12 rounded-lg bg-outline-variant/30 flex items-center justify-center shrink-0">
                        <Ticket className="w-6 h-6 text-outline" />
                      </div>
                      <div>
                        <p className="font-bold text-primary">Annual Gala Invite</p>
                        <p className="text-xs text-on-surface-variant">VIP entry to year-end event</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex items-center gap-xs text-on-surface-variant font-bold">
                      <Coins className="w-4 h-4" />
                      5,000
                    </div>
                  </td>
                  <td className="px-md py-md">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-md text-on-surface-variant">0 / 20</span>
                      <div className="w-24 h-1.5 bg-outline-variant rounded-full overflow-hidden">
                        <div className="h-full bg-outline w-0"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-md py-md text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox"/>
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </td>
                  <td className="px-md py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-fixed rounded-lg transition-all">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-lg transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Table Footer Pagination */}
          <div className="p-md border-t border-outline-variant bg-surface-container-low/30 flex flex-col md:flex-row justify-between items-center gap-md">
            <p className="font-label-sm text-on-surface-variant">Showing 4 of 24 rewards</p>
            <div className="flex items-center gap-base">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold shadow-sm">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant transition-colors">3</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
