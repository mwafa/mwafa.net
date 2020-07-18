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
      <Image
        rounded="full"
        mb={5}
        maxW="200px"
        p={3}
        src={SITE.profile.avatar}
      />
      <Heading py={3} textAlign="center">
        {SITE.profile.name}
      </Heading>
      <Heading size="md" fontWeight="normal">
        {SITE.profile.desc}
      </Heading>
    </Flex>
  )
}
