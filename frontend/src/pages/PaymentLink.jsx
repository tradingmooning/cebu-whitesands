import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Copy, Upload, ShieldCheck, CheckCircle2, ImageOff, AlertTriangle } from "lucide-react";
import toast from "react-hot-toast";
import { getPaymentMethodBySlug, submitPaymentProof } from "../services/api";

export default function PaymentLink() {
  const { slug } = useParams();
  const [method, setMethod] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getPaymentMethodBySlug(slug)
      .then((res) => {
        if (cancelled) return;
        setMethod(res.data.data || res.data);
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied");
  };

  if (notFound) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-warm-white px-6">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-3xl text-teal-dark">
            This payment link doesn't exist.
          </h1>
          <p className="mt-4 text-charcoal/55">
            Double-check the link, or contact us for the correct details.
          </p>
        </div>
      </div>
    );
  }

  if (!method) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-warm-white">
        <div className="w-9 h-9 border border-teal/30 border-t-teal rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-warm-white min-h-[70vh]">
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 space-y-8">
          {/* Method header */}
          <div className="text-center">
            {method.logoUrl ? (
              <img
                src={method.logoUrl}
                alt={method.name}
                className="w-16 h-16 object-contain mx-auto mb-5 border border-charcoal/10 bg-white p-2"
              />
            ) : (
              <div className="w-16 h-16 mx-auto mb-5 border border-charcoal/10 bg-white flex items-center justify-center text-charcoal/25">
                <ImageOff size={22} />
              </div>
            )}
            <p className="text-[11px] tracking-[0.32em] uppercase text-tan font-medium">
              Payment
            </p>
            <h1 className="mt-3 font-serif text-3xl lg:text-4xl text-teal-dark">
              {method.name}
            </h1>
          </div>

          {!method.isActive && (
            <div className="border-l-2 border-red-400 bg-red-50/60 px-5 py-4 text-sm text-red-700 flex items-start gap-3">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <span>
                This payment method is no longer accepted. Please contact us
                for a current way to pay.
              </span>
            </div>
          )}

          {/* Details */}
          <Card>
            <Eyebrow>Send to</Eyebrow>
            <dl className="mt-6 divide-y divide-charcoal/8">
              {method.details.map((d) => (
                <div
                  key={d.label}
                  className="grid grid-cols-[1fr_auto_auto] gap-4 items-center py-3.5"
                >
                  <dt className="text-[10px] tracking-[0.24em] uppercase text-charcoal/45 font-medium">
                    {d.label}
                  </dt>
                  <dd
                    className={`text-charcoal/85 text-right ${d.mono ? "font-mono text-sm" : ""}`}
                  >
                    {d.value}
                  </dd>
                  <button
                    type="button"
                    onClick={() => handleCopy(d.value)}
                    className="text-charcoal/40 hover:text-teal transition-colors"
                    aria-label={`Copy ${d.label}`}
                  >
                    <Copy size={14} />
                  </button>
                </div>
              ))}
            </dl>
            {method.instructions && (
              <div className="mt-6 bg-seafoam/50 border-l-2 border-tan px-5 py-4 text-sm text-charcoal/70 leading-relaxed">
                {method.instructions}
              </div>
            )}
          </Card>

          {/* Submission form */}
          {method.isActive &&
            (submitted ? (
              <Card>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <CardTitle small>Submission received</CardTitle>
                    <p className="mt-3 text-charcoal/65 leading-relaxed">
                      Thank you — we've received your proof of payment and
                      will confirm it shortly.
                    </p>
                  </div>
                </div>
              </Card>
            ) : (
              <SubmissionForm slug={slug} onSubmitted={() => setSubmitted(true)} />
            ))}
        </div>
      </section>
    </div>
  );
}

function SubmissionForm({ slug, onSubmitted }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    purpose: "",
    bookingRef: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = (ev) => setPreview(ev.target.result);
    reader.readAsDataURL(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please attach your receipt or screenshot.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("purpose", form.purpose);
      if (form.bookingRef) fd.append("bookingRef", form.bookingRef);
      fd.append("receipt", file);
      await submitPaymentProof(slug, fd);
      onSubmitted();
    } catch (err) {
      setError(err.response?.data?.message || "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card>
      <Eyebrow>Submit proof of payment</Eyebrow>
      <CardTitle small>Tell us about your payment</CardTitle>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
              Your name *
            </label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
              className="w-full border border-charcoal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-teal"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
              className="w-full border border-charcoal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-teal"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
            What is this payment for? *
          </label>
          <textarea
            rows={2}
            value={form.purpose}
            onChange={(e) => set("purpose", e.target.value)}
            placeholder="e.g. Deposit for June 14 event, balance for Room 204 booking..."
            required
            className="w-full border border-charcoal/15 bg-white px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-teal"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-charcoal/60 mb-1.5">
            Booking / order reference{" "}
            <span className="text-charcoal/35">(optional)</span>
          </label>
          <input
            value={form.bookingRef}
            onChange={(e) => set("bookingRef", e.target.value)}
            placeholder="If you already have one"
            className="w-full border border-charcoal/15 bg-white px-3 py-2.5 text-sm focus:outline-none focus:border-teal"
          />
        </div>

        <label className="block cursor-pointer">
          <div
            className={`border-2 border-dashed p-8 text-center transition-colors ${
              file
                ? "border-teal bg-teal/5"
                : "border-charcoal/15 hover:border-teal/50 bg-white"
            }`}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="max-h-44 mx-auto object-contain mb-3"
              />
            ) : (
              <Upload size={26} strokeWidth={1.4} className="mx-auto text-charcoal/30 mb-2" />
            )}
            <p className="text-sm text-charcoal/70">
              {file ? file.name : "Click to upload receipt or screenshot"}
            </p>
            <p className="text-[11px] text-charcoal/40 mt-1 tracking-wider">
              PNG · JPG · WEBP · PDF — up to 10MB
            </p>
          </div>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp,application/pdf"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>

        {error && (
          <div className="border-l-2 border-red-400 bg-red-50/60 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-teal-dark text-white py-4 text-[11px] tracking-[0.28em] uppercase font-semibold hover:bg-teal transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {submitting ? "Submitting…" : "Submit payment proof"}
          {!submitting && <ShieldCheck size={14} />}
        </button>
      </form>
    </Card>
  );
}

function Card({ children }) {
  return (
    <div className="bg-warm-white border border-charcoal/10 p-8 lg:p-10">
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] tracking-[0.32em] uppercase text-tan font-medium">
      {children}
    </p>
  );
}

function CardTitle({ children, small }) {
  return (
    <h2
      className={`font-serif text-teal-dark mt-3 leading-tight ${
        small ? "text-2xl" : "text-3xl"
      }`}
    >
      {children}
    </h2>
  );
}
