import { createContext, useContext, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const ReservationContext = createContext<() => void>(() => {});

/** Call the returned function to open the reservation modal. */
export const useReservation = () => useContext(ReservationContext);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ReservationContext.Provider value={() => setOpen(true)}>
      {children}
      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </ReservationContext.Provider>
  );
}

const times = ["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

const inputClass =
  "w-full rounded-sm border border-charcoal/20 bg-cream px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-terracotta";

function ReservationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/70 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Reserve a table"
        >
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-t-lg bg-cream p-7 shadow-2xl sm:rounded-sm sm:p-9"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[0.62rem] tracking-[0.3em] text-terracotta uppercase">
                  {restaurant.name}
                </p>
                <h2 className="mt-2 font-display text-3xl text-charcoal">Reserve a table</h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close reservation dialog"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 transition-colors hover:border-charcoal/40 hover:text-charcoal"
              >
                <X className="size-4" />
              </button>
            </div>

            {submitted ? (
              <div className="mt-10 flex flex-col items-center pb-4 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-olive text-cream">
                  <Check className="size-6" />
                </span>
                <p className="mt-5 font-display text-2xl text-charcoal">Request received</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-charcoal/60">
                  Thank you — we will confirm your table by email shortly. Tables are held for
                  fifteen minutes.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-8 rounded-full bg-terracotta px-8 py-3 text-xs font-medium tracking-[0.16em] text-cream uppercase transition-colors hover:bg-terracotta/90"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-[0.62rem] tracking-[0.22em] text-charcoal/60 uppercase">
                      Date
                    </span>
                    <input type="date" required min={today} className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[0.62rem] tracking-[0.22em] text-charcoal/60 uppercase">
                      Time
                    </span>
                    <select required defaultValue="19:00" className={inputClass}>
                      {times.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[0.62rem] tracking-[0.22em] text-charcoal/60 uppercase">
                    Guests
                  </span>
                  <select required defaultValue="2" className={inputClass}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[0.62rem] tracking-[0.22em] text-charcoal/60 uppercase">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-terracotta py-3.5 text-xs font-medium tracking-[0.18em] text-cream uppercase transition-colors hover:bg-terracotta/90"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
