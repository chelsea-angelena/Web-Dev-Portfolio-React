import React from "react"
import Image from "./image"

export default function Bio() {
  return (
    <>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <div style={styles.div}>
        <div style={styles.box}>
          <p style={styles.text}>
            Nunc at nisi dolor. Suspendisse venenatis nisi sit amet eros
            tincidunt, et imperdiet enim efficitur. Mauris vitae gravida tellus.
            Nam eu ex ac nulla bibendum elementum vel quis odio. Nulla facilisi.
            Cras non faucibus nisl, ac laoreet lacus. Integer maximus massa
            sollicitudin, egestas augue vel, porta diam. In sagittis vel ipsum
            quis finibus. Nulla in dolor nec enim efficitur scelerisque. Proin
            justo nibh, varius a tempor eget, aliquet at tellus.
          </p>
          <p style={styles.text}>
            Curabitur est elit, tempor eget felis vel, maximus imperdiet purus.
            Nulla semper turpis massa, nec molestie metus porta vel. Nulla eget
            sem non eros tempus facilisis. Phasellus sodales, nunc non ornare
            scelerisque, nulla sapien vulputate sem, vel iaculis ipsum turpis
            facilisis ex. In sollicitudin tortor libero, nec suscipit metus
            congue id. Donec quis sapien sit amet dui blandit convallis in id
            enim. In hac habitasse platea
          </p>
        </div>
      </div>
    </>
  )
}

const styles = {
  div: {
    width: "100%",
    height: 600,
  },
  box: {
    width: 400,
    height: 400,
    borderRadius: 16,
    border: "solid",
    borderColor: "white",
    borderWidth: 2,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
}
