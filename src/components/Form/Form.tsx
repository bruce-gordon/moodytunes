import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FormProps} from '../common/Types'

const Form = ({ getMoodyTunes }: FormProps) => {
  const [mood, setMood] = useState('');
  // const [genre, setGenre] = useState('');
  const [decade, setDecade] = useState('');

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    console.log(mood, decade)
    getMoodyTunes(mood, decade);
  }

  return (
    <div>
      Generate a list of songs that fit you're mood.
      <form action="/action_page.php">
        <p>Please select your Mood:</p>
        <input onChange={ event => setMood('660000,950000') } type="radio" id="happy" name="mood" value="happy"/>
        <label htmlFor="happy">Happy</label><br/>
        <input onChange={ event => setMood( '235000,91000') } type="radio" id="sad" name="mood" value="sad"/>
        <label htmlFor="sad">Sad</label><br/>
        <input onChange={ event => setMood('895000,295000') } type="radio" id="angry" name="mood" value="angry"/>
        <label htmlFor="angry">Angry</label>


        <p>Please select a Decade:</p>
        <input onChange={ event => setDecade('date70')} type="radio" id="70" name="decade" value="70"/>
        <label htmlFor="70">70's</label><br/>
        <input onChange={ event => setDecade('date80')} type="radio" id="80" name="decade" value="80"/>
        <label htmlFor="80">80's</label><br/>
        <input onChange={ event => setDecade('date90')} type="radio" id="90" name="decade" value="90"/>
        <label htmlFor="90">90's</label>
        <br/>
        <button onClick={ (event: React.MouseEvent<HTMLElement>) => handleClick(event as any) }><Link to='/results'>Get Songs</Link></button>
      </form>
    </div>
   );
}

// <p>Please select a Genre:</p>
// <input onChange={ event => setGenre('rock')} type="radio" id="rock" name="genre" value="rock"/>
// <label htmlFor="rock">Rock</label><br/>
// <input onChange={ event => setGenre('hip hop')} type="radio" id="hip hop" name="genre" value="hip hop"/>
// <label htmlFor="hip hop">Hip Hop</label><br/>
// <input onChange={ event => setGenre('folk')} type="radio" id="folk" name="genre" value="folk"/>
// <label htmlFor="folk">Folk</label>
export default Form;
