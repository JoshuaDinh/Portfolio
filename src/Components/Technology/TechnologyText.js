import "./technology.css";
import reactIcon from "../../imgs/react-logo.png";
import reduxIcon from "../../imgs/redux-icon.png";
import jsIcon from "../../imgs/js-icon.png";
import chartjsIcon from "../../imgs/chartjs-icon.svg";
import npmIcon from "../../imgs/npm-icon.png";
import coinGeckoIcon from "../../imgs/coingecko-icon.png";
import bloombergIcon from "../../imgs/bloomberg-icon.png";
import googleIcon from "../../imgs/google-icon.png";

export const BitcoinSkills = () => {
  return (
    <div className="techSkills-text-container">
      <img className="techSkills-icon" src={reactIcon} />
      <img className="techSkills-icon" src={reduxIcon} />
      <img className="techSkills-icon" src={jsIcon} />
      <img className="techSkills-icon" src={chartjsIcon} />
      <img className="techSkills-icon" src={npmIcon} />
      <img className="techSkills-icon" src={googleIcon} />
      <img className="techSkills-icon" src={coinGeckoIcon} />
      <img className="techSkills-icon" src={bloombergIcon} />
    </div>
  );
};
// export const BitcoinSkills = () => {
//   return (
//     <div className="techSkills-text-container">
//       <ul>
//         <li className="techSkills-text">React / hooks</li>
//         <li className="techSkills-text">Javascript ES6+</li>
//         <li className="techSkills-text">Chart.Js</li>
//         <li className="techSkills-text">Coingecko Api</li>
//         <li className="techSkills-text">Bloomberg Api</li>
//         <li className="techSkills-text">JSX</li>
//         <li className="techSkills-text">HTML / CSS</li>
//       </ul>
//     </div>
//   );
// };

export const CovidSkills = () => {
  return (
    <div className="techSkills-text-container">
      <ul>
        <li className="techSkills-text">React / hooks</li>
        <li className="techSkills-text">Javascript ES6+</li>
        <li className="techSkills-text">React-Leaflet(map)</li>
        <li className="techSkills-text">Disease.sh Api</li>
        <li className="techSkills-text">JSX</li>
        <li className="techSkills-text">HTML / CSS</li>
      </ul>
    </div>
  );
};

export const NetflixSkills = () => {
  return (
    <div className="techSkills-text-container">
      <ul>
        <li className="techSkills-text">React / hooks</li>
        <li className="techSkills-text">Javascript ES6+</li>
        <li className="techSkills-text">Youtube/Google Api</li>
        <li className="techSkills-text">TMDB Api</li>
        <li className="techSkills-text">JSX</li>
        <li className="techSkills-text">HTML / CSS</li>
      </ul>
    </div>
  );
};

export const YotubeSkills = () => {
  return (
    <div className="techSkills-text-container">
      <ul>
        <li className="techSkills-text">React / hooks</li>
        <li className="techSkills-text">Javascript ES6+</li>
        <li className="techSkills-text">Youtube/Google Api</li>
        <li className="techSkills-text">Google O-auth 2.0</li>
        <li className="techSkills-text">JSX</li>
        <li className="techSkills-text">HTML / CSS</li>
      </ul>
    </div>
  );
};
