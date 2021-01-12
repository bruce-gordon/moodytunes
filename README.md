>[Moody Tunes deployed site](https://brabbuss.github.io/moodytunes/)

---

### Moody Tunes
###### Find your tunes for a given mood  

---

![Screen Shot 2020-12-15 at 1 15 43 PM](https://user-images.githubusercontent.com/67513823/102267812-aca02800-3ed7-11eb-9bef-f1bdc34d05a6.png)

*Homepage*


## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)
* [Team](#team)


## Introduction

### Overview
Moody Tunes is a music recommendation engine that provides music recommendations based on a user's mood. Users are able to save songs into their 'Favorites' and view the information at a later time, or play the song directly from Spotify. 

Moody Tunes is a SPA built with React and designed to meet project requirements in the rubric laid out [here](https://frontend.turing.io/projects/module-3/stretch.html), a group projects designed specifically for Mod 3 class 2008FE front end engineering students. The project seeks to challenge the totality of learning of students up to this point, pulling together their core-stack knowledge of HTML, CSS, JS, DOM interaction and TDD (test driven development), and extending that knowledge to build out a React app and incorporate a new technology - in this case TypeScript.

The project emphasises React fundamentals, such as state management/synching across components, and the flow and management of asynchronous operations (both in production code, and inside of testing suites), pushing students to think carefully and critically about component architecture and modularity, and expected user flow and behavior. The nature of the project encourages employing professional 'soft' skills in the planning and project management stages - utilizing wireframing and mind-mapping, and managing project workflow with Issues and PRs through the **Agile** methodology on GitHub Project Board.

Lastly, be sure to click this here when you see it:
<details>
  <summary>**Under the Hood**</summary>
There's more info under here about the functionality being described!
</details>

### Tech Stack
* React
* JavaScript
* HTML
* CSS
* TypeScript
* Green Sock Animation Platform
* React Router
* Jest (TDD)
* REST API

## Features 

![TMDB-main](https://user-images.githubusercontent.com/67513823/102267276-e7559080-3ed6-11eb-957b-d1306d94a7e8.gif)

*Homepage*

**Main Page**

The homepage provides users with a simple form to collect user's mood and music decade. Local storage allows a user to retain their 'favorites', so users have the option of viewing their favorites without going through the music recommendation flow. 

Music recommendations are gathered using the [Musicovery API](http://b2b.musicovery.com/). The API draws on a database of music where each track has assigned to it 'mood' values, which consist of two parameters - 'arousal' and 'valence'. These two parameters are based on research around mapping emotion on a circumplex model as seen below. Currently we have set canned values, however in the future we'd like to map emotion to all values and use sliders to adjust valence/arousal.

![circumplex space model](https://user-images.githubusercontent.com/66697338/104362520-21fc1a00-54d1-11eb-9f31-b1e269504019.png)

<details>
  <summary>**Under the Hood**</summary>

---

The Homepage itself is housed in the React `<App />` component, as you might expect. To implement a multi-page experience, we implemented the `<BrowserRouter/>` and the components thereof that allowed linking/routing `<Link />`, `<NavLink />` and `<Route />`. 
  
With normal functionality, what ends up rendering on the homepage inside of `<App>` are two components. From 'top' to 'bottom':

```
<NavBar />       // Is always visible
<Form />         // A container for the Banner and MovieCard components

```

The `useEffect` hook is employed inside of the `<App/>` component to check local storage for user favorites. That data is an array of all of `favoriteSong` objects - that data is mapped over to create multiple `<Favorite />` components inside of `<FavoritesView />`

---

</details>

![TMDB-movieClick](https://user-images.githubusercontent.com/67513823/102267459-2b489580-3ed7-11eb-9a9d-c57958328c6e.gif)

*Results View*

**Results View** 

In this view the users are presented with song results that match the 'mood' and optional 'decade' parameters they selected in the previous screen. Results can be added to the favorites by clicking the star icon, and results can be played on spotify by clicking the spotify icon. To return back to the main view a user can click the home button or on the MoodyTunes title. 

<details>
  <summary>**Under the Hood**</summary>

---

The details page is nested in the React `<App />` component (inside of a Route component) with a dynamic route path parameter `/movies/:movie_id`. The movie id is pulled from the `props` of the corresponding movie poster that was clicked. The ID is bubbled up to App, at which point an API call is made to the proper endpoint (interpolating the ID) to retrieve that individual movie's information. The state of the `App` component is updated, at which point the `MovieDetails` component renders with the needed information. 
  
Server errors are handled with their own `Error` component page. There was a lot of missing data inside of the retrieved data. To provide a better user experience, budget information, if missing, was provided with a grooming utility that supplements missing information with a random budget. This allows full display of the UI and makes for a more robust UX. Original, ungroomed data can be used very easily by removing the grooming function.

On refresh or direct navigation, the page persists (except for strange behavior on the GH deploy page) by using information inside of the `match.params` object to grab the `movie_id` and use that to call the correct movie information as laid out in the first paragraph above.

---

</details>

![TMDB-search](https://user-images.githubusercontent.com/67513823/102267517-3f8c9280-3ed7-11eb-9193-1926d7d3f2a0.gif)

*Search*

**Search**

A user has the option to search for a movie tile which will lead to a new search results page. From this view they will be presented with a list of movie titles that match their search where they can click into each to see more details. 

<details>
  <summary>**Under the Hood**</summary>

---

Pleasantly simple to implement! Search functionality is a twofold process. The `NavBar` component is a class component, the only other one aside from `App` in the site. We required a class component to update the input field as the user types in a query - typing updates the value of the state of the `NavBar` component, which is then reflected on screen. Clicking the `Search` button bubbles up to `App` the string/movie title inside of the search input field. `App` uses the search input value to `.filter()` the current list of movies (as presented on the homepage) and then `.map()` over the results to populate the `SearchResults` component with `MovieCards` matching the search criteria.

---

</details>

## Reflection

#### Wins

* Users are able to type in a URL including the movie id and be routed to that specific movie
* Search functionality
* Detailed and thoughtful styling and UI
* Rendered components have 100% test coverage (74.83% total test coverage)

#### Challanges

* Asynchronous testing in React
* Starting with a full web build and trying to style for mobile afterward was difficult and ultimately unincorporated before submission deadline
* Bootstrap is meant for mobile first, then expand to desktop second - a team design oversight 

#### Future

* Express server or alternative APIs to increase functionality and availability of different types of information
* Gamify a rating system for users with simple badges and notifications


## Team

<h4>Scott Brabson</h4>
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

*FE Engineering student at Turing School who has found no end to the joy that is speaking the language of JS.*

[GitHub Profile](https://github.com/brabbuss)

<h4>Demaceo Vincent</h4>
<img src="" alt=""
 width="150" height="auto" style="float: left" />

[GitHub Profile]()

<h4>Bruce Gordon</h4>
<img src="" alt=""
 width="150" height="auto" style="float: left" />

[GitHub Profile]()
