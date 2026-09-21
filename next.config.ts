import type { NextConfig } from "next";

// Redirects for the old WordPress site (moved off Sept 2026) so links from
// Google, LinkedIn, and old emails keep working. First match wins, so the
// specific routes come before the broad catch-alls.
const permanent = true;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Recent posts that exist on the new site under a slightly different slug
      { source: "/a-full-house-for-the-bitcoin-etf-presentation", destination: "/news/bitcoin-etf-presentation", permanent },
      { source: "/another-successful-crypto-spring-in-the-books", destination: "/news/another-successful-crypto-spring", permanent },
      { source: "/blockchain-governments-best-moments", destination: "/news/blockchain-government-best-moments", permanent },
      { source: "/bookmarks-for-your-life", destination: "/news/bookmarks-for-your-life", permanent },
      { source: "/charting-the-course-2024", destination: "/news/charting-the-course-for-2024", permanent },
      { source: "/charting-the-course-for-2025", destination: "/news/charting-the-course-for-2025", permanent },
      { source: "/mnblockchain-went-to-d-c", destination: "/news/mnblockchain-went-to-dc", permanent },
      { source: "/pitch-night-evergreen-miner", destination: "/news/pitch-night-2023-evergreen-miner", permanent },
      { source: "/2023/09/27/and-the-winner-is", destination: "/news/pitch-night-2023-evergreen-miner", permanent },
      { source: "/2023/10/25/what-a-day-thank-yous-for-mondays-web3-law-conference", destination: "/news/web3-law-conference-wrap-up", permanent },

      // Core pages
      { source: "/mission", destination: "/about", permanent },
      { source: "/mission_vision", destination: "/about", permanent },
      { source: "/our-team", destination: "/about", permanent },
      { source: "/network", destination: "/about", permanent },
      { source: "/partners", destination: "/sponsors", permanent },
      { source: "/contact-us", destination: "/contact", permanent },
      { source: "/get-involved-with-minnesota-blockchain", destination: "/get-involved", permanent },
      { source: "/join_us", destination: "/get-involved", permanent },
      { source: "/membership-confirmation", destination: "/membership", permanent },
      { source: "/2025-member-nft", destination: "/membership", permanent },
      { source: "/donation", destination: "/membership", permanent },
      { source: "/donation-received", destination: "/membership", permanent },
      { source: "/donation-failed", destination: "/membership", permanent },
      { source: "/donation-elements", destination: "/membership", permanent },
      { source: "/donations/:path*", destination: "/membership", permanent },
      { source: "/donor-dashboard", destination: "/membership", permanent },
      { source: "/privacy-policy", destination: "/privacy", permanent },
      { source: "/privacy-policy-2", destination: "/privacy", permanent },

      // Events
      { source: "/event/:path*", destination: "/events", permanent },
      // Specific slug only: a broad /events/:path+ rule would also catch image
      // files served from /public/events/.
      { source: "/events/november-18-election-2024-a-look-back-a-look-ahead", destination: "/events", permanent },
      { source: "/events-2", destination: "/events", permanent },
      { source: "/events-filter", destination: "/events", permanent },
      { source: "/event-calendar", destination: "/events", permanent },
      { source: "/local_event_calendar", destination: "/events", permanent },
      { source: "/mnblockchain_calendar", destination: "/events", permanent },
      { source: "/monthly-spotlight-meetup", destination: "/events", permanent },
      { source: "/crypto-spring", destination: "/events", permanent },
      { source: "/event_tag/:path*", destination: "/events", permanent },

      // News: archives, categories, tags, authors, and the ~60 older dated posts
      { source: "/news-articles/:path*", destination: "/news", permanent },
      { source: "/blockchain-news", destination: "/news", permanent },
      { source: "/mnblockchain-perspective", destination: "/news", permanent },
      { source: "/category/:path*", destination: "/news", permanent },
      { source: "/tag/:path*", destination: "/news", permanent },
      { source: "/author/:path*", destination: "/news", permanent },
      { source: "/feed", destination: "/news", permanent },
      { source: "/:year(20\\d{2})/:month(\\d{2})/:day(\\d{2})/:slug", destination: "/news", permanent },
      { source: "/:year(20\\d{2})/:month(\\d{2})", destination: "/news", permanent },
      { source: "/:year(20\\d{2})", destination: "/news", permanent },

      // Pages not rebuilt yet: send to the homepage until they exist
      { source: "/education", destination: "/", permanent: false },
      { source: "/podcast", destination: "/", permanent: false },
      { source: "/faq", destination: "/", permanent: false },
      { source: "/resources", destination: "/", permanent: false },
      { source: "/directory", destination: "/", permanent: false },
      { source: "/activities", destination: "/", permanent: false },
      { source: "/blockchain-101", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
