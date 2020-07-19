import {
  Flex,
  Image,
  Heading,
  Box,
  IconButton,
  Skeleton,
} from "@chakra-ui/core"
import { SITE } from "../variable/site"
import Particles from "react-particles-js"
import { PARTICLES_CONFIG } from "../variable/particles"
import { SocialIcons } from "./SocialIcons"
import { useEffect, useState } from "react"

export const Header: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

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
      <Flex
        mt={["20px", "15vh"]}
        alignItems="center"
        direction="column"
        zIndex={2}
      >
        <Skeleton isLoaded={loaded} maxW="200px" maxH="200px" rounded="full">
          <Image
            shadow="8px 5px 20px gray"
            rounded="full"
            mb={5}
            maxW="200px"
            src={SITE.profile.avatar}
          />
        </Skeleton>
        <Heading py={3} textAlign="center">
          {SITE.profile.name}
        </Heading>
        <Heading size="md" fontWeight="normal">
          {SITE.profile.desc}
        </Heading>
        <SocialIcons />
      </Flex>
      <IconButton
        size="lg"
        mt="auto"
        rounded="full"
        variantColor="teal"
        aria-label="more"
        icon="chevron-down"
        shadow="3px 3px 5px #555"
        _hover={{
          transform: "translate(0px, -5px) scale(1.2)",
        }}
      />
    </Flex>
  )
}
