<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <div class="nav logo">
      <router-link to="/">
        <img src="/images/logo.png" alt="Logo" />
      </router-link>
    </div>
    <div class="nav hover nav-left">
      <ul>
        <li><router-link to="/">Solar System</router-link></li>
      </ul>
    </div>
    <div class="nav hover nav-right">
      <ul>
        <li><router-link to="/feedback">Feedback</router-link></li>
      </ul>
    </div>
    <div @mouseover="toggleMenu = true" class="nav menu">
      <img src="/images/menu.png" alt="Menu" />
    </div>
  </nav>
  <transition name="slide">
    <div
      @mouseleave="toggleMenu = false"
      class="hover menu-bar"
      v-show="toggleMenu"
    >
      <h3>Quick Navigation</h3>
      <ul>
        <li v-for="(v, i) in views" :key="i">
          <router-link :to="v.href">{{ v.name }}</router-link>
        </li>
      </ul>
    </div>
  </transition>

  <RouterView />

  <a id="top-button" href="#top"
    ><img src="images/top.png" alt="Back to top"
  /></a>

  <footer>
    <div id="footer">
      <div id="links" class="hover">
        <div style="">
          <img src="images/logo.png" alt="logo" />
          <p>&copy; 2022 Copyright: Solar System</p>
        </div>
        <div>
          <h3>Images</h3>
          <hr />
          <ul>
            <li v-for="(ref, i) in footerReferences.images" :key="i">
              <a :href="ref.href">{{ ref.name }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Models</h3>
          <hr />
          <ul>
            <li v-for="(ref, i) in footerReferences.models" :key="i">
              <a :href="ref.href">{{ ref.name }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Article References</h3>
          <hr />
          <ul>
            <li v-for="(ref, i) in footerReferences.articles" :key="i">
              <a :href="ref.href">{{ ref.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p id="lib-credit">Made with &lt;❤️/&gt; using Vue.js</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      toggleMenu: false,
      views: [
        {
          name: "Sun",
          href: "/Sun",
        },
        {
          name: "Mercury",
          href: "/Mercury",
        },
        {
          name: "Venus",
          href: "/Venus",
        },
        {
          name: "Earth",
          href: "/Earth",
        },
        {
          name: "Mars",
          href: "/Mars",
        },
        {
          name: "Jupiter",
          href: "/Jupiter",
        },
        {
          name: "Saturn",
          href: "/Saturn",
        },
        {
          name: "Uranus",
          href: "/Uranus",
        },
        {
          name: "Neptune",
          href: "/Neptune",
        },
        {
          name: "Pluto",
          href: "/Pluto",
        },
      ],
      footerReferences: {
        images: [
          {
            name: "Header wallpaper",
            href: "https://www.wallpaperflare.com/solar-system-illustration-minimalism-space-illuminated-night-wallpaper-miqh",
          },
          {
            name: "Logo",
            href: "https://www.flaticon.com/free-icon/galaxy_7554295",
          },
          {
            name: "Card Images",
            href: "https://www.freepik.com/free-vector/classic-solar-system-scheme-with-flat-deisgn_2898999.htm#query=solar%20system&position=16&from_view=author",
          },
          {
            name: "Solar System",
            href: "https://www.wallpaperflare.com/solar-system-sky-no-people-black-background-nature-solar-system-wallpaper-pkepw/download",
          },
          {
            name: "Sun",
            href: "https://www.wallpaperflare.com/red-fire-wallpaper-sun-space-wallpaper-237429/1920x1080",
          },
          {
            name: "Mercury",
            href: "https://i.natgeofe.com/n/c6f7cee9-cde6-44a2-a686-9a80f5bfc1e8/01_mercury_pia15190_orig_4x3.jpg",
          },
          {
            name: "Venus",
            href: "https://www.wallpaperuse.com/vien/hTJhoi/",
          },
          {
            name: "Earth",
            href: "https://wallpaperscraft.com/download/earth_sun_planet_surface_stars_99478/1920x1080",
          },
          {
            name: "Mars",
            href: "https://wallpapercave.com/w/wp2461888",
          },
          {
            name: "Jupiter",
            href: "https://wallpapercrafter.com/133709-astronomy-jupiter-planet-solar-system.html",
          },
          {
            name: "Saturn",
            href: "https://wallpapercave.com/w/4hVHDzO",
          },
          {
            name: "Uranus",
            href: "https://wallpaperaccess.com/uranus-hd",
          },
          {
            name: "Neptune",
            href: "https://en.wikipedia.org/wiki/Neptune",
          },
          {
            name: "Pluto",
            href: "https://en.wikipedia.org/wiki/Pluto",
          },
        ],
        models: [
          {
            name: "Sun",
            href: "https://solarsystem.nasa.gov/resources/2352/sun-3d-model/",
          },
          {
            name: "Mercury",
            href: "https://solarsystem.nasa.gov/resources/2369/mercury-3d-model/",
          },
          {
            name: "Venus",
            href: "https://solarsystem.nasa.gov/resources/2342/venus-surface-3d-model/",
          },
          {
            name: "Earth",
            href: "https://solarsystem.nasa.gov/resources/2392/earth-with-clouds-3d-model/",
          },
          {
            name: "Mars",
            href: "https://solarsystem.nasa.gov/resources/2372/mars-3d-model/",
          },
          {
            name: "Jupiter",
            href: "https://solarsystem.nasa.gov/resources/2375/jupiter-3d-model/",
          },
          {
            name: "Saturn",
            href: "https://solarsystem.nasa.gov/resources/2355/saturn-3d-model/",
          },
          {
            name: "Uranus",
            href: "https://solarsystem.nasa.gov/resources/2344/uranus-3d-model/",
          },
          {
            name: "Neptune",
            href: "https://solarsystem.nasa.gov/resources/2364/neptune-3d-model/",
          },
          {
            name: "Pluto",
            href: "https://solarsystem.nasa.gov/resources/2357/pluto-3d-model/",
          },
        ],
        articles: [
          {
            name: "Solar System",
            href: "https://en.wikipedia.org/wiki/Solar_System",
          },
          {
            name: "Sun",
            href: "https://en.wikipedia.org/wiki/Sun",
          },
          {
            name: "Mercury",
            href: "https://en.wikipedia.org/wiki/Mercury_(planet)",
          },
          {
            name: "Venus",
            href: "https://en.wikipedia.org/wiki/Venus",
          },
          {
            name: "Earth",
            href: "https://en.wikipedia.org/wiki/Earth",
          },
          {
            name: "Mars",
            href: "https://en.wikipedia.org/wiki/Mars",
          },
          {
            name: "Jupiter",
            href: "https://en.wikipedia.org/wiki/Jupiter",
          },
          {
            name: "Saturn",
            href: "https://en.wikipedia.org/wiki/Saturn",
          },
          {
            name: "Uranus",
            href: "https://en.wikipedia.org/wiki/Uranus",
          },
          {
            name: "Neptune",
            href: "https://www.wallpaperflare.com/neptune-blue-planet-975-wallpaper-bzzoh",
          },
          {
            name: "Pluto",
            href: "https://www.wallpaperflare.com/8k-nasa-pluto-4k-wallpaper-qfbkj",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
@import "./styles/navbar.css";
@import "./styles/footer.css";
</style>
