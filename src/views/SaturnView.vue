<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader
    model="/src/assets/models/saturn-new.glb"
    modelAlt="Saturn"
    :info="info"
  />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/images/saturnbg.jpg')"
    title="Saturn"
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
            text: "Aphelion:<br>1,514.50 Gm<br><br>Perihelion:<br>1,352.55 Gm",
          },
          {
            heading: "Equatorial Radius",
            text: "60,268 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "365,882.4 km",
          },
          {
            heading: "Mass",
            text: "5.6834×10<sup>26</sup> kg",
          },
          {
            heading: "Volume",
            text: "8.2713×10<sup>14</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "0.687 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "4.27×10<sup>10</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "35.5 km/s",
          },
          {
            heading: "Temperature",
            text: "133.15 K",
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
            `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.`,
            `Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter but not as high as on Neptune.`,
            `The planet's most notable feature is its prominent ring system, which is composed mainly of ice particles, with a smaller amount of rocky debris and dust. At least 83 moons are known to orbit Saturn, of which 53 are officially named; this does not include the hundreds of moonlets in its rings. Titan, Saturn's largest moon and the second largest in the Solar System, is larger than the planet Mercury, although less massive, and is the only moon in the Solar System to have a substantial atmosphere.`,
          ],
        },
        {
          heading: "Internal Structure",
          text: [
            `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass. The temperature, pressure, and density inside Saturn all rise steadily toward the core, which causes hydrogen to be a metal in the deeper layers.`,
            `Standard planetary models suggest that the interior of Saturn is similar to that of Jupiter, having a small rocky core surrounded by hydrogen and helium, with trace amounts of various volatiles. Analysis of the distortion shows that Saturn is substantially more centrally condensed than Jupiter and therefore contains a significantly larger amount of material denser than hydrogen near its centre. Saturn’s central regions contain about 50% hydrogen by mass, while Jupiter’s contain approximately 67% hydrogen.`,
            `This core is similar in composition to Earth, but is more dense. The examination of Saturn's gravitational moment, in combination with physical models of the interior, has allowed constraints to be placed on the mass of Saturn's core. In 2004, scientists estimated that the core must be 9–22 times the mass of Earth, which corresponds to a diameter of about 25,000 km. However, measurements of Saturn's rings suggest a much more diffuse core with a mass equal to about 17 Earths and a radius equal to around 60% of Saturn's entire radius. This is surrounded by a thicker liquid metallic hydrogen layer, followed by a liquid layer of helium-saturated molecular hydrogen that gradually transitions to a gas with increasing altitude. The outermost layer spans 1,000 km and consists of gas.`,
            `Saturn has a hot interior, reaching 11,700 °C at its core, and radiates 2.5 times more energy into space than it receives from the Sun. Jupiter's thermal energy is generated by the Kelvin–Helmholtz mechanism of slow gravitational compression, but such a process alone may not be sufficient to explain heat production for Saturn, because it is less massive. An alternative or additional mechanism may be generation of heat through the "raining out" of droplets of helium deep in Saturn's interior. As the droplets descend through the lower-density hydrogen, the process releases heat by friction and leaves Saturn's outer layers depleted of helium. These descending droplets may have accumulated into a helium shell surrounding the core. Rainfalls of diamonds have been suggested to occur within Saturn, as well as in Jupiter and ice giants Uranus and Neptune.`,
          ],
        },
        {
          heading: "Atmosphere",
          text: [
            `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The proportion of helium is significantly deficient compared to the abundance of this element in the Sun. The quantity of elements heavier than helium (metallicity) is not known precisely, but the proportions are assumed to match the primordial abundances from the formation of the Solar System. The total mass of these heavier elements is estimated to be 19–31 times the mass of the Earth, with a significant fraction located in Saturn's core region.`,
            `Trace amounts of ammonia, acetylene, ethane, propane, phosphine, and methane have been detected in Saturn's atmosphere. The upper clouds are composed of ammonia crystals, while the lower level clouds appear to consist of either ammonium hydrosulfide (NH4SH) or water. Ultraviolet radiation from the Sun causes methane photolysis in the upper atmosphere, leading to a series of hydrocarbon chemical reactions with the resulting products being carried downward by eddies and diffusion. This photochemical cycle is modulated by Saturn's annual seasonal cycle.`,
            `Saturn's atmosphere exhibits a banded pattern similar to Jupiter's, but Saturn's bands are much fainter and are much wider near the equator. The nomenclature used to describe these bands is the same as on Jupiter. Saturn's finer cloud patterns were not observed until the flybys of the Voyager spacecraft during the 1980s. Since then, Earth-based telescopy has improved to the point where regular observations can be made. `,
            `The composition of the clouds varies with depth and increasing pressure. In the upper cloud layers, with the temperature in the range 100–160 K and pressures extending between 0.5–2 bar, the clouds consist of ammonia ice. Water ice clouds begin at a level where the pressure is about 2.5 bar and extend down to 9.5 bar, where temperatures range from 185 to 270 K. Intermixed in this layer is a band of ammonium hydrosulfide ice, lying in the pressure range 3–6 bar with temperatures of 190–235 K. Finally, the lower layers, where pressures are between 10 and 20 bar and temperatures are 270–330 K, contains a region of water droplets with ammonia in aqueous solution.`,
            `Saturn's usually bland atmosphere occasionally exhibits long-lived ovals and other features common on Jupiter. In 1990, the Hubble Space Telescope imaged an enormous white cloud near Saturn's equator that was not present during the Voyager encounters, and in 1994 another smaller storm was observed. The 1990 storm was an example of a Great White Spot, a unique but short-lived phenomenon that occurs once every Saturnian year, roughly every 30 Earth years, around the time of the northern hemisphere's summer solstice. Previous Great White Spots were observed in 1876, 1903, 1933 and 1960, with the 1933 storm being the most famous. If the periodicity is maintained, another storm will occur in about 2020.`,
            `The winds on Saturn are the second fastest among the Solar System's planets, after Neptune's. Voyager data indicate peak easterly winds of 500 m/s (1,800 km/h). In images from the Cassini spacecraft during 2007, Saturn's northern hemisphere displayed a bright blue hue, similar to Uranus. The color was most likely caused by Rayleigh scattering. Thermography has shown that Saturn's south pole has a warm polar vortex, the only known example of such a phenomenon in the Solar System. Whereas temperatures on Saturn are normally −185 °C, temperatures on the vortex often reach as high as −122 °C, suspected to be the warmest spot on Saturn.`,
          ],
        },
        {
          heading: "Orbit and Rotation",
          text: [
            `The average distance between Saturn and the Sun is over 1.4 billion kilometers (9 AU). With an average orbital speed of 9.68 km/s, it takes Saturn 10,759 Earth days (or about 29+1⁄2 years) to finish one revolution around the Sun. As a consequence, it forms a near 5:2 mean-motion resonance with Jupiter. The elliptical orbit of Saturn is inclined 2.48° relative to the orbital plane of the Earth. The perihelion and aphelion distances are, respectively, 9.195 and 9.957 AU, on average. The visible features on Saturn rotate at different rates depending on latitude, and multiple rotation periods have been assigned to various regions (as in Jupiter's case).`,
            `Astronomers use three different systems for specifying the rotation rate of Saturn. System I has a period of 10h 14m 00s (844.3°/d) and encompasses the Equatorial Zone, the South Equatorial Belt, and the North Equatorial Belt. The polar regions are considered to have rotation rates similar to System I. All other Saturnian latitudes, excluding the north and south polar regions, are indicated as System II and have been assigned a rotation period of 10h 38m 25.4s (810.76°/d). System III refers to Saturn's internal rotation rate. Based on radio emissions from the planet detected by Voyager 1 and Voyager 2, System III has a rotation period of 10h 39m 22.4s (810.8°/d). System III has largely superseded System II.`,
            `A precise value for the rotation period of the interior remains elusive. While approaching Saturn in 2004, Cassini found that the radio rotation period of Saturn had increased appreciably, to approximately 10h 45m 45s ± 36s. An estimate of Saturn's rotation (as an indicated rotation rate for Saturn as a whole) based on a compilation of various measurements from the Cassini, Voyager and Pioneer probes is 10h 32m 35s. Studies of the planet's C Ring yield a rotation period of 10h 33m 38s.`,
            `In March 2007, it was found that the variation of radio emissions from the planet did not match Saturn's rotation rate. This variance may be caused by geyser activity on Saturn's moon Enceladus. The water vapor emitted into Saturn's orbit by this activity becomes charged and creates a drag upon Saturn's magnetic field, slowing its rotation slightly relative to the rotation of the planet.`,
            `An apparent oddity for Saturn is that it does not have any known trojan asteroids. These are minor planets that orbit the Sun at the stable Lagrangian points, designated L4 and L5, located at 60° angles to the planet along its orbit. Trojan asteroids have been discovered for Mars, Jupiter, Uranus, and Neptune. Orbital resonance mechanisms, including secular resonance, are believed to be the cause of the missing Saturnian trojans.`,
          ],
        },
      ],
    };
  },
};
</script>
