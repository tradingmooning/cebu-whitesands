import { useEffect, useState } from "react";
import { getPaymentMethods, togglePaymentMethod } from "../../services/api";
import PaymentMethodFormModal from "../../components/admin/PaymentMethodFormModal";
import toast from "react-hot-toast";
import { Copy, ImageOff } from "lucide-react";

export default function AdminPaymentMethods() {
  const [methods, setMethods] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMethods();
  }, []);

  async function fetchMethods() {
    const res = await getPaymentMethods();
    setMethods(res.data.data);
    setLoading(false);
  }

  async function handleToggle(id) {
    await togglePaymentMethod(id);
    fetchMethods();
  }

  function handleCopyLink(slug) {
    const url = `${window.location.origin}/payment/${slug}`;
    navigator.clipboard.writeText(url);
    toast.success("Link copied");
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-teal-dark font-semibold mb-1">
            Configuration
          </p>
          <h2 className="font-serif text-2xl text-ocean">Payment Methods</h2>
          <p className="text-ocean/40 text-sm mt-1">
            Manage the ways guests can pay and share direct links
          </p>
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="bg-teal text-ocean px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-ocean hover:text-ivory transition-colors flex items-center gap-2"
        >
          <span className="text-base leading-none">+</span> New Method
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-ocean/10">
        <table className="w-full text-sm">
          <thead className="bg-ivory/60 border-b border-ocean/10">
            <tr>
              {["Method", "Details", "Status", "Link", "Actions"].map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-3.5 text-[9px] font-semibold text-ocean/45 uppercase tracking-[0.22em]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {methods.map((m) => (
              <tr
                key={m._id}
                className="border-b border-ocean/5 hover:bg-ivory/40 transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {m.logoUrl ? (
                      <img
                        src={m.logoUrl}
                        alt=""
                        className="w-9 h-9 object-contain border border-ocean/10 bg-ivory/40"
                      />
                    ) : (
                      <div className="w-9 h-9 flex items-center justify-center border border-ocean/10 bg-ivory/40 text-ocean/25">
                        <ImageOff size={14} />
                      </div>
                    )}
                    <p className="font-medium text-ocean">{m.name}</p>
                  </div>
                </td>
                <td className="px-5 py-4 text-ocean/50 text-xs">
                  {m.details?.length || 0} field(s)
                </td>
                <td className="px-5 py-4">
                  {m.isActive ? (
                    <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold">
                      Active
                    </span>
                  ) : (
                    <span className="inline-block bg-red-50 text-red-500 border border-red-200/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold">
                      Disabled
                    </span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => handleCopyLink(m.slug)}
                    className="inline-flex items-center gap-1.5 text-[11px] text-teal hover:text-teal-dark transition-colors"
                  >
                    <Copy size={12} /> /payment/{m.slug}
                  </button>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-1">
                    <button
                      onClick={() => {
                        setEditing(m);
                        setShowForm(true);
                      }}
                      className="border border-teal/30 text-teal text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 hover:bg-teal/10 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleToggle(m._id)}
                      className="border border-ocean/15 text-ocean/50 text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 hover:bg-ocean/5 hover:text-ocean transition-colors"
                    >
                      {m.isActive ? "Disable" : "Enable"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {!loading && methods.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-12 text-ocean/30">
                  No payment methods yet. Create your first one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {showForm && (
        <PaymentMethodFormModal
          method={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
          onSave={() => {
            fetchMethods();
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}
