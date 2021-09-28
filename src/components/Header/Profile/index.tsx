import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { IProfileProps } from './@interfaces';

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Flávio Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            flavioferreiraz@protonmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Flávio Ferreira"
        src="https://github.com/ferreirazdev.png"
      />
    </Flex>
  );
}