
  export function Contact() {
    
    return (
    <div>
    <section className="min-h-screen flex flex-col md:flex-row items-stretch text-white ">
        <div className="md:flex w-full md:w-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400 relative items-center">
            <div className="absolute bg-darkish opacity-60 inset-0 z-0"></div>
            <div className="w-full px-2 md:px-24 z-10">
                <h1 data-aos="fade-right" data-aos-once="true" className="text-5xl font-bold text-left tracking-wide">Get In Touch</h1>
                <p data-aos="fade-right" data-aos-once="true" className="text-3xl my-4">Email me at<br/>email@example.com</p>
            </div>

        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-white dark:bg-darkish text-darkish dark:text-white">
            <div className="w-full py-6 z-20">
         <p  data-aos="fade-up" data-aos-once="true" className="text-3xl my-4 text-darkish dark:text-white">
              SIGN UP FOR MY NEWSLETTER
                </p>
                <form data-aos="fade-up" data-aos-once="true" action="" className="sm:w-2/3 w-full px-4 md:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input type="email" name="email" id="email" placeholder="Email" className="dark:bg-darkish block w-full p-4 border dark:border-white text-lg rounded-sm"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input className="block w-full p-4 text-lg border dark:border-white rounded-sm dark:bg-darkish" type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="px-4 pb-2 pt-4">
                        <button className="uppercase block w-full p-4 text-lg text-white rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 focus:outline-none transition hover:-translate-y-[4px]">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>


);
  }
