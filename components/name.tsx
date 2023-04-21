type NameCardProps = {
    name: string;
  };
  
  export function NameCard({ name }: NameCardProps) {
    
    return (
        <h1 className='text-6xl	font-black uppercase bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent'>{name}</h1>
       );
  }
