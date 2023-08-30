import {usePathname} from 'next/navigation'
import Link, {LinkProps} from 'next/link';


type ActiveLinkProps = {
    children: React.ReactNode
  } & LinkProps;

  const ActiveLink = ({ href , children, ...rest}: ActiveLinkProps) => {
    const pathname = usePathname();

    const isCurrentPath = pathname === href;
    return <Link href={href}>{children}</Link>
  }