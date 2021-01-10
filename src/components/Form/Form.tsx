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
          Happy
          </p>
           <p className= { getStylings(mood, '235000,91000') } onClick={ event => setMood('235000,91000') }>
          Sad
          </p>
           <p className= { getStylings(mood, '100000,900000') } onClick={ event => setMood('100000,900000') }>
          Content
          </p>
           <p className= { getStylings(mood, '895000,295000') } onClick={ event => setMood('895000,295000') }>
          Angry
          </p>
           <p className= { getStylings(mood, '900000,300000') } onClick={ event => setMood('900000,300000') }>
          Enraged
          </p>
        </div>
        <br/>
        <p className='form-subheader'>Please select a <b>Decade</b>:</p>
        <br/>
        <div className='form-options'>
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


