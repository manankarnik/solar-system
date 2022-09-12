<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader
    model="/solar-system/models/neptune.glb"
    modelAlt="Neptune"
    :info="info"
  />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/solar-system/images/neptunebg.jpg')"
    title="Neptune"
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
            text: "24,764 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "154,704.6km",
          },
          {
            heading: "Mass",
            text: "1.02413×10<sup>26</sup> kg",
          },
          {
            heading: "Volume",
            text: "6.253×10<sup>13</sup> km",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "1.638 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "7.6187×10<sup>9</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "23.5 km/s",
          },
          {
            heading: "Temperature",
            text: "72 K",
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
            `Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is referred to as one of the solar system's two ice giant planets (the other one being Uranus).`,
            `Being composed primarily of gases and liquids, it has no well-defined "solid surface". The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.`,
            `Neptune is not visible to the unaided eye and is the only planet in the Solar System found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to hypothesise that its orbit was subject to gravitational perturbation by an unknown planet. After Bouvard's death, the position of Neptune was predicted from his observations, independently, by John Couch Adams and Urbain Le Verrier. Neptune was subsequently observed with a telescope on 23 September 1846 by Johann Galle within a degree of the position predicted by Le Verrier. Its largest moon, Triton, was discovered shortly thereafter, though none of the planet's remaining 13 known moons were located telescopically until the 20th century. The planet's distance from Earth gives it a very small apparent size, making it challenging to study with Earth-based telescopes. Neptune was visited by Voyager 2, when it flew by the planet on 25 August 1989; Voyager 2 remains the only spacecraft to have visited Neptune. The advent of the Hubble Space Telescope and large ground-based telescopes with adaptive optics has recently allowed for additional detailed observations from afar.`,
            `Like Jupiter and Saturn, Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of ices such as water, ammonia and methane. However, similar to Uranus, its interior is primarily composed of ices and rock; Uranus and Neptune are normally considered "ice giants" to emphasise this distinction. Along with Rayleigh scattering, traces of methane in the outermost regions in part account for the planet's blue appearance. Newest data from the Gemini observatory shows the blue color is more saturated than the one present on Uranus due to thinner haze of Neptune's more active atmosphere.`,
            `In contrast to the hazy, relatively featureless atmosphere of Uranus, Neptune's atmosphere has active and visible weather patterns. For example, at the time of the Voyager 2 flyby in 1989, the planet's southern hemisphere had a Great Dark Spot comparable to the Great Red Spot on Jupiter. More recently, in 2018, a newer main dark spot and smaller dark spot were identified and studied. In addition, these weather patterns are driven by the strongest sustained winds of any planet in the Solar System, with recorded wind speeds as high as 2,100 km/h (580 m/s; 1,300 mph). Because of its great distance from the Sun, Neptune's outer atmosphere is one of the coldest places in the Solar System, with temperatures at its cloud tops approaching 55 K (−218 °C; −361 °F). Temperatures at the planet's centre are approximately 5,400 K (5,100 °C; 9,300 °F). Neptune has a faint and fragmented ring system (labelled "arcs"), which was discovered in 1984, then later confirmed by Voyager 2.`,
          ],
        },
        {
          heading: "Internal Structure",
          text: [
            `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5 to 10% of its mass and extends perhaps 10 to 20% of the way towards the core, where it reaches pressures of about 10 GPa, or about 100,000 times that of Earth's atmosphere. Increasing concentrations of methane, ammonia and water are found in the lower regions of the atmosphere.`,
            `The mantle is equivalent to 10 to 15 Earth masses and is rich in water, ammonia and methane. As is customary in planetary science, this mixture is referred to as icy even though it is a hot, dense fluid (supercritical fluid). This fluid, which has a high electrical conductivity, is sometimes called a water–ammonia ocean. The mantle may consist of a layer of ionic water in which the water molecules break down into a soup of hydrogen and oxygen ions, and deeper down superionic water in which the oxygen crystallises but the hydrogen ions float around freely within the oxygen lattice. At a depth of 7,000 km, the conditions may be such that methane decomposes into diamond crystals that rain downwards like hailstones. Scientists also believe that this kind of diamond rain occurs on Jupiter, Saturn, and Uranus. Very-high-pressure experiments at the Lawrence Livermore National Laboratory suggest that the top of the mantle may be an ocean of liquid carbon with floating solid 'diamonds'.`,
            `The core of Neptune is likely composed of iron, nickel and silicates, with an interior model giving a mass about 1.2 times that of Earth. The pressure at the centre is 7 Mbar (700 GPa), about twice as high as that at the centre of Earth, and the temperature may be 5,400 K.`,
          ],
        },
        {
          heading: "Atmosphere",
          text: [
            `At high altitudes, Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum. As with Uranus, this absorption of red light by the atmospheric methane is part of what gives Neptune its blue hue, although Neptune's blue differs from Uranus's milder light blue.`,
            `Neptune's atmosphere is subdivided into two main regions: the lower troposphere, where temperature decreases with altitude, and the stratosphere, where temperature increases with altitude. The boundary between the two, the tropopause, lies at a pressure of 0.1 bars (10 kPa). The stratosphere then gives way to the thermosphere at a pressure lower than 10−5 to 10−4 bars (1 to 10 Pa). The thermosphere gradually transitions to the exosphere.`,
            `Models suggest that Neptune's troposphere is banded by clouds of varying compositions depending on altitude. The upper-level clouds lie at pressures below one bar, where the temperature is suitable for methane to condense. For pressures between one and five bars (100 and 500 kPa), clouds of ammonia and hydrogen sulfide are thought to form. Above a pressure of five bars, the clouds may consist of ammonia, ammonium sulfide, hydrogen sulfide and water. Deeper clouds of water ice should be found at pressures of about 50 bars (5.0 MPa), where the temperature reaches 273 K (0 °C). Underneath, clouds of ammonia and hydrogen sulfide may be found.`,
            `High-altitude clouds on Neptune have been observed casting shadows on the opaque cloud deck below. There are also high-altitude cloud bands that wrap around the planet at constant latitude. These circumferential bands have widths of 50–150 km and lie about 50–110 km above the cloud deck. These altitudes are in the layer where weather occurs, the troposphere. Weather does not occur in the higher stratosphere or thermosphere.`,
            `Neptune's spectra suggest that its lower stratosphere is hazy due to condensation of products of ultraviolet photolysis of methane, such as ethane and ethyne. The stratosphere is also home to trace amounts of carbon monoxide and hydrogen cyanide. The stratosphere of Neptune is warmer than that of Uranus due to the elevated concentration of hydrocarbons.`,
            `For reasons that remain obscure, the planet's thermosphere is at an anomalously high temperature of about 750 K. The planet is too far from the Sun for this heat to be generated by ultraviolet radiation. One candidate for a heating mechanism is atmospheric interaction with ions in the planet's magnetic field. Other candidates are gravity waves from the interior that dissipate in the atmosphere. The thermosphere contains traces of carbon dioxide and water, which may have been deposited from external sources such as meteorites and dust.`,
          ],
        },
        {
          heading: "Climate",
          text: [
            `Neptune's weather is characterised by extremely dynamic storm systems, with winds reaching speeds of almost 600 m/s (2,200 km/h; 1,300 mph)—nearly reaching supersonic flow. More typically, by tracking the motion of persistent clouds, wind speeds have been shown to vary from 20 m/s in the easterly direction to 325 m/s westward. At the cloud tops, the prevailing winds range in speed from 400 m/s along the equator to 250 m/s at the poles. Most of the winds on Neptune move in a direction opposite the planet's rotation. The general pattern of winds showed prograde rotation at high latitudes vs. retrograde rotation at lower latitudes. The difference in flow direction is thought to be a "skin effect" and not due to any deeper atmospheric processes. At 70° S latitude, a high-speed jet travels at a speed of 300 m/s.`,
            `Neptune differs from Uranus in its typical level of meteorological activity. Voyager 2 observed weather phenomena on Neptune during its 1989 flyby, but no comparable phenomena on Uranus during its 1986 fly-by.`,
            `The abundance of methane, ethane and acetylene at Neptune's equator is 10–100 times greater than at the poles. This is interpreted as evidence for upwelling at the equator and subsidence near the poles because photochemistry cannot account for the distribution without meridional circulation.`,
            `In 2007, it was discovered that the upper troposphere of Neptune's south pole was about 10 K warmer than the rest of its atmosphere, which averages approximately 73 K (−200 °C). The temperature differential is enough to let methane, which elsewhere is frozen in the troposphere, escape into the stratosphere near the pole. The relative "hot spot" is due to Neptune's axial tilt, which has exposed the south pole to the Sun for the last quarter of Neptune's year, or roughly 40 Earth years. As Neptune slowly moves towards the opposite side of the Sun, the south pole will be darkened and the north pole illuminated, causing the methane release to shift to the north pole.`,
            `Because of seasonal changes, the cloud bands in the southern hemisphere of Neptune have been observed to increase in size and albedo. This trend was first seen in 1980. The long orbital period of Neptune results in seasons lasting forty years.`,
          ],
        },
      ],
    };
  },
};
</script>
