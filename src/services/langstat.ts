export const userLangStat = async (username: string) => {
  const r = await fetch(`https://api.github.com/users/${username}/repos`)
  const result = await r.json()
  const datas: LangCount[] = []
  for (let i of result) {
    const { language } = i
    const idx = datas.findIndex((x) => x.name === language)
    if (idx >= 0) {
      const temp = { ...datas[idx] }
      temp.count += 1
      datas[idx] = temp
    } else {
      datas.push({
        name: language || "Others",
        count: 1,
      })
    }
  }
  return datas
}

export interface LangCount {
  name: string
  count: number
}
