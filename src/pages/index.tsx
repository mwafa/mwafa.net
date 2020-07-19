import { Header } from "../components/Header"
import { Flex } from "@chakra-ui/core"
import { useEffect, useState } from "react"
import { userLangStat, LangCount } from "../services/langstat"
import { SITE } from "../variable/site"

export default () => {
  const [data, setData] = useState<LangCount[]>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await userLangStat(SITE.profile.github)
      setData(data)
    }
    fetchData()
  }, [])
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
