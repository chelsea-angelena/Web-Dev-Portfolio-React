import React from "react"
import { Collapse, Card } from "bootstrap-4-react"
import fonts from "../styles/fonts"

const DropButton = () => {
  return (
    <React.Fragment>
      <p>
        <Collapse.Button
          primary
          target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={styles.dropButton}
        >
          Welcome!
        </Collapse.Button>
      </p>
      <Collapse id="collapseExample">
        <Card style={styles.introCard}>
          <Card.Body style={styles.introText}>
            Welcome! Click on the links to find your way
            around. If you get lost, click the icon below to come home.
            <img
              alt=""
              style={{
                display: "inline-block",
                marginLeft: 16,
                position: "relative",
                top: 5,
              }}
              src={require("../assets/planet.png")}
              width="50px"
              height="auto"
            ></img>
          </Card.Body>
        </Card>
      </Collapse>
    </React.Fragment>
  )
}

export default DropButton
const styles = {
  dropButton: {
    fontSize: "2rem",
    borderWidth: 4,
    borderStyle: "solid",
    color: "white",
    width: 250,
    height: 150,
    marginTop: 24,
    font: fonts.sofia,
    backgroundColor: "transparent",
    borderColor: "white",
  },
  item: {
    fontSize: "2rem",
    borderWidth: 4,
    borderStyle: "solid",
    color: "white",
    width: 300,
    // height: 150,
  },
  introCard: {
    font: fonts.sofia,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    alignText: "center",
    borderWidth: 4,
    borderStyle: "solid",
    color: "white",
    borderColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    width: 260,
    backgroundColor: "transparent",
  },
}
