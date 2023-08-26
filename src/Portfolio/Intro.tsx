import styled from "@emotion/styled"

import { Typer } from "../components"
import { Animation } from "./Animation"

const TyperContainer = styled.div`
  width: 600px;
  font-size: 60px;
  ${({ theme }) => theme.breakpoints.small} {
    width: auto;
    font-size: 2.5rem;
    margin: 0 auto;
  }
  margin: 0 auto;
`

export const Intro = () => (
  <>
    <Animation />
    <TyperContainer>
      <Typer
        text={`Hello, I'm Matheus \n`}
        textCarousel={[
          "I love Open Source",
          "Linux's entusiast",
        ]}
        timing={{ typeStrokes: 100, deleteStrokes: 50, waiting: 2000 }}
      />
    </TyperContainer>
  </>
)
