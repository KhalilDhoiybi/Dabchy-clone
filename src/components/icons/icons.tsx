import {
  Facebook,
  Instagram,
  Mail,
  Moon,
  Phone,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
  apple: (props: LucideProps) => (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.773 22.773"
      {...props}
    >
      <path
        d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
      />
      <path
        d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
      />
    </svg>
  ),
  playstore: (props: LucideProps) => (
    <svg
      viewBox="-29.45 0 466.9 466.9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <linearGradient
        gradientUnits="userSpaceOnUse"
        y1="112.094"
        x2="261.746"
        y2="112.094"
      >
        <stop offset="0" stop-color="#63be6b" />
        <stop offset=".506" stop-color="#5bbc6a" />
        <stop offset="1" stop-color="#4ab96a" />
      </linearGradient>
      <path d="M261.7 142.3L15 1.3C11.9-.5 8-.4 5 1.4c-3.1 1.8-5 5-5 8.6 0 0 .1 13 .2 34.4l179.7 179.7 81.8-81.8z" />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1=".152"
        y1="223.393"
        x2="179.896"
        y2="223.393"
      >
        <stop offset="0" stop-color="#3ec6f2" />
        <stop offset="1" stop-color="#45afe3" />
      </linearGradient>
      <path d="M.2 44.4C.5 121.6 1.4 309 1.8 402.3L180 224.1.2 44.4z" />
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="179.896"
        y1="229.464"
        x2="407.976"
        y2="229.464"
      >
        <stop offset="0" stop-color="#faa51a" />
        <stop offset=".387" stop-color="#fab716" />
        <stop offset=".741" stop-color="#fac412" />
        <stop offset="1" stop-color="#fac80f" />
      </linearGradient>
      <path d="M402.9 223l-141.2-80.7-81.9 81.8 92.4 92.4L403 240.3c3.1-1.8 5-5.1 5-8.6 0-3.6-2-6.9-5.1-8.7z" />
      <linearGradient
        id="SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1="1.744"
        y1="345.521"
        x2="272.296"
        y2="345.521"
      >
        <stop offset="0" stop-color="#ec3b50" />
        <stop offset="1" stop-color="#e7515b" />
      </linearGradient>
      <path d="M1.7 402.3c.2 33.3.3 54.6.3 54.6 0 3.6 1.9 6.9 5 8.6 3.1 1.8 6.9 1.8 10 0l255.3-148.9-92.4-92.4L1.7 402.3z" />
    </svg>
  ),
}
