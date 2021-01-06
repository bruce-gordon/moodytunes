import * as React from 'react';

// export interface FormProps {
//
// }

interface FormProps {
  userName: string | undefined;
  mood: string;
  genre: (string)[];
  decade: (number)[];
  getMoodyTunes: Function;
}

const Form = ({userName, mood, genre, decade, getMoodyTunes}: FormProps) => {
  return (
    <div>
      This is the form component
      <form action="/action_page.php">
        <p>Please select your Mood:</p>
        <input type="radio" id="happy" name="mood" value="happy"/>
        <label htmlFor="happy">Happy</label><br/>
        <input type="radio" id="sad" name="mood" value="sad"/>
        <label htmlFor="sad">Sad</label><br/>
        <input type="radio" id="angry" name="mood" value="angry"/>
        <label htmlFor="angry">Angry</label>

        <p>Please select a Genre:</p>
        <input type="radio" id="Rock" name="genre" value="rock"/>
        <label htmlFor="Rock">Rock</label><br/>
        <input type="radio" id="Rap" name="genre" value="rap"/>
        <label htmlFor="Rap">Rap</label><br/>
        <input type="radio" id="Folk" name="genre" value="folk"/>
        <label htmlFor="Folk">Folk</label>

        <p>Please select a Decade:</p>
        <input type="radio" id="70" name="decade" value="70"/>
        <label htmlFor="70">70's</label><br/>
        <input type="radio" id="80" name="decade" value="80"/>
        <label htmlFor="80">80</label><br/>
        <input type="radio" id="90" name="decade" value="90"/>
        <label htmlFor="90">90</label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
   );
}

export default Form;
