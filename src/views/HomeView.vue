<script setup>
import ScrollDownButton from "../components/ScrollDownButton.vue";
import CardItem from "../components/CardItem.vue";
import ArticleItem from "../components/ArticleItem.vue";
</script>

<template>
  <section id="top">
    <div>
      <div class="text-box">
        <h1>The Solar System</h1>
        <p>
          Our solar system consists of our star, the Sun, and everything bound
          to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
          Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
          moons; and millions of asteroids, comets, and meteoroids.
        </p>
      </div>
    </div>
    <div id="container">
      <ScrollDownButton to="#mid" width="100%" />
    </div>
  </section>

  <section id="mid">
    <div id="main-container">
      <a
        @click="
          forward = false;
          index -= 1;
          if (index < 0) index = 2;
        "
        class="side-buttons"
      >
        <div>&lt;</div>
      </a>
      <div class="card-container">
        <TransitionGroup
          :name="forward ? 'slide-left' : 'slide-right'"
          mode="out-in"
        >
          <div class="slide" v-show="index == 0" key="0">
            <h2>The Center of Attraction And The Forgotten Dwarf</h2>
            <div class="flex-box">
              <CardItem
                href="/sun"
                src="/solar-system/images/sun.png"
                name="Sun"
                desc="The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth."
              />
              <CardItem
                href="/pluto"
                src="/solar-system/images/pluto.png"
                name="Pluto"
                desc="Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first object discovered in the Kuiper belt and remains the largest known body in that area. After Pluto was discovered in 1930, it was declared the ninth planet from the Sun."
              />
            </div>
          </div>
          <div class="slide" v-show="index == 1" key="1">
            <h2>The Inner Planets</h2>
            <div class="flex-box">
              <CardItem
                v-for="planet in innerPlanets"
                :key="planet"
                :href="planet.href"
                :src="planet.src"
                :name="planet.name"
                :desc="planet.desc"
              />
            </div>
          </div>
          <div class="slide" v-show="index == 2" key="2">
            <h2>The Outer Planets</h2>
            <div class="flex-box">
              <CardItem
                v-for="planet in outerPlanets"
                :key="planet"
                :href="planet.href"
                :src="planet.src"
                :name="planet.name"
                :desc="planet.desc"
              />
            </div>
          </div>
        </TransitionGroup>
      </div>
      <a
        @click="
          forward = true;
          index += 1;
          if (index > 2) index = 0;
        "
        class="side-buttons"
      >
        <div>&gt;</div>
      </a>
    </div>

    <ScrollDownButton to="#bot" width="60%" />
  </section>
  <ArticleItem
    id="bot"
    backgroundImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/solar-system/images/solar_system.jpg')"
    title="Solar System"
    :article="article"
  />
</template>

