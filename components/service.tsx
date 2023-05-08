type ServiceProps = {
    photo: string;
  };
  
  export function Service() {
    
    return (
        <div className="bg-darkerlight py-5 dark:bg-darkish text-darkish dark:text-white flex justify-center h-auto w-full">
        <div className="w-8/12 flex flex-col items-center">
     
    <h3 className="font-inter text-5xl p-5 font-black uppercase bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
        Service for Authors</h3>
<ul className="pt-5 pb-10 grid grid-cols-3 grid-rows-3 gap-8">
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish">1</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-3 row-start-3">2</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-3 row-start-2">3</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-3 row-start-1">4</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-2 row-start-1">5</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-2 row-start-2">6</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-2 row-start-3">7</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-1 row-start-3">8</li>
    <li className="s-boxshadow h-80 w-80 bg-white dark:bg-lightdarkish col-start-1 row-start-2">9</li>
</ul>
    
 </div>
 </div>
 
);
  }
