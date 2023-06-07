import Link from 'next/link';
import { useRouter } from 'next/router';
import { blogConfig } from '@/config';

type Props = {
    children: ReactNode;
    href:string
  };
  
    
  const NavLink: React.FC<Props> = ({ href, children }) => {
  
  const router = useRouter();
activeClass= blogConfig.firstColor
  // Check if the current route matches the href prop of the Link component
  const isActive = router.pathname === href;

  // Set the active class based on the value of the isActive variable
  const className = isActive ? {activeClass} : '';

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}

export default NavLink;
