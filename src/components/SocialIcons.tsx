import { Flex, PseudoBoxProps, PseudoBox } from "@chakra-ui/core"
import { FaTwitter, FaEnvelope, FaGithubAlt } from "react-icons/fa"
import { SITE } from "../variable/site"

export const SocialIcons: React.FC = () => {
  const hoverStyle: PseudoBoxProps = {
    transform: "scale(1.2)",
  }

  return (
    <Flex mt={10}>
      {SITE.profile.github && (
        <a href={`https://github.com/${SITE.profile.github}`}>
          <PseudoBox
            bg="gray.700"
            transition="0.2s"
            p={3}
            mx={1}
            _hover={hoverStyle}
            rounded="full"
          >
            <FaGithubAlt size="30px" color="white" />
          </PseudoBox>
        </a>
      )}
      {SITE.profile.twitter && (
        <a href={`//twitter.com/${SITE.profile.twitter}`}>
          <PseudoBox
            bg="gray.700"
            transition="0.2s"
            p={3}
            mx={1}
            _hover={hoverStyle}
            rounded="full"
          >
            <FaTwitter size="30px" color="white" />
          </PseudoBox>
        </a>
      )}
      {SITE.profile.email && (
        <a href={`mailto:${SITE.profile.email}`}>
          <PseudoBox
            bg="gray.700"
            transition="0.2s"
            p={3}
            mx={1}
            _hover={hoverStyle}
            rounded="full"
          >
            <FaEnvelope size="30px" color="white" />
          </PseudoBox>
        </a>
      )}
    </Flex>
  )
}
