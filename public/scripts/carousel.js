"use strict";

/**
 * Clamps the number within a certain domain.
 * @param {Number} a the minimum number
 * @param {Number} b the maximum number
 */
function modularClamp(a, b) {
  if (a <= 0) a += b;
  return (a - 1) % b + 1;
}

/**
 * Returns a DOM Node given an HTML string.
 * @param {DOMString} html
 */
function htmlToElement(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstChild;
}

var members = [
  {
    name: "Liam Rahav",
    position: "Director",
    desc: "CEO & Co-founder of MLH",
    email: "liam@hackbca.com"
  },
  {
    name: "Liam Rahav",
    position: "Director",
    desc: "CEO & Co-founder of MLH",
    email: "liam@hackbca.com"
  },
  {
    name: "Liam Rahav",
    position: "Director",
    desc: "CEO & Co-founder of MLH",
    email: "liam@hackbca.com"
  },
  {
    name: "Liam Rahav",
    position: "Director",
    desc: "CEO & Co-founder of MLH",
    email: "liam@hackbca.com"
  },
  {
    name: "Liam Rahav",
    position: "Director",
    desc: "CEO & Co-founder of MLH",
    email: "liam@hackbca.com"
  },
  {
    name: "Liam Rahav",
    position: "Director",
    desc: "CEO & Co-founder of MLH",
    email: "liam@hackbca.com"
  }
];

/**
 * Carousel for "Meet the Team" page.
 * @param {Object[]} members an array containing all of the members
 */
var actor = (function(members) {
  var TRACK = document.querySelector(".track");
  var TOTAL = members.length;
  var STEP = 300;
  var offset = window.innerWidth / 2 - STEP;
  var indexEl = document.querySelector("#js-carousel-index");

  members = members.map(function(member, i) {
    var el = toCarouselCard(member, i);
    return TRACK.appendChild(el), el;
  });

  function render(i) {
    var i = modularClamp(i, TOTAL);
    indexEl.innerHTML = `${i} of ${TOTAL}`;
    var x = (i - 1.5) * -STEP + offset;
    TRACK.style.transform = `translateX(${x}px)`;
    for (var m of members) {
      var toBeAnimated = true,
        index = +m.dataset.index;
      if (index === i) {
        m.classList.add("center");
        m.classList.remove("shrink");
        m.classList.remove("shrink-left");
        m.classList.remove("shrink-right");
      } else {
        m.classList.remove("center");
        m.classList.add("shrink");
        if (index === i - 1) {
          m.classList.add("shrink-left");
        }
        if (index === i + 1) {
          m.classList.add("shrink-right");
        }
      }
    }
    return i;
  }
  var curr = render(1);
  return function(a) {
    curr = render(curr + a);
  };
})(members);

var LEFT_BUTTON = document.querySelector("#carousel-left-button");
var RIGHT_BUTTON = document.querySelector("#carousel-right-button");

LEFT_BUTTON.onclick = actor.bind(null, -1);
RIGHT_BUTTON.onclick = actor.bind(null, 1);
