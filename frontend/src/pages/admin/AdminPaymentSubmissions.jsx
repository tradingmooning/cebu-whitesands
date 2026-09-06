import { useEffect, useState } from "react";
import {
  getPaymentSubmissions,
  updateSubmissionStatus,
  deleteSubmission,
} from "../../services/api";
import toast from "react-hot-toast";
import { CheckCircle, XCircle, ExternalLink, Trash2, Inbox } from "lucide-react";

const TABS = ["pending", "confirmed", "rejected"];

export default function AdminPaymentSubmissions() {
  const [tab, setTab] = useState("pending");
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = () =>
    getPaymentSubmissions({ status: tab }).then((res) => {
      setSubmissions(res.data.data);
      setLoading(false);
    });

  useEffect(() => {
    setLoading(true);
    fetchSubmissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  async function handleStatus(id, status) {
    let adminNote = "";
    if (status === "rejected") {
      adminNote = prompt("Reason for rejecting (optional):") || "";
    }
    try {
      await updateSubmissionStatus(id, { status, adminNote });
      toast.success(`Submission ${status}`);
      fetchSubmissions();
    } catch {
      toast.error("Failed to update submission");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this submission? This cannot be undone.")) return;
    try {
      await deleteSubmission(id);
      toast.success("Submission deleted");
      fetchSubmissions();
    } catch {
      toast.error("Failed to delete submission");
    }
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-teal-dark font-semibold mb-1">
          Finance
        </p>
        <h2 className="font-serif text-2xl text-ocean">
          Payment Link Submissions
        </h2>
        <p className="text-ocean/40 text-sm mt-1">
          Review proof of payment submitted through shared payment links
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-ocean/10">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 text-sm font-medium capitalize transition-colors ${
              tab === t
                ? "text-teal border-b-2 border-teal"
                : "text-ocean/40 hover:text-ocean/60"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {!loading && submissions.length === 0 && (
        <div className="text-center py-20">
          <Inbox size={32} className="text-ocean/15 mx-auto mb-4" />
          <p className="text-sm text-ocean/40">No {tab} submissions</p>
        </div>
      )}

      <div className="grid gap-4">
        {submissions.map((s) => (
          <div key={s._id} className="bg-white border border-ocean/5 p-6">
            <div className="grid md:grid-cols-[1fr_220px] gap-6">
              <div className="space-y-3 text-sm">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h4 className="font-serif text-lg text-ocean">{s.name}</h4>
                  <span className="bg-teal/10 text-teal-dark px-2 py-0.5 text-[10px] uppercase tracking-wider">
                    {s.paymentMethodName}
                  </span>
                  {s.matchedBooking && (
                    <span className="bg-blue-50 text-blue-600 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                      Matched: {s.matchedBooking.bookingRef}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2">
                  <div>
                    <p className="text-[10px] font-medium text-ocean/35 uppercase tracking-[0.15em] mb-0.5">
                      Email
                    </p>
                    <p className="text-ocean/70">{s.email}</p>
                  </div>
                  {s.bookingRef && (
                    <div>
                      <p className="text-[10px] font-medium text-ocean/35 uppercase tracking-[0.15em] mb-0.5">
                        Reference typed
                      </p>
                      <p className="text-ocean/70 font-mono">{s.bookingRef}</p>
                    </div>
                  )}
                  <div className="col-span-2">
                    <p className="text-[10px] font-medium text-ocean/35 uppercase tracking-[0.15em] mb-0.5">
                      Purpose
                    </p>
                    <p className="text-ocean/70">{s.purpose}</p>
                  </div>
                  {s.adminNote && (
                    <div className="col-span-2">
                      <p className="text-[10px] font-medium text-ocean/35 uppercase tracking-[0.15em] mb-0.5">
                        Admin note
                      </p>
                      <p className="text-ocean/70">{s.adminNote}</p>
                    </div>
                  )}
                  <div className="col-span-2 text-[11px] text-ocean/35">
                    Submitted {new Date(s.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-medium text-ocean/35 uppercase tracking-[0.15em] mb-2">
                  Receipt
                </p>
                <a
                  href={s.receiptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src={s.receiptUrl}
                    alt="Receipt"
                    className="w-full h-40 object-contain border border-ocean/10 bg-ocean/3"
                  />
                  <span className="inline-flex items-center gap-1 mt-2 text-[11px] text-teal hover:text-teal transition-colors">
                    <ExternalLink size={11} /> View full size
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-ocean/5 flex flex-wrap gap-2">
              {s.status !== "confirmed" && (
                <button
                  onClick={() => handleStatus(s._id, "confirmed")}
                  className="bg-ocean text-ivory text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-ocean transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle size={13} /> Confirm
                </button>
              )}
              {s.status !== "rejected" && (
                <button
                  onClick={() => handleStatus(s._id, "rejected")}
                  className="border border-red-200 text-red-500 text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-red-50 transition-colors flex items-center gap-1.5"
                >
                  <XCircle size={13} /> Reject
                </button>
              )}
              <button
                onClick={() => handleDelete(s._id)}
                className="border border-ocean/15 text-ocean/50 text-[11px] font-semibold uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-ocean/5 hover:text-ocean transition-colors flex items-center gap-1.5 ml-auto"
              >
                <Trash2 size={13} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
