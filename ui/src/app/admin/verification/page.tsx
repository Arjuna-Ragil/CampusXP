import AdminLayout from "@/components/layout/AdminLayout";
import { CheckCircle, XCircle, Paperclip } from "lucide-react";
import { serverFetch } from "@/lib/api/serverApi";
import { verifySubmissionAction } from "@/app/actions/adminActions";

export default async function AdminVerification() {
  let pendingSubmissions: any[] = [];
  try {
    const res = await serverFetch("/admin/submissions/pending");
    pendingSubmissions = res.data || [];
  } catch (err) {
    console.error("Failed to fetch pending submissions", err);
  }

  return (
    <AdminLayout>
      <div className="mb-lg">
        <p className="text-on-surface-variant font-body-md max-w-2xl">
          Review student submissions for skills verification and badge awards. Please ensure all evidence meets the institutional standard before approving points.
        </p>
      </div>
      
      {/* Dynamic Content Area */}
      <section className="flex flex-col lg:flex-row gap-lg">
        {/* Table Container */}
        <div className="flex-1 rounded-xl shadow-sm border border-outline-variant overflow-hidden bg-surface-container-lowest">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant">
                  <th className="px-md py-4 font-label-md">STUDENT NAME</th>
                  <th className="px-md py-4 font-label-md">SUBMISSION TITLE</th>
                  <th className="px-md py-4 font-label-md">EVIDENCE</th>
                  <th className="px-md py-4 font-label-md text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {pendingSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-xl text-center text-on-surface-variant">No pending submissions.</td>
                  </tr>
                ) : (
                  pendingSubmissions.map((sub) => {
                    const approve = verifySubmissionAction.bind(null, sub.id, "APPROVED");
                    const reject = verifySubmissionAction.bind(null, sub.id, "REJECTED");

                    return (
                      <tr key={sub.id} className="hover:bg-surface-variant/30 transition-colors">
                        <td className="px-md py-4">
                          <div className="flex items-center gap-sm">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant flex items-center justify-center font-bold text-xs text-on-surface-variant">
                              {sub.student_profile?.full_name?.charAt(0) || "U"}
                            </div>
                            <span className="font-bold text-primary">{sub.student_profile?.full_name || "Unknown"}</span>
                          </div>
                        </td>
                        <td className="px-md py-4 text-on-surface-variant font-label-md">
                          <div className="font-bold">{sub.title}</div>
                          <div className="text-label-sm opacity-80">{sub.type}</div>
                        </td>
                        <td className="px-md py-4">
                          <a className="flex items-center gap-xs text-secondary hover:underline font-label-md max-w-[200px] truncate" href={sub.evidence_url} target="_blank" rel="noreferrer">
                            <Paperclip className="w-5 h-5" />
                            {sub.evidence_url}
                          </a>
                        </td>
                        <td className="px-md py-4 text-right">
                          <div className="flex justify-end gap-sm">
                            <form action={approve}>
                              <button type="submit" className="bg-primary text-on-primary px-3 py-1.5 rounded-lg text-label-sm hover:bg-secondary transition-colors flex items-center gap-1">
                                <CheckCircle className="w-4 h-4" /> Approve
                              </button>
                            </form>
                            <form action={reject}>
                              <button type="submit" className="bg-error text-on-error px-3 py-1.5 rounded-lg text-label-sm hover:opacity-90 transition-opacity flex items-center gap-1">
                                <XCircle className="w-4 h-4" /> Reject
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
        </div>
      </section>
    </AdminLayout>
  );
}
