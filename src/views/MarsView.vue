<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader
    model="/src/assets/models/mars.glb"
    modelAlt="Mars"
    :info="info"
  />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/marsbg.jpg')"
    title="Mars"
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
            text: "Aphelion:<br>249,261,000 km<br><br>Perihelion:<br>206,650,000 km",
          },
          {
            heading: "Equatorial Radius",
            text: "3,396.2 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "21,296.9 km",
          },
          {
            heading: "Mass",
            text: "6.4171×10<sup>23</sup> kg",
          },
          {
            heading: "Volume",
            text: "1.63118×10<sup>11</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "3.9335 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "144.37×10<sup>6</sup> km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "5.027 km/s",
          },
          {
            heading: "Temperature",
            text: "333.15 K",
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
            `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere, and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It has two small and irregularly shaped moons: Phobos and Deimos.`,
            `Some of the most notable surface features on Mars include Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System, and Valles Marineris, one of the largest canyons in the Solar System. The Borealis basin in the Northern Hemisphere covers approximately 40% of the planet and may be a large impact feature. Days and seasons on Mars are comparable to those of Earth, as the planets have a similar rotation period and tilt of the rotational axis relative to the ecliptic plane. Liquid water on the surface of Mars cannot exist due to low atmospheric pressure, which is less than 1% of the atmospheric pressure on Earth. Both of Mars's polar ice caps appear to be made largely of water. In the distant past, Mars was likely wetter, and thus possibly more suited for life. However, it is unknown whether life has ever existed on Mars.`,
            `Mars has been explored by several uncrewed spacecraft, beginning with Mariner 4 in 1965. NASA's Viking 1 lander transmitted in 1976 the first images from the Martian surface. Two countries have successfully deployed rovers on Mars, the United States first doing so with Sojourner in 1997 and China with Zhurong in 2021. There are also planned future missions to Mars, such as a Mars sample-return mission set to happen in 2026, and the Rosalind Franklin rover mission, which was intended to launch in 2018 but was delayed to 2024.`,
            `Mars can be viewed from Earth with the naked eye, as can its reddish coloring. This appearance, due to the iron oxide prevalent on its surface, has led to Mars often being called the Red Planet. It is among the brightest objects in Earth's sky, with an apparent magnitude that reaches −2.94, comparable to that of Jupiter and surpassed only by Venus, the Moon and the Sun. Historically, Mars has been observed since ancient times, and over the millennia, has been featured in culture and the arts in ways that have reflected humanity's growing knowledge of it.`,
          ],
        },
        {
          heading: "Internal Structure",
          text: [
            `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur. This iron(II) sulfide core is thought to be twice as rich in lighter elements as Earth's. The core is surrounded by a silicate mantle that formed many of the tectonic and volcanic features on the planet, but it appears to be dormant. Besides silicon and oxygen, the most abundant elements in the Martian crust are iron, magnesium, aluminium, calcium, and potassium. The average thickness of the planet's crust is about 50 kilometres (31 mi), with a maximum thickness of 125 kilometres (78 mi). By comparison, Earth's crust averages 40 kilometres (25 mi) in thickness.`,
            `Mars is seismically active, with InSight detecting and recording over 450 marsquakes and related events in 2019. In 2021 it was reported that based on eleven low-frequency Marsquakes detected by the InSight lander the core of Mars is indeed liquid and has a radius of about 1830±40 km and a temperature around 1900–2000 K. The Martian core radius is more than half the radius of Mars and about half the size of the Earth's core. This is somewhat larger than models predicted, suggesting that the core contains some amount of lighter elements like oxygen and hydrogen in addition to the iron–nickel alloy and about 15% of sulfur.`,
            `The core of Mars is overlain by the rocky mantle, which, however, does not seem to have a layer analogous to the Earth's lower mantle. The Martian mantle appears to be solid down to the depth of about 500 km, where the low-velocity zone (partially melted asthenosphere) begins. Below the asthenosphere the velocity of seismic waves starts to grow again and at the depth of about 1050 km there lies the boundary of the transition zone. At the surface of Mars there lies a crust with the average thickness of about 24–72 km.`,
          ],
        },
        {
          heading: "Surface Geology",
          text: [
            `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The Martian surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt and may be similar to andesitic rocks on Earth, or silica glass. Regions of low albedo suggest concentrations of plagioclase feldspar, with northern low albedo regions displaying higher than normal concentrations of sheet silicates and high-silicon glass. Parts of the southern highlands include detectable amounts of high-calcium pyroxenes. Localized concentrations of hematite and olivine have been found. Much of the surface is deeply covered by finely grained iron(III) oxide dust.`,
            `Although Mars has no evidence of a structured global magnetic field, observations show that parts of the planet's crust have been magnetized, suggesting that alternating polarity reversals of its dipole field have occurred in the past. This paleomagnetism of magnetically susceptible minerals is similar to the alternating bands found on Earth's ocean floors. One theory, published in 1999 and re-examined in October 2005 (with the help of the Mars Global Surveyor), is that these bands suggest plate tectonic activity on Mars four billion years ago, before the planetary dynamo ceased to function and the planet's magnetic field faded.`,
            `It is thought that, during the Solar System's formation, Mars was created as the result of a random process of run-away accretion of material from the protoplanetary disk that orbited the Sun. Mars has many distinctive chemical features caused by its position in the Solar System. Elements with comparatively low boiling points, such as chlorine, phosphorus, and sulfur, are much more common on Mars than Earth; these elements were probably pushed outward by the young Sun's energetic solar wind.`,
            `After the formation of the planets, all were subjected to the so-called "Late Heavy Bombardment". About 60% of the surface of Mars shows a record of impacts from that era, whereas much of the remaining surface is probably underlain by immense impact basins caused by those events. There is evidence of an enormous impact basin in the Northern Hemisphere of Mars, spanning 10,600 by 8,500 kilometres (6,600 by 5,300 mi), or roughly four times the size of the Moon's South Pole – Aitken basin, the largest impact basin yet discovered. This theory suggests that Mars was struck by a Pluto-sized body about four billion years ago. The event, thought to be the cause of the Martian hemispheric dichotomy, created the smooth Borealis basin that covers 40% of the planet.`,
          ],
        },
        {
          heading: "Habitability and Search for Life",
          text: [
            `During the late nineteenth century, it was widely accepted in the astronomical community that Mars had life-supporting qualities, including oxygen and water. However, in 1894 W. W. Campbell at Lick Observatory observed the planet and found that "if water vapor or oxygen occur in the atmosphere of Mars it is in quantities too small to be detected by spectroscopes then available". That observation contradicted many of the measurements of the time and was not widely accepted. Campbell and V. M. Slipher repeated the study in 1909 using better instruments, but with the same results. It wasn't until the findings were confirmed by W. S. Adams in 1925 that the myth of the Earth-like habitability of Mars was finally broken. However, even in the 1960s, articles were published on Martian biology, putting aside explanations other than life for the seasonal changes on Mars. Detailed scenarios for the metabolism and chemical cycles for a functional ecosystem were being published as late as 1962.`,
            `The current understanding of planetary habitability – the ability of a world to develop environmental conditions favorable to the emergence of life – favors planets that have liquid water on their surface. Most often this requires the orbit of a planet to lie within the habitable zone, which for the Sun is estimated to extend from within the orbit of Earth to about that of Mars. During perihelion, Mars dips inside this region, but Mars's thin (low-pressure) atmosphere prevents liquid water from existing over large regions for extended periods. The past flow of liquid water demonstrates the planet's potential for habitability. Recent evidence has suggested that any water on the Martian surface may have been too salty and acidic to support regular terrestrial life.`,
            `The lack of a magnetosphere and the extremely thin atmosphere of Mars are a challenge: the planet has little heat transfer across its surface, poor insulation against bombardment of the solar wind and insufficient atmospheric pressure to retain water in a liquid form (water instead sublimes to a gaseous state). Mars is nearly, or perhaps totally, geologically dead; the end of volcanic activity has apparently stopped the recycling of chemicals and minerals between the surface and interior of the planet.`,
            `In situ investigations have been performed on Mars by the Viking landers, Spirit and Opportunity rovers, Phoenix lander, and Curiosity rover. Evidence suggests that the planet was once significantly more habitable than it is today, but whether living organisms ever existed there remains unknown. The Viking probes of the mid-1970s carried experiments designed to detect microorganisms in Martian soil at their respective landing sites and had positive results, including a temporary increase of CO2 production on exposure to water and nutrients. This sign of life was later disputed by scientists, resulting in a continuing debate, with NASA scientist Gilbert Levin asserting that Viking may have found life. Tests conducted by the Phoenix Mars lander have shown that the soil has an alkaline pH and it contains magnesium, sodium, potassium and chloride. The soil nutrients may be able to support life, but life would still have to be shielded from the intense ultraviolet light. A 2014 analysis of Martian meteorite EETA79001 found chlorate, perchlorate, and nitrate ions in sufficiently high concentration to suggest that they are widespread on Mars. UV and X-ray radiation would turn chlorate and perchlorate ions into other, highly reactive oxychlorines, indicating that any organic molecules would have to be buried under the surface to survive.`,
            `Scientists have proposed that carbonate globules found in meteorite ALH84001, which is thought to have originated from Mars, could be fossilized microbes extant on Mars when the meteorite was blasted from the Martian surface by a meteor strike some 15 million years ago. This proposal has been met with skepticism, and an exclusively inorganic origin for the shapes has been proposed. Small quantities of methane and formaldehyde detected by Mars orbiters are both claimed to be possible evidence for life, as these chemical compounds would quickly break down in the Martian atmosphere. Alternatively, these compounds may instead be replenished by volcanic or other geological means, such as serpentinite. Impact glass, formed by the impact of meteors, which on Earth can preserve signs of life, has also been found on the surface of the impact craters on Mars. Likewise, the glass in impact craters on Mars could have preserved signs of life, if life existed at the site.`,
          ],
        },
      ],
    };
  },
};
</script>
