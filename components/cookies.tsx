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
    <div className={`cookie-banner p-3 z-[666] text-white w-full fixed bottom-0 ${blogConfig.firstColor}`}>
      <p className="inline-block">We use cookies. <Link className="text-gray" href="/policies">Learn more.</Link></p>
      <button label="accept" className="ml-1 md:ml-3" onClick={handleAcceptCookies}>Accept</button>
    </div>
  );
};

export default CookieBanner;