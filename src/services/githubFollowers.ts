export const getGithubFollowers = async (
  username: string,
  avasize: number = 50
) => {
  const r = await fetch(`https://api.github.com/users/${username}/followers`)
  const result = await r.json()
  const data: userFollow[] = result.map(({ login, html_url }: userFollow) => {
    return {
      login,
      avatar_url: `https://github.com/${login}.png?&size=${avasize}`,
      html_url,
    }
  })
  return data
}

export interface userFollow {
  login: string
  avatar_url: string
  html_url: string
}
