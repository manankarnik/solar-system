<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader
    model="/solar-system/models/sun.glb"
    modelAlt="Sun"
    :info="info"
  />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/solar-system/images/sunbg.jpg')"
    title="The Sun"
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
            heading: "Mean Distance from Earth",
            text: "1 AU ≈ 1.496×10<sup>8</sup> km",
          },
          {
            heading: "Equatorial Radius",
            text: "6.957×10<sup>8</sup> km",
          },
          {
            heading: "Equatorial Circumference",
            text: "4.379×10<sup>6</sup> km",
          },
          {
            heading: "Mass",
            text: "1.9885×10<sup>30</sup> kg",
          },
          {
            heading: "Volume",
            text: "1.41×10<sup>18</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "1.408 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "6.09×10<sup>12</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "617.7 km/s",
          },
          {
            heading: "Temperature",
            text: "Center: 1.57×10<sup>7</sup> K<br><br>Photosphere: 5,772 K",
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
            `The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth.`,
            `The Sun's diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth, comprising about 99.86% of the total mass of the Solar System. Roughly three-quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.`,
            `The Sun is a G-type main-sequence star (G2V). As such, it is informally, and not completely accurately, referred to as a yellow dwarf (its light is actually white). It formed approximately 4.6 billion years ago from the gravitational collapse of matter within a region of a large molecular cloud. Most of this matter gathered in the center, whereas the rest flattened into an orbiting disk that became the Solar System. The central mass became so hot and dense that it eventually initiated nuclear fusion in its core. It is thought that almost all stars form by this process.`,
            `Every second, the Sun's core fuses about 600 million tons of hydrogen into helium, and in the process converts 4 million tons of matter into energy. This energy, which can take between 10,000 and 170,000 years to escape the core, is the source of the Sun's light and heat. When hydrogen fusion in its core has diminished to the point at which the Sun is no longer in hydrostatic equilibrium, its core will undergo a marked increase in density and temperature while its outer layers expand, eventually transforming the Sun into a red giant. It is calculated that the Sun will become sufficiently large to engulf the current orbits of Mercury and Venus, and render Earth uninhabitable – but not for about five billion years. After this, it will shed its outer layers and become a dense type of cooling star known as a white dwarf, and no longer produce energy by fusion, but still glow and give off heat from its previous fusion.`,
            `The enormous effect of the Sun on Earth has been recognized since prehistoric times. The Sun was thought of by some cultures as a deity. The synodic rotation of Earth and its orbit around the Sun are the basis of some solar calendars. The predominant calendar in use today is the Gregorian calendar which is based upon the standard 16th-century interpretation of the Sun's observed movement as actual movement.`,
          ],
        },
        {
          heading: "General Characteristics",
          text: [
            `The Sun is a G-type main-sequence star that constitutes about 99.86% of the mass of the Solar System. The Sun has an absolute magnitude of +4.83, estimated to be brighter than about 85% of the stars in the Milky Way, most of which are red dwarfs. The Sun is a Population I, or heavy-element-rich,[b] star. The formation of the Sun may have been triggered by shockwaves from one or more nearby supernovae. This is suggested by a high abundance of heavy elements in the Solar System, such as gold and uranium, relative to the abundances of these elements in so-called Population II, heavy-element-poor, stars. The heavy elements could most plausibly have been produced by endothermic nuclear reactions during a supernova, or by transmutation through neutron absorption within a massive second-generation star.`,
            `The Sun is by far the brightest object in the Earth's sky, with an apparent magnitude of −26.74. This is about 13 billion times brighter than the next brightest star, Sirius, which has an apparent magnitude of −1.46. One astronomical unit (about 150,000,000 km; 93,000,000 mi) is defined as the mean distance of the Sun's center to Earth's center, though the distance varies as Earth moves from perihelion in January to aphelion in July. The distances can vary between 147,098,074 km (perihelion) and 152,097,701 km (aphelion), and extreme values can range from 147,083,346 km to 152,112,126 km. At its average distance, light travels from the Sun's horizon to Earth's horizon in about 8 minutes and 20 seconds, while light from the closest points of the Sun and Earth takes about two seconds less. The energy of this sunlight supports almost all life[c] on Earth by photosynthesis, and drives Earth's climate and weather.`,
            `The Sun does not have a definite boundary, but its density decreases exponentially with increasing height above the photosphere. For the purpose of measurement, the Sun's radius is considered to be the distance from its center to the edge of the photosphere, the apparent visible surface of the Sun. By this measure, the Sun is a near-perfect sphere with an oblateness estimated at 9 millionths, which means that its polar diameter differs from its equatorial diameter by only 10 kilometers (6.2 mi). The tidal effect of the planets is weak and does not significantly affect the shape of the Sun. The Sun rotates faster at its equator than at its poles. This differential rotation is caused by convective motion due to heat transport and the Coriolis force due to the Sun's rotation. In a frame of reference defined by the stars, the rotational period is approximately 25.6 days at the equator and 33.5 days at the poles. Viewed from Earth as it orbits the Sun, the apparent rotational period of the Sun at its equator is about 28 days. Viewed from a vantage point above its north pole, the Sun rotates counterclockwise around its axis of spin.`,
          ],
        },
        {
          heading: "Composition",
          text: [
            `The Sun is composed primarily of the chemical elements hydrogen and helium. At this time in the Sun's life, they account for 74.9% and 23.8% of the mass of the Sun in the photosphere, respectively. All heavier elements, called metals in astronomy, account for less than 2% of the mass, with oxygen (roughly 1% of the Sun's mass), carbon (0.3%), neon (0.2%), and iron (0.2%) being the most abundant.`,
            `The Sun's original chemical composition was inherited from the interstellar medium out of which it formed. Originally it would have contained about 71.1% hydrogen, 27.4% helium, and 1.5% heavier elements. The hydrogen and most of the helium in the Sun would have been produced by Big Bang nucleosynthesis in the first 20 minutes of the universe, and the heavier elements were produced by previous generations of stars before the Sun was formed, and spread into the interstellar medium during the final stages of stellar life and by events such as supernovae.`,
            `Since the Sun formed, the main fusion process has involved fusing hydrogen into helium. Over the past 4.6 billion years, the amount of helium and its location within the Sun has gradually changed. Within the core, the proportion of helium has increased from about 24% to about 60% due to fusion, and some of the helium and heavy elements have settled from the photosphere towards the center of the Sun because of gravity. The proportions of heavier elements is unchanged. Heat is transferred outward from the Sun's core by radiation rather than by convection (see Radiative zone below), so the fusion products are not lifted outward by heat; they remain in the core and gradually an inner core of helium has begun to form that cannot be fused because presently the Sun's core is not hot or dense enough to fuse helium. In the current photosphere, the helium fraction is reduced, and the metallicity is only 84% of what it was in the protostellar phase (before nuclear fusion in the core started). In the future, helium will continue to accumulate in the core, and in about 5 billion years this gradual build-up will eventually cause the Sun to exit the main sequence and become a red giant.`,
            `The chemical composition of the photosphere is normally considered representative of the composition of the primordial Solar System. The solar heavy-element abundances described above are typically measured both using spectroscopy of the Sun's photosphere and by measuring abundances in meteorites that have never been heated to melting temperatures. These meteorites are thought to retain the composition of the protostellar Sun and are thus not affected by the settling of heavy elements. The two methods generally agree well.`,
          ],
        },
      ],
    };
  },
};
</script>
