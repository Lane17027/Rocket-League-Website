const button = document.querySelector("#submitButton");
const input = document.querySelector("#textInput");

let headers={
    'User-Agent': 'RapidAPI Playground',
    'Accept-Encoding': 'identity',
    'X-RapidAPI-Key': '42d8d39440mshc87b18c9581e285p157eb7jsn8b7d3812506a',
    'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com'
  }




button.addEventListener("click", async () => {
    // let response = await axios.get('https://rocket-league1.p.rapidapi.com/ranks/GucciLane97', {headers});
    let response = await axios.get('https://api-nba-v1.p.rapidapi.com/ranks/GucciLane97', {headers});
    console.log(response)
})
