import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const faqItems = [
    {
      q: "Is watchAny completely ad-free and free to use?",
      a: "Yes! watchAny is 100% free and open-source. We do not host trackers, ads, or premiums. The source code is publicly inspectable on GitHub, and you can compile it yourself if you wish."
    },
    {
      q: "Why does Windows show a 'SmartScreen protected your PC' warning?",
      a: "Since the setup installer is compiled locally (via Inno Setup) and is not signed with a commercial Microsoft Developer certificate (which costs hundreds of dollars annually), Windows Defender flags it as unrecognized. You can safely bypass this by clicking 'More info' and then choosing 'Run anyway'."
    },
    {
      q: "How do in-app auto updates work on Android?",
      a: "watchAny queries the GitHub Releases API dynamically on launch. If a newer tag (like v2.0.13) is discovered, you will see a badge in the Player settings drawer. Clicking 'Update' fetches the APK and triggers the Android Package Installer automatically."
    },
    {
      q: "What should I do if a stream is buffering too much?",
      a: "Torrents rely on peer seeding. If a stream buffers, try selecting a stream with more seeders from the torrent selector panel. Alternatively, go to Player settings and increase your TorrServer pre-load cache buffer."
    },
    {
      q: "Why did I lose my downloads after updating the app?",
      a: "In version v2.0.13, we resolved this bug. Downloads are now saved inside the secure system documents directory (rather than cache directories), meaning they persist permanently across updates and will not be swept by system cleaners."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(46, 196, 182, 0.08)',
            border: '1px solid rgba(46, 196, 182, 0.15)',
            color: 'var(--accent-teal)',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            <HelpCircle size={14} /> Frequently Asked Questions
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Got <span className="gradient-text-teal">Questions?</span> We Have Answers.
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            Find quick answers to installation, stream buffering, settings config, and update questions.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="glass-panel" style={{ overflow: 'hidden' }}>
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="accordion-item">
                <div 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(index)}
                  style={{ background: isOpen ? 'rgba(255,255,255,0.01)' : 'transparent' }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, color: isOpen ? 'white' : 'var(--text-secondary)', transition: 'var(--transition-fast)' }}>
                    {item.q}
                  </span>
                  {isOpen ? <ChevronUp size={18} style={{ color: 'var(--accent-teal)' }} /> : <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />}
                </div>
                {isOpen && (
                  <div className="accordion-content">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
