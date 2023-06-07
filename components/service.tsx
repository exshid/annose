//@ts-nocheck 
import { blogConfig } from '@/config';
  
  export function Service() {
    
    return (
        <div id="services" className="bg-darkerlight py-5 dark:bg-darkish text-darkish dark:text-white flex justify-center h-auto w-full">
        <div className="w-full md:w-[97%] xl:w-8/12 flex flex-col items-center">
         <h3 className={`heading-font text-2xl md:text-5xl p-5 font-black uppercase bg-clip-text text-transparent ${blogConfig.firstColor}`}>
        Editorial Services</h3>
<ul className="jakarta-title justify-items-center pt-5 pb-10 grid grid-cols-1 grid-rows-auto lg:grid-cols-3 lg:grid-rows-auto gap-8">
{blogConfig.services.map((book, index) => (
  <li key={index} className="s-boxshadow dark:shadow-none transition hover:-translate-y-[5px] p-5 h-80 w-4/5 md:w-3/5 lg:w-80 rounded-lg bg-white dark:bg-lightdarkish">
    <h4 className="p-5 font-bold text-xl">{book.title}</h4>
    <p className="p-5">{book.description}</p>
  </li>
))}
</ul>
    
 </div>
 </div>
 
);
  }
