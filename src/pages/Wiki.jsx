import { useState } from 'react';
import { BookOpen, Terminal, Shield, Play, Sliders, Settings } from 'lucide-react';

function Wiki() {
  const [activeTab, setActiveTab] = useState('installation');

  const tabs = [
    { id: 'installation', label: 'Installation Guides', icon: <Shield size={16} /> },
    { id: 'gpu-enhancement', label: 'Tuning GPU Shaders', icon: <Sliders size={16} /> },
    { id: 'torrserver', label: 'TorrServer Integration', icon: <Play size={16} /> },
    { id: 'manga-reader', label: 'Manga Configurations', icon: <BookOpen size={16} /> }
  ];

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(255, 159, 28, 0.08)',
            border: '1px solid rgba(255, 159, 28, 0.15)',
            color: 'var(--accent-orange)',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            <BookOpen size={14} /> Documentation Wiki
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Setup & <span className="gradient-text-orange">Configuration Wiki</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            Complete developer-grade documentation for custom filters, network configurations, and playback properties.
          </p>
        </div>

        {/* Wiki Workspace Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Left Sidebar Menu */}
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  transition: 'var(--transition-fast)',
                  background: activeTab === tab.id ? 'rgba(255,159,28,0.08)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'rgba(255,159,28,0.15)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--accent-orange)' : 'var(--text-secondary)'
                }}
              >
                {tab.icon}
                {tab.label}
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="glass-panel" style={{ padding: '40px', background: 'rgba(10, 10, 14, 0.25)' }}>
            {activeTab === 'installation' && (
              <div>
                <h2 style={{ fontSize: '28px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Installation & Setup Guides</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '24px', lineHeight: 1.7 }}>
                  Follow these instructions to configure watchAny on your desktop and mobile environments.
                </p>
                
                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Windows setup (.exe / .zip)</h3>
                <ol style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>
                  <li>Download the setup executable or portable zip from our official releases page.</li>
                  <li>If using the setup `.exe`, follow the wizard setup to install standard shortcuts.</li>
                  <li>Bypass Windows Defender SmartScreen by selecting <strong>More Info ➔ Run Anyway</strong>.</li>
                </ol>

                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Android Side-loading</h3>
                <ol style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                  <li>Download the ARM64-v8a package from your browser.</li>
                  <li>Enable <strong>Install from Unknown Sources</strong> inside your Android settings.</li>
                  <li>Tap the APK package file to verify, authorize permissions, and complete the package configuration.</li>
                </ol>
              </div>
            )}

            {activeTab === 'gpu-enhancement' && (
              <div>
                <h2 style={{ fontSize: '28px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Tuning GPU Quality Shaders</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '24px', lineHeight: 1.7 }}>
                  Fine-tune the deband parameters inside player settings to suit your GPU hardware capabilities.
                </p>

                <div className="terminal-window" style={{ marginBottom: '24px' }}>
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <div className="terminal-dot" style={{ background: '#FF5F56' }}></div>
                      <div className="terminal-dot" style={{ background: '#FFBD2E' }}></div>
                      <div className="terminal-dot" style={{ background: '#27C93F' }}></div>
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>mpv.conf</span>
                  </div>
                  <pre style={{ padding: '16px', color: '#00FF66', fontSize: '12.5px', overflowX: 'auto' }}>
{`# Deband setup configurations
deband=yes
deband-iterations=4    # (Range: 1-16) Higher resolves color bands better
deband-threshold=48    # (Range: 0-100) Filter sensitivity
deband-range=16        # (Range: 1-64) Filter radius range

# Scale algorithms
scale=spline36
cscale=spline36`}
                  </pre>
                </div>

                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Tuning Properties Guide</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                  <li><strong>Iterations</strong>: Controls the number of deband passes. Higher values eliminate more banding artifacts but demand higher GPU performance. Set to 3 or 4 for optimal performance.</li>
                  <li><strong>Threshold</strong>: The boundary filter sensitivity. Setting this too high can cause slight blurriness in textures. 48 is the recommended threshold balance.</li>
                  <li><strong>Range</strong>: The neighborhood radius search. Setting it to 16 covers common color blocks smoothly.</li>
                </ul>
              </div>
            )}

            {activeTab === 'torrserver' && (
              <div>
                <h2 style={{ fontSize: '28px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>TorrServer Integration</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '24px', lineHeight: 1.7 }}>
                  watchAny relies on an active TorrServer wrapper backend to stream torrent links instantly without waiting for complete downloads.
                </p>

                <div style={{ padding: '16px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.15)', borderRadius: '8px', color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '24px', lineHeight: 1.6 }}>
                  <span className="material-icons-round" style={{ color: 'var(--accent-blue)', verticalAlign: 'middle', marginRight: '8px' }}>info</span>
                  The app bundle automatically bundles the appropriate TorrServer binaries (e.g. torrserver.exe on Windows, and android library dependencies on Mobile) so no manual binary downloads are required.
                </div>

                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Adjusting Network settings</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                  <li><strong>TorrServer Port</strong>: Defaults to <code>8090</code>. If you run a custom server on a local network, update the port in Settings.</li>
                  <li><strong>Cache Size</strong>: Set the streaming cache size in TorrServer settings drawer. For high-speed fiber networks, 100MB is recommended to prevent seek lags.</li>
                </ul>
              </div>
            )}

            {activeTab === 'manga-reader' && (
              <div>
                <h2 style={{ fontSize: '28px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Manga & Suwayomi Configurations</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '24px', lineHeight: 1.7 }}>
                  watchAny implements Suwayomi integration to allow users to load manga and sync catalogs securely.
                </p>

                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>MangaDex Extension Support</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                  Suwayomi routes requests through JS-compiled manga scrapers. Make sure extensions are authorized inside Settings ➔ Extensions and reload the trending list to fetch manga indexes securely.
                </p>

                <h3 style={{ fontSize: '18px', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Offline Reading Caches</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  Manga page chapters are pre-cached inside the application documents folder on swipe/page down, allowing for stutter-free offline read experiences.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wiki;
