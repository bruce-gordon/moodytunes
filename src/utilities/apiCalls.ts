// test endpoint for 500 errors @ ("https://httpstat.us/500");
const createUrl = (valence: string, arousal: string, excludedGenres: string, decade: string) => {
  return `https://cors-anywhere.herokuapp.com/http://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=80&starttrackid=&trackvalence=${valence}&trackarousal=${arousal}&resultsnumber=25&genreNo=${excludedGenres}listenercountry=us&${decade}=true&apikey=fpa8g361`
}

export const getTracksByMoodAPI = async (valence: string, arousal: string, excludedGenres: string, decade: string) => {

  // const response = await fetch(proxyurl+url(moodObject)); // interpolate the mood values in a separate function outside of the API call

  const response = await fetch(createUrl(valence, arousal, excludedGenres, decade));
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


// https://cors-anywhere.herokuapp.com/http://musicovery.com/api/V6/playlist.php?&fct=getfrommood&popularitymax=100&popularitymin=80&starttrackid=&trackvalence=91000&trackarousal=235000&resultsnumber=25&genreNo=rock,electro,pop,randb,hip%20hop,metal,classical,jazz,soundtrack,world,latin,reggae,blues,country,vocal%20poplistenercountry=us&date90=true&apikey=fpa8g361