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

//Divs for images
let duelImg = document.getElementById("duel-img");
let doublesImg = document.getElementById("doubles-img");
let standardImg = document.getElementById("standard-img");
let hoopsImg = document.getElementById("hoops-img");
let rumbleImg = document.getElementById("rumble-img");
let dropshotImg = document.getElementById("dropshot-img");
let snowDayImg = document.getElementById("snow-day-img");

//All divs that display specific rank
const allRankDivs = document.querySelectorAll(".rank-value");

//All divs that display MMR
const allMMRDivs = document.querySelectorAll(".mmr");

//All divs to reset
const allReset = document.querySelectorAll(".reset");


const objUrl="/images"
const url=`<img src="${objUrl}">`

//Images for every rank
const unranked =


const bronze1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-1.png'>";
const bronze2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-2.png'>";
const bronze3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-3.png'>";
const silver1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-4.png'>";
const silver2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-5.png'>";
const silver3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-6.png'>";
const gold1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-7.png'>";
const gold2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-8.png'>";
const gold3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-9.png'>";
const platinum1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-10.png'>";
const platinum2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-11.png'>";
const platinum3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-12.png'>";
const diamond1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-13.png'>";
const diamond2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-14.png'>";
const diamond3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-15.png'>";
const champ1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-16.png'>";
const champ2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-17.png'>";
const champ3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-19.png'>";
const grandChamp1 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank19.png'>";
const grandChamp2 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank20.png'>";
const grandChamp3 =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank21.png'>";
const superSonicLegend =
  "<img src='https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s15rank22.png'>";

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
  if (statRank.value.toLowerCase() == "ranks") {
    statType.classList.add("remove");
  }

  if (
    (statRank.value == "" || statRank.value.toLowerCase() == "stat") &&
    statType.classList.contains("remove")
  ) {
    statType.classList.remove("remove");
  }
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let userNameValue = userName.value;
  let statPrefix = statRank.value.toLowerCase();
  let stat = statType.value.toLowerCase();

  if (statPrefix == "stat") {
    let url = `https://rocket-league1.p.rapidapi.com/${statPrefix}/${userNameValue}/${stat}`;
    let response = await axios.get(url, { headers });
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

    let hoops = ranksArr[3];
    let hoopsInfo = `${hoops.rank}(Division ${hoops.division})`;
    hoopsTitleDiv.innerHTML = hoops.playlist + ":";
    hoopsValueDiv.innerHTML = hoopsInfo;
    hoopsMMRDiv.innerHTML = `MMR: ${hoops.mmr}`;

    let rumble = ranksArr[4];
    let rumbleInfo = `${rumble.rank}(Division ${rumble.division})`;
    rumbleTitleDiv.innerHTML = rumble.playlist + ":";
    rumbleValueDiv.innerHTML = rumbleInfo;
    rumbleMMRDiv.innerHTML = `MMR: ${rumble.mmr}`;

    let dropshot = ranksArr[5];
    let dropshotInfo = `${dropshot.rank}(Division ${dropshot.division})`;
    dropshotTitleDiv.innerHTML = dropshot.playlist + ":";
    dropshotValueDiv.innerHTML = dropshotInfo;
    dropshotMMRDiv.innerHTML = `MMR: ${dropshot.mmr}`;

    let snowDay = ranksArr[6];
    let snowDayInfo = `${snowDay.rank}(Division ${snowDay.division})`;
    snowDayTitleDiv.innerHTML = snowDay.playlist + ":";
    snowDayValueDiv.innerHTML = snowDayInfo;
    snowDayMMRDiv.innerHTML = `MMR: ${snowDay.mmr}`;

    for (let rank of allRankDivs) {
      console.log(rank);
      if (rank.innerHTML.includes("Champion")) {
        rank.style.color = "purple";
      }
      if (rank.innerHTML.includes("Grand")) {
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
        rank.style.color = "#00d4ff";
      } else if (rank.innerHTML.includes("Unranked")) {
        rank.style.color = "gray";
      }
    }

    for (let mmr of allMMRDivs) {
      let arr = mmr.innerHTML.split(" ");
      let mmrNumber = arr[1];
      if (mmrNumber >= 815) {
        mmr.style.color = "green";
      } else mmr.style.color = "red";
    }
  }

  let duelRank = duelValueDiv.innerHTML.split("(")[0];

  //Adding Duel Rank Image
  if (duelValueDiv.innerHTML.includes("Unranked")) {
    duelImg.innerHTML = unranked;
  }
  if (duelRank == "Bronze I") {
    duelImg.innerHTML = bronze1;
  }
  if (duelRank == "Bronze II") {
    duelImg.innerHTML = bronze2;
  }
  if (duelRank == "Bronze III") {
    duelImg.innerHTML = bronze3;
  }
  if (duelRank == "Silver I") {
    duelImg.innerHTML = silver1;
  }
  if (duelRank == "Silver II") {
    duelImg.innerHTML = silver2;
  }
  if (duelRank == "Silver III") {
    duelImg.innerHTML = silver3;
  }
  if (duelRank == "Gold I") {
    duelImg.innerHTML = gold1;
  }
  if (duelRank == "Gold II") {
    duelImg.innerHTML = gold2;
  }
  if (duelRank == "Gold III") {
    duelImg.innerHTML = gold3;
  }
  if (duelRank == "Platinum I") {
    duelImg.innerHTML = platinum1;
  }
  if (duelRank == "Platinum II") {
    duelImg.innerHTML = platinum2;
  }
  if (duelRank == "Platinum III") {
    duelImg.innerHTML = platinum3;
  }
  if (duelRank == "Diamond I") {
    duelImg.innerHTML = diamond1;
  }
  if (duelRank == "Diamond II") {
    duelImg.innerHTML = diamond2;
  }
  if (duelRank == "Diamond III") {
    duelImg.innerHTML = diamond3;
  }
  if (duelRank == "Champion I") {
    duelImg.innerHTML = champ1;
  }
  if (duelRank == "Champion II") {
    duelImg.innerHTML = champ2;
  }
  if (duelRank == "Champion III") {
    duelImg.innerHTML = champ3;
  }
  if (duelRank == "Grand Champion I") {
    duelImg.innerHTML = grandChamp1;
  }
  if (duelRank == "Grand Champion II") {
    duelImg.innerHTML = grandChamp2;
  }
  if (duelRank == "Grand Champion III") {
    duelImg.innerHTML = grandChamp3;
  }

  //Adding doubles Img

  let doublesRank = doublesValueDiv.innerHTML.split("(")[0];

  if (doublesValueDiv.innerHTML.includes("Unranked")) {
    doublesImg.innerHTML = unranked;
  }
  if (doublesRank == "Bronze I") {
    doublesImg.innerHTML = bronze1;
  }
  if (doublesRank == "Bronze II") {
    doublesImg.innerHTML = bronze2;
  }
  if (doublesRank == "Bronze III") {
    doublesImg.innerHTML = bronze3;
  }
  if (doublesRank == "Silver I") {
    doublesImg.innerHTML = silver1;
  }
  if (doublesRank == "Silver II") {
    doublesImg.innerHTML = silver2;
  }
  if (doublesRank == "Silver III") {
    doublesImg.innerHTML = silver3;
  }
  if (doublesRank == "Gold I") {
    doublesImg.innerHTML = gold1;
  }
  if (doublesRank == "Gold II") {
    doublesImg.innerHTML = gold2;
  }
  if (doublesRank == "Gold III") {
    doublesImg.innerHTML = gold3;
  }
  if (doublesRank == "Platinum I") {
    doublesImg.innerHTML = platinum1;
  }
  if (doublesRank == "Platinum II") {
    doublesImg.innerHTML = platinum2;
  }
  if (doublesRank == "Platinum III") {
    doublesImg.innerHTML = platinum3;
  }
  if (doublesRank == "Diamond I") {
    doublesImg.innerHTML = diamond1;
  }
  if (doublesRank == "Diamond II") {
    doublesImg.innerHTML = diamond2;
  }
  if (doublesRank == "Diamond III") {
    doublesImg.innerHTML = diamond3;
  }
  if (doublesRank == "Champion I") {
    doublesImg.innerHTML = champ1;
  }
  if (doublesRank == "Champion II") {
    doublesImg.innerHTML = champ2;
  }
  if (doublesRank == "Champion III") {
    doublesImg.innerHTML = champ3;
  }
  if (doublesRank == "Grand Champion I") {
    doublesImg.innerHTML = grandChamp1;
  }
  if (doublesRank == "Grand Champion II") {
    doublesImg.innerHTML = grandChamp2;
  }
  if (doublesRank == "Grand Champion III") {
    doublesImg.innerHTML = grandChamp3;
  }

  //Adding standard Img
  let standardRank = standardValueDiv.innerHTML.split("(")[0];

  if (standardValueDiv.innerHTML.includes("Unranked")) {
    standardImg.innerHTML = unranked;
  }
  if (standardRank == "Bronze I") {
    standardImg.innerHTML = bronze1;
  }
  if (standardRank == "Bronze II") {
    standardImg.innerHTML = bronze2;
  }
  if (standardRank == "Bronze III") {
    standardImg.innerHTML = bronze3;
  }
  if (standardRank == "Silver I") {
    standardImg.innerHTML = silver1;
  }
  if (standardRank == "Silver II") {
    standardImg.innerHTML = silver2;
  }
  if (standardRank == "Silver III") {
    standardImg.innerHTML = silver3;
  }
  if (standardRank == "Gold I") {
    standardImg.innerHTML = gold1;
  }
  if (standardRank == "Gold II") {
    standardImg.innerHTML = gold2;
  }
  if (standardRank == "Gold III") {
    standardImg.innerHTML = gold3;
  }
  if (standardRank == "Platinum I") {
    standardImg.innerHTML = platinum1;
  }
  if (standardRank == "Platinum II") {
    standardImg.innerHTML = platinum2;
  }
  if (standardRank == "Platinum III") {
    standardImg.innerHTML = platinum3;
  }
  if (standardRank == "Diamond I") {
    standardImg.innerHTML = diamond1;
  }
  if (standardRank == "Diamond II") {
    standardImg.innerHTML = diamond2;
  }
  if (standardRank == "Diamond III") {
    standardImg.innerHTML = diamond3;
  }
  if (standardRank == "Champion I") {
    standardImg.innerHTML = champ1;
  }
  if (standardRank == "Champion II") {
    standardImg.innerHTML = champ2;
  }
  if (standardRank == "Champion III") {
    standardImg.innerHTML = champ3;
  }
  if (standardRank == "Grand Champion I") {
    standardImg.innerHTML = grandChamp1;
  }
  if (standardRank == "Grand Champion II") {
    standardImg.innerHTML = grandChamp2;
  }
  if (standardRank == "Grand Champion III") {
    standardImg.innerHTML = grandChamp3;
  }

  //adding  hoops div image
  let hoopsRank = hoopsValueDiv.innerHTML.split("(")[0];

  if (hoopsValueDiv.innerHTML.includes("Unranked")) {
    hoopsImg.innerHTML = unranked;
  }
  if (hoopsRank == "Bronze I") {
    hoopsImg.innerHTML = bronze1;
  }
  if (hoopsRank == "Bronze II") {
    hoopsImg.innerHTML = bronze2;
  }
  if (hoopsRank == "Bronze III") {
    hoopsImg.innerHTML = bronze3;
  }
  if (hoopsRank == "Silver I") {
    hoopsImg.innerHTML = silver1;
  }
  if (hoopsRank == "Silver II") {
    hoopsImg.innerHTML = silver2;
  }
  if (hoopsRank == "Silver III") {
    hoopsImg.innerHTML = silver3;
  }
  if (hoopsRank == "Gold I") {
    hoopsImg.innerHTML = gold1;
  }
  if (hoopsRank == "Gold II") {
    hoopsImg.innerHTML = gold2;
  }
  if (hoopsRank == "Gold III") {
    hoopsImg.innerHTML = gold3;
  }
  if (hoopsRank == "Platinum I") {
    hoopsImg.innerHTML = platinum1;
  }
  if (hoopsRank == "Platinum II") {
    hoopsImg.innerHTML = platinum2;
  }
  if (hoopsRank == "Platinum III") {
    hoopsImg.innerHTML = platinum3;
  }
  if (hoopsRank == "Diamond I") {
    hoopsImg.innerHTML = diamond1;
  }
  if (hoopsRank == "Diamond II") {
    hoopsImg.innerHTML = diamond2;
  }
  if (hoopsRank == "Diamond III") {
    hoopsImg.innerHTML = diamond3;
  }
  if (hoopsRank == "Champion I") {
    hoopsImg.innerHTML = champ1;
  }
  if (hoopsRank == "Champion II") {
    hoopsImg.innerHTML = champ2;
  }
  if (hoopsRank == "Champion III") {
    hoopsImg.innerHTML = champ3;
  }
  if (hoopsRank == "Grand Champion I") {
    hoopsImg.innerHTML = grandChamp1;
  }
  if (hoopsRank == "Grand Champion II") {
    hoopsImg.innerHTML = grandChamp2;
  }
  if (hoopsRank == "Grand Champion III") {
    hoopsImg.innerHTML = grandChamp3;
  }

  //Adding Rumble div img
  let rumbleRank = rumbleValueDiv.innerHTML.split("(")[0];

  if (rumbleValueDiv.innerHTML.includes("Unranked")) {
    rumbleImg.innerHTML = unranked;
  }
  if (rumbleRank == "Bronze I") {
    rumbleImg.innerHTML = bronze1;
  }
  if (rumbleRank == "Bronze II") {
    rumbleImg.innerHTML = bronze2;
  }
  if (rumbleRank == "Bronze III") {
    rumbleImg.innerHTML = bronze3;
  }
  if (rumbleRank == "Silver I") {
    rumbleImg.innerHTML = silver1;
  }
  if (rumbleRank == "Silver II") {
    rumbleImg.innerHTML = silver2;
  }
  if (rumbleRank == "Silver III") {
    rumbleImg.innerHTML = silver3;
  }
  if (rumbleRank == "Gold I") {
    rumbleImg.innerHTML = gold1;
  }
  if (rumbleRank == "Gold II") {
    rumbleImg.innerHTML = gold2;
  }
  if (rumbleRank == "Gold III") {
    rumbleImg.innerHTML = gold3;
  }
  if (rumbleRank == "Platinum I") {
    rumbleImg.innerHTML = platinum1;
  }
  if (rumbleRank == "Platinum II") {
    rumbleImg.innerHTML = platinum2;
  }
  if (rumbleRank == "Platinum III") {
    rumbleImg.innerHTML = platinum3;
  }
  if (rumbleRank == "Diamond I") {
    rumbleImg.innerHTML = diamond1;
  }
  if (rumbleRank == "Diamond II") {
    rumbleImg.innerHTML = diamond2;
  }
  if (rumbleRank == "Diamond III") {
    rumbleImg.innerHTML = diamond3;
  }
  if (rumbleRank == "Champion I") {
    rumbleImg.innerHTML = champ1;
  }
  if (rumbleRank == "Champion II") {
    rumbleImg.innerHTML = champ2;
  }
  if (rumbleRank == "Champion III") {
    rumbleImg.innerHTML = champ3;
  }
  if (rumbleRank == "Grand Champion I") {
    rumbleImg.innerHTML = grandChamp1;
  }
  if (rumbleRank == "Grand Champion II") {
    rumbleImg.innerHTML = grandChamp2;
  }
  if (rumbleRank == "Grand Champion III") {
    rumbleImg.innerHTML = grandChamp3;
  }

  let dropshotRank = dropshotValueDiv.innerHTML.split("(")[0];

  if (dropshotValueDiv.innerHTML.includes("Unranked")) {
    dropshotImg.innerHTML = unranked;
  }
  if (dropshotRank == "Bronze I") {
    dropshotImg.innerHTML = bronze1;
  }
  if (dropshotRank == "Bronze II") {
    dropshotImg.innerHTML = bronze2;
  }
  if (dropshotRank == "Bronze III") {
    dropshotImg.innerHTML = bronze3;
  }
  if (dropshotRank == "Silver I") {
    dropshotImg.innerHTML = silver1;
  }
  if (dropshotRank == "Silver II") {
    dropshotImg.innerHTML = silver2;
  }
  if (dropshotRank == "Silver III") {
    dropshotImg.innerHTML = silver3;
  }
  if (dropshotRank == "Gold I") {
    dropshotImg.innerHTML = gold1;
  }
  if (dropshotRank == "Gold II") {
    dropshotImg.innerHTML = gold2;
  }
  if (dropshotRank == "Gold III") {
    dropshotImg.innerHTML = gold3;
  }
  if (dropshotRank == "Platinum I") {
    dropshotImg.innerHTML = platinum1;
  }
  if (dropshotRank == "Platinum II") {
    dropshotImg.innerHTML = platinum2;
  }
  if (dropshotRank == "Platinum III") {
    dropshotImg.innerHTML = platinum3;
  }
  if (dropshotRank == "Diamond I") {
    dropshotImg.innerHTML = diamond1;
  }
  if (dropshotRank == "Diamond II") {
    dropshotImg.innerHTML = diamond2;
  }
  if (dropshotRank == "Diamond III") {
    dropshotImg.innerHTML = diamond3;
  }
  if (dropshotRank == "Champion I") {
    dropshotImg.innerHTML = champ1;
  }
  if (dropshotRank == "Champion II") {
    dropshotImg.innerHTML = champ2;
  }
  if (dropshotRank == "Champion III") {
    dropshotImg.innerHTML = champ3;
  }
  if (dropshotRank == "Grand Champion I") {
    dropshotImg.innerHTML = grandChamp1;
  }
  if (dropshotRank == "Grand Champion II") {
    dropshotImg.innerHTML = grandChamp2;
  }
  if (dropshotRank == "Grand Champion III") {
    dropshotImg.innerHTML = grandChamp3;
  }

  let snowDayRank = snowDayValueDiv.innerHTML.split("(")[0];

  if (snowDayValueDiv.innerHTML.includes("Unranked")) {
    snowDayImg.innerHTML = unranked;
  }
  if (snowDayRank == "Bronze I") {
    snowDayImg.innerHTML = bronze1;
  }
  if (snowDayRank == "Bronze II") {
    snowDayImg.innerHTML = bronze2;
  }
  if (snowDayRank == "Bronze III") {
    snowDayImg.innerHTML = bronze3;
  }
  if (snowDayRank == "Silver I") {
    snowDayImg.innerHTML = silver1;
  }
  if (snowDayRank == "Silver II") {
    snowDayImg.innerHTML = silver2;
  }
  if (snowDayRank == "Silver III") {
    snowDayImg.innerHTML = silver3;
  }
  if (snowDayRank == "Gold I") {
    snowDayImg.innerHTML = gold1;
  }
  if (snowDayRank == "Gold II") {
    snowDayImg.innerHTML = gold2;
  }
  if (snowDayRank == "Gold III") {
    snowDayImg.innerHTML = gold3;
  }
  if (snowDayRank == "Platinum I") {
    snowDayImg.innerHTML = platinum1;
  }
  if (snowDayRank == "Platinum II") {
    snowDayImg.innerHTML = platinum2;
  }
  if (snowDayRank == "Platinum III") {
    snowDayImg.innerHTML = platinum3;
  }
  if (snowDayRank == "Diamond I") {
    snowDayImg.innerHTML = diamond1;
  }
  if (snowDayRank == "Diamond II") {
    snowDayImg.innerHTML = diamond2;
  }
  if (snowDayRank == "Diamond III") {
    snowDayImg.innerHTML = diamond3;
  }
  if (snowDayRank == "Champion I") {
    snowDayImg.innerHTML = champ1;
  }
  if (snowDayRank == "Champion II") {
    snowDayImg.innerHTML = champ2;
  }
  if (snowDayRank == "Champion III") {
    snowDayImg.innerHTML = champ3;
  }
  if (snowDayRank == "Grand Champion I") {
    snowDayImg.innerHTML = grandChamp1;
  }
  if (snowDayRank == "Grand Champion II") {
    snowDayImg.innerHTML = grandChamp2;
  }
  if (snowDayRank == "Grand Champion III") {
    snowDayImg.innerHTML = grandChamp3;
  }
});

resetButton.addEventListener("click", () => {
  userName.value = "";
  statRank.value = "";
  statType.value = "";
  for (let reset of allReset) {
    reset.innerHTML = "";
  }
});

