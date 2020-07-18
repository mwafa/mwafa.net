import { Header } from "../components/Header"
import { Flex } from "@chakra-ui/core"

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
    </Flex>
  )
}
