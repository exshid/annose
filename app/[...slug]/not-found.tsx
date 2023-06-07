//@ts-nocheck 

import Link from 'next/link';

import { Home, XCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <XCircle className="h-24 w-24 text-slate-700 dark:text-rose-100" />
      <h2 className="text-3xl font-bold text-slate-700 dark:text-rose-50">
        Page not found
      </h2>
      <Link href="/">
        <button label="home"
     className="uppercase block transition w-full p-4 text-lg text-white rounded bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none">Home Page</button>
     </Link>
                    
    </div>
  );
}
