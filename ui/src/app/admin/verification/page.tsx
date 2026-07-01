import { Paperclip, Image as ImageIcon, Link as LinkIcon, Medal, X, UserCheck, FileText, Download, CheckCircle, XCircle } from "lucide-react";
import AdminLayout from "@/components/layout/AdminLayout";

export default function AdminVerification() {
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
                  <th className="px-md py-4 font-label-md">DATE SUBMITTED</th>
                  <th className="px-md py-4 font-label-md">EVIDENCE</th>
                  <th className="px-md py-4 font-label-md text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {/* Row 1 */}
                <tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer group">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-sm">
                      <img className="w-8 h-8 rounded-full object-cover" data-alt="Student Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUf2tbwsBYhIH_Wyc5FLMnOZQ2Tn0RlxNb2rwETHwdJLmckzGQ-bV1UYJZo4qI9mxyOghoiV1_QeUpKtQIcutM1RYmcYnIOFH8ZTdwwP_AgBNAvzOpjTjNN_vqfZxi0lE5vXoFOrHK0eNMPbLvKVeUJHbSy3e59_MZuKNH79jyBQM5_oOis7A_znGJqTlKnGbDf4jSltNwIGRnuMI4S5lc1gjmKzSp6P_-u481_DskAZaxyH7t5r6ao68yYDm_--ZLaTxcxGE_b-s"/>
                      <span className="font-bold text-primary">Alex Rivera</span>
                    </div>
                  </td>
                  <td className="px-md py-4 text-on-surface-variant font-label-md">Full-Stack Portfolio</td>
                  <td className="px-md py-4 text-outline font-label-sm">Oct 12, 2024</td>
                  <td className="px-md py-4">
                    <a className="flex items-center gap-xs text-secondary hover:underline font-label-md" href="#">
                      <Paperclip className="w-5 h-5" />
                      View Proof
                    </a>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-label-sm hover:bg-secondary transition-colors">Review</button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-sm">
                      <img className="w-8 h-8 rounded-full object-cover" data-alt="Student Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbgdH7zrTI3_Xr6XZYWWfo9KZoPvCWhnEkbPsDry3Uhecrsx7ggqpUx8vaQgLq3INLs0mA_gqu3LVKhf2c5Fh73SNlJ_j9BrWkveQuciPhzDXpfiCCVP-MCW6Exorf9VgziIEy0ccjp8RsOVMog-mo3jthCkBfYshhZUoukmtzI31fR9koPgApBDCvgtuFXKvYnl8U_pKEF65GQZX72ct1FpONKdnsTh3DZSpiO4nLXX_yckXu0DFbsgmct4vJ8TLJhPcDR3Wa3aY"/>
                      <span className="font-bold text-primary">Sophie Chen</span>
                    </div>
                  </td>
                  <td className="px-md py-4 text-on-surface-variant font-label-md">Leadership Seminar Cert</td>
                  <td className="px-md py-4 text-outline font-label-sm">Oct 11, 2024</td>
                  <td className="px-md py-4">
                    <a className="flex items-center gap-xs text-secondary hover:underline font-label-md" href="#">
                      <ImageIcon className="w-5 h-5" />
                      View Proof
                    </a>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-label-sm hover:bg-secondary transition-colors">Review</button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-sm">
                      <img className="w-8 h-8 rounded-full object-cover" data-alt="Student Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADvx9jI_Jj-L6_qVzyMBA7_Vl0Jr4HCv0tn_QyiBO9QDSb1nqdbhinH8_gW3WlpCU7KtXxgOaSU1F7YLn3XQbuIXjpPnVdjhl5MeaEcz0IbhM_aieJTLNlGoVtWgCX7Th0Nagj3jqX2lwJ5DcuOTcS7yHsITS_tCchQ4IaVApU70JY5-Dsxt284jl_Tb1sRoorA3GM-5hwdAWIfwKk_SgOFqWFKMQu7LIaYu8O49J4jrQmtLHSN3Wl74o3nq5XvX9frCIade_pd5o"/>
                      <span className="font-bold text-primary">Marcus Thorne</span>
                    </div>
                  </td>
                  <td className="px-md py-4 text-on-surface-variant font-label-md">Open Source Contribution</td>
                  <td className="px-md py-4 text-outline font-label-sm">Oct 10, 2024</td>
                  <td className="px-md py-4">
                    <a className="flex items-center gap-xs text-secondary hover:underline font-label-md" href="#">
                      <LinkIcon className="w-5 h-5" />
                      View Proof
                    </a>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-label-sm hover:bg-secondary transition-colors">Review</button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-variant/30 transition-colors cursor-pointer">
                  <td className="px-md py-4">
                    <div className="flex items-center gap-sm">
                      <img className="w-8 h-8 rounded-full object-cover" data-alt="Student Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6WNZeYrV9u3Les7YD5U8LQ0YyIbFfMofs5xp2JZVsCTNMplyAZX9mDkYYpm3tKxU5_0nejsBHTyBr1mev5cJ7SgDxKSmjPqG70q_lcDjHYH-1Zcb_g0rrodiKI2rRU1g6_OC-z5iDA-0PiLUTmM3a0299EfCQ3FqO19g2bFYFagd0QI1YzIdeMNbB0ci4CWYGooQkXUQfWCVvKQ7Vc7OKEceQxgnuIWto_Pngs9X_7T7U-Nu-YxCMqN4P-PDy2LAToHV_sj6_kBc"/>
                      <span className="font-bold text-primary">Jordan Lee</span>
                    </div>
                  </td>
                  <td className="px-md py-4 text-on-surface-variant font-label-md">Hackathon 1st Place</td>
                  <td className="px-md py-4 text-outline font-label-sm">Oct 09, 2024</td>
                  <td className="px-md py-4">
                    <a className="flex items-center gap-xs text-secondary hover:underline font-label-md" href="#">
                      <Medal className="w-5 h-5" />
                      View Proof
                    </a>
                  </td>
                  <td className="px-md py-4 text-right">
                    <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-label-sm hover:bg-secondary transition-colors">Review</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Sidebar (Details Panel) */}
        <div className="w-full lg:w-96 bg-surface-container-lowest border border-outline-variant shadow-sm rounded-xl flex flex-col" id="detailsPanel">
          <div className="p-md flex flex-col h-full">
            <div className="flex justify-between items-center mb-md lg:hidden">
              <h3 className="font-headline-md text-primary">Details</h3>
              <button className="p-2 hover:bg-surface-variant rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Detail Header */}
            <div className="text-center mb-lg">
              <div className="w-20 h-20 rounded-2xl bg-secondary-container mx-auto flex items-center justify-center mb-sm shadow-md">
                <UserCheck className="w-10 h-10 text-on-secondary-container" />
              </div>
              <h3 className="font-headline-md text-primary" id="detailName">Select a Student</h3>
              <p className="text-on-surface-variant text-label-md" id="detailSubmission">To view verification details</p>
            </div>
            
            {/* Info Grid (Mocked as visible for demonstration) */}
            <div className="flex-1 space-y-md" id="detailContent">
              <div className="bg-surface-container-low p-sm rounded-xl">
                <p className="text-[10px] uppercase tracking-widest text-outline mb-1">Evidence File</p>
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-label-md font-bold text-on-surface truncate" id="detailFileName">portfolio-v1.pdf</p>
                    <p className="text-[10px] text-outline">2.4 MB • Application/PDF</p>
                  </div>
                  <button className="p-2 hover:bg-surface-variant rounded-full text-secondary">
                    <Download className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-sm">
                <p className="text-label-md font-bold text-on-surface border-b border-outline-variant pb-2">Verification Action</p>
                <div className="grid grid-cols-2 gap-sm">
                  <button className="flex flex-col items-center justify-center p-sm border-2 border-outline-variant rounded-xl hover:border-primary transition-all group">
                    <CheckCircle className="w-6 h-6 text-outline group-hover:text-primary transition-colors" />
                    <span className="text-label-sm font-bold mt-2">Approve</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-sm border-2 border-outline-variant rounded-xl hover:border-error transition-all group">
                    <XCircle className="w-6 h-6 text-outline group-hover:text-error transition-colors" />
                    <span className="text-label-sm font-bold mt-2">Reject</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
