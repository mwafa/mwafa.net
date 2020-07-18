import { Flex, Image, Heading } from "@chakra-ui/core"
import { SITE } from "../variable/site"

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
      <Image borderRadius="50%" mb={5} size="200px" src={SITE.profile.avatar} />
      <Heading textAlign="center">{SITE.profile.name}</Heading>
    </Flex>
  )
}
