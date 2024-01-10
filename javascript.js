window.addEventListener("load", sidenVises);

// ------------------------- Med inspiration fra Chat GPT og aflevering Tema 04 ------------------------- //

// Konstant til effekt på bokse
const boksIds = ["effektBoks1", "effektBoks2", "effektBoks3", "effektBoks4"];
// Konstanter til effekt på forsidebillede
const banner = document.querySelector("#tekst");
const banner2 = document.querySelector("#tekst2");
const banner3 = document.querySelector("#tekst3");
const banner4 = document.querySelector("#tekst4");
const banner5 = document.querySelector("#tekst5");

function sidenVises() {
  console.log("sidenVises");
  // Effekt på bokse
  boksIds.forEach((boksId) => {
    const boks = document.getElementById(boksId);

    if (boks) {
      boks.addEventListener("mouseover", tilfojEffekt);
      boks.addEventListener("mouseout", fjernEffekt);
    }
  });
  // Effekt på forsidebillede
  banner.classList.add("fald");
  banner2.classList.add("fald", "delay1");
  banner3.classList.add("fald", "delay2");
  banner4.classList.add("fald", "delay3");
  banner5.classList.add("fald", "delay4");
}

// Effekt på bokse
function tilfojEffekt() {
  // Fjerner mouseout-effekt
  this.classList.remove("scale_ned_effekt");
  // Tilføjer mouseovereffekt
  this.classList.add("scale_op_effekt");
}

// Effekt på bokse
function fjernEffekt() {
  // Fjerner mouseover-effekt
  this.classList.remove("scale_op_effekt");
  // Tilføjer mouseout-effekt
  this.classList.add("scale_ned_effekt");
}

// --------------- Burger fra tidligere opgave / underviserne ---------------//
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
