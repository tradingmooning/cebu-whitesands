import { useState } from "react";
import { createPaymentMethod, updatePaymentMethod } from "../../services/api";
import toast from "react-hot-toast";
import { Plus, Trash2, Upload } from "lucide-react";

const inputClass =
  "w-full border border-ocean/20 px-3 py-2 text-sm focus:outline-none focus:border-teal";

export default function PaymentMethodFormModal({ method, onClose, onSave }) {
  const [form, setForm] = useState(
    method
      ? {
          name: method.name,
          details: method.details?.length
            ? method.details
            : [{ label: "", value: "", mono: false }],
          instructions: method.instructions || "",
          isActive: method.isActive,
          sortOrder: method.sortOrder || 0,
        }
      : {
          name: "",
          details: [{ label: "", value: "", mono: false }],
          instructions: "",
          isActive: true,
          sortOrder: 0,
        },
  );
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(method?.logoUrl || null);
  const [saving, setSaving] = useState(false);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  function setDetail(index, key, val) {
    setForm((f) => {
      const details = [...f.details];
      details[index] = { ...details[index], [key]: val };
      return { ...f, details };
    });
  }

  function addDetail() {
    setForm((f) => ({
      ...f,
      details: [...f.details, { label: "", value: "", mono: false }],
    }));
  }

  function removeDetail(index) {
    setForm((f) => ({
      ...f,
      details: f.details.filter((_, i) => i !== index),
    }));
  }

  function handleLogoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLogoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setLogoPreview(ev.target.result);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append(
        "details",
        JSON.stringify(
          form.details.filter((d) => d.label.trim() && d.value.trim()),
        ),
      );
      fd.append("instructions", form.instructions);
      fd.append("isActive", form.isActive);
      fd.append("sortOrder", form.sortOrder);
      if (logoFile) fd.append("logo", logoFile);

      if (method) {
        await updatePaymentMethod(method._id, fd);
        toast.success("Payment method updated");
      } else {
        await createPaymentMethod(fd);
        toast.success("Payment method created");
      }
      onSave();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-ocean/15">
          <h2 className="font-serif text-xl text-ocean">
            {method ? "Edit Payment Method" : "New Payment Method"}
          </h2>
          <button
            onClick={onClose}
            className="text-ocean/40 hover:text-ocean text-2xl leading-none"
          >
            x
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-ocean mb-1">
              Method Name *
            </label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. GCash, BDO Bank Transfer"
              required
              className={inputClass}
            />
            {method && (
              <p className="text-xs text-ocean/40 mt-1">
                Public link stays{" "}
                <span className="font-mono">/payment/{method.slug}</span> even
                if you rename this.
              </p>
            )}
          </div>

          {/* Logo */}
          <div>
            <label className="block text-sm font-medium text-ocean mb-1">
              Logo{" "}
              <span className="text-ocean/40 font-normal">(optional)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer border border-dashed border-ocean/20 px-3 py-3 hover:border-teal/50 transition-colors">
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt=""
                  className="w-10 h-10 object-contain border border-ocean/10"
                />
              ) : (
                <Upload size={18} className="text-ocean/30" />
              )}
              <span className="text-xs text-ocean/50">
                {logoFile ? logoFile.name : "Click to upload an image"}
              </span>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                className="sr-only"
                onChange={handleLogoChange}
              />
            </label>
          </div>

          {/* Details list */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-ocean">
                Account Details
              </label>
              <button
                type="button"
                onClick={addDetail}
                className="text-[11px] text-teal hover:text-teal-dark uppercase tracking-wider flex items-center gap-1"
              >
                <Plus size={12} /> Add field
              </button>
            </div>
            <div className="space-y-2">
              {form.details.map((d, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <input
                    value={d.label}
                    onChange={(e) => setDetail(i, "label", e.target.value)}
                    placeholder="Label (e.g. Account Number)"
                    className={`${inputClass} flex-1`}
                  />
                  <input
                    value={d.value}
                    onChange={(e) => setDetail(i, "value", e.target.value)}
                    placeholder="Value"
                    className={`${inputClass} flex-1`}
                  />
                  <label className="flex items-center gap-1 text-[10px] text-ocean/50 pt-2.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={d.mono}
                      onChange={(e) => setDetail(i, "mono", e.target.checked)}
                      className="accent-teal"
                    />
                    Mono
                  </label>
                  <button
                    type="button"
                    onClick={() => removeDetail(i)}
                    className="text-red-400 hover:text-red-600 pt-2.5 shrink-0"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-ocean mb-1">
              Instructions
            </label>
            <textarea
              rows={3}
              value={form.instructions}
              onChange={(e) => set("instructions", e.target.value)}
              placeholder="e.g. Please include your booking reference in the note."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Sort order */}
          <div>
            <label className="block text-sm font-medium text-ocean mb-1">
              Sort Order
            </label>
            <input
              type="number"
              value={form.sortOrder}
              onChange={(e) => set("sortOrder", Number(e.target.value))}
              className={inputClass}
            />
          </div>

          {/* Active toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isActive"
              checked={form.isActive}
              onChange={(e) => set("isActive", e.target.checked)}
              className="accent-teal w-4 h-4"
            />
            <label
              htmlFor="isActive"
              className="text-sm text-ocean cursor-pointer"
            >
              Accept this payment method
            </label>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-teal text-ocean py-3 text-sm uppercase tracking-wider hover:bg-ocean disabled:opacity-50 transition-colors"
            >
              {saving ? "Saving..." : method ? "Update Method" : "Create Method"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 border border-ocean/20 text-ocean/70 text-sm hover:bg-ivory/50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
