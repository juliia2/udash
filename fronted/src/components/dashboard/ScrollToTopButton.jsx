import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        rounded-full bg-slate-900 p-3
        text-white shadow-lg
        transition hover:bg-slate-800
        focus:outline-none focus:ring-2 focus:ring-sky-300
      "
    >
      ↑
    </button>
  );
}
