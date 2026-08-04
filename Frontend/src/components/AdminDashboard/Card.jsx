import { useEffect, useState } from "react";

const useCountUp = (target = 0, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return count;
};

const icons = {
  total: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  ),

  low: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  ),

  out: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const tones = {
  indigo: {
    border: "border-l-indigo-600",
    text: "text-indigo-600",
    iconBg: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-700",
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
    glow: "from-indigo-200/60 to-violet-200/60",
    pulse: "bg-indigo-400/30",
  },

  green: {
    border: "green-l-green-600",
    text: "text-green-600",
    iconBg: "bg-green-50 text-green-600",
    badge: "bg-green-50 text-green-700",
    gradient: "from-green-500 via-green-500 to-green-500",
    glow: "from-green-200/60 to-green-200/60",
    pulse: "bg-green-400/30",
  },

  amber: {
    border: "border-l-amber-500",
    text: "text-amber-600",
    iconBg: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-700",
    gradient: "from-amber-400 via-orange-500 to-yellow-500",
    glow: "from-amber-200/60 to-orange-200/60",
    pulse: "bg-amber-400/30",
  },

  rose: {
    border: "border-l-rose-500",
    text: "text-rose-600",
    iconBg: "bg-rose-50 text-rose-600",
    badge: "bg-rose-50 text-rose-700",
    gradient: "from-rose-500 via-red-500 to-pink-500",
    glow: "from-rose-200/60 to-red-200/60",
    pulse: "bg-rose-400/30",
  },

  emerald: {
    border: "border-l-emerald-500",
    text: "text-emerald-600",
    iconBg: "bg-emerald-50 text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700",
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    glow: "from-emerald-200/60 to-teal-200/60",
    pulse: "bg-emerald-400/30",
  },
};

const Card = ({
  title = "Low Stock Items",
  value = 0,
  subtitle = "",
  icon = "low",
  tone = "amber",
  progress = 0,
  progressLabel = "Stock level",
  trend = "",
  showPulse = false,
  stats = [],
  onClick,
}) => {
  const animatedValue = useCountUp(value);
  const styles = tones[tone] || tones.indigo;
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${title}: ${value}`}
      className={`group relative w-full overflow-hidden rounded-2xl border border-slate-200 border-l-8 bg-white p-6 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 ${styles.border}`}
    >
      {/* Top gradient line */}
      <span
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${styles.gradient} opacity-80`}
      />

      {/* Background glow */}
      <span
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${styles.glow} blur-2xl transition-transform duration-700 group-hover:scale-150`}
      />

      {/* Hover shimmer */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="animate-card-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </span>

      <span className="relative flex items-start justify-between gap-4">
        <span className="block">
          <span className="block text-sm font-medium text-slate-500">
            {title}
          </span>

          <span className="mt-2 block text-4xl font-bold tracking-tight text-slate-900">
            {animatedValue.toLocaleString()}
          </span>

          {subtitle && (
            <span className="mt-1 block text-xs text-slate-400">
              {subtitle}
            </span>
          )}

          {stats.length > 0 && (
            <span className="mt-3 flex flex-wrap gap-2">
              {stats.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${styles.gradient}`}
                  />
                  {typeof item.value === "number"
                    ? item.value.toLocaleString()
                    : item.value}{" "}
                  {item.label}
                </span>
              ))}
            </span>
          )}
        </span>

        <span className="relative block shrink-0">
          {showPulse && (
            <span
              className={`animate-card-pulse-ring absolute inset-0 rounded-2xl ${styles.pulse}`}
            />
          )}

          <span
            className={`animate-card-float relative flex h-12 w-12 items-center justify-center rounded-2xl ${styles.iconBg} shadow-sm`}
          >
            {icons[icon] || icons.total}
          </span>
        </span>
      </span>

      {/* Progress bar */}
      <span className="relative mt-6 block">
        <span className="flex items-center justify-between text-xs">
          <span className="text-slate-500">{progressLabel}</span>
          <span className={`font-semibold ${styles.text}`}>
            {safeProgress}%
          </span>
        </span>

        <span className="mt-2 block h-2 overflow-hidden rounded-full bg-slate-100">
          <span
            className={`animate-card-grow block h-full rounded-full bg-gradient-to-r ${styles.gradient}`}
            style={{ width: `${safeProgress}%` }}
          />
        </span>
      </span>

      {/* Bottom info */}
      <span className="relative mt-5 flex items-center justify-between gap-3">
        {trend ? (
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles.badge}`}
          >
            {trend}
          </span>
        ) : (
          <span />
        )}

        <span
          className={`inline-flex items-center gap-1 text-xs font-semibold ${styles.text} transition-transform duration-300 group-hover:translate-x-1`}
        >
          View details
          <span aria-hidden>→</span>
        </span>
      </span>
    </button>
  );
};

export default Card;
