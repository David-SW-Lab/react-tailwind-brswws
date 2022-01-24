import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import data from './data'

const MenuItem = (props) => {
  const p1 = `px-4 py-1 text-sm text-${props.value.color}-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`;

  const p2 = `
  py-8
  px-${props.value.margin}
  max-w-sm
  mx-auto
  bg-white
  rounded-x1
  shadow-lg
  space-y-2
  sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6
`;
  return(

  
  <div class={p2}>
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.value.image}
        alt="Coffee"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{props.value.name}</p>
          <p class="text-slate-500 text-xs font-small">
          {props.value.description}
          </p>
          <p class="text-lg text-black font-semibold">${props.value.price}</p>
        </div>
        <button
          class={p1}
        >
          Order
        </button>
      </div>
    </div>
  )
}

const MenuItem2 = (props) => {
  const color1 = props.value;
  const p1 = `px-4 py-1 text-sm text-${color1}-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`;
  return(
  <div
      class="
        py-8
        px-8
        max-w-sm
        mx-auto
        bg-white
        rounded-x1
        shadow-lg
        space-y-2
        sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6
      "
    >
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?b=1&k=20&m=1177900338&s=170667a&w=0&h=F8zfPlOjKVU8GXg32SQIWAE0ozBd_1PcsXw2slkCQT8="
        alt="Coffee"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Menu Name</p>
          <p class="text-slate-500 text-xs font-small">
            Menu Descriptions Menu Descriptions
          </p>
          <p class="text-slate-500 text-xs font-small">
            Menu Descriptions Menu Descriptions
          </p>
        </div>
        <button
          class={p1}
        >
          Order
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const colors = ['red', 'blue'];
    return (
      <div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg flex-wrap">
          {data.map(d => <MenuItem value={d}></MenuItem>)}
        </div>
      </div>
      

    );
  }

  render(<App />, document.getElementById("root"));

