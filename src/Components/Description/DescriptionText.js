export const BitcoinDesc = () => {
  return (
    <p className="Description-text">
      A React dashboard with search functionailty that allows users to view both
      historical and current information on cryptocurrencies. Data retrieved is
      displayed via tables, bar-charts, pie-charts and line-graphs all powered
      by Chart.js The user also has access to updated news information via
      Bloomberg news api and the ability to log in via Google O-auth 2.0
    </p>
  );
};

export const CovidDesc = () => {
  return (
    <p className="Description-text">
      This application provides statistics and details for the current impact of
      Coivd-19 around the world. Total Cases, Recovery and Deaths are listed in
      tables in a descending order. A drop down list is available to search for
      specific areas of impact. The leaflet map offers users an interactive way
      to view case information and displays colored bubbles in correspondence to
      the areas statistical impact.
    </p>
  );
};

export const NetflixDesc = () => {
  return (
    <p className="Description-text">
      A movie database application inspired by Netflix. The application will
      load Movies & Tv show titles from the Netflix catalog. The program
      dynamically displays rows of video's. The user can select a video with
      which will retrieve specific information from TMDB API, store it in Reacts
      state and then use that information query Google's Youtube Api. This will
      give the user the ability to view updated trailers.
    </p>
  );
};

export const YoutubeDesc = () => {
  return (
    <p className="Description-text">
      This applciation allows users to query Youtubes data api for video
      information. Videos that are selected return details based on the videos
      id. Users will have access not on the play the video but view the
      author/creator, comments, likes, dislikes and views.
    </p>
  );
};
