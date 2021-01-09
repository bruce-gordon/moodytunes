import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FormProps} from '../common/Types';
import './Form.css';

const Form = ({ getMoodyTunes }: FormProps) => {
  const [mood, setMood] = useState('');
  const [decade, setDecade] = useState('');

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    getMoodyTunes(mood, decade);
  }

const getStylings = (elementId:string) => {
  let className = decade === elementId ? 'selected-choice' : 'choice';
  return className 
}

  return (
    <div className='form-view'>
      <form action="/action_page.php">
        <h2>Generate a list of songs that fit your mood.</h2>
        <p className='form-subheader'>Please select your Mood:</p>
        <div className='form-options'>
        <input onChange={ event => setMood('660000,950000') } type="radio" id="happy" name="mood" value="happy"/>
        <label htmlFor="happy">Happy</label><br/>

        <input onChange={ event => setMood( '235000,91000') } type="radio" id="sad" name="mood" value="sad"/>
        <label htmlFor="sad">Sad</label><br/>

        <input onChange={ event => setMood( '100000,900000') } type="radio" id="content" name="mood" value="sad"/>
        <label htmlFor="content">Content</label><br/>

        <input onChange={ event => setMood( '900000,300000') } type="radio" id="enraged" name="mood" value="enraged"/>
        <label htmlFor="enraged">Enraged</label><br/>

        <input onChange={ event => setMood('895000,295000') } type="radio" id="angry" name="mood" value="angry"/>
        <label htmlFor="angry">Angry</label>
        </div>

        <p className='form-subheader'>Please select a Decade:</p>
        <div className='form-options'>
        <p className={ getStylings('date50') } onClick={ event => setDecade('date50')}>1950's</p><br/>
        <p className={ getStylings('date60') } onClick={ event => setDecade('date60')}>1960's</p><br/>
        <p className={ getStylings('date70') } onClick={ event => setDecade('date70')}>1970's</p><br/>
        <p className={ getStylings('date80') } onClick={ event => setDecade('date80')}>1980's</p><br/>
        <p className={ getStylings('date90') } onClick={ event => setDecade('date90')}>1990's</p><br/>
        <p className={ getStylings('date00') } onClick={ event => setDecade('date00')}>2000's</p><br/>
        <p className={ getStylings('date10') } onClick={ event => setDecade('date10')}>2010's</p><br/>
        </div>
        <button onClick={ (event: React.MouseEvent<HTMLElement>) => handleClick(event as any) }>
          <Link to='/results'>Get Songs</Link>
        </button>
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