<script>
export default {
  data() {
    return {
      forward: false,
      index: 0,
      innerPlanets: [
        {
          name: "Mercury",
          href: "/Mercury",
          src: "/solar-system/images/mercury.png",
          desc: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes.",
        },
        {
          name: "Venus",
          href: "/Venus",
          src: "/solar-system/images/venus.png",
          desc: "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.",
        },
        {
          name: "Earth",
          href: "/Earth",
          src: "/solar-system/images/earth.png",
          desc: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water.",
        },
        {
          name: "Mars",
          href: "/Mars",
          src: "/solar-system/images/mars.png",
          desc: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war. Mars is a terrestrial planet with a thin atmosphere, and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel.",
        },
      ],
      outerPlanets: [
        {
          name: "Jupiter",
          href: "/Jupiter",
          src: "/solar-system/images/jupiter.png",
          desc: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after the Roman god Jupiter, the king of the gods.",
        },
        {
          name: "Saturn",
          href: "/Saturn",
          src: "/solar-system/images/saturn.png",
          desc: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.",
        },
        {
          name: "Uranus",
          href: "/Uranus",
          src: "/solar-system/images/uranus.png",
          desc: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).",
        },
        {
          name: "Neputne",
          href: "/Neptune",
          src: "/solar-system/images/neptune.png",
          desc: "Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.",
        },
      ],
      article: [
        {
          heading: "Introduction",
          text: [
            `The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. It formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority (99.86%) of the system's mass is in the Sun, with most of the remaining mass contained in the planet Jupiter. The four inner system planets—Mercury, Venus, Earth and Mars—are terrestrial planets, being composed primarily of rock and metal. The four giant planets of the outer system are substantially larger and more massive than the terrestrials. The two largest, Jupiter and Saturn, are gas giants, being composed mainly of hydrogen and helium; the next two, Uranus and Neptune, are ice giants, being composed mostly of volatile substances with relatively high melting points compared with hydrogen and helium, such as water, ammonia, and methane. All eight planets have nearly circular orbits that lie near the plane of Earth's orbit, called the ecliptic.`,
            `There are an unknown number of smaller dwarf planets and innumerable small Solar System bodies orbiting the Sun.[d] Six of the major planets, the six largest possible dwarf planets, and many of the smaller bodies are orbited by natural satellites, commonly called "moons" after the Moon. Two natural satellites, Jupiter's moon Ganymede and Saturn's moon Titan, are larger but not more massive than Mercury, the smallest terrestrial planet, and Jupiter's moon Callisto is nearly as large. Each of the giant planets and some smaller bodies are encircled by planetary rings of ice, dust and moonlets. The asteroid belt, which lies between the orbits of Mars and Jupiter, contains objects composed of rock, metal and ice. Beyond Neptune's orbit lie the Kuiper belt and scattered disc, which are populations of objects composed mostly of ice and rock.`,
            `In the outer reaches of the Solar System lies a class of minor planets called detached objects. There is considerable debate as to how many such objects there will prove to be. Some of these objects are large enough to have rounded under their own gravity and thus to be categorized as dwarf planets. Astronomers generally accept about nine objects as dwarf planets: the asteroid Ceres, the Kuiper-belt objects Pluto, Orcus, Haumea, Quaoar and Makemake, the scattered-disk objects Gonggong and Eris, and Sedna.[d] Various small-body populations, including comets, centaurs and interplanetary dust clouds, freely travel between the regions of the Solar System.`,
            `The solar wind, a stream of charged particles flowing outwards from the Sun, creates a bubble-like region of interplanetary medium in the interstellar medium known as the heliosphere. The heliopause is the point at which pressure from the solar wind is equal to the opposing pressure of the interstellar medium; it extends out to the edge of the scattered disc. The Oort cloud, which is thought to be the source for long-period comets, may also exist at a distance roughly a thousand times further than the heliosphere. The Solar System is located 26,000 light-years from the center of the Milky Way galaxy in the Orion Arm, which contains most of the visible stars in the night sky. The nearest stars are within the so-called Local Bubble, with the closest, Proxima Centauri, at 4.2441 light-years.`,
          ],
        },
        {
          heading: "Orbits",
          text: [
            `The planets and other large objects in orbit around the Sun lie near the plane of Earth's orbit, known as the ecliptic. Smaller icy objects such as comets frequently orbit at significantly greater angles to this plane. Most of the planets in the Solar System have secondary systems of their own, being orbited by natural satellites called moons. Many of the largest natural satellites are in synchronous rotation, with one face permanently turned toward their parent. The four giant planets have planetary rings, thin bands of tiny particles that orbit them in unison.`,
            `As a result of the formation of the Solar System, planets and most other objects orbit the Sun in the same direction that the Sun is rotating. That is, counter-clockwise, as viewed from above Earth's north pole. There are exceptions, such as Halley's Comet. Most of the larger moons orbit their planets in prograde direction, matching the planetary rotation; Neptune's moon Triton is the largest to orbit in the opposite, retrograde manner. Most larger objects rotate around their own axes in the prograde direction relative to their orbit, though the rotation of Venus is retrograde.`,
            `To a good first approximation, Kepler's laws of planetary motion describe the orbits of objects about the Sun. These laws stipulate that each object travels along an ellipse with the Sun at one focus, which causes the body's distance from the Sun to vary over the course of its year. A body's closest approach to the Sun is called its perihelion, whereas its most distant point from the Sun is called its aphelion. The orbits of the planets are nearly circular, but many comets, asteroids, and Kuiper belt objects follow highly elliptical orbits. Kepler's laws only account for the influence of the Sun's gravity upon an orbiting body, not the gravitational pulls of different bodies upon each other. On a human time scale, these additional perturbations can be accounted for using numerical models, but the planetary system can change chaotically over billions of years.`,
            `The angular momentum of the Solar System is a measure of the total amount of orbital and rotational momentum possessed by all its moving components. Although the Sun dominates the system by mass, it accounts for only about 2% of the angular momentum. The planets, dominated by Jupiter, account for most of the rest of the angular momentum due to the combination of their mass, orbit, and distance from the Sun, with a possibly significant contribution from comets.`,
          ],
        },
        {
          heading: "Composition",
          text: [
            `The overall structure of the charted regions of the Solar System consists of the Sun, four smaller inner planets surrounded by a belt of mostly rocky asteroids, and four giant planets surrounded by the Kuiper belt of mostly icy objects. Astronomers sometimes informally divide this structure into separate regions. The inner Solar System includes the four terrestrial planets and the asteroid belt. The outer Solar System is beyond the asteroids, including the four giant planets. Since the discovery of the Kuiper belt, the outermost parts of the Solar System are considered a distinct region consisting of the objects beyond Neptune.`,
            `The principal component of the Solar System is the Sun, a low-mass star that contains 99.86% of the system's known mass and dominates it gravitationally. The Sun's four largest orbiting bodies, the giant planets, account for 99% of the remaining mass, with Jupiter and Saturn together comprising more than 90%. The remaining objects of the Solar System (including the four terrestrial planets, the dwarf planets, moons, asteroids, and comets) together comprise less than 0.002% of the Solar System's total mass.`,
            `The Sun is composed of roughly 98% hydrogen and helium, as are Jupiter and Saturn. A composition gradient exists in the Solar System, created by heat and light pressure from the early Sun; those objects closer to the Sun, which are more affected by heat and light pressure, are composed of elements with high melting points. Objects farther from the Sun are composed largely of materials with lower melting points. The boundary in the Solar System beyond which those volatile substances could coalesce is known as the frost line, and it lies at roughly five times the Earth's distance from the Sun.`,
            `The objects of the inner Solar System are composed mostly of rocky materials, such as silicates, iron or nickel. Jupiter and Saturn are composed mainly of gases with extremely low melting points and high vapour pressure, such as hydrogen, helium, and neon. Ices, like water, methane, ammonia, hydrogen sulfide, and carbon dioxide, have melting points up to a few hundred kelvins. They can be found as ices, liquids, or gases in various places in the Solar System. Icy substances comprise the majority of the satellites of the giant planets, as well as most of Uranus and Neptune (the so-called "ice giants") and the numerous small objects that lie beyond Neptune's orbit. Together, gases and ices are referred to as volatiles.`,
          ],
        },
        {
          heading: "Formation and evolution",
          text: [
            `The Solar System formed 4.568 billion years ago from the gravitational collapse of a region within a large molecular cloud. This initial cloud was likely several light-years across and probably birthed several stars. As is typical of molecular clouds, this one consisted mostly of hydrogen, with some helium, and small amounts of heavier elements fused by previous generations of stars. As the region that would become the Solar System, known as the pre-solar nebula, collapsed, conservation of angular momentum caused it to rotate faster. The centre, where most of the mass collected, became increasingly hotter than the surrounding disc. As the contracting nebula rotated faster, it began to flatten into a protoplanetary disc with a diameter of roughly 200 AU (30 billion km; 19 billion mi) and a hot, dense protostar at the centre. The planets formed by accretion from this disc, in which dust and gas gravitationally attracted each other, coalescing to form ever larger bodies. Hundreds of protoplanets may have existed in the early Solar System, but they either merged or were destroyed or ejected, leaving the planets, dwarf planets, and leftover minor bodies.`,
            `Due to their higher boiling points, only metals and silicates could exist in solid form in the warm inner Solar System close to the Sun, and these would eventually form the rocky planets of Mercury, Venus, Earth, and Mars. Because metallic elements only comprised a very small fraction of the solar nebula, the terrestrial planets could not grow very large. The giant planets (Jupiter, Saturn, Uranus, and Neptune) formed further out, beyond the frost line, the point between the orbits of Mars and Jupiter where material is cool enough for volatile icy compounds to remain solid. The ices that formed these planets were more plentiful than the metals and silicates that formed the terrestrial inner planets, allowing them to grow massive enough to capture large atmospheres of hydrogen and helium, the lightest and most abundant elements. Leftover debris that never became planets congregated in regions such as the asteroid belt, Kuiper belt, and Oort cloud. The Nice model is an explanation for the creation of these regions and how the outer planets could have formed in different positions and migrated to their current orbits through various gravitational interactions.`,
            `Within 50 million years, the pressure and density of hydrogen in the centre of the protostar became great enough for it to begin thermonuclear fusion. The temperature, reaction rate, pressure, and density increased until hydrostatic equilibrium was achieved: the thermal pressure counterbalancing the force of gravity. At this point, the Sun became a main-sequence star. The main-sequence phase, from beginning to end, will last about 10 billion years for the Sun compared to around two billion years for all other phases of the Sun's pre-remnant life combined. Solar wind from the Sun created the heliosphere and swept away the remaining gas and dust from the protoplanetary disc into interstellar space. As helium accumulates at its core the Sun is growing brighter; early in its main-sequence life its brightness was 70% that of what it is today.`,
            `The Solar System will remain roughly as it is known today until the hydrogen in the core of the Sun has been entirely converted to helium, which will occur roughly 5 billion years from now. This will mark the end of the Sun's main-sequence life. At that time, the core of the Sun will contract with hydrogen fusion occurring along a shell surrounding the inert helium, and the energy output will be greater than at present. The outer layers of the Sun will expand to roughly 260 times its current diameter, and the Sun will become a red giant. Because of its increased surface area, the surface of the Sun will be cooler (2,600 K (2,330 °C; 4,220 °F) at its coolest) than it is on the main sequence.`,
            `The expanding Sun is expected to vaporize Mercury and render Earth uninhabitable. Eventually, the core will be hot enough for helium fusion; the Sun will burn helium for a fraction of the time it burned hydrogen in the core. The Sun is not massive enough to commence the fusion of heavier elements, and nuclear reactions in the core will dwindle. Its outer layers will be ejected into space, leaving behind a dense white dwarf, half the original mass of the Sun but only the size of Earth. The ejected outer layers will form what is known as a planetary nebula, returning some of the material that formed the Sun—but now enriched with heavier elements like carbon—to the interstellar medium.`,
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../styles/home.css";
</style>
