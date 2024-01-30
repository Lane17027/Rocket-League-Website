//Button/Input Values
let submitButton = document.getElementById("submitButton");
let resetButton = document.getElementById("resetButton");
let statRank = document.getElementById("statRank");
let statType = document.getElementById("statType");
let userName = document.getElementById("userName");

//Div's for stats
let statName = document.getElementById("stat-name");
let statValue = document.getElementById("stat-value");

//Divs for Ranks titles
let duelTitleDiv = document.getElementById("duel-title");
let doublesTitleDiv = document.getElementById("doubles-title");
let standardTitleDiv = document.getElementById("standard-title");
let hoopsTitleDiv = document.getElementById("hoops-title");
let rumbleTitleDiv = document.getElementById("rumble-title");
let dropshotTitleDiv = document.getElementById("dropshot-title");
let snowDayTitleDiv = document.getElementById("snow-day-title");

//Divs for Rank Values
let duelValueDiv = document.getElementById("duel-value");
let doublesValueDiv = document.getElementById("doubles-value");
let standardValueDiv = document.getElementById("standard-value");
let hoopsValueDiv = document.getElementById("hoops-value");
let rumbleValueDiv = document.getElementById("rumble-value");
let dropshotValueDiv = document.getElementById("dropshot-value");
let snowDayValueDiv = document.getElementById("snow-day-value");

//Divs for Rank mmr
let duelMMRDiv = document.getElementById("duel-mmr");
let doublesMMRDiv = document.getElementById("doubles-mmr");
let standardMMRDiv = document.getElementById("standard-mmr");
let hoopsMMRDiv = document.getElementById("hoops-mmr");
let rumbleMMRDiv = document.getElementById("rumble-mmr");
let dropshotMMRDiv = document.getElementById("dropshot-mmr");
let snowDayMMRDiv = document.getElementById("snow-day-mmr");

//All divs that display specific rank
const allRankDivs = document.querySelectorAll(".rank-value");

//All divs that display MMR
const allMMRDivs = document.querySelectorAll(".mmr");

const options = {
  method: "GET",
  url: "https://rocket-league1.p.rapidapi.com/ranks/uzumaki2987",
  headers: {
    "x-rapidapi-ua": "RapidAPI-Playground",
    "User-Agent": "RapidAPI Playground",
    "Accept-Encoding": "identity",
    "X-RapidAPI-Key": "42d8d39440mshc87b18c9581e285p157eb7jsn8b7d3812506a",
    "X-RapidAPI-Host": "rocket-league1.p.rapidapi.com",
  },
};

let headers = {
  "User-Agent": "RapidAPI Playground",
  "Accept-Encoding": "identity",
  "X-RapidAPI-Key": "42d8d39440mshc87b18c9581e285p157eb7jsn8b7d3812506a",
  "X-RapidAPI-Host": "rocket-league1.p.rapidapi.com",
};

