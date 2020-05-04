import React from 'react';

export const SvgSadEmoji = ({ style, 'aria-label': arialLabel }) => (
  <svg viewBox="0 0 45 45" style={style} aria-label={arialLabel}>
    <defs>
      <clipPath>
        <path d="M0 36h36V0H0v36z" />
      </clipPath>
    </defs>
    <g transform="matrix(1.25 0 0 -1.25 0 45)">
      <path
        d="M36 18c0-9.941-8.059-18-18-18C8.06 0 0 8.059 0 18c0 9.94 8.06 18 18 18 9.941 0 18-8.06 18-18"
        fill="#ffcc4d"
      />
      <path
        d="M14 19c0-1.934-1.119-3.5-2.5-3.5S9 17.066 9 19c0 1.933 1.119 3.5 2.5 3.5S14 20.933 14 19m13 0c0-1.934-1.119-3.5-2.5-3.5S22 17.066 22 19c0 1.933 1.119 3.5 2.5 3.5S27 20.933 27 19M5.999 22.5a1 1 0 00-.799 1.6c3.262 4.35 7.616 4.4 7.8 4.4a1 1 0 00.004-2c-.155-.002-3.569-.086-6.204-3.6a1 1 0 00-.801-.4m24.002 0a.997.997 0 00-.801.4c-2.64 3.521-6.061 3.599-6.206 3.6-.55.006-.994.456-.991 1.005A.997.997 0 0023 28.5c.184 0 4.537-.05 7.8-4.4a1 1 0 00-.799-1.6M23.485 7.621c-.012.044-1.146 4.38-5.485 4.38-4.34 0-5.475-4.336-5.485-4.38a.495.495 0 01.231-.544.51.51 0 01.596.06C13.352 7.144 14.356 8 18 8c3.59 0 4.617-.83 4.656-.863a.5.5 0 01.83.484"
        fill="#664500"
      />
      <path
        d="M16 5a5 5 0 00-5-5 5 5 0 00-5 5c0 2.762 4 10 5 10s5-7.238 5-10"
        fill="#5dadec"
      />
    </g>
  </svg>
);
