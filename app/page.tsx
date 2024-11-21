"use client";

import { LandingPageComponent } from "../components/landing-page"; // Initial version of the landing page without Google Sheet API integration
// import LandingPageComponent from '../components/landing-page-component'

// Google sheet API related
// import dynamic from 'next/dynamic'

/* Google sheet API related
const LandingPageComponentWithNoSSR = dynamic(
  () => import('../components/landing-page'),
  { ssr: false }
)

export default function LandingPage() {
  return <LandingPageComponentWithNoSSR />
}
  */

// Initial version of the landing page without Google Sheet API integration
export default function Home() {
  return (
    <div>
      <LandingPageComponent />
    </div>
  );
}