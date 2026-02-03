import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Transformational Epicenter - Luxury Medical Retreat Investment'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          background: 'linear-gradient(135deg, #1F483A 0%, #0d211a 60%, #1a3c30 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #D4A63B, #e0bc5f, #D4A63B)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Label */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4A63B',
            }}
          >
            Investor Presentation
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              maxWidth: '800px',
            }}
          >
            Transformational Epicenter
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: '#94c4b0',
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            Luxury Medical Retreat - Plant Medicine, Bio-Optimization & Trauma Integration
          </div>
        </div>

        {/* Bottom metrics row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '32px',
          }}
        >
          {[
            { label: 'Total Raise', value: '$16.8M' },
            { label: 'Project IRR', value: '78%' },
            { label: '5-Year MOIC', value: '7.8x' },
            { label: 'Y5 Enterprise Value', value: '$81.2M' },
          ].map((metric) => (
            <div key={metric.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {metric.label}
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#D4A63B' }}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '70px',
            fontSize: 14,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.05em',
          }}
        >
          transformational-epicenter.com
        </div>
      </div>
    ),
    { ...size }
  )
}
