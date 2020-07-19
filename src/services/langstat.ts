export const userLangStat = async (username: string) => {
  const r = await fetch(`https://api.github.com/users/${username}/repos`)
  const result = await r.json()
  const datas: LangCount[] = []
  let totalRow = 0
  for (let i of result) {
    const rr = await fetch(i.languages_url)
    const languages = await rr.json()
    for (let lang of Object.keys(languages)) {
      const idx = datas.findIndex((x) => x.name === lang)
      totalRow += languages[lang]
      if (idx >= 0) {
        const temp = { ...datas[idx] }
        temp.count += languages[lang]
        datas[idx] = temp
      } else {
        datas.push({
          name: lang,
          count: languages[lang],
        })
      }
    }
  }
  const data = datas.map((lang) => {
    return {
      ...lang,
      count: Math.round((10000 * lang.count) / totalRow) / 100,
    }
  })
  data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  return data
}

export interface LangCount {
  name: string
  count: number
}
