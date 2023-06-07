'use client'
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { blogConfig } from '@/config';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowBanner(false);
      setAcceptedCookies(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', true);
    setShowBanner(false);
    setAcceptedCookies(true);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={`cookie-banner w-full fixed bottom-0 ${blogConfig.firstColor}`}>
      <p>We use cookies to improve your experience on our website. <Link className="text-gray" href="/policies">Learn more.</Link></p>
      <button onClick={handleAcceptCookies}>Accept</button>
    </div>
  );
};

export default CookieBanner;