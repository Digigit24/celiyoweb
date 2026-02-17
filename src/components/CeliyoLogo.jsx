export default function CeliyoLogo({ className = '', white = false }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={white ? '#ffffff' : '#5B21B6'} />
          <stop offset="35%" stopColor={white ? '#ffffff' : '#7C3AED'} />
          <stop offset="65%" stopColor={white ? '#ffffff' : '#F59E0B'} />
          <stop offset="100%" stopColor={white ? '#ffffff' : '#F97316'} />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor={white ? '#ffffff' : '#5B21B6'} />
          <stop offset="40%" stopColor={white ? '#ffffff' : '#7C3AED'} />
          <stop offset="70%" stopColor={white ? '#ffffff' : '#F59E0B'} />
          <stop offset="100%" stopColor={white ? '#ffffff' : '#F97316'} />
        </linearGradient>
      </defs>
      {/* Infinity loop - left lobe */}
      <path
        d="M100 50
           C100 30, 78 15, 55 15
           C32 15, 15 30, 15 50
           C15 70, 32 85, 55 85
           C78 85, 100 70, 100 50Z"
        stroke="url(#logoGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Infinity loop - right lobe */}
      <path
        d="M100 50
           C100 70, 122 85, 145 85
           C168 85, 185 70, 185 50
           C185 30, 168 15, 145 15
           C122 15, 100 30, 100 50Z"
        stroke="url(#logoGradient2)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
