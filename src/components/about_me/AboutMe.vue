<template>
  <v-sheet>
    <v-container class="flex-column content-wrapper mt-7 mt-sm-15" id="about-me-container">
      <!-- FIRST ROW -->
      <v-row class="align-center flex-column flex-md-row ml-0 ml-md-n3">
        <v-col class="col-12 col-md-6 pb-lg-5">
          <section-title class="mb-6 mb-sm-16">
            <span>
              <span class="z-index-priority">A few words</span>&nbsp;
              <underline>
                <span>about</span>
              </underline>&nbsp;
              <span class="z-index-priority">me</span>
            </span>
          </section-title>
          <h1
            class="mb-4"
          >I'm a Software Developer who enjoys creating things that live on the internet, whether that be websites, apps, games or anything in between.</h1>

          <section id="dynamic-container" :style="{ height: dynamicContainerHeight + 'px' }">
            <!-- CORE SKILLS -->
            <transition name="fade">
              <div v-if="currentSection === 'CORE SKILLS'" :class="{positionAbsolute: loaded}">
                <p>
                  My main focus these days is building products for our clients, including some of the largest internet service providers, at Benocs.
                  During my free time I've also created various websites and released a mobile game on the playstore with nearly 500 downloads.
                </p>
                <p>I feel at home in young, fresh, and fast-paced organizations.</p>
              </div>
            </transition>

            <!-- TEAMWORK -->
            <transition name="fade">
              <div v-if="currentSection === 'TEAMWORK'" :style="{position:'absolute'}">
                <p>
                  I've gained extensive teamwork experience through different companies, freelancing, and entrepreneurship. Collaborating with diverse teams and individuals has taught me to adapt to different dynamics and work effectively with others. 
                  I've also taken on mentoring roles, guiding others in their journeys and further enhancing my ability to contribute to team success.
                </p>
              </div>
            </transition>

            <!-- MYSELF -->
            <transition name="fade">
              <div v-if="currentSection === 'MYSELF'">
                <p>
                  When my mind is not thinking about coding(); my soul is obsessed with space, AI, and learning new languages. 
                  I love exploring the unknown and geeking out over the latest technology advancements.
                  I don't know how many times I have fantasized about humans becoming an interplanetary species. 
                </p>
                <p>Hopefully one day!</p>
              </div>
            </transition>
            <h3
              class="d-flex flex-column d-sm-block d-md-flex d-lg-block"
              :class="{positionAbsolute: loaded}"
            >
              <span v-for="n in 3" :key="n">
                <span
                  @mouseover="setNewText(sections[n-1])"
                  class="mb-3 mb-lg-0 underline-effect"
                  :class="{selectedSection: currentSection === sections[n-1]}"
                >{{sections[n-1]}}</span>
                <span
                  v-if="n < 3"
                  class="mx-2 d-none d-sm-inline-block d-md-none d-lg-inline-block"
                >-</span>
              </span>
            </h3>
          </section>
        </v-col>
        <v-col class="col-12 col-sm-6" id="img-about-me-container">
          <img src="/images/about-me.svg" alt />
        </v-col>
      </v-row>

      <!-- SECOND ROW -->
      <v-row class="ml-0 ml-md-n3">
        <v-col class="col-md-6 arrow-container d-none d-md-block">
          <img id="img-arrow" src="/images/arrow.png" alt />
        </v-col>
        <v-col class="col-12 col-md-6 d-flex flex-column isometric-container mt-n13 mt-lg-0">
          <isometric-icons class="isometric-icons" @displayTechnology="displayTechnology($event)"></isometric-icons>
          <p id="skills-legend">
            <span>{{ technologies[currentTech] }}</span>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import IsometricIcons from "./child/IsometricIcons";
export default {
  components: {
    IsometricIcons,
  },
  data() {
    return {
      loaded: false,
      technologies: ["React", "TypeScript", "SASS", "Cypress", "Django", "Docker"],
      currentTech: 0,
      sections: ["CORE SKILLS", "TEAMWORK", "MYSELF"],
      currentSection: "CORE SKILLS",
      technologiesLargeText: "Always Learning",
      technologiesSmallText: "CORE",
      //We want to get the height of the container on render and fix it at that height so we can easily transition texts without disturbing the layout.
      dynamicContainerHeight: null,
    };
  },
  methods: {
    displayTechnology(n) {
      this.currentTech = n;
    },
    setNewText(keyWord) {
      this.currentSection = keyWord;
    },
    chooseTechText() {
      let smallText = this.technologiesSmallText;
      let largeText = this.technologiesLargeText;

      if (screen.width < 600) {
        this.technologies.unshift(smallText);
      } else if (screen.width > 600 && screen.width < 960) {
        this.technologies.unshift(largeText);
      } else if (screen.width > 960 && screen.width < 1263) {
        this.technologies.unshift(smallText);
      } else {
        this.technologies.unshift(largeText);
      }
    },
  },
  mounted() {
    this.chooseTechText();
    this.dynamicContainerHeight =
      document.getElementById("dynamic-container").offsetHeight + 10;
    this.loaded = true;
  },
};
</script>

<style scoped lang="scss">
.positionAbsolute {
  position: absolute;
}
.row {
  width: 100%;
}
h1 {
  font-family: $title-font;
  color: $gray-500;
  margin: 0;
}

::v-deep .underline-container {
  .text {
    &::after {
      content: "about";
      left: -286px;
    }
  }
}
#dynamic-container {
  position: relative;
  h3 {
    font-family: $title-font;
    font-weight: $regular;
    color: $light-violet;
    letter-spacing: 2px;
    bottom: 0;
    z-index: 10;
    .underline-effect {
      display: inline-block;
      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: $light-violet;
        transition: width 0.3s;
      }
    }
  }
  p {
    color: $gray-400;
  }
}

.selectedSection {
  display: inline-block;
  &::after {
    width: 100% !important;
  }
}

#img-about-me-container {
  @include flexCenter();
  img {
    width: 350px;
  }
}
.arrow-container {
  position: relative;
  #img-arrow {
    position: absolute;
    left: 40px;
    top: -35px;
    width: 110%;
    transform: rotate(-3deg);
  }
}
.isometric-container {
  #skills-legend {
    display: flex;
    justify-content: center;
    transform-style: preserve-3d;
    transform: rotate(-25deg) skew(25deg);
    font-family: $title-font;
    font-size: 50px;
    color: $gray-400;
    font-weight: $thinest;
    span {
      margin-left: 161px;
      margin-top: 10px;
    }
  }
}

@media (min-width: 600px) {
  #about-me-container {
    @include sectionPushup();
  }
}
@media (min-width: 960px) {
  #about-me-container {
    @include fullHeight();
  }
}
@media (max-width: 1263px) {
  .isometric-icons {
    margin-top: 80px;
  }
}
@media (max-width: 960px) {
  .isometric-container {
    overflow: hidden;
    .isometric-icons {
      margin-top: 115px;
    }
  }
}
@media (max-width: 599px) {
  .isometric-container {
    .isometric-icons {
      margin-top: 70px;
    }
    #skills-legend {
      span {
        font-size: 11vw;
        margin-left: 40vw;
        margin-top: 0;
      }
    }
  }
  h1 {
    font-size: 1.5em;
  }
  h3 {
    @include flexCenter();
    width: 100%;
  }
  #img-about-me-container {
    img {
      width: 100%;
    }
  }
}
</style>