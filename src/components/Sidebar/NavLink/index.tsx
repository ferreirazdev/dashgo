import { Icon, Link, Text } from '@chakra-ui/react';

import { INavLinkProps } from './@interfaces';

export default function NavLink({
  href,
  icon,
  children,
  ...rest
}: INavLinkProps): JSX.Element {
  return (
    <Link href={href} display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}