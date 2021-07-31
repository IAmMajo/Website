import { MDCRipple } from "@material/ripple";
import "./style.scss";

document.querySelectorAll(".mdc-card").forEach((element) => {
  new MDCRipple(element);
});
