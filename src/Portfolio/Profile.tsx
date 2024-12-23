import { css } from "@emotion/react"
import styled from "@emotion/styled"

import avatar from "../data/media/avatar.webp"

const gap = 40
const width = 800
const height = width / 1.618
const textWidth = height - gap * 2
const picWidth = width - textWidth - gap * 3

const StyledProfile = styled.div`
  ${({ theme: { color, breakpoints, shadow } }) => css`
    box-sizing: border-box;
    width: ${width}px;
    min-height: ${height}px;

    display: flex;

    background-color: ${color.dark};
    box-shadow: ${shadow.regular};
    padding: ${gap}px;

    display: grid;
    grid-template-columns: ${picWidth}px ${textWidth}px;
    grid-gap: ${gap}px;

    ${breakpoints.tablet} {
      grid-template-columns: auto;
      width: 100%;
    }
  `}
`

const LeftColumn = styled.div`
  ${({ theme: { breakpoints } }) => css`
    ${breakpoints.tablet} {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: ${gap}px;
      > div {
        margin: auto 0;
      }
    }
    @media only screen and (max-width: 850px) {
      grid-template-columns: auto;
      > img {
        justify-self: center;
      }
    }
  `}
`

const Picture = styled.img`
  ${({ theme: { color, shadow, breakpoints } }) => css`
    width: ${picWidth}px;
    height: ${picWidth}px;
    border: 4px solid ${color.light};
    padding: 20px;
    object-fit: contain;
    box-sizing: border-box;
    box-shadow: ${shadow.regular};
    ${breakpoints.small} {
      width: 100%;
      height: unset;
    }
  `}
`

const Skills = styled.div`
  ${({ theme: { space } }) => css`
    margin-top: ${gap}px;
    font-weight: 400;
    line-height: ${space.md};
  `}
`

const Text = styled.div`
  ${({ theme: { color, space, breakpoints } }) => css`
    width: ${textWidth}px;
    color: ${color.light};
    font-size: ${space.md};
    text-align: center;
    > p {
      margin: 0;
    }
    > h2 {
      font-size: ${space.lg};
      margin-top: 0;
      margin-bottom: ${space.sm};
    }

    ${breakpoints.tablet} {
      width: 100%;
    }
    ${breakpoints.small} {
      font-size: ${space.sm};
      > h2 {
        font-size: ${space.md};
      }
    }
  `}
`

const K = styled.span`
  ${({ theme: { color } }) =>
    css`
      color: ${color.red !== color.dark ? color.red : color.light};
    `};
`

export const Profile = () => (
  <StyledProfile>
    <LeftColumn>
      <Picture src={avatar} />
      <Skills>
        Brazilian | Portuguese and English
        <br />
        <K>Skills</K>
        <br />
        <K>Mobile</K>: Android (Kotlin, Java)
        <br />
        <K>Backend</K>: Python, Java, PHP
        <br />
        <K>Web</K>: LEMP stack, JavaScript (Node.js)
        <br />
        <K>Automation</K>: Python (Scripting, Testing), Bash
        <br />
        <K>DevOps</K>: Git, Perforce, CI/CD pipelines
        <br />
        <K>Open Source</K>: Contributions to Linux (Debian packages, GNOME)
        <br />
        <K>Data</K>: SQL, Machine Learning (Python, OpenCV, MediaPipe)
      </Skills>
    </LeftColumn>
    <Text>
      I am a passionate <K>Android developer</K> and <K>software engineer</K> with a background in <K>open-source contributions</K>,
      <K>automation</K>, and <K>software testing</K>. My professional experience includes developing <K>custom Linux solutions</K>
      for <K>OEMs</K>, focusing on <K>hardware certification</K>, <K>embedded systems</K> development, and managing <K>Debian packages</K>.
      <br />
      <br />
      Over time, I shifted my expertise towards <K>mobile development</K>, particularly in crafting <K>Android applications</K>,
      while maintaining my passion for <K>backend development</K>, <K>DevOps</K>, and contributing to the <K>GNOME</K> project.
      <br />
      <br />
      My work also integrates cutting-edge technologies such as <K>machine learning</K> and <K>real-time image processing</K> using
      tools like <K>OpenCV</K> and <K>MediaPipe</K>, which I apply to both mobile and cross-platform solutions.
      <br />
    </Text>
  </StyledProfile>
)
