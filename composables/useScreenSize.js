export default {
  data() {
    return {
      isMobile: false,
      // scrolled: false,
    };
  },
  mounted() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
    // window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenSize);
    // window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    updateScreenSize() {
      this.isMobile = window.innerWidth < 900;
    },
    // handleScroll() {
    //   this.scrolled = window.scrollY > window.innerHeight - 90;
    // },
  },
};