statRank.addEventListener("change", () => {
  if (statRank.value == "ranks") {
    statType.classList.add("remove");
  }

  if (
    (statRank.value == "" || statRank.value == "stat") &&
    statType.classList.contains("remove")
  ) {
    statType.classList.remove("remove");
  }
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let userNameValue = userName.value;
  let statPrefix = statRank.value;
  let stat = statType.value;

  if (statPrefix == "stat") {
    let url = `https://rocket-league1.p.rapidapi.com/${statPrefix}/${userNameValue}/${stat}`;
    let response = await axios.get(url, { headers });
    console.log(url);
    statName.innerHTML = response.data.name + ":";
    statValue.innerHTML = response.data.value;
  }

  if (statPrefix == "ranks") {
    options.url = `https://rocket-league1.p.rapidapi.com/ranks/${userNameValue}`;
    let response = await axios.request(options);
    let ranksArr = response.data.ranks;
    let duel = ranksArr[0];
    let duelInfo = `${duel.rank}(Division ${duel.division})`;
    duelTitleDiv.innerHTML = duel.playlist + ":";
    duelValueDiv.innerHTML = duelInfo;
    duelMMRDiv.innerHTML = `MMR: ${duel.mmr}`;

    let doubles = ranksArr[1];
    let doublesInfo = `${doubles.rank}(Division ${doubles.division})`;
    doublesTitleDiv.innerHTML = doubles.playlist + ":";
    doublesValueDiv.innerHTML = doublesInfo;
    doublesMMRDiv.innerHTML = `MMR: ${doubles.mmr}`;

    let standard = ranksArr[2];
    let standardInfo = `${standard.rank}(Division ${standard.division})`;
    standardTitleDiv.innerHTML = standard.playlist + ":";
    standardValueDiv.innerHTML = standardInfo;
    standardMMRDiv.innerHTML = `MMR: ${standard.mmr}`;

    // let hoops = ranksArr[3];
    // let hoopsInfo = `${hoops.rank}(Division ${hoops.division})`;
    // hoopsTitleDiv.innerHTML = hoops.playlist + ":";
    // hoopsValueDiv.innerHTML = hoopsInfo;
    // hoopsMMRDiv.innerHTML = `MMR: ${hoops.mmr}`;

    // let rumble = ranksArr[4];
    // let rumbleInfo = `${rumble.rank}(Division ${rumble.division})`;
    // rumbleTitleDiv.innerHTML = rumble.playlist + ":";
    // rumbleValueDiv.innerHTML = rumbleInfo;
    // rumbleMMRDiv.innerHTML = `MMR: ${rumble.mmr}`;

    // let dropshot = ranksArr[5];
    // let dropshotInfo = `${dropshot.rank}(Division ${dropshot.division})`;
    // dropshotTitleDiv.innerHTML = dropshot.playlist + ":";
    // dropshotValueDiv.innerHTML = dropshotInfo;
    // dropshotMMRDiv.innerHTML = `MMR: ${dropshot.mmr}`;

    // let snowDay = ranksArr[3];
    // let snowDayInfo = `${snowDay.rank}(Division ${snowDay.division})`;
    // snowDayTitleDiv.innerHTML = snowDay.playlist + ":";
    // snowDayValueDiv.innerHTML = snowDayInfo;
    // snowDayMMRDiv.innerHTML = `MMR: ${snowDay.mmr}`;




    for (let rank of allRankDivs) {
      if (rank.innerHTML.includes("Champion")) {
        rank.style.color = "purple";
      } if (rank.innerHTML.includes("Grand")) {
        rank.style.color = "red";
      } else if (rank.innerHTML.includes("Gold")) {
        rank.style.color = "gold";
      } else if (rank.innerHTML.includes("Silver")) {
        rank.style.color = "silver";
      } else if (rank.innerHTML.includes("Bronze")) {
        rank.style.color = "brown";
      } else if (rank.innerHTML.includes("Diamond")) {
        rank.style.color = "#0b07f2";
      } else if (rank.innerHTML.includes("Platinum")) {
        rank.style.color = "#1f8ded";
      }
    }

    for (let mmr of allMMRDivs){
      let arr=mmr.innerHTML.split(' ')
      let mmrNumber=arr[1]
      if(mmrNumber>=815){
        mmr.style.color='green'

      }
      else mmr.style.color='red'
      // if(mmr.mmr>=815){
      //   mmr.style.color='green'
      // }
      // else mmr.style.color='red'
    }
  }
});

resetButton.addEventListener("click", () => {
  userName.value = "";
  statRank.value = "";
  statType.value = "";
  statName.innerHTML = "";
  statValue.innerHTML = "";
  duelTitleDiv.innerHTML = "";
  duelValueDiv.innerHTML = "";
  doublesTitleDiv.innerHTML = "";
  doublesValueDiv.innerHTML = "";
  standardTitleDiv.innerHTML = "";
  standardValueDiv.innerHTML = "";
  duelMMRDiv.innerHTML = ''
  doublesMMRDiv.innerHTML = ''
  standardMMRDiv.innerHTML = ''
});
