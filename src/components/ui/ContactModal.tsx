import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  'Management Opportunity',
  'Professional Collaboration',
  'Engineering Project',
  'General Inquiry',
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState({
    interest: '',
    name: '',
    email: '',
    message: '',
  });

  // Prevent body scroll when open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  const update = (key: keyof typeof data, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validateStep1 = () => {
    if (!data.interest) {
      setErrors({ interest: 'Please select an option.' });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = 'Name is required.';
    if (!data.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email.';
    if (!data.message.trim()) e.message = 'Please include a message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 0 && !validateStep1()) return;
    if (step === 1 && !validateStep2()) return;
    setStep((s) => Math.min(s + 1, 2));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) {
      setStep(1);
      return;
    }
    setStatus('sending');
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1600));
    setStatus('success');
  };

  const handleClose = () => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setStep(0);
      setStatus('idle');
      setData({ interest: '', name: '', email: '', message: '' });
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/50 text-text-muted transition-colors hover:border-silver/50 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative z-10">
                {/* Header */}
                <p className="mb-2 font-mono text-[10px] tracking-[0.3em] text-silver uppercase">
                  Get in Touch
                </p>
                <h2 className="mb-6 text-2xl font-light tracking-tight text-white md:text-3xl">
                  {status === 'success' ? 'Message Sent.' : "Let's connect."}
                </h2>

                {/* Progress Bar */}
                {status !== 'success' && (
                  <div className="mb-8 flex items-center gap-3">
                    {[0, 1].map((i) => (
                      <div key={i} className="flex flex-1 items-center gap-3">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-500 ${
                          i < step ? 'border-silver bg-silver text-bg' :
                          i === step ? 'border-silver bg-silver/10 text-silver' :
                          'border-border-bright text-text-dim'
                        }`}>
                          {i < step ? <Check className="h-3 w-3" /> : i + 1}
                        </div>
                        {i < 1 && (
                          <div className="relative h-px flex-1 bg-border">
                            <motion.div
                              animate={{ scaleX: i < step ? 1 : 0 }}
                              transition={{ duration: 0.5 }}
                              style={{ transformOrigin: 'left' }}
                              className="absolute inset-0 bg-silver"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Form Content */}
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-silver/40 bg-silver/10"
                      >
                        <Check className="h-7 w-7 text-silver" />
                      </motion.div>
                      <p className="max-w-md text-sm text-text-muted">
                        Thanks {data.name.split(' ')[0] || 'there'} — I'll review your message and get back to you shortly.
                      </p>
                    </motion.div>
                  ) : step === 0 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mb-4 text-sm font-medium text-white">
                        What are you looking for?
                      </h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {SERVICE_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => update('interest', opt)}
                            className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all duration-300 ${
                              data.interest === opt
                                ? 'border-silver/50 bg-silver/10 text-white'
                                : 'border-border-bright bg-bg/40 text-text-muted hover:border-silver/30 hover:text-white'
                            }`}
                          >
                            {opt}
                            {data.interest === opt && <Check className="h-4 w-4 text-silver" />}
                          </button>
                        ))}
                      </div>
                      {errors.interest && (
                        <p className="mt-3 text-xs text-red-400">{errors.interest}</p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.form
                      key="step2"
                      onSubmit={submit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-1.5 flex items-center gap-1 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                            Name <span className="text-silver">*</span>
                          </span>
                          <input
                            type="text"
                            value={data.name}
                            onChange={(e) => update('name', e.target.value)}
                            placeholder="Your name"
                            className={`w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-text-dim outline-none transition-colors ${
                              errors.name ? 'border-red-500/50' : 'border-border-bright focus:border-silver/60'
                            }`}
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                        </label>
                        <label className="block">
                          <span className="mb-1.5 flex items-center gap-1 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                            Email <span className="text-silver">*</span>
                          </span>
                          <input
                            type="email"
                            value={data.email}
                            onChange={(e) => update('email', e.target.value)}
                            placeholder="you@company.com"
                            className={`w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-text-dim outline-none transition-colors ${
                              errors.email ? 'border-red-500/50' : 'border-border-bright focus:border-silver/60'
                            }`}
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                        </label>
                      </div>
                      
                      <label className="block">
                        <span className="mb-1.5 flex items-center gap-1 font-mono text-[10px] tracking-widest text-text-dim uppercase">
                          Message <span className="text-silver">*</span>
                        </span>
                        <textarea
                          value={data.message}
                          onChange={(e) => update('message', e.target.value)}
                          placeholder="How can I help you?"
                          rows={4}
                          className={`w-full resize-none rounded-xl border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-text-dim outline-none transition-colors ${
                            errors.message ? 'border-red-500/50' : 'border-border-bright focus:border-silver/60'
                          }`}
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                      </label>
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Actions */}
                {status !== 'success' && (
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
                    <button
                      type="button"
                      onClick={back}
                      disabled={step === 0}
                      className={`text-sm transition-colors ${
                        step === 0 ? 'cursor-not-allowed text-text-dim' : 'text-text-muted hover:text-white'
                      }`}
                    >
                      Back
                    </button>

                    {step < 1 ? (
                      <button
                        type="button"
                        onClick={next}
                        className="group flex items-center gap-2 rounded-full bg-silver px-6 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-silver-bright"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={submit}
                        disabled={status === 'sending'}
                        className="group flex items-center gap-2 rounded-full bg-silver px-6 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-silver-bright disabled:opacity-60"
                      >
                        {status === 'sending' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}