import { Box, Heading, Skeleton } from "@chakra-ui/core"
import { HorizontalBar } from "react-chartjs-2"
import { useState, useEffect } from "react"
import { userLangStat, LangCount } from "../services/langstat"
import { SITE } from "../variable/site"

export const LanguageStat: React.FC = () => {
  const [data, setData] = useState<LangCount[]>()
  const [loaaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await userLangStat(SITE.profile.github)
      setData(data)
      setLoaded(true)
    }
    fetchData()
  }, [])
  return (
    <Box pr={10}>
      <Heading size="md" mb={5}>
        Programming Languages
      </Heading>
      <Skeleton minH="50vh" isLoaded={loaaded}>
        <Box minH={"50vh"}>
          <HorizontalBar
            data={{
              labels: data?.map((i) => i.name),
              datasets: [
                {
                  borderWidth: 1,
                  fill: true,
                  backgroundColor: "teal",
                  data: data?.map((i) => i.count),
                },
              ],
            }}
            options={chartOptions}
          />
        </Box>
      </Skeleton>
    </Box>
  )
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    arc: {
      borderColor: "#d6d6d6",
    },
  },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
          color: "rgba(235, 235, 235, 1)",
        },
        ticks: {},
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
          color: "rgba(235, 235, 235, 1)",
        },
        ticks: {},
      },
    ],
  },
}
