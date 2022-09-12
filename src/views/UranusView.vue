<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader
    model="/src/assets/models/uranus.glb"
    modelAlt="Uranus"
    :info="info"
  />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/uranusbg.jpg')"
    title="Uranus"
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
            text: "Aphelion:<br>3,006.39 Gm<br><br>Perihelion:<br>2,735.56 Gm",
          },
          {
            heading: "Equatorial Radius",
            text: "25,559 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "",
          },
          {
            heading: "Mass",
            text: "8.6810×10<sup>25</sup> kg",
          },
          {
            heading: "Volume",
            text: "6.833×10<sup>13</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "1.27 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "8.1156×10<sup>9</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "21.3 km/s",
          },
          {
            heading: "Temperature",
            text: "76 K",
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
            `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the other giant planets.`,
            `As with gas giants, ice giants also lack a well defined "solid surface." Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.`,
            `Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The Uranian system has a unique configuration because its axis of rotation is tilted sideways, nearly into the plane of its solar orbit. Its north and south poles, therefore, lie where most other planets have their equators. In 1986, images from Voyager 2 showed Uranus as an almost featureless planet in visible light, without the cloud bands or storms associated with the other giant planets. Voyager 2 remains the only spacecraft to visit the planet. Observations from Earth have shown seasonal change and increased weather activity as Uranus approached its equinox in 2007. Wind speeds can reach 250 metres per second (900 km/h; 560 mph).`,
          ],
        },
        {
          heading: "Discovery",
          text: [
            `Uranus had been observed on many occasions before its recognition as a planet, but it was generally mistaken for a star. Possibly the earliest known observation was by Hipparchos, who in 128 BC might have recorded it as a star for his star catalogue that was later incorporated into Ptolemy's Almagest. The earliest definite sighting was in 1690, when John Flamsteed observed it at least six times, cataloguing it as 34 Tauri. The French astronomer Pierre Charles Le Monnier observed Uranus at least twelve times between 1750 and 1769, including on four consecutive nights.`,
            `Sir William Herschel observed Uranus on 13 March 1781 from the garden of his house at 19 New King Street in Bath, Somerset, England (now the Herschel Museum of Astronomy), and initially reported it (on 26 April 1781) as a comet. With a homemade 6.2-inch reflecting telescope, Herschel "engaged in a series of observations on the parallax of the fixed stars."`,
            `Herschel notified the Astronomer Royal Nevil Maskelyne of his discovery and received this flummoxed reply from him on 23 April 1781: "I don't know what to call it. It is as likely to be a regular planet moving in an orbit nearly circular to the sun as a Comet moving in a very eccentric ellipsis. I have not yet seen any coma or tail to it."`,
            `Although Herschel continued to describe his new object as a comet, other astronomers had already begun to suspect otherwise. Finnish-Swedish astronomer Anders Johan Lexell, working in Russia, was the first to compute the orbit of the new object. Its nearly circular orbit led him to a conclusion that it was a planet rather than a comet. Berlin astronomer Johann Elert Bode described Herschel's discovery as "a moving star that can be deemed a hitherto unknown planet-like object circulating beyond the orbit of Saturn". Bode concluded that its near-circular orbit was more like a planet's than a comet's.`,
            `The object was soon universally accepted as a new planet. By 1783, Herschel acknowledged this to Royal Society president Joseph Banks: "By the observation of the most eminent Astronomers in Europe it appears that the new star, which I had the honour of pointing out to them in March 1781, is a Primary Planet of our Solar System." In recognition of his achievement, King George III gave Herschel an annual stipend of £200 on condition that he move to Windsor so that the Royal Family could look through his telescopes (equivalent to £26,000 in 2021).`,
          ],
        },
        {
          heading: "Orbit and Rotation",
          text: [
            `Uranus orbits the Sun once every 84 years, taking an average of seven years to pass through each of the dozen constellations of the zodiac. In 2033, the planet will have made its third complete orbit around the Sun since being discovered in 1781. The planet has returned to the point of its discovery northeast of Zeta Tauri twice since then, on 25 March 1865 and 29 March 1949. Uranus will return to this location again on 3 April 2033. Its average distance from the Sun is roughly 20 AU (3 billion km; 2 billion mi). The difference between its minimum and maximum distance from the Sun is 1.8 AU, larger than that of any other planet, though not as large as that of dwarf planet Pluto. The intensity of sunlight varies inversely with the square of distance, and so on Uranus (at about 20 times the distance from the Sun compared to Earth) it is about 1/400 the intensity of light on Earth.`,
            `The orbital elements of Uranus were first calculated in 1783 by Pierre-Simon Laplace. With time, discrepancies began to appear between the predicted and observed orbits, and in 1841, John Couch Adams first proposed that the differences might be due to the gravitational tug of an unseen planet. In 1845, Urbain Le Verrier began his own independent research into Uranus's orbit. On 23 September 1846, Johann Gottfried Galle located a new planet, later named Neptune, at nearly the position predicted by Le Verrier.`,
            `The rotational period of the interior of Uranus is 17 hours, 14 minutes. As on all the giant planets, its upper atmosphere experiences strong winds in the direction of rotation. At some latitudes, such as about 60 degrees south, visible features of the atmosphere move much faster, making a full rotation in as little as 14 hours.`,
            `The Uranian axis of rotation is approximately parallel with the plane of the Solar System, with an axial tilt of 97.77° (as defined by prograde rotation). This gives it seasonal changes completely unlike those of the other planets. Near the solstice, one pole faces the Sun continuously and the other faces away, with only a narrow strip around the equator experiencing a rapid day–night cycle, with the Sun low over the horizon. At the other side of Uranus's orbit the orientation of the poles towards the Sun is reversed. Each pole gets around 42 years of continuous sunlight, followed by 42 years of darkness. Near the time of the equinoxes, the Sun faces the equator of Uranus giving a period of day–night cycles similar to those seen on most of the other planets.`,
            `One result of this axis orientation is that, averaged over the Uranian year, the near-polar regions of Uranus receive a greater energy input from the Sun than its equatorial regions. Nevertheless, Uranus is hotter at its equator than at its poles. The underlying mechanism that causes this is unknown. The reason for Uranus's unusual axial tilt is also not known with certainty, but the usual speculation is that during the formation of the Solar System, an Earth-sized protoplanet collided with Uranus, causing the skewed orientation. Research by Jacob Kegerreis of Durham University suggests that the tilt resulted from a rock larger than the Earth crashing into the planet 3 to 4 billion years ago. Uranus's south pole was pointed almost directly at the Sun at the time of Voyager 2's flyby in 1986. The labelling of this pole as "south" uses the definition currently endorsed by the International Astronomical Union, namely that the north pole of a planet or satellite is the pole that points above the invariable plane of the Solar System, regardless of the direction the planet is spinning. A different convention is sometimes used, in which a body's north and south poles are defined according to the right-hand rule in relation to the direction of rotation.`,
          ],
        },
        {
          heading: "Internal structure",
          text: [
            `Uranus's mass is roughly 14.5 times that of Earth, making it the least massive of the giant planets. Its diameter is slightly larger than Neptune's at roughly four times that of Earth. A resulting density of 1.27 g/cm3 makes Uranus the second least dense planet, after Saturn. This value indicates that it is made primarily of various ices, such as water, ammonia, and methane. The total mass of ice in Uranus's interior is not precisely known, because different figures emerge depending on the model chosen; it must be between 9.3 and 13.5 Earth masses. Hydrogen and helium constitute only a small part of the total, with between 0.5 and 1.5 Earth masses. The remainder of the non-ice mass (0.5 to 3.7 Earth masses) is accounted for by rocky material.`,
            `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses and a radius less than 20% of Uranus'; the mantle comprises its bulk, with around 13.4 Earth masses, and the upper atmosphere is relatively insubstantial, weighing about 0.5 Earth masses and extending for the last 20% of Uranus's radius. Uranus's core density is around 9 g/cm3, with a pressure in the centre of 8 million bars (800 GPa) and a temperature of about 5000 K. The ice mantle is not in fact composed of ice in the conventional sense, but of a hot and dense fluid consisting of water, ammonia and other volatiles. This fluid, which has a high electrical conductivity, is sometimes called a water–ammonia ocean.`,
            `The extreme pressure and temperature deep within Uranus may break up the methane molecules, with the carbon atoms condensing into crystals of diamond that rain down through the mantle like hailstones. Very-high-pressure experiments at the Lawrence Livermore National Laboratory suggest that the base of the mantle may comprise an ocean of metallic liquid carbon, perhaps with floating solid 'diamond-bergs'. Scientists also believe that rainfalls of solid diamonds occur on Uranus, as well as on Jupiter, Saturn, and Neptune.`,
            `The bulk compositions of Uranus and Neptune are different from those of Jupiter and Saturn, with ice dominating over gases, hence justifying their separate classification as ice giants. There may be a layer of ionic water where the water molecules break down into a soup of hydrogen and oxygen ions, and deeper down superionic water in which the oxygen crystallises but the hydrogen ions move freely within the oxygen lattice.`,
            `Although the model considered above is reasonably standard, it is not unique; other models also satisfy observations. For instance, if substantial amounts of hydrogen and rocky material are mixed in the ice mantle, the total mass of ices in the interior will be lower, and, correspondingly, the total mass of rocks and hydrogen will be higher. Presently available data does not allow a scientific determination of which model is correct. The fluid interior structure of Uranus means that it has no solid surface. The gaseous atmosphere gradually transitions into the internal liquid layers. For the sake of convenience, a revolving oblate spheroid set at the point at which atmospheric pressure equals 1 bar (100 kPa) is conditionally designated as a "surface". It has equatorial and polar radii of 25,559 ± 4 km (15,881.6 ± 2.5 mi) and 24,973 ± 20 km (15,518 ± 12 mi), respectively. This surface is used throughout this article as a zero point for altitudes.`,
          ],
        },
      ],
    };
  },
};
</script>
