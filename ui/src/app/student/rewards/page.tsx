import StudentLayout from "@/components/layout/StudentLayout";
import { CheckCircle, Gift, Ticket, Coins, Clock } from "lucide-react";

export default function StudentRewards() {
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
            <span className="font-label-md text-label-md">1,240 pts</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {/* Reward 1 */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="h-40 bg-surface-variant relative overflow-hidden flex items-center justify-center">
            <Ticket className="w-16 h-16 text-primary/20" />
            <div className="absolute top-2 right-2 bg-primary text-on-primary px-sm py-xs rounded-full text-xs font-bold">
              New
            </div>
          </div>
          <div className="p-md flex flex-col grow">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Tech Conference Ticket</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">Full access pass to the upcoming regional tech symposium.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-primary">1,000 PTS</span>
              <button className="bg-primary text-on-primary px-md py-sm rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-colors">
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Reward 2 */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="h-40 bg-surface-variant relative overflow-hidden flex items-center justify-center">
            <Gift className="w-16 h-16 text-primary/20" />
          </div>
          <div className="p-md flex flex-col grow">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Campus Merch Pack</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">Exclusive hoodie, mug, and stickers set.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-primary">500 PTS</span>
              <button className="bg-primary text-on-primary px-md py-sm rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-colors">
                Claim
              </button>
            </div>
          </div>
        </div>

        {/* Reward 3 */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col opacity-75">
          <div className="h-40 bg-surface-variant relative overflow-hidden flex items-center justify-center">
            <Clock className="w-16 h-16 text-primary/20" />
            <div className="absolute top-2 right-2 bg-error text-on-error px-sm py-xs rounded-full text-xs font-bold">
              Sold Out
            </div>
          </div>
          <div className="p-md flex flex-col grow">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">1-on-1 Mentorship</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md grow">A one-hour session with an industry expert.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-primary">2,000 PTS</span>
              <button disabled className="bg-surface-variant text-on-surface-variant px-md py-sm rounded-lg text-label-md font-label-md cursor-not-allowed">
                Sold Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Toast (Interaction Feedback) */}
      <div className="fixed bottom-margin right-margin bg-primary text-on-primary px-lg py-md rounded-xl shadow-lg translate-y-20 opacity-0 transition-all duration-300 z-[100] flex items-center gap-sm" id="toast">
        <CheckCircle className="w-6 h-6 text-emerald-400" />
        <span className="font-label-md text-label-md" id="toast-message">Reward claimed successfully!</span>
      </div>
    </StudentLayout>
  );
}
