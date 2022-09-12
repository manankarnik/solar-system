<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader
    model="/solar-system/models/jupiter.glb"
    modelAlt="Jupiter"
    :info="info"
  />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/solar-system/images/jupiterbg.jpg')"
    title="Jupiter"
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
            text: "Aphelion:<br>816.363 Gm<br><br>Perihelion:<br>740.595 Gm",
          },
          {
            heading: "Equatorial Radius",
            text: "71,492 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "439,263.8 km",
          },
          {
            heading: "Mass",
            text: "1.8982×10<sup>27</sup> kg",
          },
          {
            heading: "Volume",
            text: "1.4313×10<sup>15</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "1,326 kg/m<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "6.1469×10<sup>10</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "59.5 km/s",
          },
          {
            heading: "Temperature",
            text: "163.15 K",
          },
          {
            heading: "Age",
            text: "4.603 billion years",
          },
        ],
      },
      article: [
        {
          heading: "Introduction",
          text: [
            `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after the Roman god Jupiter, the king of the gods.`,
            `Jupiter is primarily composed of hydrogen, but helium constitutes one-quarter of its mass and one-tenth of its volume. It probably has a rocky core of heavier elements, but, like the other giant planets in the Solar System, it lacks a well-defined solid surface. The ongoing contraction of Jupiter's interior generates more heat than it receives from the Sun. Because of its rapid rotation, the planet's shape is an oblate spheroid: it has a slight but noticeable bulge around the equator. The outer atmosphere is divided into a series of latitudinal bands, with turbulence and storms along their interacting boundaries. A prominent result of this is the Great Red Spot, a giant storm which has been observed since at least 1831.`,
            `Jupiter is surrounded by a faint planetary ring system and a powerful magnetosphere. Jupiter's magnetic tail is nearly 800 million km (5.3 AU; 500 million mi) long, covering nearly the entire distance to Saturn's orbit. Jupiter has 80 known moons and possibly many more, including the four large moons discovered by Galileo Galilei in 1610: Io, Europa, Ganymede, and Callisto. Io and Europa are about the size of Earth's Moon; Callisto is almost the size of the planet Mercury, and Ganymede is larger.`,
            `Pioneer 10 was the first spacecraft to visit Jupiter, making its closest approach to the planet in December 1973. Jupiter has since been explored by multiple robotic spacecraft, beginning with the Pioneer and Voyager flyby missions from 1973 to 1979, and later with the Galileo orbiter in 1995. In 2007, the New Horizons visited Jupiter using its gravity to increase its speed, bending its trajectory en route to Pluto. The latest probe to visit the planet, Juno, entered orbit around Jupiter in July 2016. Future targets for exploration in the Jupiter system include the probable ice-covered liquid ocean of Europa.`,
          ],
        },
        {
          heading: "Formation and Migration",
          text: [
            `Jupiter is believed to be the oldest planet in the Solar System. Current models of Solar System formation suggest that Jupiter formed at or beyond the snow line: a distance from the early Sun where the temperature is sufficiently cold for volatiles such as water to condense into solids. The planet began as a large solid core, then accumulated its gaseous atmosphere. As a consequence, the core must have formed before the solar nebula was fully dispersed after 10 million years. Over about a million years, Jupiter's atmosphere gradually expanded until it had 20 times the mass of the Earth. The orbiting mass created a gap in the solar nebula, and thereafter the planet slowly increased to 50 Earth masses over 3–4 million years.`,
            `According to the "grand tack hypothesis", Jupiter began to form at a distance of roughly 3.5 AU (520 million km; 330 million mi) from the Sun. As the young planet accreted mass, interaction with the gas disk orbiting the Sun and orbital resonances with Saturn caused it to migrate inward. This upset the orbits of several super-Earths orbiting closer to the Sun, causing them to collide destructively. Saturn would later have begun to migrate inwards too, much faster than Jupiter, until the two planets became captured in a 3:2 mean motion resonance at approximately 1.5 AU (220 million km; 140 million mi) from the Sun. This changed the direction of migration, causing them to migrate away from the Sun and out of the inner system to their current locations. All of this happened over a period of 3–6 million years, with the final migration of Jupiter occurring over several hundred thousand years. Jupiter's departure from the inner solar system eventually allowed the inner planets—including Earth—to form from the rubble.`,
            `There are several problems with the grand tack hypothesis. The resulting formation timescales of terrestrial planets appear to be inconsistent with the measured elemental composition. It is likely that Jupiter would have settled into an orbit much closer to the Sun if it had migrated through the solar nebula. Some competing models of Solar System formation predict the formation of Jupiter with orbital properties that are close to those of the present day planet. Other models predict Jupiter forming at distances much farther out, such as 18 AU (2.7 billion km; 1.7 billion mi).`,
            `Based on Jupiter's composition, researchers have made the case for an initial formation outside the molecular nitrogen (N2) snowline, which is estimated at 20–30 AU (3.0–4.5 billion km; 1.9–2.8 billion mi) from the Sun, and possibly even outside the argon snowline, which may be as far as 40 AU (6.0 billion km; 3.7 billion mi). Having formed at one of these extreme distances, Jupiter would then have migrated inwards to its current location. This inward migration would have occurred over a roughly 700,000-year time period, during an epoch approximately 2–3 million years after the planet began to form. In this model, Saturn, Uranus and Neptune would have formed even further out than Jupiter, and Saturn would also have migrated inwards.`,
          ],
        },
        {
          heading: "Composition",
          text: [
            `Jupiter's upper atmosphere is about 90% hydrogen and 10% helium by volume. Since helium atoms are more massive than hydrogen molecules, Jupiter's atmosphere is approximately 24% helium by mass. The atmosphere contains trace amounts of methane, water vapour, ammonia, and silicon-based compounds. There are also fractional amounts of carbon, ethane, hydrogen sulfide, neon, oxygen, phosphine, and sulfur. The outermost layer of the atmosphere contains crystals of frozen ammonia. Through infrared and ultraviolet measurements, trace amounts of benzene and other hydrocarbons have also been found. The interior of Jupiter contains denser materials—by mass it is roughly 71% hydrogen, 24% helium, and 5% other elements.`,
            `The atmospheric proportions of hydrogen and helium are close to the theoretical composition of the primordial solar nebula. Neon in the upper atmosphere only consists of 20 parts per million by mass, which is about a tenth as abundant as in the Sun. Helium is also reduced to about 80% of the Sun's helium composition. This depletion is a result of precipitation of these elements as helium-rich droplets, a process that happens deep in the interior of the planet.`,
            `Based on spectroscopy, Saturn is thought to be similar in composition to Jupiter, but the other giant planets Uranus and Neptune have relatively less hydrogen and helium and relatively more of the next most common elements, including oxygen, carbon, nitrogen, and sulfur. These planets are known as ice giants, because the majority of their volatile compounds are in solid form.`,
          ],
        },
        {
          heading: "Internal Structure",
          text: [
            `Before the early 21st century, most scientists proposed one of two scenarios for the formation of Jupiter. If the planet accreted first as a solid body, it would consist of a dense core, a surrounding layer of liquid metallic hydrogen (with some helium) extending outward to about 80% of the radius of the planet, and an outer atmosphere consisting primarily of molecular hydrogen. Alternatively, if the planet collapsed directly from the gaseous protoplanetary disk, it was expected to completely lack a core, consisting instead of denser and denser fluid (predominantly molecular and metallic hydrogen) all the way to the centre. Data from the Juno mission showed that Jupiter has a very diffuse core that mixes into its mantle. This could have been caused by an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core. It is estimated that the core takes up 30–50% of the planet's radius, and contains heavy elements with a combined mass 7–25 times the Earth.`,
            `Outside the layer of metallic hydrogen lies a transparent interior atmosphere of hydrogen. At this depth, the pressure and temperature are above molecular hydrogen's critical pressure of 1.3 MPa and critical temperature of 33 K (−240.2 °C; −400.3 °F). In this state, there are no distinct liquid and gas phases—hydrogen is said to be in a supercritical fluid state. The hydrogen and helium gas extending downward from the cloud layer gradually transitions to a liquid in deeper layers, possibly resembling something akin to an ocean of liquid hydrogen and other supercritical fluids.: 22  Physically, the gas gradually becomes hotter and denser as depth increases.`,
            `Rain-like droplets of helium and neon precipitate downward through the lower atmosphere, depleting the abundance of these elements in the upper atmosphere. Calculations suggest that helium drops separate from metallic hydrogen at a radius of 60,000 km (37,000 mi) (11,000 km (6,800 mi) below the cloudtops) and merge again at 50,000 km (31,000 mi) (22,000 km (14,000 mi) beneath the clouds). Rainfalls of diamonds have been suggested to occur, as well as on Saturn and the ice giants Uranus and Neptune.`,
            `The temperature and pressure inside Jupiter increase steadily inward because the heat of planetary formation can only escape by convection. At a surface depth where the atmospheric pressure level is 1 bar (0.10 MPa), the temperature is around 165 K (−108 °C; −163 °F). The region of supercritical hydrogen changes gradually from a molecular fluid to a metallic fluid spans pressure ranges of 50–400 GPa with temperatures of 5,000–8,400 K (4,730–8,130 °C; 8,540–14,660 °F), respectively. The temperature of Jupiter's diluted core is estimated to be 20,000 K (19,700 °C; 35,500 °F) with a pressure of around 4,000 GPa.`,
          ],
        },
      ],
    };
  },
};
</script>
