import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./NotFound.css";

function NotFound() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
    };

    const handleLeave = () => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="nf-root">
      <div className="nf-ghost-number" aria-hidden="true">404</div>

      <div className="nf-card" ref={cardRef}>
        <div className="nf-chip">Error 404</div>

        <h1 className="nf-headline">
          <span>Lost in the void</span>
        </h1>

        <p className="nf-body">
          This page doesn't exist — or it did once and quietly slipped away.
          Either way, you shouldn't be here.
        </p>

        <div className="nf-divider" />

        <div className="nf-actions">
          <Link to="/" className="nf-btn-primary">
            Back to Home
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button className="nf-btn-secondary" onClick={() => window.history.back()}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M12 6.5H1M5 2L1 6.5 5 11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go back
          </button>
        </div>
      </div>

      <p className="nf-footer-note">
        HTTP status <code>404</code> · Not Found
      </p>
    </div>
  );
}

export default NotFound;