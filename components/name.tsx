type NameCardProps = {
    name: string;
  };
  
  export function NameCard({ name }: NameCardProps) {
    
    return (
        <h1 className='uppercase bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 bg-clip-text text-transparent'>{name}</h1>
       );
  }
  