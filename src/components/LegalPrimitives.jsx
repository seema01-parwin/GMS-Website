import React, { useEffect, useMemo, useState } from "react";
// eslint-disable-next-line no-unused-vars -- motion is used via <motion.div> JSX member expressions
import { motion, useScroll, useSpring } from "motion/react";
import { BookOpenText, ArrowUp } from "lucide-react";

const useActiveId = (ids) => {
  const [activeId, setActiveId] = useState(ids[0] || null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return activeId;
};

export const LegalProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="legal-progress" style={{ scaleX }} aria-hidden="true" />;
};

export const LegalToc = ({ items, pageLabel, note }) => {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const activeId = useActiveId(ids);

  return (
    <aside className="legal-toc">
      <span className="legal-toc-eyebrow">
        <BookOpenText size={14} strokeWidth={2} />
        {pageLabel}
      </span>
      <ol className="legal-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "true" : undefined}
              className={`legal-toc-link${activeId === item.id ? " legal-toc-link--active" : ""}`}
            >
              <span className="legal-toc-no">{String(item.no).padStart(2, "0")}</span>
              <span className="legal-toc-text">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
      {note && <p className="legal-toc-note">{note}</p>}
      <a href="#top" className="legal-toc-top">
        <ArrowUp size={13} strokeWidth={2.2} />
        Back to top
      </a>
    </aside>
  );
};