import { Flex, Image, Heading } from "@chakra-ui/core"

export const Header: React.FC = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      p={5}
      bg="cyan.50"
    >
      <Image
        borderRadius="50%"
        mb={5}
        size="200px"
        src="//github.com/mwafa.png"
      />
      <Heading textAlign="center">Muhammad Wafa</Heading>
    </Flex>
  )
}
