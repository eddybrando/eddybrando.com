import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DefaultLayout from "~/layouts/Default.vue";
import "normalize.css/normalize.css";
import "~/assets/css/base.scss";

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap",
  });
}
