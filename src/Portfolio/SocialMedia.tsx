import { useTheme } from "@emotion/react"
import {
  faGithub,
  faSteam,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

import { Card, CardGroup } from "../components"

export const SocialMedia = () => {
  const { color } = useTheme()
  return (
    <CardGroup>
      <Card
      url={"https://github.com/matheus-aguiar-dev"}
        icon={faGithub}
        color={color.dark}
      >
      MatheusDev
      </Card>
      <Card
        url={"https://www.linkedin.com/in/matheus-aguiar-dev/"}
        icon={faLinkedin}
        color={color.purple}
      >
	MatheusDev
      </Card>
      <Card
        url={"https://steamcommunity.com/id/Maah69/"}
        icon={faSteam}
        color={color.blue}
      >
        Kriza
      </Card>
    </CardGroup>
  )
}
