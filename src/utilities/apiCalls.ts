// test endpoint for 500 errors @ ("https://httpstat.us/500");
// https://thingproxy.freeboard.io/fetch/
// https://cors-anywhere.herokuapp.com/
const createUrl = (
  valence: string,
  arousal: string,
  // excludedGenres: string, &genreNo=${excludedGenres}
  decade: string
) => {
  return `https://thingproxy.freeboard.io/fetch/http://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=80&starttrackid=&trackvalence=${valence}&trackarousal=${arousal}&listenercountry=us&${decade}=true&resultsnumber=25&apikey=fpa8g361`;
};

export const getTracksByMoodAPI = async (
  valence: string,
  arousal: string,
  // excludedGenres: string,
  decade: string
) => {
  const response = await fetch(
    createUrl(valence, arousal, decade)
  );
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    console.log(jsonResponse.tracks.track);
    return jsonResponse.tracks.track;
  } else {
    console.log(
      `Error! Code: ${response}
There seems to be a problem with the server. Please refresh the page.
      `
    );
    return response.status;
  }
};
