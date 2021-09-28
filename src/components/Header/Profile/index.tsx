import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Flávio Ferreira</Text>
        <Text color="gray.300" fontSize="small">
          flavioferreiraz@protonmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Henrique Tavares"
        src="https://github.com/ferreirazdev.png"
      />
    </Flex>
  );
}