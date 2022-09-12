<script setup>
import PlanetHeader from "../components/PlanetHeader.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <PlanetHeader model="/models/earth.glb" modelAlt="Earth" :info="info" />
  <ArticleItem
    id="mid"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/earthbg.jpg')"
    title="Earth"
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
            text: "Aphelion:<br>152,100,000 km<br><br>Perihelion:<br>147,095,000 km",
          },
          {
            heading: "Equatorial Radius",
            text: "6,378.137 km",
          },
          {
            heading: "Equatorial Circumference",
            text: "40,075.017 km",
          },
          {
            heading: "Mass",
            text: "5.97237×10<sup>24</sup> kg",
          },
          {
            heading: "Volume",
            text: "1.08321×10<sup>12</sup> km<sup>3</sup>",
          },
        ],
        right: [
          {
            heading: "Average Density",
            text: "5.514 g/cm<sup>3</sup>",
          },
          {
            heading: "Surface Area",
            text: "510,072,000 km<sup>2</sup>",
          },
          {
            heading: "Escape Velocity",
            text: "11.186 km",
          },
          {
            heading: "Temperature",
            text: "287.15 K",
          },
          {
            heading: "Age",
            text: "4.543 billion years",
          },
        ],
      },
      article: [
        {
          heading: "Introduction",
          text: [
            `Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.`,
            `Earth's atmosphere consists mostly of nitrogen and oxygen. More solar energy is received by tropical regions than polar regions and is redistributed by atmospheric and ocean circulation. Water vapor is widely present in the atmosphere and forms clouds that cover most of the planet. Greenhouse gases in the atmosphere like carbon dioxide (CO2) trap a part of the energy from the Sun close to the surface. A region's climate is governed by latitude, but also by elevation and proximity to moderating oceans. Severe weather, such as tropical cyclones, thunderstorms, and heatwaves, occurs in most areas and greatly impacts life.`,
            `Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest and most massive. Earth is about eight light minutes away from the Sun and orbits it, taking a year (about 365.25 days) to complete one revolution. Earth rotates around its own axis in slightly less than a day (in about 23 hours and 56 minutes). Earth's axis of rotation is tilted with respect to the perpendicular to its orbital plane around the Sun, producing seasons. Earth is orbited by one permanent natural satellite, the Moon, which orbits Earth at 380,000 km (1.3 light seconds) and is roughly a quarter as wide as Earth. The Moon always faces the Earth with the same side through tidal locking and causes tides, stabilizes Earth's axis, and gradually slows its rotation.`,
            `Earth formed over 4.5 billion years ago. During the first billion years of Earth's history, the ocean formed and then life developed within it. Life spread globally and began to affect Earth's atmosphere and surface, leading to Earth's Great Oxidation Event two billion years ago. Humans emerged 300,000 years ago, and have reached a population of almost 8 billion today. Humans depend on Earth's biosphere and natural resources for their survival, but have increasingly impacted Earth's environment. Today, humanity's impact on Earth's climate, soils, waters, and ecosystems is unsustainable, threatening people's lives and causing widespread extinction of other life.`,
          ],
        },
        {
          heading: "Formation",
          text: [
            `The oldest material found in the Solar System is dated to 4.5682 Ga (billion years) ago. By 4.54±0.04 Ga the primordial Earth had formed. The bodies in the Solar System formed and evolved with the Sun. In theory, a solar nebula partitions a volume out of a molecular cloud by gravitational collapse, which begins to spin and flatten into a circumstellar disk, and then the planets grow out of that disk with the Sun. A nebula contains gas, ice grains, and dust (including primordial nuclides). According to nebular theory, planetesimals formed by accretion, with the primordial Earth being estimated as likely taking anywhere from 70 to 100 million years to form.`,
            `Estimates of the age of the Moon range from 4.5 Ga to significantly younger. A leading hypothesis is that it was formed by accretion from material loosed from Earth after a Mars-sized object with about 10% of Earth's mass, named Theia, collided with Earth. It hit Earth with a glancing blow and some of its mass merged with Earth. Between approximately 4.1 and 3.8 Ga, numerous asteroid impacts during the Late Heavy Bombardment caused significant changes to the greater surface environment of the Moon and, by inference, to that of Earth.`,
          ],
        },
        {
          heading: "Geological History",
          text: [
            `Earth's atmosphere and oceans were formed by volcanic activity and outgassing. Water vapor from these sources condensed into the oceans, augmented by water and ice from asteroids, protoplanets, and comets. Sufficient water to fill the oceans may have been on Earth since it formed. In this model, atmospheric greenhouse gases kept the oceans from freezing when the newly forming Sun had only 70% of its current luminosity. By 3.5 Ga, Earth's magnetic field was established, which helped prevent the atmosphere from being stripped away by the solar wind.`,
            `As the molten outer layer of Earth cooled it formed the first solid crust, which is thought to have been mafic in composition. The first continental crust, which was more felsic in composition, formed by the partial melting of this mafic crust. The presence of grains of the mineral zircon of Hadean age in Eoarchean sedimentary rocks suggests that at least some felsic crust existed as early as 4.4 Ga, only 140 Ma after Earth's formation. There are two main models of how this initial small volume of continental crust evolved to reach its current abundance: (1) a relatively steady growth up to the present day, which is supported by the radiometric dating of continental crust globally and (2) an initial rapid growth in the volume of continental crust during the Archean, forming the bulk of the continental crust that now exists, which is supported by isotopic evidence from hafnium in zircons and neodymium in sedimentary rocks. The two models and the data that support them can be reconciled by large-scale recycling of the continental crust, particularly during the early stages of Earth's history.`,
            `New continental crust forms as a result of plate tectonics, a process ultimately driven by the continuous loss of heat from Earth's interior. Over the period of hundreds of millions of years, tectonic forces have caused areas of continental crust to group together to form supercontinents that have subsequently broken apart. At approximately 750 Ma, one of the earliest known supercontinents, Rodinia, began to break apart. The continents later recombined to form Pannotia at 600–540 Ma, then finally Pangaea, which also began to break apart at 180 Ma.`,
            `The most recent pattern of ice ages began about 40 Ma, and then intensified during the Pleistocene about 3 Ma. High- and middle-latitude regions have since undergone repeated cycles of glaciation and thaw, repeating about every 21,000, 41,000 and 100,000 years. The Last Glacial Period, colloquially called the "last ice age", covered large parts of the continents, up to the middle latitudes, in ice and ended about 11,700 years ago.`,
          ],
        },
        {
          heading: "Origin of Life and Evolution",
          text: [
            `Chemical reactions led to the first self-replicating molecules about four billion years ago. A half billion years later, the last common ancestor of all current life arose. The evolution of photosynthesis allowed the Sun's energy to be harvested directly by life forms. The resultant molecular oxygen (O2) accumulated in the atmosphere and due to interaction with ultraviolet solar radiation, formed a protective ozone layer (O3) in the upper atmosphere. The incorporation of smaller cells within larger ones resulted in the development of complex cells called eukaryotes. True multicellular organisms formed as cells within colonies became increasingly specialized. Aided by the absorption of harmful ultraviolet radiation by the ozone layer, life colonized Earth's surface. Among the earliest fossil evidence for life is microbial mat fossils found in 3.48 billion-year-old sandstone in Western Australia, biogenic graphite found in 3.7 billion-year-old metasedimentary rocks in Western Greenland, and remains of biotic material found in 4.1 billion-year-old rocks in Western Australia. The earliest direct evidence of life on Earth is contained in 3.45 billion-year-old Australian rocks showing fossils of microorganisms.`,
            `During the Neoproterozoic, 1000 to 539 Ma, much of Earth might have been covered in ice. This hypothesis has been termed "Snowball Earth", and it is of particular interest because it preceded the Cambrian explosion, when multicellular life forms significantly increased in complexity. Following the Cambrian explosion, 535 Ma, there have been at least five major mass extinctions and many minor ones. Apart from the proposed current Holocene extinction event, the most recent was 66 Ma, when an asteroid impact triggered the extinction of the non-avian dinosaurs and other large reptiles, but largely spared small animals such as insects, mammals, lizards and birds. Mammalian life has diversified over the past 66 Mys, and several million years ago an African ape gained the ability to stand upright. This facilitated tool use and encouraged communication that provided the nutrition and stimulation needed for a larger brain, which led to the evolution of humans. The development of agriculture, and then civilization, led to humans having an influence on Earth and the nature and quantity of other life forms that continues to this day.`,
          ],
        },
      ],
    };
  },
};
</script>
