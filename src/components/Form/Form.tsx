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

const getStylings = (selector:string, elementId:string) => {
  let className = selector === elementId ? 'selected-choice' : 'choice';
  return className 
}

  return (
    <div className='form-view'>
      <form action="/action_page.php">
        <h2>Generate a list of songs that fit your mood.</h2>
        <br/>
        <p className='form-subheader'>Please select your <b>Mood</b>:</p>
        <br/>
        <div className='form-options'>
          <p className= { getStylings(mood, '660000,950000') } onClick={ event => setMood('660000,950000') }>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile-beam" className="svg-inline--fa fa-smile-beam fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm84-143.4c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.6-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.2-8.4-25.3-7.1-33.8 3.1zM136.5 211c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17zM328 152c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.5 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4z"></path></svg>
          Happy
          </p>
           <p className= { getStylings(mood, '235000,91000') } onClick={ event => setMood('235000,91000') }>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sad-cry" className="svg-inline--fa fa-sad-cry fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm144 386.4V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v151.4C315.5 447 282.8 456 248 456s-67.5-9-96-24.6V280c0-13.2-10.8-24-24-24s-24 10.8-24 24v114.4c-34.6-36-56-84.7-56-138.4 0-110.3 89.7-200 200-200s200 89.7 200 200c0 53.7-21.4 102.5-56 138.4zM205.8 234.5c4.4-2.4 6.9-7.4 6.1-12.4-4-25.2-34.2-42.1-59.8-42.1s-55.9 16.9-59.8 42.1c-.8 5 1.7 10 6.1 12.4 4.4 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.3 7.9 4.8 13.7 1.6zM344 180c-25.7 0-55.9 16.9-59.8 42.1-.8 5 1.7 10 6.1 12.4 4.5 2.4 9.9 1.8 13.7-1.6l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c2.5 2.2 8 4.7 13.7 1.6 4.4-2.4 6.9-7.4 6.1-12.4-3.9-25.2-34.1-42.1-59.8-42.1zm-96 92c-30.9 0-56 28.7-56 64s25.1 64 56 64 56-28.7 56-64-25.1-64-56-64z"></path></svg>
         Sad
          </p>
           <p className= { getStylings(mood, '100000,900000') } onClick={ event => setMood('100000,900000') }>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="meh" className="svg-inline--fa fa-meh fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm8 144H160c-13.2 0-24 10.8-24 24s10.8 24 24 24h176c13.2 0 24-10.8 24-24s-10.8-24-24-24z"></path></svg>
          Content
          </p>
           <p className= { getStylings(mood, '895000,295000') } onClick={ event => setMood('895000,295000') }>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="tired" className="svg-inline--fa fa-tired fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm129.1-303.8c-3.8-4.4-10.3-5.4-15.3-2.5l-80 48c-3.6 2.2-5.8 6.1-5.8 10.3s2.2 8.1 5.8 10.3l80 48c5.4 3.2 11.8 1.6 15.3-2.5 3.8-4.5 3.9-11 .1-15.5L343.6 208l33.6-40.3c3.8-4.5 3.7-11.1-.1-15.5zM220 208c0-4.2-2.2-8.1-5.8-10.3l-80-48c-5-3-11.5-1.9-15.3 2.5-3.8 4.5-3.9 11-.1 15.5l33.6 40.3-33.6 40.3c-3.8 4.5-3.7 11 .1 15.5 3.5 4.1 9.9 5.7 15.3 2.5l80-48c3.6-2.2 5.8-6.1 5.8-10.3zm28 64c-45.4 0-100.9 38.3-107.8 93.3-1.5 11.8 6.9 21.6 15.5 17.9C178.4 373.5 212 368 248 368s69.6 5.5 92.3 15.2c8.5 3.7 17-6 15.5-17.9-6.9-55-62.4-93.3-107.8-93.3z"></path></svg>
          Angry
          </p>
           {/* <p className= { getStylings(mood, '900000,300000') } onClick={ event => setMood('900000,300000') }>
          Enraged
          </p> */}
        </div>
        <br/>
        <p className='form-subheader'>Please select a <b>Decade</b>:</p>
        <br/>
        <div className='form-options decades'>
        <p className={ getStylings(decade, 'date50') } onClick={ event => setDecade('date50')}>1950's</p><br/>
        <p className={ getStylings(decade, 'date60') } onClick={ event => setDecade('date60')}>1960's</p><br/>
        <p className={ getStylings(decade, 'date70') } onClick={ event => setDecade('date70')}>1970's</p><br/>
        <p className={ getStylings(decade, 'date80') } onClick={ event => setDecade('date80')}>1980's</p><br/>
        <p className={ getStylings(decade, 'date90') } onClick={ event => setDecade('date90')}>1990's</p><br/>
        <p className={ getStylings(decade, 'date00') } onClick={ event => setDecade('date00')}>2000's</p><br/>
        <p className={ getStylings(decade, 'date10') } onClick={ event => setDecade('date10')}>2010's</p><br/>
        </div>
        <br/>
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


