import { Flex, Image, Heading, Box } from "@chakra-ui/core"
import { SITE } from "../variable/site"
import Particles from "react-particles-js"
import { PARTICLES_CONFIG } from "../variable/particles"

export const Header: React.FC = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      p={5}
      bg="cyan.300"
    >
      <Box w="100%" h="100vh" zIndex={0} pos="absolute" top={0}>
        <Particles params={PARTICLES_CONFIG} height="100vh" />
      </Box>
      <Flex alignItems="center" direction="column" zIndex={2}>
        <Image
          shadow="8px 5px 20px gray"
          rounded="full"
          mb={5}
          maxW="200px"
          src={SITE.profile.avatar}
        />
        <Heading py={3} textAlign="center">
          {SITE.profile.name}
        </Heading>
        <Heading size="md" fontWeight="normal">
          {SITE.profile.desc}
        </Heading>
      </Flex>
    </Flex>
  )
}
