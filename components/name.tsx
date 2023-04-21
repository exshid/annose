type NameCardProps = {
    name: string;
  };
  
  export function NameCard({ name }: NameCardProps) {
    
    return (
        <h1 className='text-6xl	font-black uppercase bg-gradient-to-r from-teal-500 via-teal-600 to-indigo-600 bg-clip-text text-transparent'>{name}</h1>
       );
  }
