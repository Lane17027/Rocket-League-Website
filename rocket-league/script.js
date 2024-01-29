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
let duelTitleDiv=document.getElementById('duel-title')
let doublesTitleDiv=document.getElementById('doubles-title')
let standardTitleDiv=document.getElementById('standard-title')
let hoopsTitleDiv=document.getElementById('hoops-title')
let rumbleTitleDiv=document.getElementById('rumble-title')
let dropshotTitleDiv=document.getElementById('dropshot-title')
let snowDayTitleDiv=document.getElementById('snow-day-title')


//Divs for Rank Values
let duelValueDiv=document.getElementById('duel-value')
let doublesValueDiv=document.getElementById('doubles-value')
let standardValueDiv=document.getElementById('standard-value')
let hoopsValueDiv=document.getElementById('hoops-value')
let rumbleValueDiv=document.getElementById('rumble-value')
let dropshotValueDiv=document.getElementById('dropshot-value')
let snowDayValueDiv=document.getElementById('snow-day-value')

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
    options.url=`https://rocket-league1.p.rapidapi.com/ranks/${userNameValue}`
    let response = await axios.request(options);
    let ranksArr = response.data.ranks;
    console.log(ranksArr);
    let duel = ranksArr[0];
    let duelInfo = `${duel.rank}(Division ${duel.division})  MMR: ${duel.mmr}`;
    duelTitleDiv.innerHTML = duel.playlist + ":";
    duelValueDiv.innerHTML = duelInfo;

    let doubles=ranksArr[1]
    let doublesInfo=`${doubles.rank}(Division ${doubles.division})  MMR: ${doubles.mmr}`;
    doublesTitleDiv.innerHTML=doubles.playlist+':'
    doublesValueDiv.innerHTML = doublesInfo;
  }
  // if(statPrefix=='ranks'){
  //   statType.classList.toggle('remove')
  // }
  // let url = `https://rocket-league1.p.rapidapi.com/${statPrefix}/${userNameValue}/${stat}`;
  // console.log(url)
  // let response = await axios.get(url, { headers });
  // console.log(response)
  // statName.innerHTML = response.data.name + ":";
  // statValue.innerHTML = response.data.value;
  // userName.value= "";
  // statRank.value = "";
  // statType.value = "";
});

//for ranks
// let response=await axios.request(options)

resetButton.addEventListener("click", () => {
  userName.value = "";
  statRank.value = "";
  statType.value = "";
  statName.innerHTML = "";
  statValue.innerHTML = "";
});
