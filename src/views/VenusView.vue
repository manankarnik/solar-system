<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader model="/models/venus.glb" modelAlt="Venus" :info="info" />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/venusbg.jpg')"
    title="Venus"
    :article="article"
  />
</template>

<script>
export default {
  data() {
    return {
      info: {
        left: [
          {
            heading: "Mean Distance",
            text: "Aphelion:<br>108,939,000 km<br><br>Perihelion:<br>107,477,000 km",
          },
          {
            heading: "Equatorial Radius",
            text: "6,051.8 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "38,024.6 km",
          },
          {
            heading: "Mass",
            text: "	4.8675×10<sup>24</sup> kg",
          },
          {
            heading: "Volume",
            text: "9.2843×10<sup>11</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "5.243 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "4.6023×10<sup>8</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "10.36 km/s",
          },
          {
            heading: "Temperature",
            text: "737 K",
          },
          {
            heading: "Age",
            text: "4.503 billion years",
          },
        ],
      },
      article: [
        {
          heading: "Introduction",
          text: [
            `Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight. Venus's orbit is smaller than that of Earth, but its maximal elongation is 47°; thus, at latitudes with a day-night cycle, it is most readily visible for up to a few hours following the start of sunset or before sunrise. At times, it has been seen in a completely dark sky. Venus orbits the Sun every 224.7 Earth days. It has a synodic day length of 117 Earth days and a sidereal rotation period of 243 Earth days. Consequently, it takes longer to rotate about its axis than any other planet in the Solar System, and does so in the opposite direction to all but Uranus. This means that the Sun rises from its western horizon and sets in its east. Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.`,
            `The third smallest planet in the Solar System, Venus is a terrestrial planet and is sometimes called Earth's "sister planet" because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is about 92 times the sea level pressure of Earth, or roughly the pressure at 900 m (3,000 ft) underwater on Earth. Even though Mercury is closer to the Sun, Venus has the hottest surface of any planet in the Solar System, with a mean temperature of 737 K (464 °C; 867 °F). Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from Earth in light. It may have had water oceans in the past, but after these evaporated the temperature rose under a runaway greenhouse effect. The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic field. Because of the lethal surface conditions, the planet is sometimes referred to as Earth's "evil twin".`,
            `As one of the brightest objects in the sky, Venus has been a major fixture in human culture for as long as records have existed. It has been made sacred to gods of many cultures and has been a prime inspiration for writers and poets as the "morning star" and "evening star". Venus was the first planet to have its motions plotted across the sky, as early as the second millennium BCE.`,
            `Its proximity to Earth has made Venus a prime target for early interplanetary exploration. It was the first planet beyond Earth visited by a spacecraft (Venera 1 in 1961) and the first to be successfully landed on (by Venera 7 in 1970). The planet's thick clouds render observation of its surface impossible in the visible spectrum, and the first detailed maps did not emerge until the arrival of the Magellan orbiter in 1991. Plans have been proposed for rovers or more complex missions, but they are hindered by Venus's hostile surface conditions. The possibility of life on Venus has long been a topic of speculation; in recent years, the topic has received active research.`,
          ],
        },
        {
          heading: "Atmosphere and Climate",
          text: [
            `Venus has an extremely dense atmosphere composed of 96.5% carbon dioxide, 3.5% nitrogen—both exist as supercritical fluids at the planet's surface—and traces of other gases including sulfur dioxide. The mass of its atmosphere is 92 times that of Earth's, whereas the pressure at its surface is about 93 times that at Earth's—a pressure equivalent to that at a depth of nearly 1 km (5⁄8 mi) under Earth's oceans. The density at the surface is 65 kg/m3 (4.1 lb/cu ft), 6.5% that of water or 50 times as dense as Earth's atmosphere at 293 K (20 °C; 68 °F) at sea level. The CO2-rich atmosphere generates the strongest greenhouse effect in the Solar System, creating surface temperatures of at least 735 K (462 °C; 864 °F). This makes the Venusian surface hotter than Mercury's, which has a minimum surface temperature of 53 K (−220 °C; −364 °F) and maximum surface temperature of 700 K (427 °C; 801 °F), even though Venus is nearly twice Mercury's distance from the Sun and thus receives only 25% of Mercury's solar irradiance. Because of its runaway greenhouse effect, Venus has been identified by scientists such as Carl Sagan as a warning and research object linked to climate change on Earth.`,
            `Venus's atmosphere is extremely rich in primordial noble gases compared to that of Earth. This enrichment indicates an early divergence from Earth in evolution. An unusually large comet impact or accretion of a more massive primary atmosphere from solar nebula have been proposed to explain the enrichment. However, the atmosphere is also depleted of radiogenic argon, a proxy to mantle degassing, suggesting an early shutdown of major magmatism.`,
            `Studies have suggested that billions of years ago, Venus's atmosphere could have been much more like the one surrounding the early Earth, and that there may have been substantial quantities of liquid water on the surface. After a period of 600 million to several billion years, solar forcing from rising luminosity of the Sun caused the evaporation of the original water. A runaway greenhouse effect was created once a critical level of greenhouse gases (including water) was added to its atmosphere. Although the surface conditions on Venus are no longer hospitable to any Earth-like life that may have formed before this event, there is speculation on the possibility that life exists in the upper cloud layers of Venus, 50 km (30 mi) up from the surface, where the temperature ranges between 303 and 353 K (30 and 80 °C; 86 and 176 °F) but the environment is acidic. The putative detection of an absorption line of phosphine in Venus's atmosphere, with no known pathway for abiotic production, led to speculation in September 2020 that there could be extant life currently present in the atmosphere. Later research attributed the spectroscopic signal that was interpreted as phosphine to sulfur dioxide, or found that in fact there was no absorption line.`,
            `Thermal inertia and the transfer of heat by winds in the lower atmosphere mean that the temperature of Venus's surface does not vary significantly between the planet's two hemispheres, those facing and not facing the Sun, despite Venus's extremely slow rotation. Winds at the surface are slow, moving at a few kilometres per hour, but because of the high density of the atmosphere at the surface, they exert a significant amount of force against obstructions, and transport dust and small stones across the surface. This alone would make it difficult for a human to walk through, even without the heat, pressure, and lack of oxygen.`,
          ],
        },
        {
          heading: "Geography",
          text: [
            `The Venusian surface was a subject of speculation until some of its secrets were revealed by planetary science in the 20th century. Venera landers in 1975 and 1982 returned images of a surface covered in sediment and relatively angular rocks. The surface was mapped in detail by Magellan in 1990–91. The ground shows evidence of extensive volcanism, and the sulfur in the atmosphere may indicate that there have been recent eruptions.`,
            `About 80% of the Venusian surface is covered by smooth, volcanic plains, consisting of 70% plains with wrinkle ridges and 10% smooth or lobate plains. Two highland "continents" make up the rest of its surface area, one lying in the planet's northern hemisphere and the other just south of the equator. The northern continent is called Ishtar Terra after Ishtar, the Babylonian goddess of love, and is about the size of Australia. Maxwell Montes, the highest mountain on Venus, lies on Ishtar Terra. Its peak is 11 km (7 mi) above the Venusian average surface elevation. The southern continent is called Aphrodite Terra, after the Greek goddess of love, and is the larger of the two highland regions at roughly the size of South America. A network of fractures and faults covers much of this area.`,
            `The absence of evidence of lava flow accompanying any of the visible calderas remains an enigma. The planet has few impact craters, demonstrating that the surface is relatively young, at 300–600 million years old. Venus has some unique surface features in addition to the impact craters, mountains, and valleys commonly found on rocky planets. Among these are flat-topped volcanic features called "farra", which look somewhat like pancakes and range in size from 20 to 50 km (12 to 31 mi) across, and from 100 to 1,000 m (330 to 3,280 ft) high; radial, star-like fracture systems called "novae"; features with both radial and concentric fractures resembling spider webs, known as "arachnoids"; and "coronae", circular rings of fractures sometimes surrounded by a depression. These features are volcanic in origin.`,
          ],
        },
      ],
    };
  },
};
</script>
