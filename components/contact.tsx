//@ts-nocheck 
'use client'
import { blogConfig } from '@/config';
import React, {useState, useEffect, FormEvent } from 'react';
import PageWrapper from '@/components/wrapper';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push } from "firebase/database";

  export const Contact = () => {
    const { footerLinks } = blogConfig;
    
    const [messageReceived, setMessageReceived] = useState(false); 
    const [messageFailed, setMessageFailed] = useState(false); 


const firebaseConfig = {
  apiKey: "AIzaSyDuce5ezJHGy_qwPabkxXqMBOze5BBn6O4",
  authDomain: "porto-cb860.firebaseapp.com",
  projectId: "porto-cb860",
  storageBucket: "porto-cb860.appspot.com",
  messagingSenderId: "722646135047",
  appId: "1:722646135047:web:ede72e540cba09a72c55a2",
  measurementId: "G-RLJ2QEEXCX"
};

const app = initializeApp(firebaseConfig);

function handleSubmit(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const db = getDatabase();
  const newPostRef = push(ref(db, 'posts')); // Generate a new unique key
  set(newPostRef, {
    name: data.name,
    message: data.message,
    email: data.email,
  }).then(() => {
    setMessageReceived(true);
  }).catch((error) => {
    setMessageFailed(true);

  });
}
    
      useEffect(() => {
        const form = document.querySelector('.contact-form');
        if (form) {
          form.addEventListener('submit', handleSubmit);
        }
        return () => {
          if (form) {
            form.removeEventListener('submit', handleSubmit);
          }
        };
      }, []); 
      
      
    return (
      <PageWrapper>
    <div id="contact">
    <section className="min-h-screen flex flex-col lg:flex-row items-stretch text-white ">
        <div className="lg:flex w-full p-8 lg:w-1/2 bg-gradient-to-r from-rose-600 to-rose-900 relative items-center">
            <div className="w-full px-2 xl:px-24 z-10">
                <h1 className="text-5xl font-bold text-left tracking-wide">Get In Touch</h1>

                <p className="text-xl lg:text-3xl my-4">Email me at<br/>{footerLinks?.email && footerLinks.email}</p>
            </div>

        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 px-0 z-0 bg-white dark:bg-darkish text-darkish dark:text-white">
            <div className="w-full py-6 z-20">
         <p  className="text-3xl my-4 text-darkish dark:text-white">
              CONTACT FORM
                </p>
                <form action="" className="contact-form sm:w-2/3 lg:w-full w-full px-4 lg:px-4 xl:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input required type="email" name="email" id="email" placeholder="Email" className="bg-white dark:bg-darkish block w-full p-4 border dark:border-white text-lg rounded-sm"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input required className="bg-white block w-full p-4 text-lg border dark:border-white rounded-sm dark:bg-darkish" type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="pb-2 pt-4">
                        <textarea required className="contact-placeholder bg-white block w-full p-4 text-lg border min-h-[151px] dark:border-white rounded-sm dark:bg-darkish" name="message" id="message" placeholder="Your message..." />
                    </div>
                    <div className="relative pb-2 pt-4">
                        <button className=
                        {`uppercase block w-full p-4 text-lg text-white rounded focus:outline-none transition hover:-translate-y-[4px] ${blogConfig.firstColor}`}>Send</button>
                    </div>
                    <>
                    <p className="text-xs xs:text-sm text-[gray]">By submitting this form you agree to <Link href="policies">
  <span> our privacy policy</span>
     </Link>
</p>
                    {messageReceived && (
        <p className="py-5 text-green-600">Message received!</p>)}
        {messageFailed && (
        <p className="py-5 text-red-600">Something went wrong. Try again.</p>
        
        )}
        </>

                </form>
            </div>
        </div>
    </section>
</div>

</PageWrapper>
);
  }
