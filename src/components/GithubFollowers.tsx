import { Flex, Image, PseudoBox, Tooltip, Box, Heading } from "@chakra-ui/core"
import { SITE } from "../variable/site"
import { useState, useEffect } from "react"
import { getGithubFollowers, userFollow } from "../services/githubFollowers"

export const GithubFollowers: React.FC = () => {
  const [followers, setFollowers] = useState<userFollow[]>()

  useEffect(() => {
    const getData = async () => {
      const followers = await getGithubFollowers(SITE.profile.github)
      setFollowers(followers)
    }
    getData()
  }, [])

  return (
    <Box pb={3}>
      <Heading size="md" pb={4}>
        Github Followers ({followers?.length})
      </Heading>
      <Flex wrap="wrap" maxW="70%">
        {followers?.slice(0, 20).map((user) => (
          <Tooltip
            key={user.login}
            aria-label={user.login}
            label={user.login}
            placement="bottom"
          >
            <PseudoBox
              mr={"-15px"}
              _hover={{
                transform: "scale(1.2)",
                transition: "0.2s",
              }}
            >
              <Image
                alt=""
                w="50px"
                h="50px"
                rounded="full"
                src={user.avatar_url}
                border="solid 3px"
                borderColor={"gray.50"}
              />
            </PseudoBox>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  )
}
