import { useState } from 'react';
import { Eye, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

function Gallery() {
  const screenshots = [
    {
      title: "Android Landscape Playback UI",
      desc: "Responsive mobile controls showing the new quality enhancement shortcut directly on the top bar.",
      category: "mobile",
      img: "/enhanced.png"
    },
    {
      title: "Windows Desktop Player Interface",
      desc: "MPV-native interface running with customized subtitle stylings, quick audio track selectors, and speed controls.",
      category: "desktop",
      img: "/raw.png"
    },
    {
      title: "Player Settings & Shaders Drawer",
      desc: "Customize deband range, threshold, iterations, and colors using hardware-accelerated shaders.",
      category: "desktop",
      img: "/enhanced.png"
    },
    {
      title: "Manga Reader Catalog",
      desc: "Browse trending titles, cache pages offline, and synchronize trackers through Suwayomi integration.",
      category: "mobile",
      img: "/raw.png"
    }
  ];

  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredScreens = filter === 'all' 
    ? screenshots 
    : screenshots.filter(s => s.category === filter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredScreens.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredScreens.length) % filteredScreens.length);
  };

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
            background: 'rgba(46, 196, 182, 0.08)',
            border: '1px solid rgba(46, 196, 182, 0.15)',
            color: 'var(--accent-teal)',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            <ImageIcon size={14} /> Application Gallery
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            App <span className="gradient-text-teal">Screenshots Showcase</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            Take a look at the clean user interface on mobile, tablet, and desktop formats.
          </p>
        </div>

        {/* Filter Category Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          {['all', 'desktop', 'mobile'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--accent-teal)' : 'var(--border-light)',
                background: filter === cat ? 'rgba(46, 196, 182, 0.08)' : 'rgba(255,255,255,0.01)',
                color: filter === cat ? 'var(--accent-teal)' : 'var(--text-secondary)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Screenshot Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {filteredScreens.map((item, index) => (
            <div 
              key={index}
              className="glass-panel"
              onClick={() => openLightbox(index)}
              style={{
                padding: '16px',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{
                position: 'relative',
                aspectRatio: '16/9',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#000',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src={item.img} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }}
                  className="gallery-thumb"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.4)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)'
                }} className="gallery-hover-overlay">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--accent-teal)',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Eye size={18} />
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '16.5px', marginBottom: '4px', fontFamily: 'var(--font-heading)', color: 'white' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(3, 3, 5, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-light)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 1010
            }}
          >
            <X size={20} />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-light)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 1010
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <img 
              src={filteredScreens[lightboxIndex].img} 
              alt={filteredScreens[lightboxIndex].title}
              style={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '12px',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
              }}
            />
            <div style={{ textAlign: 'center', maxWidth: '600px' }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '6px' }}>
                {filteredScreens[lightboxIndex].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                {filteredScreens[lightboxIndex].desc}
              </p>
            </div>
          </div>

          <button 
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-light)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              zIndex: 1010
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
