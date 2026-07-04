import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Features from './pages/Features';
import FAQ from './pages/FAQ';
import Wiki from './pages/Wiki';
import Gallery from './pages/Gallery';
import './App.css';

// Component to handle auto-scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Navigation Link component that adds 'active' class on matching route
function NavigationLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  );
}

// ── HOME PAGE COMPONENT ──
function Home() {
  const [activeTask, setActiveTask] = useState('enhancement');

  // ── SPLIT COMPARISON SLIDER STATE ──
  const [clipPercent, setClipPercent] = useState(50);
  const splitRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!splitRef.current) return;
    const rect = splitRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setClipPercent(percent);
  };

  const handleTouchMove = (e) => {
    if (!splitRef.current || !e.touches[0]) return;
    const rect = splitRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setClipPercent(percent);
  };

  // ── SUBTITLE CUSTOMIZER MOCK STATE ──
  const [subFont, setSubFont] = useState('Outfit');
  const [subColor, setSubColor] = useState('#FFFFFF');
  const [subSize, setSubSize] = useState(18);
  const [subBgOpacity, setSubBgOpacity] = useState(0.4);
  const [isSubBold, setIsSubBold] = useState(false);
  const [isSubItalic, setIsSubItalic] = useState(false);
  const [isSubShadow, setIsSubShadow] = useState(true);

  // ── DOWNLOAD SIMULATOR STATE ──
  const [dlProgress, setDlProgress] = useState(15);
  const [dlSpeed, setDlSpeed] = useState(14.8);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setDlProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 200);

    const speedInterval = setInterval(() => {
      setDlSpeed((prev) => {
        const delta = (Math.random() - 0.5) * 1.5;
        const nextSpeed = prev + delta;
        return parseFloat(Math.max(10.5, Math.min(24.5, nextSpeed)).toFixed(1));
      });
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(speedInterval);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section style={{ padding: '80px 0 60px 0', position: 'relative' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Hero Texts */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              background: 'rgba(255, 159, 28, 0.08)',
              border: '1px solid rgba(255, 159, 28, 0.15)',
              color: 'var(--accent-orange)',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '20px'
            }}>
              <span className="material-icons-round" style={{ fontSize: '14px' }}>auto_awesome</span> Version 2.0.13 Live
            </div>
            
            <h1 style={{
              fontSize: '54px',
              lineHeight: 1.15,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800
            }}>
              Stream & Download <br />
              <span className="gradient-text-orange">Anime, Movies & TV</span> <br />
              Build The New Way.
            </h1>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '17px',
              marginBottom: '36px',
              maxWidth: '520px',
              lineHeight: 1.6
            }}>
              A clean, modern, ad-free player powered by real-time hardware-accelerated shaders. Enjoy advanced styling, instant downloads, and offline database persistence.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => scrollToSection('cockpit')}>
                <span className="material-icons-round">bolt</span> Test Agent Cockpit
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('download')}>
                <span className="material-icons-round">download</span> Get watchAny
              </button>
            </div>
          </div>

          {/* Right Hero Video Card Mockup */}
          <div className="float-anim" style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              padding: '16px',
              borderRadius: '16px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
              background: 'rgba(13, 13, 18, 0.5)'
            }}>
              {/* Simulated Video Player */}
              <div style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)'
              }}>
                <img src="/enhanced.png" alt="Anime Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Overlay Player Controls */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {/* Seek Bar */}
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
                    <div style={{ width: '65%', height: '100%', background: 'var(--accent-orange)', borderRadius: '2px', boxShadow: 'var(--glow-orange)' }}></div>
                    <div style={{ position: 'absolute', left: '65%', top: '50%', transform: 'translate(-50%,-50%)', width: '10px', height: '10px', borderRadius: '50%', background: '#FFF' }}></div>
                  </div>
                  
                  {/* Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', color: '#FFF' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span className="material-icons-round" style={{ cursor: 'pointer', fontSize: '20px' }}>play_arrow</span>
                      <span className="material-icons-round" style={{ cursor: 'pointer', fontSize: '20px' }}>skip_next</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>21:40 / 24:00</span>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: 'auto' }}>
                      {/* Video Enhancement icon glowing */}
                      <span className="material-icons-round text-glow-orange" style={{ color: 'var(--accent-orange)', fontSize: '20px', cursor: 'pointer' }}>auto_awesome</span>
                      <span className="material-icons-round" style={{ color: '#FFF', fontSize: '20px', cursor: 'pointer' }}>closed_caption</span>
                      <span className="material-icons-round" style={{ color: '#FFF', fontSize: '20px', cursor: 'pointer' }}>fullscreen</span>
                    </div>
                  </div>
                </div>

                {/* Floating Episode Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'white',
                  fontFamily: 'var(--font-heading)'
                }}>
                  EPISODE 12
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DEVELOPER COCKPIT ── */}
      <section id="cockpit" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '38px', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Interactive Developer Cockpit</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '15px' }}>
              Select an agent operation to inspect terminal execution logs and manipulate the simulation in real time.
            </p>
          </div>

          <div className="cockpit-container">
            {/* Left Console Window */}
            <div className="console-window">
              <div className="console-header">
                <div className="console-tab">
                  <span className="material-icons-round" style={{ fontSize: '15px' }}>terminal</span>
                  Agent Operations Console
                </div>
                <div className="console-dots">
                  <div className="console-dot" style={{ background: '#FF5F56' }}></div>
                  <div className="console-dot" style={{ background: '#FFBD2E' }}></div>
                  <div className="console-dot" style={{ background: '#27C93F' }}></div>
                </div>
              </div>
              
              <div className="console-body">
                {/* Mode Selectors */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  <button 
                    onClick={() => setActiveTask('enhancement')}
                    className={`console-action-btn ${activeTask === 'enhancement' ? 'active' : ''}`}
                  >
                    <span className="material-icons-round" style={{ fontSize: '16px' }}>auto_awesome</span>
                    Task: Apply GPU Quality Enhancement Shaders
                  </button>
                  <button 
                    onClick={() => setActiveTask('subtitles')}
                    className={`console-action-btn ${activeTask === 'subtitles' ? 'active' : ''}`}
                  >
                    <span className="material-icons-round" style={{ fontSize: '16px' }}>subtitles</span>
                    Task: Style Subtitles Customizer
                  </button>
                  <button 
                    onClick={() => setActiveTask('downloads')}
                    className={`console-action-btn ${activeTask === 'downloads' ? 'active' : ''}`}
                  >
                    <span className="material-icons-round" style={{ fontSize: '16px' }}>download</span>
                    Task: Manage High-Speed Downloads queue
                  </button>
                </div>

                {/* Log outputs depending on active task */}
                <div style={{ 
                  background: '#040407', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: '6px', 
                  padding: '16px', 
                  fontSize: '12.5px', 
                  fontFamily: 'var(--font-mono)',
                  color: activeTask === 'enhancement' ? '#38BDF8' : activeTask === 'subtitles' ? '#A78BFA' : '#34D399',
                  lineHeight: '1.7'
                }}>
                  {activeTask === 'enhancement' && (
                    <>
                      <div>[agent-1] Spawning video playback pipeline... OK</div>
                      <div>[agent-1] Resolving MPV shader filters... OK</div>
                      <div>[agent-1] Hardware deband enabled: deband=yes</div>
                      <div>[agent-1] Configured iterations: 4 (threshold: 48, range: 16)</div>
                      <div>[agent-1] Applied adaptive edge sharpening: sharpen=1.0</div>
                      <div>[agent-1] Saturated color filter: contrast=3, saturation=4</div>
                      <div style={{ color: 'white', marginTop: '10px' }}>&gt; Drag the slider handle on the right simulator to inspect deband results.</div>
                    </>
                  )}
                  {activeTask === 'subtitles' && (
                    <>
                      <div>[agent-1] Scanning playback stream subtitles: OK</div>
                      <div>[agent-1] Injecting custom styling configurations...</div>
                      <div>[agent-1] Set font family: {subFont}</div>
                      <div>[agent-1] Set font size: {subSize}px</div>
                      <div>[agent-1] Set text color: {subColor}</div>
                      <div>[agent-1] Set background opacity: {subBgOpacity}</div>
                      <div>[agent-1] Subtitle bold: {isSubBold ? 'ON' : 'OFF'}</div>
                      <div>[agent-1] Subtitle italic: {isSubItalic ? 'ON' : 'OFF'}</div>
                      <div>[agent-1] Text outline shadow: {isSubShadow ? 'ON' : 'OFF'}</div>
                      <div>[agent-1] Applied DynamicMargins layout boundaries: OK</div>
                    </>
                  )}
                  {activeTask === 'downloads' && (
                    <>
                      <div>[agent-1] Scanning offline download database... OK</div>
                      <div>[agent-1] Verified database path: secure app documents directory</div>
                      <div>[agent-1] Initializing multi-threaded download stream...</div>
                      <div>[agent-1] Target speed: {dlSpeed} MB/s</div>
                      <div>[agent-1] Progress database sync completed. 0 items lost.</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Simulator Panel */}
            <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyBetween: 'center' }}>
              {activeTask === 'enhancement' && (
                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>GPU Shaders Compare</h3>
                  <div 
                    className="split-viewer"
                    ref={splitRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    style={{ '--clip-percent': `${clipPercent}%`, marginBottom: '16px' }}
                  >
                    {/* Raw Image (Before) */}
                    <img src="/raw.png" className="split-image" alt="Raw Quality" />
                    <div className="split-label split-label-before">Raw Stream</div>
                    
                    {/* Enhanced Image (After) */}
                    <div className="split-overlay">
                      <img src="/enhanced.png" className="split-image" alt="Enhanced Quality" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="split-label split-label-after">GPU Enhanced</div>

                    {/* Slider Split Line */}
                    <div className="split-bar"></div>
                    
                    {/* Slider Handle */}
                    <div className="split-handle">
                      <span className="material-icons-round" style={{ fontSize: '18px' }}>unfold_more</span>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>
                    Real-time spline rendering. The deband algorithm targets low-quality gradients to produce pixel-perfect smooth colors.
                  </p>
                </div>
              )}

              {activeTask === 'subtitles' && (
                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>Live Subtitles Preview</h3>
                  
                  {/* Subtitle preview box */}
                  <div className="sub-preview-box" style={{ marginBottom: '20px' }}>
                    <img src="/enhanced.png" className="sub-video-bg" alt="Subtitle preview background" />
                    <div style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      textAlign: 'center',
                      width: '85%'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        lineHeight: '1.4',
                        fontFamily: subFont === 'Outfit' ? 'var(--font-heading)' : subFont,
                        color: subColor,
                        fontSize: `${subSize}px`,
                        fontWeight: isSubBold ? '700' : '500',
                        fontStyle: isSubItalic ? 'italic' : 'normal',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        backgroundColor: subBgOpacity > 0 ? `rgba(0,0,0,${subBgOpacity})` : 'transparent',
                        textShadow: isSubShadow 
                          ? '1.5px 1.5px 0px #000, -1.5px 1.5px 0px #000, 1.5px -1.5px 0px #000, -1.5px -1.5px 0px #000' 
                          : 'none',
                        transition: 'all 0.15s ease-out'
                      }}>
                        watchAny makes subtitles look absolutely gorgeous.
                      </span>
                    </div>
                  </div>

                  {/* Subtitle Editor Controls */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>FONT FAMILY</span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {['Outfit', 'Inter', 'monospace', 'serif'].map((font) => (
                          <button 
                            key={font}
                            onClick={() => setSubFont(font)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '4px',
                              border: '1px solid',
                              borderColor: subFont === font ? 'var(--accent-teal)' : 'var(--border-light)',
                              background: subFont === font ? 'rgba(46, 196, 182, 0.1)' : 'transparent',
                              color: subFont === font ? 'var(--accent-teal)' : 'var(--text-secondary)',
                              fontSize: '11px',
                              cursor: 'pointer',
                              fontWeight: 600
                            }}
                          >
                            {font}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>SIZE ({subSize}px)</span>
                        <input 
                          type="range" 
                          min="14" 
                          max="28" 
                          value={subSize}
                          onChange={(e) => setSubSize(parseInt(e.target.value))}
                          style={{ width: '100%', accentColor: 'var(--accent-teal)' }}
                        />
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>BG OPACITY ({Math.round(subBgOpacity * 100)}%)</span>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={subBgOpacity * 100}
                          onChange={(e) => setSubBgOpacity(parseFloat(e.target.value) / 100)}
                          style={{ width: '100%', accentColor: 'var(--accent-teal)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTask === 'downloads' && (
                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>High-Speed Download queue</h3>
                  
                  {/* Download List Sim */}
                  <div className="glass-panel dl-sim-card" style={{ background: '#040407', border: '1px solid var(--border-medium)', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyBetween: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600, color: 'white' }}>Frieren: Beyond Journey's End - EP 12</span>
                      <span style={{ fontFamily: 'monospace', color: 'var(--accent-teal)', marginLeft: 'auto' }}>{dlProgress}%</span>
                    </div>
                    <div className="progress-bar-container" style={{ marginBottom: '6px' }}>
                      <div className="progress-bar-fill" style={{ width: `${dlProgress}%` }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyBetween: 'space-between', fontSize: '10.5px', color: 'var(--text-muted)' }}>
                      <span>{(1.2 * (dlProgress / 100)).toFixed(2)} GB / 1.20 GB</span>
                      <span style={{ marginLeft: 'auto' }}>Downloading...</span>
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5, marginTop: '16px' }}>
                    Downloads persist in local secure document storage. Multi-threaded pipeline allows speeds up to 24 MB/s (active: {dlSpeed} MB/s).
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES LIST ── */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Engineered for Perfectionists</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '15px' }}>
              We built watchAny to solve all the bugs and design limitations of typical players. Here is why you will love it.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Feature 1 */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255, 159, 28, 0.08)', border: '1px solid rgba(255, 159, 28, 0.15)', display: 'flex', alignItems: 'center', justifyContents: 'center', color: 'var(--accent-orange)', marginBottom: '20px', paddingLeft: '12px' }}>
                <span className="material-icons-round" style={{ marginTop: '12px' }}>auto_awesome</span>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>GPU shaders enhancement</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6 }}>
                Apply dynamic deband filters, edge sharpening, and high-quality spline scaling to resolve low-quality streams in real time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(46, 196, 182, 0.08)', border: '1px solid rgba(46, 196, 182, 0.15)', display: 'flex', alignItems: 'center', justifyContents: 'center', color: 'var(--accent-teal)', marginBottom: '20px', paddingLeft: '12px' }}>
                <span className="material-icons-round" style={{ marginTop: '12px' }}>subtitles</span>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Dynamic subtitle padding</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6 }}>
                Never get subtitles pushed to the top of the screen on mobile landscape view. Padding recalibrates dynamically to fit the video frame perfectly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255, 77, 109, 0.08)', border: '1px solid rgba(255, 77, 109, 0.15)', display: 'flex', alignItems: 'center', justifyContents: 'center', color: 'var(--accent-red)', marginBottom: '20px', paddingLeft: '12px' }}>
                <span className="material-icons-round" style={{ marginTop: '12px' }}>offline_pin</span>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Offline database persistence</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6 }}>
                Downloads persist perfectly across updates. We store records in secure app document folders so your progress is never lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD NOW ── */}
      <section id="download" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 5 }}>
          <h2 style={{ fontSize: '42px', marginBottom: '20px', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Ready to stream ad-free?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto 40px auto', fontSize: '16px' }}>
            Get watchAny today. Secure, ad-free torrent streaming and high-speed downloads on both desktop and mobile.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            {/* Windows Card */}
            <div className="glass-panel" style={{ padding: '32px', flex: '1 1 280px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span className="material-icons-round" style={{ fontSize: '26px' }}>desktop_windows</span>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>Windows Installer</h3>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>COMPATIBLE WITH WINDOWS 10 / 11</span>
              </div>
              <a href="https://github.com/Fluffy-The-Penguin/watchAny-2.0/releases/download/v2.0.13/watchany_setup.exe" style={{ width: '100%', textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span className="material-icons-round">download</span> Download Setup.exe
                </button>
              </a>
              <a href="https://github.com/Fluffy-The-Penguin/watchAny-2.0/releases/download/v2.0.13/watchany_standalone.zip" style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'underline' }}>
                Or download standalone .zip
              </a>
            </div>

            {/* Android Card */}
            <div className="glass-panel" style={{ padding: '32px', flex: '1 1 280px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <span className="material-icons-round" style={{ fontSize: '26px' }}>phone_android</span>
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>Android App</h3>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>COMPATIBLE WITH ANDROID 8.0+</span>
              </div>
              <a href="https://github.com/Fluffy-The-Penguin/watchAny-2.0/releases/download/v2.0.13/app-arm64-v8a-release.apk" style={{ width: '100%', textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span className="material-icons-round">download</span> Download ARM64 .apk
                </button>
              </a>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Supports in-app auto updates
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── MAIN APP SHELL WITH ROUTER ──
function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Decorative Background Grid */}
      <div className="bg-grid"></div>
      <div className="glow-backdrop" style={{ top: '-100px', left: '-100px', background: '#FF9F1C' }}></div>
      <div className="glow-backdrop" style={{ bottom: '10%', right: '-100px', background: '#2EC4B6' }}></div>

      {/* ── HEADER ── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(6, 6, 8, 0.75)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container" style={{
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none', color: 'white' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-orange) 0%, #E65F00 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--glow-orange)'
            }}>
              <span className="material-icons-round" style={{ color: '#000', fontSize: '20px' }}>play_arrow</span>
            </div>
            <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
              watch<span style={{ color: 'var(--accent-orange)' }}>Any</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <NavigationLink to="/" label="Home" />
            <NavigationLink to="/features" label="Features" />
            <NavigationLink to="/gallery" label="Gallery" />
            <NavigationLink to="/faq" label="FAQ" />
            <NavigationLink to="/wiki" label="Wiki Docs" />
            
            <Link to="/#download" onClick={() => {
              setTimeout(() => {
                const el = document.getElementById('download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>
              <button className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                <span className="material-icons-round" style={{ fontSize: '16px' }}>download</span> Download
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* ── ROUTE PAGES ── */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-light)', background: '#030305', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '16px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
              watch<span style={{ color: 'var(--accent-orange)' }}>Any</span>
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>© {new Date().getFullYear()} watchAny. Ad-free & open source.</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
            <a href="https://github.com/Fluffy-The-Penguin/watchAny-2.0" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GitHub Project</a>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <a href="https://github.com/Fluffy-The-Penguin/watchAny-2.0/releases" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>All Releases</a>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
