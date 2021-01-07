import React, { useState } from 'react';

// export interface FormProps {
//
// }

interface FormProps {
  getMoodyTunes: Function;
}

const Form = ({ getMoodyTunes }: FormProps) => {
  const [mood, setMood] = useState('');
  const [genre, setGenre] = useState('');
  const [decade, setDecade] = useState('');

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    getMoodyTunes();
  }

  return (
    <div>
      This is the form component
      <form action="/action_page.php">
        <p>Please select your Mood:</p>
        <input onChange={ event => setMood('happy') } type="radio" id="happy" name="mood" value="happy"/>
        <label htmlFor="happy">Happy</label><br/>
        <input onChange={ event => setMood('sad') }type="radio" id="sad" name="mood" value="sad"/>
        <label htmlFor="sad">Sad</label><br/>
        <input onChange={ event => setMood('angry')} type="radio" id="angry" name="mood" value="angry"/>
        <label htmlFor="angry">Angry</label>

        <p>Please select a Genre:</p>
        <input onChange={ event => setGenre('rock')} type="radio" id="Rock" name="genre" value="rock"/>
        <label htmlFor="Rock">Rock</label><br/>
        <input onChange={ event => setGenre('hip hop')} type="radio" id="hip hop" name="genre" value="hip hop"/>
        <label htmlFor="hip hop">Hip Hop</label><br/>
        <input onChange={ event => setGenre('folk')} type="radio" id="Folk" name="genre" value="folk"/>
        <label htmlFor="Folk">Folk</label>

        <p>Please select a Decade:</p>
        <input onChange={ event => setDecade('date70')} type="radio" id="70" name="decade" value="70"/>
        <label htmlFor="70">70's</label><br/>
        <input onChange={ event => setDecade('date80')} type="radio" id="80" name="decade" value="80"/>
        <label htmlFor="80">80's</label><br/>
        <input onChange={ event => setDecade('date90')} type="radio" id="90" name="decade" value="90"/>
        <label htmlFor="90">90's</label>
        <br/>
        <button type='submit' onClick={ (event: React.MouseEvent<HTMLElement>) => handleClick(event as any) }>Get Songs</button>
      </form>
    </div>
   );
}

export default Form;
