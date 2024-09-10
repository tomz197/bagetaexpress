import * as React from "react";

const LogomarkJS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 60.71" {...props}>
    <defs>
      <filter
        id="a"
        width={169}
        height={23.43}
        x={0}
        y={5.37}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <mask
        id="b"
        width={169}
        height={23.43}
        x={0}
        y={5.37}
        maskUnits="userSpaceOnUse"
      >
        <path
          d="M46.53 21.85a7.42 7.42 0 0 1-3.84-1 6.93 6.93 0 0 1-2.61-2.73 8.33 8.33 0 0 1-.94-4 8 8 0 0 1 1-4 7.14 7.14 0 0 1 2.74-2.74 8.55 8.55 0 0 1 7.95 0 7.16 7.16 0 0 1 2.72 2.74 8.17 8.17 0 0 1 1 4l-1.39.48a8.12 8.12 0 0 1-.84 3.75A6.49 6.49 0 0 1 50 20.92a6.41 6.41 0 0 1-3.47.93Zm.33 5.95a8.64 8.64 0 0 1-3.79-.8 7.74 7.74 0 0 1-2.82-2.25A1 1 0 0 1 40 24a.89.89 0 0 1 .44-.68 1.2 1.2 0 0 1 .89-.2 1.13 1.13 0 0 1 .75.48 5.53 5.53 0 0 0 2 1.55 6.52 6.52 0 0 0 2.84.59 5.34 5.34 0 0 0 2.7-.71 5 5 0 0 0 1.93-2 6.71 6.71 0 0 0 .71-3.17v-4.21l.83-1.89 1.47.36v5.79a8 8 0 0 1-1 4 7.39 7.39 0 0 1-6.7 3.88Zm0-8.06a5.38 5.38 0 0 0 2.8-.72 5.27 5.27 0 0 0 1.9-2 5.86 5.86 0 0 0 .7-2.91 6 6 0 0 0-.7-2.92 5.15 5.15 0 0 0-1.9-2 5.8 5.8 0 0 0-5.6 0 5.25 5.25 0 0 0-1.94 2 6 6 0 0 0-.7 2.92 5.86 5.86 0 0 0 .7 2.91 5.25 5.25 0 0 0 4.74 2.71Z"
          style={{
            strokeWidth: 2,
            filter: "url(#a)",
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: 10,
          }}
        />
      </mask>
    </defs>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <g
          style={{
            mask: "url(#b)",
          }}
        >
          <path
            d="M1.5 26.44h166"
            style={{
              strokeLinecap: "round",
              strokeWidth: 3,
              fill: "none",
              stroke: props.style?.fill ?? "#000",
              strokeMiterlimit: 10,
            }}
          />
        </g>
        <path d="M9.19 21.85a7.48 7.48 0 0 1-6.63-3.77 7.75 7.75 0 0 1-1-3.9v-13a1.18 1.18 0 0 1 .28-.86A1.18 1.18 0 0 1 2.71 0a1.15 1.15 0 0 1 .85.32 1.18 1.18 0 0 1 .32.87v8a6.74 6.74 0 0 1 2.39-2 7 7 0 0 1 3.28-.76 7.08 7.08 0 0 1 3.78 1A7.22 7.22 0 0 1 16 10.15a8 8 0 0 1 1 3.94 7.85 7.85 0 0 1-1 4 7.56 7.56 0 0 1-2.76 2.77 7.78 7.78 0 0 1-4.05.99Zm0-2.11A5.25 5.25 0 0 0 12 19a5.4 5.4 0 0 0 1.95-2 5.8 5.8 0 0 0 .71-2.88 5.83 5.83 0 0 0-.71-2.86 5.32 5.32 0 0 0-4.76-2.78 5.25 5.25 0 0 0-4.67 2.75 5.93 5.93 0 0 0-.69 2.86A5.9 5.9 0 0 0 4.52 17a5.35 5.35 0 0 0 1.93 2 5.2 5.2 0 0 0 2.74.74ZM27.73 21.85a7.17 7.17 0 0 1-3.78-1 7.4 7.4 0 0 1-2.64-2.77 8 8 0 0 1-1-4 7.81 7.81 0 0 1 1-4 7.51 7.51 0 0 1 2.77-2.77 7.74 7.74 0 0 1 10.61 2.77 8 8 0 0 1 1 4l-1 .47a7.34 7.34 0 0 1-.93 3.7 7 7 0 0 1-2.53 2.6 6.88 6.88 0 0 1-3.5 1Zm.34-2.11a5.2 5.2 0 0 0 2.76-.74 5.26 5.26 0 0 0 1.92-2 5.8 5.8 0 0 0 .71-2.86 5.85 5.85 0 0 0-.71-2.88 5.45 5.45 0 0 0-1.92-2 5.12 5.12 0 0 0-2.76-.75 5.26 5.26 0 0 0-2.77.75 5.55 5.55 0 0 0-2 2 5.75 5.75 0 0 0-.72 2.88 5.71 5.71 0 0 0 .76 2.86 5.33 5.33 0 0 0 4.73 2.76Zm6.53 2a1.29 1.29 0 0 1-.88-.32 1.09 1.09 0 0 1-.34-.85V16l.53-2.42 1.86.58v6.42a1.09 1.09 0 0 1-.34.85 1.16 1.16 0 0 1-.83.28ZM46.53 21.85a7.37 7.37 0 0 1-3.84-1 6.93 6.93 0 0 1-2.61-2.73 8.34 8.34 0 0 1-.95-4 8.06 8.06 0 0 1 1-4 7.21 7.21 0 0 1 2.74-2.74 8.55 8.55 0 0 1 8 0 7.12 7.12 0 0 1 2.73 2.74 8.39 8.39 0 0 1 1 4l-1.39.47a8 8 0 0 1-.85 3.76 6.31 6.31 0 0 1-5.79 3.5Zm.33 5.95a8.61 8.61 0 0 1-3.79-.8 7.79 7.79 0 0 1-2.83-2.25A1 1 0 0 1 40 24a.92.92 0 0 1 .45-.68 1.17 1.17 0 0 1 1.64.28 5.66 5.66 0 0 0 2 1.55 6.47 6.47 0 0 0 2.83.59 5.29 5.29 0 0 0 2.7-.71 5 5 0 0 0 1.93-2.05 6.57 6.57 0 0 0 .71-3.17v-4.16l.84-1.89 1.47.36v5.78a8 8 0 0 1-1 4 7.42 7.42 0 0 1-6.7 3.88Zm0-8.06a5.21 5.21 0 0 0 4.7-2.74 6 6 0 0 0 .69-2.91 6.08 6.08 0 0 0-.69-2.92 5.18 5.18 0 0 0-1.91-2 5.32 5.32 0 0 0-2.79-.72 5.44 5.44 0 0 0-2.81.72 5.23 5.23 0 0 0-1.93 2 6 6 0 0 0-.71 2.92 5.89 5.89 0 0 0 .71 2.91 5.24 5.24 0 0 0 1.93 2 5.35 5.35 0 0 0 2.81.74ZM67.7 21.42a8 8 0 0 1-4.15.1 7.24 7.24 0 0 1-3.37-1.93 8.1 8.1 0 0 1-2-3.6 8.32 8.32 0 0 1-.18-4.13 7.15 7.15 0 0 1 1.8-3.32 7.25 7.25 0 0 1 3.43-2 6.92 6.92 0 0 1 3.8 0 6.39 6.39 0 0 1 3 1.94A8.39 8.39 0 0 1 71.92 12a1 1 0 0 1-.09.82 1.08 1.08 0 0 1-.68.48l-11.22 3-.5-1.85 11.36-3.05-.94 1.12A6 6 0 0 0 68.6 10a4.53 4.53 0 0 0-2.11-1.42 4.69 4.69 0 0 0-2.68 0A5.21 5.21 0 0 0 61.33 10a4.7 4.7 0 0 0-1.22 2.42 6.53 6.53 0 0 0 .16 3 5.75 5.75 0 0 0 1.46 2.63 5.21 5.21 0 0 0 2.44 1.42 5.85 5.85 0 0 0 3-.06 6.1 6.1 0 0 0 1.78-.83 4.65 4.65 0 0 0 1.3-1.21 1.33 1.33 0 0 1 .67-.46.94.94 0 0 1 .74.05 1.08 1.08 0 0 1 .62.64.87.87 0 0 1-.17.79 7.38 7.38 0 0 1-1.92 1.84 8 8 0 0 1-2.49 1.19ZM75 9.09a1.12 1.12 0 0 1-.78-.29 1 1 0 0 1-.3-.71 1 1 0 0 1 .3-.74 1.12 1.12 0 0 1 .78-.29h6.87a1.12 1.12 0 0 1 .78.29 1 1 0 0 1 .3.74 1 1 0 0 1-.3.71 1.12 1.12 0 0 1-.78.29Zm6.67 12.62a4.88 4.88 0 0 1-2.59-.71 4.94 4.94 0 0 1-1.79-1.92 5.7 5.7 0 0 1-.66-2.75V2.84A1.17 1.17 0 0 1 77 2a1.15 1.15 0 0 1 .85-.33 1.13 1.13 0 0 1 .83.33 1.11 1.11 0 0 1 .34.84v13.51a3.11 3.11 0 0 0 .76 2.16 2.47 2.47 0 0 0 1.93.87h.84a1 1 0 0 1 .75.33 1.19 1.19 0 0 1 .3.83 1 1 0 0 1-.37.85 1.44 1.44 0 0 1-1 .32ZM93.62 21.85a7.17 7.17 0 0 1-3.78-1 7.32 7.32 0 0 1-2.64-2.77 8 8 0 0 1-1-4 7.72 7.72 0 0 1 1-4 7.49 7.49 0 0 1 2.8-2.7 8.15 8.15 0 0 1 7.86 0 7.53 7.53 0 0 1 2.75 2.77 7.93 7.93 0 0 1 1 4l-.94.47a7.34 7.34 0 0 1-.93 3.7 7.17 7.17 0 0 1-2.53 2.6 6.93 6.93 0 0 1-3.59.93Zm.38-2.11a5.24 5.24 0 0 0 2.72-.74 5.41 5.41 0 0 0 1.92-2 5.8 5.8 0 0 0 .71-2.86 5.85 5.85 0 0 0-.71-2.88 5.61 5.61 0 0 0-1.92-2 5.47 5.47 0 0 0-5.53 0 5.48 5.48 0 0 0-2 2 5.66 5.66 0 0 0-.73 2.88 5.61 5.61 0 0 0 .77 2.86A5.33 5.33 0 0 0 94 19.74Zm6.53 2a1.24 1.24 0 0 1-.87-.32 1.09 1.09 0 0 1-.35-.85V16l.53-2.42 1.86.58v6.42a1.11 1.11 0 0 1-.33.85 1.17 1.17 0 0 1-.89.28ZM3.67 60.71a1.86 1.86 0 0 1-1.89-1.88v-24.5A1.81 1.81 0 0 1 2.33 33a1.86 1.86 0 0 1 1.34-.53H20a1.89 1.89 0 0 1 1.34.49 1.72 1.72 0 0 1 .51 1.29 1.61 1.61 0 0 1-.51 1.23 1.92 1.92 0 0 1-1.34.47H5.55v8.79h10.38a1.83 1.83 0 0 1 1.34.49 1.77 1.77 0 0 1 0 2.49 1.83 1.83 0 0 1-1.34.49H5.55v9.05H20a1.92 1.92 0 0 1 1.34.47 1.58 1.58 0 0 1 .51 1.23 1.68 1.68 0 0 1-.51 1.28 1.84 1.84 0 0 1-1.34.49ZM27 60.71a1.54 1.54 0 0 1-1.26-.52A1.87 1.87 0 0 1 25.3 59a2.12 2.12 0 0 1 .44-1.29l9.11-12.16 1.63-1.44L44.8 33a1.74 1.74 0 0 1 1.34-.55 1.57 1.57 0 0 1 1.2.47 1.83 1.83 0 0 1 .47 1.16 2.19 2.19 0 0 1-.4 1.34l-8.79 11.72-1.56 1.38-8.75 11.65a1.81 1.81 0 0 1-1.31.54Zm18.93 0a1.88 1.88 0 0 1-.82-.16 1.72 1.72 0 0 1-.63-.53l-8.43-11.68-1.34-1.12-8.5-11.8a1.74 1.74 0 0 1-.36-1.27 2 2 0 0 1 .52-1.15 1.8 1.8 0 0 1 2.55 0l8 11.14 1.38 1.12 8.93 12.41a1.92 1.92 0 0 1 .4 1.3 1.84 1.84 0 0 1-.49 1.23 1.56 1.56 0 0 1-1.21.51ZM54.9 60.71a1.84 1.84 0 0 1-1.9-1.88v-24.5a1.8 1.8 0 0 1 .56-1.33 1.86 1.86 0 0 1 1.34-.53h7.24A9.54 9.54 0 0 1 67 33.65 8.39 8.39 0 0 1 70.22 37a9.88 9.88 0 0 1 1.18 4.86 9.38 9.38 0 0 1-1.18 4.71A8.3 8.3 0 0 1 67 49.75a9.84 9.84 0 0 1-4.81 1.16h-5.41v7.92a1.85 1.85 0 0 1-.52 1.34 1.82 1.82 0 0 1-1.36.54Zm1.88-13.28h5.36a5.86 5.86 0 0 0 2.93-.72 5.35 5.35 0 0 0 2-2 5.75 5.75 0 0 0 .72-2.9 6.28 6.28 0 0 0-.72-3 5.45 5.45 0 0 0-2-2.08 5.59 5.59 0 0 0-2.93-.76h-5.36ZM77.44 60.71a1.84 1.84 0 0 1-1.88-1.88v-24.5A1.8 1.8 0 0 1 76.1 33a1.86 1.86 0 0 1 1.34-.53H84a9.88 9.88 0 0 1 4.81 1.14A8.45 8.45 0 0 1 92 36.72a9 9 0 0 1 1.17 4.63 8 8 0 0 1-4.45 7.39A10.33 10.33 0 0 1 84 49.82h-4.68v9a1.85 1.85 0 0 1-.52 1.34 1.82 1.82 0 0 1-1.36.55Zm1.88-14.36H84a6.35 6.35 0 0 0 2.93-.64 4.82 4.82 0 0 0 2-1.77 4.75 4.75 0 0 0 .73-2.59 5.48 5.48 0 0 0-.73-2.82 5 5 0 0 0-2-1.92 6.12 6.12 0 0 0-2.93-.68h-4.68Zm13.14 14.36a1.93 1.93 0 0 1-.93-.22 1.75 1.75 0 0 1-.7-.68l-6.52-10.5 3.66-1 5.93 9.55a1.88 1.88 0 0 1 .18 2 1.67 1.67 0 0 1-1.62.85ZM100.31 60.71a1.82 1.82 0 0 1-1.31-.54 1.8 1.8 0 0 1-.55-1.34v-24.5A1.77 1.77 0 0 1 99 33a1.86 1.86 0 0 1 1.34-.53h16.35a1.89 1.89 0 0 1 1.34.49 1.72 1.72 0 0 1 .51 1.29 1.61 1.61 0 0 1-.51 1.23 1.92 1.92 0 0 1-1.34.47h-14.5v8.79h10.38a1.83 1.83 0 0 1 1.34.49 1.77 1.77 0 0 1 0 2.49 1.83 1.83 0 0 1-1.34.49h-10.38v9.05h14.47a1.92 1.92 0 0 1 1.34.47 1.58 1.58 0 0 1 .51 1.23 1.68 1.68 0 0 1-.51 1.28 1.84 1.84 0 0 1-1.34.49ZM133 60.71a13.11 13.11 0 0 1-4.31-.7 11.43 11.43 0 0 1-3.57-2 8 8 0 0 1-2.23-2.93 1.41 1.41 0 0 1 0-1.38 2 2 0 0 1 2.51-.62 2.2 2.2 0 0 1 .94 1 4.44 4.44 0 0 0 1.39 1.62 7.76 7.76 0 0 0 2.35 1.2 9.41 9.41 0 0 0 6-.07 5.47 5.47 0 0 0 2.32-1.54 3.68 3.68 0 0 0 .88-2.49 4.65 4.65 0 0 0-1.47-3.35 7.78 7.78 0 0 0-4.81-1.81 12.08 12.08 0 0 1-6.89-2.58 6.74 6.74 0 0 1-2.5-5.33 6.15 6.15 0 0 1 1.3-4 8.2 8.2 0 0 1 3.55-2.47 14.17 14.17 0 0 1 5-.85 10.71 10.71 0 0 1 3.76.6 9 9 0 0 1 2.81 1.66 11.12 11.12 0 0 1 2.09 2.51 2.26 2.26 0 0 1 .4 1.47 1.43 1.43 0 0 1-.69 1.07 1.61 1.61 0 0 1-1.45.18 2 2 0 0 1-1.16-.92 6.42 6.42 0 0 0-1.38-1.73 6.11 6.11 0 0 0-1.84-1.07 7.43 7.43 0 0 0-2.58-.41 8.49 8.49 0 0 0-4.37 1 3.34 3.34 0 0 0-1.77 3.1 4.05 4.05 0 0 0 .55 2 4.37 4.37 0 0 0 2 1.67 12.69 12.69 0 0 0 4.22 1 11.18 11.18 0 0 1 6.55 2.56 7.26 7.26 0 0 1 2.35 5.64 7 7 0 0 1-.83 3.5 7.77 7.77 0 0 1-2.22 2.49 9.92 9.92 0 0 1-3.18 1.5 13.74 13.74 0 0 1-3.72.48ZM157.29 60.71A13.11 13.11 0 0 1 153 60a11.43 11.43 0 0 1-3.57-2 7.85 7.85 0 0 1-2.22-2.93 1.41 1.41 0 0 1 0-1.38 2 2 0 0 1 2.51-.62 2.15 2.15 0 0 1 .94 1 4.44 4.44 0 0 0 1.34 1.66 7.76 7.76 0 0 0 2.35 1.2 9.41 9.41 0 0 0 6-.07 5.47 5.47 0 0 0 2.32-1.54 3.63 3.63 0 0 0 .88-2.49 4.65 4.65 0 0 0-1.47-3.35 7.78 7.78 0 0 0-4.82-1.84 12 12 0 0 1-6.88-2.58 6.72 6.72 0 0 1-2.51-5.33 6.15 6.15 0 0 1 1.3-4 8.26 8.26 0 0 1 3.55-2.47 14.21 14.21 0 0 1 5-.85 10.71 10.71 0 0 1 3.76.6 8.93 8.93 0 0 1 2.81 1.66 11.12 11.12 0 0 1 2.09 2.51 2.2 2.2 0 0 1 .4 1.47 1.43 1.43 0 0 1-.69 1.07 1.6 1.6 0 0 1-1.44.18 2 2 0 0 1-1.17-.92 6.42 6.42 0 0 0-1.38-1.73 6.17 6.17 0 0 0-1.9-1.11 7.47 7.47 0 0 0-2.58-.41 8.51 8.51 0 0 0-4.38 1 3.34 3.34 0 0 0-1.77 3.1 4.05 4.05 0 0 0 .55 2 4.37 4.37 0 0 0 2 1.67 12.75 12.75 0 0 0 4.22 1 11.18 11.18 0 0 1 6.55 2.56 7.26 7.26 0 0 1 2.35 5.64 7 7 0 0 1-.83 3.5 7.77 7.77 0 0 1-2.22 2.49 9.92 9.92 0 0 1-3.18 1.5 13.74 13.74 0 0 1-3.62.52Z" />
      </g>
    </g>
  </svg>
);
export default LogomarkJS;