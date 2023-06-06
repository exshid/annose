import { blogConfig } from '@/config';
import React, { FormEvent } from 'react';

 
  
  export const Contact = () => {
    const { footerLinks } = blogConfig;
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); 
        console.log(event)
      }
      
    return (
    <div id="contact">
    <section className="min-h-screen flex flex-col lg:flex-row items-stretch text-white ">
        <div className="lg:flex w-full p-8 lg:w-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400 relative items-center">
            <div className="absolute bg-darkish opacity-60 inset-0 z-0"></div>
            <div className="w-full px-2 xl:px-24 z-10">
                <h1 data-aos="fade-right" data-aos-once="true" className="text-5xl font-bold text-left tracking-wide">Get In Touch</h1>

                <p data-aos="fade-right" data-aos-once="true" className="text-xl lg:text-3xl my-4">Email me at<br/>{footerLinks?.email && footerLinks.email}</p>
            </div>

        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 px-0 z-0 bg-white dark:bg-darkish text-darkish dark:text-white">
            <div className="w-full py-6 z-20">
         <p  data-aos="fade-up" data-aos-once="true" className="text-3xl my-4 text-darkish dark:text-white">
              CONTACT FORM
                </p>
                <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-once="true" action="" className="sm:w-2/3 lg:w-full w-full px-4 lg:px-4 xl:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input type="email" name="email" id="email" placeholder="Email" className="bg-white dark:bg-darkish block w-full p-4 border dark:border-white text-lg rounded-sm"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input className="bg-white block w-full p-4 text-lg border dark:border-white rounded-sm dark:bg-darkish" type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="pb-2 pt-4">
                        <textarea className="contact-placeholder bg-white block w-full p-4 text-lg border min-h-[151px] dark:border-white rounded-sm dark:bg-darkish" name="message" id="message" placeholder="Your message..." />
                    </div>
                    <div className="relative pb-2 pt-4">
                        <button className="uppercase block w-full p-4 text-lg text-white rounded bg-gradient-to-r from-emerald-400 to-cyan-400 focus:outline-none transition hover:-translate-y-[4px]">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>


);
  }
