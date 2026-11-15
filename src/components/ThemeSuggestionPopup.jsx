

export default function ThemeSuggestionPopup({ theme, toggleTheme }) {
  const isVisible = theme === 'light' && !localStorage.getItem('themeSuggestionDismissed');



  const handleDismiss = () => {

    localStorage.setItem('themeSuggestionDismissed', 'true');
  };

  const handleSwitch = () => {

    localStorage.setItem('themeSuggestionDismissed', 'true');
    toggleTheme();
  };

  if (!isVisible) return null;

  return (
    <div className="theme-popup-overlay">
      <div className="theme-popup">
        <div className="theme-popup-content">
          <span className="metadata mb-1" style={{ fontSize: '0.7rem' }}>SYSTEM SUGGESTION</span>
          <p className="body-text" style={{ fontSize: '0.95rem', marginBottom: '1.25rem', marginTop: 0, lineHeight: 1.5 }}>
            Switch to Night Edition for a better viewing experience.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button onClick={handleSwitch} className="theme-popup-btn primary">
              SWITCH TO NIGHT
            </button>
            <button onClick={handleDismiss} className="theme-popup-btn secondary">
              DISMISS
            </button>
          </div>
        </div>
        <button onClick={handleDismiss} className="theme-popup-close" aria-label="Close popup">
          ×
        </button>
      </div>
    </div>
  );
}
