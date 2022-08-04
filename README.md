# Animal Dance Battle

Phase One Projec
by Jeff Marks & Zak Dean
  
## Proposal:

Have you ever wondered which animal is the best dancer?  Find out with Animal Dance Battle!  

This website places you as the judge in the ultimate zoological dance competition.  Each tournament will be a unique experience, the result of which will be recorded in the pantheon of Animal Dance Battle history!

## API:

For our project, we used [Zoo Animal API](https://zoo-animal-api.herokuapp.com/) to request our animal data in JSON format. With the endpoint "/animals/rand/{number}", we were able to request a specific number of random animals (in our case, 8). For example:  

>https://zoo-animal-api.herokuapp.com/animals/rand/8  

The API returns the following information on a random animal:  

    {
        "name": "Parma Wallaby",
        "latin_name": "Macropus parma",
        "animal_type": "Marsupial",
        "active_time": "Diurnal",
        "length_min": "1.5",
        "length_max": "2",
        "weight_min": "10",
        "weight_max": "11",
        "lifespan": "7",
        "habitat": "Forest and grassland",
        "diet": "Grass",
        "geo_range": "Australia and New Zealand",
        "image_link": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Parma_wallaby_crop2.jpg",
        "id": 133
    }
## User Story:

### Step 1:
On page loading, the user should see the title of the page, an empty tournament bracket, and a disco ball button to start the dance tournament and meet our animal competitors.  

### Step 2:
On clicking the disco ball, the bracket will populate with eight random animals and thehir images generated from the API. With the use of keyframes, the animals will be dancing! Click the disco ball once more to begin the first round of dance battles.

### Step 3:
The bracket disappears and is replaced by a head-to-head battle between the first two animals. The two animals appear side by side. When you click on each animal, its stats will display in the place of its opponent. Stats include name, habitat, and diet, which we sourced from the API.  

In addition to the above stats, we created a formula to randomly assign each animal its own signature dance move. For example, the Sumatran Orangutan's signature dance move might be the "Orangutan Hustle".  

After viewing the stats, the user will decide which animal wins the dance battle. By pressing enter, they will confirm the winner and move to the next match-up. This process will repeat until all matches in round one have a winner.

### Step 4:

We return to the tournament bracket. The next round (Semi-Finals) will populate with the four winners from the previous round. The user will be prompted to click the disco ball to begin the head-to-head battles.

### Step 5: 

The head-to-head battles function in the same manner as before. The process of Steps 4 and 5 repeat until the final round, where the user will select the champion dancer.

### Step 6:

Upon selecting the champion, the user will be prompted to play again.

## Proposal Presentation:

[Phase One Project Slideshow](https://docs.google.com/presentation/d/1E3W4uigcIFiZkSigTxsiXXeD8fhJSyQLqEzQ1zu1UiU/edit?usp=sharing)