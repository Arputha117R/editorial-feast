import { Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { useReservation } from "./Reservation";
import { hours, restaurant } from "@/data/restaurant";

export function Location() {
  const openReservation = useReservation();
  return (
    <section id="visit" className="bg-olive py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div>
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.34em] text-cream/60 uppercase">Visit</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-cream">
              Find us on Harbour Lane
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
              Tables are held for fifteen minutes. For parties of six or more, call the room directly
              and we will look after the details.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-cream/60" aria-hidden />
              <p className="text-cream/85">
                {restaurant.address}
                <br />
                {restaurant.city}
              </p>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-cream/60" aria-hidden />
              <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="text-cream/85 underline-offset-4 hover:underline">
                {restaurant.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <MagneticButton
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              onClick={(e) => {
                e.preventDefault();
                openReservation();
              }}
            >
              Reserve Table
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border border-cream/20 p-8 sm:p-10">
            <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.24em] text-cream/60 uppercase">
              <Clock className="size-4" aria-hidden />
              Opening hours
            </div>
            <dl className="mt-8 divide-y divide-cream/15">
              {hours.map((entry) => (
                <div key={entry.day} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="font-display text-lg text-cream">{entry.day}</dt>
                  <dd className="text-right text-sm text-cream/65">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
