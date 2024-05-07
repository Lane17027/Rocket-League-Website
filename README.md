# Rocket League Website

The purpose of this website is to look up yourselves or any friends stats on the popular game Rocket League! If your stats appear worse than you expected, then you are proabably worse than you expected. There are absolutely 0 statistical mistakes from any data pulled from here.

<br>
<br>

# How to Get Started
![Alt text](<Rocket League-1.jpg>)

I will begin by getting my javaScript finished first. This will include:

- Defining global variables to HTML elements
- Making the correct axios requests and storing them within variables
- Adding global event listeners that contain the correct javascript logic

Then I will have to get the HTML/CSS worked out and all the elements in the correct spots.
I will probably use a combination of flex/grid, but more grid than flex.

An example of a succesfull API call request: https://api-nba-v1.p.rapidapi.com/stat/GucciLane97/saves

For this request, I also have to include headers in the axios.get() request, shown as following: <br> <br> let response = await axios.get('https://rocket-league1.p.rapidapi.com/stat/GucciLane97/saves', {<br>{
    'User-Agent': 'RapidAPI Playground', <br>
    'Accept-Encoding': 'identity' ,<br>
    'X-RapidAPI-Key': '42d8d39440mshc87b18c9581e285p157eb7jsn8b7d3812506a', <br>
    'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com' <br>
  }
});

This will return the following JSON response:
<br>
<br>
{
  "value": 11557,
  "name": "Saves"
}

I would then save these under a variables such as value and statType

I will be using multiple different stat types, usernames, and ranks, so my code will have to be dynamic

<br>
<br>
