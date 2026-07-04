import { 
  Cpu, 
  Tv, 
  HardDrive, 
  Smartphone, 
  Settings, 
  RefreshCw,
  Compass,
  Code
} from 'lucide-react';

function Features() {
  const technicalSpecs = [
    {
      icon: <Cpu className="w-6 h-6 text-amber-500" style={{ color: 'var(--accent-orange)' }} />,
      title: "Real-Time GPU Shaders",
      desc: "Hardware-accelerated shader pipelines running directly inside MPV. Leverages advanced debanding algorithms to eliminate color banding, and adaptive sharpening to bring out fine details in low-bitrate streams."
    },
    {
      icon: <Tv className="w-6 h-6 text-teal-500" style={{ color: 'var(--accent-teal)' }} />,
      title: "Spline36 Video Scaling",
      desc: "Uses premium bicubic and spline36 scaling filters to scale sub-1080p anime video frames dynamically, offering a crisp playback quality that beats default bilinear browser renders."
    },
    {
      icon: <HardDrive className="w-6 h-6 text-blue-500" style={{ color: 'var(--accent-blue)' }} />,
      title: "Secure App Documents storage",
      desc: "All downloaded files, metadata, and watch progress are tracked inside secure app documents directories instead of temporary caches. Your offline database survives app packages updates."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-500" style={{ color: 'var(--accent-red)' }} />,
      title: "Dynamic Subtitle Padding",
      desc: "Recalibrates subtitle constraints dynamically based on display orientation and letterboxing, keeping text perfectly positioned at the bottom of the video frame in horizontal fullscreen."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-500" style={{ color: '#A855F7' }} />,
      title: "In-App Auto Updates",
      desc: "Seamless background check for new versions on launch. On Android, you can trigger auto-update downloads and package installations directly inside the player settings drawer."
    },
    {
      icon: <Settings className="w-6 h-6 text-yellow-500" style={{ color: '#EAB308' }} />,
      title: "Customizable Color Control",
      desc: "Adjust contrast, brightness, and color saturation from -100 to 100 via hardware filters, with quick reset toggles to restore default profiles instantly."
    }
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
            background: 'rgba(59, 130, 246, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            color: 'var(--accent-blue)',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            <Code size={14} /> Technical Specifications
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Powering Your <span className="gradient-text-blue">Streaming Experience</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '15.5px' }}>
            A high-performance media engine designed to bypass standard video limitations and offer pristine ad-free streaming on Windows and Android.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {technicalSpecs.map((spec, i) => (
            <div key={i} className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {spec.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '20px', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{spec.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Panel */}
        <div className="glass-panel" style={{ padding: '40px', background: 'rgba(10, 10, 14, 0.3)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                System Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                watchAny integrates MPV natively on Windows, and implements highly optimized C++ SwiftShader/Vulkan backends on mobile to ensure zero frame dropping during playback.
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className="material-icons-round" style={{ color: 'var(--accent-orange)' }}>bolt</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>Zero Buffer TorrServer integration</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>MINIMUM ANDROID VERSION</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'var(--font-heading)' }}>Android 8.0 Oreo (API 26)</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>WINDOWS COMPATIBILITY</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'var(--font-heading)' }}>Windows 10 / 11 (64-bit)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
