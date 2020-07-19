import { Header } from "../components/Header"
import { Flex } from "@chakra-ui/core"
import { SectionExperience } from "../components/SectionExperience"

export default () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="100%"
      minH="100vh"
      bg="cyan.50"
    >
      <Header />
      <SectionExperience />
    </Flex>
  )
}
