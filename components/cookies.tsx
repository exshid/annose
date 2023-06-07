//@ts-nocheck 
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
    <div className={`cookie-banner p-3 lg:px-6 z-[666] flex justify-between text-white w-full fixed bottom-0 ${blogConfig.firstColor}`}>
      <p className="inline-block">We use cookies. <Link href="/policies">Learn more.</Link></p>
      <button label="accept" onClick={handleAcceptCookies}>Accept</button>
    </div>
  );
};

export default CookieBanner;