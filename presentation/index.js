// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  nisum: require("../assets/nisum.png"),
  proinchile: require("../assets/proinchile.png"),
  logo: require("../assets/logo.jpg"),
  coderhouse: require("../assets/coderhouse.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Hybrid Apps Chile
            </Heading>
            <Image width="250px" src={images.logo}/>
            

          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              "Realizar Apps Moviles usando Tecnologias WEB"
            </Heading>
          </Slide>
          <Slide>
            <Image width="250px%" src={images.nisum}/>
          </Slide>
          <Slide>
            <Image width="50%" src={images.proinchile}/>
          </Slide>
          <Slide>
            <Image width="50%" src={images.coderhouse}/>
          </Slide>
          <Slide>
            <Heading size={2} caps fit textColor="black" textFont="primary">
              Meetup Javascript Chile
            </Heading>
          </Slide>
          <Slide>
            <Heading size={2} caps fit textColor="black" textFont="primary">
              www.ion-book.com
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
