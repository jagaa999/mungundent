import React from "react";
import loader from "../../assets/images/loader.svg";
import loader03 from "../../assets/images/moto_loading02.svg";

const CircularProgress = ({ className }) => (
  <>
    {/* https://codepen.io/Jagaa999/pen/poyNXRO?editors=0100 */}
    <div id="no-freeze-spinner">
      <div>
        <i class="material-icons">directions_car</i>
        <i class="material-icons">home</i>
        <i class="material-icons">local_cafe</i>
        <i class="material-icons">miscellaneous_services</i>
        <i class="material-icons">handyman</i>
        <div></div>
      </div>
    </div>

    {/* <div className={`loader ${className}`}>
      <img src={loader03} alt="loader" />
    </div> */}
  </>
);
export default CircularProgress;
