import "./technology.css";
import reactIcon from "../../imgs/react-logo.png";
import reduxIcon from "../../imgs/redux-icon.png";
import jsIcon from "../../imgs/js-icon.png";
import chartjsIcon from "../../imgs/chartjs-icon.svg";
import npmIcon from "../../imgs/npm-icon.png";
import coinGeckoIcon from "../../imgs/coingecko-icon.png";
import bloombergIcon from "../../imgs/bloomberg-icon.png";
import googleIcon from "../../imgs/google-icon.png";
import leafletIcon from "../../imgs/leaflet-icon.png";
import diseaseIcon from "../../imgs/disease-icon.png";
import youtubeIcon from "../../imgs/youtube-icon.png";
import tmdbIcon from "../../imgs/tmdb-icon.png";

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

export const CovidSkills = () => {
  return (
    <div className="techSkills-text-container">
      <img className="techSkills-icon" src={reactIcon} />
      <img className="techSkills-icon" src={jsIcon} />
      <img className="techSkills-icon" src={npmIcon} />
      <img className="techSkills-icon" src={leafletIcon} />
      <img className="techSkills-icon" src={diseaseIcon} />
    </div>
  );
};

export const YotubeSkills = () => {
  return (
    <div className="techSkills-text-container">
      <img className="techSkills-icon" src={reactIcon} />
      <img className="techSkills-icon" src={jsIcon} />
      <img className="techSkills-icon" src={npmIcon} />
      <img className="techSkills-icon" src={googleIcon} />
      <img className="techSkills-icon" src={youtubeIcon} />
    </div>
  );
};

export const NetflixSkills = () => {
  return (
    <div className="techSkills-text-container">
      <img className="techSkills-icon" src={reactIcon} />
      <img className="techSkills-icon" src={jsIcon} />
      <img className="techSkills-icon" src={npmIcon} />
      <img className="techSkills-icon" src={tmdbIcon} />
      <img className="techSkills-icon" src={youtubeIcon} />
    </div>
  );
};
