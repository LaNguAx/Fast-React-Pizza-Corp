import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled,
  to,
  type,
  onClick: handler,
}) {
  const base = `bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-200 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offeset-2 active:bg-slate-400 disabled:cursor-not-allowed`;

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-4 `,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary: `border-2 text-sm border-stone-300 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-200 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offeset-2 active:bg-slate-400 hover:text-stone-800 focus:text-stone-800 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5`,
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (handler)
    return (
      <button disabled={disabled} className={styles[type]} onClick={handler}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
