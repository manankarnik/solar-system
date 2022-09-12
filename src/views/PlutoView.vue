<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader model="/models/pluto.glb" modelAlt="Pluto" :info="info" />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/plutobg.jpg')"
    title="Pluto"
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
            text: "Aphelion:<br>7.37593 billion km<br><br>Perihelion:<br>4.43682 billion km",
          },
          {
            heading: "Equatorial Radius",
            text: "1,151 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "7,231.9km",
          },
          {
            heading: "Mass",
            text: "1.303×10<sup>22</sup> kg",
          },
          {
            heading: "Volume",
            text: "7.057×10<sup>9</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "1.854 gm/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "1.664794×10<sup>7</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "1.212 km/s",
          },
          {
            heading: "Temperature",
            text: "44 K",
          },
          {
            heading: "Age",
            text: "4.6 billion years",
          },
        ],
      },
      article: [
        {
          heading: "Introduction",
          text: [
            `Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first object discovered in the Kuiper belt and remains the largest known body in that area. After Pluto was discovered in 1930, it was declared the ninth planet from the Sun. However, beginning in the 1990s, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt and the scattered disc, including the dwarf planet Eris, leading the International Astronomical Union (IAU) in 2006 to define the term planet formally—excluding Pluto and reclassifying it as a dwarf planet.`,
            `Pluto is the ninth-largest and tenth-most-massive known object directly orbiting the Sun. It is the largest known trans-Neptunian object by volume but is less massive than Eris. Like other Kuiper belt objects, Pluto is primarily made of ice and rock and is relatively small—one-sixth the mass of the Moon and one-third its volume. It has a moderately eccentric and inclined orbit, ranging from 30 to 49 astronomical units (4.5 to 7.3 billion kilometers; 2.8 to 4.6 billion miles) from the Sun. Therefore, Pluto periodically comes closer to the Sun than Neptune. Still, a stable orbital resonance with Neptune prevents them from colliding. As a result, light from the Sun takes 5.5 hours to reach Pluto at its average distance (39.5 AU [5.91 billion km; 3.67 billion mi]).`,
            `Pluto has five known moons: Charon (the largest, whose diameter is just over half that of Pluto), Styx, Nix, Kerberos, and Hydra. Pluto and Charon are sometimes considered a binary system because the barycenter of their orbits does not lie within either body. Pluto and Charon are tidally locked.`,
            `The New Horizons spacecraft performed a flyby of Pluto on July 14, 2015, becoming the first and, to date, only spacecraft to do so. During its brief flyby, New Horizons made detailed measurements and observations of Pluto and its moons. In September 2016, astronomers announced that the reddish-brown cap of the north pole of Charon is composed of tholins, organic macromolecules that may be ingredients for the emergence of life, and produced from methane, nitrogen, and other gases released from the atmosphere of Pluto and transferred 19,000 km (12,000 mi) to the orbiting moon.`,
          ],
        },
        {
          heading: "Discovery",
          text: [
            `In the 1840s, Urbain Le Verrier used Newtonian mechanics to predict the position of the then-undiscovered planet Neptune after analyzing perturbations in the orbit of Uranus. Subsequent observations of Neptune in the late 19th century led astronomers to speculate that Uranus's orbit was being disturbed by another planet besides Neptune.`,
            `In 1906, Percival Lowell—a wealthy Bostonian who had founded Lowell Observatory in Flagstaff, Arizona, in 1894—started an extensive project in search of a possible ninth planet, which he termed "Planet X". By 1909, Lowell and William H. Pickering had suggested several possible celestial coordinates for such a planet. Lowell and his observatory conducted his search until his death in 1916, but to no avail. Unknown to Lowell, his surveys had captured two faint images of Pluto on March 19 and April 7, 1915, but they were not recognized for what they were. There are fourteen other known precovery observations, with the earliest made by the Yerkes Observatory on August 20, 1909.`,
            `Percival's widow, Constance Lowell, entered into a ten-year legal battle with the Lowell Observatory over her husband's legacy, and the search for Planet X did not resume until 1929. Vesto Melvin Slipher, the observatory director, gave the job of locating Planet X to 23-year-old Clyde Tombaugh, who had just arrived at the observatory after Slipher had been impressed by a sample of his astronomical drawings.`,
            `Tombaugh's task was to systematically image the night sky in pairs of photographs, then examine each pair and determine whether any objects had shifted position. Using a blink comparator, he rapidly shifted back and forth between views of each of the plates to create the illusion of movement of any objects that had changed position or appearance between photographs. On February 18, 1930, after nearly a year of searching, Tombaugh discovered a possible moving object on photographic plates taken on January 23 and 29. A lesser-quality photograph taken on January 21 helped confirm the movement. After the observatory obtained further confirmatory photographs, news of the discovery was telegraphed to the Harvard College Observatory on March 13, 1930.`,
            `Pluto has yet to complete a full orbit of the Sun since its discovery, as one Plutonian year is 247.68 years long.`,
          ],
        },
        {
          heading: "Orbit",
          text: [
            `Pluto's orbital period is currently about 248 years. Its orbital characteristics are substantially different from those of the planets, which follow nearly circular orbits around the Sun close to a flat reference plane called the ecliptic. In contrast, Pluto's orbit is moderately inclined relative to the ecliptic (over 17°) and moderately eccentric (elliptical). This eccentricity means a small region of Pluto's orbit lies closer to the Sun than Neptune's. The Pluto–Charon barycenter came to perihelion on September 5, 1989,[i] and was last closer to the Sun than Neptune between February 7, 1979, and February 11, 1999.`,
            `Although the 3:2 resonance with Neptune (see below) is maintained, Pluto's inclination and eccentricity behave in a chaotic manner. Computer simulations can be used to predict its position for several million years (both forward and backward in time), but after intervals much longer than the Lyapunov time of 10–20 million years, calculations become unreliable: Pluto is sensitive to immeasurably small details of the Solar System, hard-to-predict factors that will gradually change Pluto's position in its orbit.`,
            `The semi-major axis of Pluto's orbit varies between about 39.3 and 39.6 au with a period of about 19,951 years, corresponding to an orbital period varying between 246 and 249 years. The semi-major axis and period are presently getting longer.`,
          ],
        },
        {
          heading: "Surface",
          text: [
            `The plains on Pluto's surface are composed of more than 98 percent nitrogen ice, with traces of methane and carbon monoxide. Nitrogen and carbon monoxide are most abundant on the anti-Charon face of Pluto (around 180° longitude, where Tombaugh Regio's western lobe, Sputnik Planitia, is located), whereas methane is most abundant near 300° east. The mountains are made of water ice. Pluto's surface is quite varied, with large differences in both brightness and color. Pluto is one of the most contrastive bodies in the Solar System, with as much contrast as Saturn's moon Iapetus. The color varies from charcoal black, to dark orange and white. Pluto's color is more similar to that of Io with slightly more orange and significantly less red than Mars. Notable geographical features include Tombaugh Regio, or the "Heart" (a large bright area on the side opposite Charon), Cthulhu Macula, or the "Whale" (a large dark area on the trailing hemisphere), and the "Brass Knuckles" (a series of equatorial dark areas on the leading hemisphere).`,
            `Sputnik Planitia, the western lobe of the "Heart", is a 1,000 km-wide basin of frozen nitrogen and carbon monoxide ices, divided into polygonal cells, which are interpreted as convection cells that carry floating blocks of water ice crust and sublimation pits towards their margins; there are obvious signs of glacial flows both into and out of the basin. It has no craters that were visible to New Horizons, indicating that its surface is less than 10 million years old.`,
            `Latest studies have shown that the surface has an age of 180000 years. The New Horizons science team summarized initial findings as "Pluto displays a surprisingly wide variety of geological landforms, including those resulting from glaciological and surface–atmosphere interactions as well as impact, tectonic, possible cryovolcanic, and mass-wasting processes."`,
          ],
        },
        {
          heading: "Internal Structure",
          text: [
            `Pluto's density is 1.860±0.013 g/cm3. Because the decay of radioactive elements would eventually heat the ices enough for the rock to separate from them, scientists expect that Pluto's internal structure is differentiated, with the rocky material having settled into a dense core surrounded by a mantle of water ice. The pre–New Horizons estimate for the diameter of the core is 1700 km, 70% of Pluto's diameter. Pluto has no magnetic field.`,
            `It is possible that such heating continues today, creating a subsurface ocean of liquid water 100 to 180 km thick at the core–mantle boundary. In September 2016, scientists at Brown University simulated the impact thought to have formed Sputnik Planitia, and showed that it might have been the result of liquid water upwelling from below after the collision, implying the existence of a subsurface ocean at least 100 km deep. In June 2020, astronomers reported evidence that Pluto may have had a subsurface ocean, and consequently may have been habitable, when it was first formed. In March 2022, they concluded that peaks on Pluto are actually a merger of "ice volcanoes", suggesting a source of heat on the body at levels previously thought not possible.`,
          ],
        },
      ],
    };
  },
};
</script>
