import { Box } from "@mui/material";

export default function warrantyIcon() {
  return (
    <Box>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="8"
          width="40"
          height="32"
          rx="4"
          stroke="#3D405B"
          strokeWidth="2.5"
        />
        <circle
          cx="4"
          cy="4"
          r="4"
          transform="matrix(1 0 0 -1 20 28)"
          stroke="#3D405B"
          strokeWidth="2.5"
        />
        <circle
          cx="2"
          cy="2"
          r="2"
          transform="matrix(1 0 0 -1 34 26)"
          fill="#3D405B"
        />
        <circle
          cx="2"
          cy="2"
          r="2"
          transform="matrix(1 0 0 -1 10 26)"
          fill="#3D405B"
        />
      </svg>
    </Box>
  );
}
