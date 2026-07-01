import AdminLayout from "@/components/layout/AdminLayout";
import { Star, PlusCircle, Coins, Archive, Save, Package, Search, Trash2, Edit2, Briefcase } from "lucide-react";
import { serverFetch } from "@/lib/api/serverApi";
import { createRewardAction, deleteRewardAction } from "@/app/actions/adminActions";

export default async function AdminRewards() {
  let rewards: any[] = [];
  try {
    const res = await serverFetch("/admin/rewards");
    rewards = res.data || [];
  } catch (err) {
    console.error("Failed to fetch rewards", err);
  }

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Rewards Management</h1>
          <p className="text-on-surface-variant font-body-md max-w-2xl">Configure, update, and manage the digital and physical rewards available for students.</p>
        </div>
        <div className="flex items-center gap-sm">
          <div className="bg-tertiary-container/10 border border-tertiary-container/30 px-sm py-xs rounded-lg flex items-center gap-xs">
            <Star className="w-5 h-5 text-tertiary" />
            <span className="font-label-md text-tertiary font-bold">Total Rewards: {rewards.length}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-md">
        {/* Create New Reward Form Section */}
        <section className="xl:col-span-1 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col h-fit">
          <div className="p-md border-b border-outline-variant bg-surface-container-low/50">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-xs">
              <PlusCircle className="w-6 h-6" />
              Create New Reward
            </h2>
          </div>
          <form className="p-md space-y-md" action={createRewardAction}>
            <div className="space-y-base">
              <label className="font-label-md text-label-md text-on-surface-variant">Reward Name</label>
              <input name="name" required className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:ring-2 focus:ring-secondary-container outline-none transition-all" placeholder="e.g. Premium Career Coaching" type="text"/>
            </div>
            <div className="space-y-base">
              <label className="font-label-md text-label-md text-on-surface-variant">Description</label>
              <textarea name="description" required className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm focus:ring-2 focus:ring-secondary-container outline-none transition-all resize-none" placeholder="Describe the value..." rows={3}></textarea>
            </div>
            <div className="grid grid-cols-2 gap-sm">
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Point Cost</label>
                <div className="relative">
                  <input name="point_cost" required className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm pl-8 focus:ring-2 focus:ring-secondary-container outline-none transition-all" placeholder="500" type="number"/>
                  <Coins className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-tertiary" />
                </div>
              </div>
              <div className="space-y-base">
                <label className="font-label-md text-label-md text-on-surface-variant">Quota/Stock</label>
                <div className="relative">
                  <input name="stock_quota" required className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-sm pl-8 focus:ring-2 focus:ring-secondary-container outline-none transition-all" placeholder="100" type="number"/>
                  <Archive className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant" />
                </div>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-secondary text-on-primary font-bold py-sm rounded-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-sm mt-md" type="submit">
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
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Reward Details</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Cost</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Stock</th>
                  <th className="px-md py-sm font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {rewards.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-xl text-center text-on-surface-variant">No rewards found.</td>
                  </tr>
                ) : (
                  rewards.map((reward) => {
                    const deleteAction = deleteRewardAction.bind(null, reward.id);
                    return (
                      <tr key={reward.id} className="hover:bg-surface-container-low transition-colors group">
                        <td className="px-md py-md">
                          <div className="flex items-center gap-sm">
                            <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0">
                              <Briefcase className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                              <p className="font-bold text-primary">{reward.name}</p>
                              <p className="text-xs text-on-surface-variant max-w-[200px] truncate">{reward.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <div className="flex items-center gap-xs text-tertiary font-bold">
                            <Coins className="w-4 h-4" />
                            {reward.point_cost}
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <div className="flex flex-col gap-1">
                            <span className="font-label-md text-on-surface">{reward.stock_quota} left</span>
                          </div>
                        </td>
                        <td className="px-md py-md text-right">
                          <div className="flex justify-end gap-xs">
                            <form action={deleteAction}>
                              <button type="submit" className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-lg transition-all" title="Delete">
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
