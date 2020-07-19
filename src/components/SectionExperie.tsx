import { Flex, Heading, Box } from "@chakra-ui/core"
import { LanguageStat } from "./LanguageStats"

export const SectionExperience: React.FC = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      minH="70vh"
      p={10}
      bg={"gray.50"}
      w="100%"
    >
      <Heading py={5}>Experience</Heading>
      <Flex direction={["column", "row"]} p={5} w="100%">
        <Box w={["100%", "50%"]}>Under Construction</Box>
        <Box w={["100%", "50%"]}>
          <LanguageStat />
        </Box>
      </Flex>
      *All data base on Github Profile
    </Flex>
  )
}
