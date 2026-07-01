import StudentLayout from "@/components/layout/StudentLayout";
import { CheckCircle, Gift, Ticket, Coins, Clock } from "lucide-react";
import { serverFetch } from "@/lib/api/serverApi";
import { claimRewardAction } from "@/app/actions/studentActions";

export default async function StudentRewards() {
  let rewards: any[] = [];
  let profile: any = null;

  try {
    const rewardsRes = await serverFetch("/students/rewards");
    rewards = rewardsRes.data || [];

    const profileRes = await serverFetch("/students/profile");
    profile = profileRes.data || {};
  } catch (err) {
    console.error("Failed to fetch rewards/profile", err);
  }

  const userPoints = profile?.total_points || 0;

  return (
    <StudentLayout>
      {/* TopAppBar Context */}
      <header className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Reward Catalog</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Redeem your hard-earned points for exclusive perks.</p>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex items-center gap-xs bg-tertiary-fixed text-on-tertiary-fixed px-sm py-base rounded-full shadow-sm">
            <Coins className="w-5 h-5 text-tertiary-fixed fill-tertiary-fixed" />
            <span className="font-label-md text-label-md">{userPoints} pts</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {rewards.length === 0 ? (
          <div className="col-span-3 text-center text-on-surface-variant p-xl">No rewards available at the moment.</div>
        ) : (
          rewards.map((reward) => {
            const isSoldOut = reward.stock_quota <= 0;
            const canAfford = userPoints >= reward.point_cost;
            const claim = claimRewardAction.bind(null, reward.id);

            return (
              <div key={reward.id} className={`bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow ${isSoldOut ? 'opacity-75' : ''}`}>
                <div className="h-40 bg-surface-variant relative overflow-hidden flex items-center justify-center">
                  <Gift className="w-16 h-16 text-primary/20" />
                  {isSoldOut && (
                    <div className="absolute top-2 right-2 bg-error text-on-error px-sm py-xs rounded-full text-xs font-bold">
                      Sold Out
                    </div>
                  )}
                </div>
                <div className="p-md flex flex-col grow">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">{reward.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">{reward.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold text-primary">{reward.point_cost} PTS</span>
                    <form action={claim}>
                      <button 
                        type="submit"
                        disabled={isSoldOut || !canAfford}
                        className={`px-md py-sm rounded-lg text-label-md font-label-md transition-colors ${
                          isSoldOut || !canAfford 
                            ? "bg-surface-variant text-on-surface-variant cursor-not-allowed" 
                            : "bg-primary text-on-primary hover:bg-primary/90"
                        }`}
                      >
                        {isSoldOut ? "Sold Out" : canAfford ? "Claim" : "Not Enough Pts"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </StudentLayout>
  );
}
