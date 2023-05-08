type ServiceProps = {
    photo: string;
  };
  
  export function Service() {
    
    return (
        <div className="bg-darkerlight dark:bg-darkish text-darkish dark:text-white flex justify-center h-screen w-full">
        <div className="w-8/12 flex flex-col">
     
    <h3 className="font-inter text-5xl font-black uppercase bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
        Service for Authors</h3>
<ul className="grid grid-cols-3 grid-rows-3 gap-5">
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500">1</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-3 row-start-3">2</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-3 row-start-2">3</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-3 row-start-1">4</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-2 row-start-1">5</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-2 row-start-2">6</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-2 row-start-3">7</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-1 row-start-3">8</li>
    <li className="bg-gradient-to-r h-full from-cyan-400 to-cyan-500 col-start-1 row-start-2">9</li>
</ul>
    
 </div>
 </div>
 
);
  }
