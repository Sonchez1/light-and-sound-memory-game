# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sochima Ezema**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/codepath-memory-game-?path=public%2Fscript.js%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [y] Game buttons each light up and play a sound when clicked. 
* [y] Computer plays back sequence of clues including sound and visual cue for each button
* [y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [y] User wins the game after guessing a complete pattern
* [y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [y] More than 4 functional game buttons
* [y] Playback speeds up on each turn
* [y] Computer picks a different pattern each time the game is played
* [y] Player only loses after 3 mistakes (instead of on the first mistake)
* [n] Game button appearance change goes beyond color (e.g. add an image)
* [n] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- Has a intro Play button
- The line of body text is now displayed when you click the Play button
- Gives off a buzzer sound whenever the player makes a mistake
- Changes the background color to red whenever a player makes a mistake
- The player makes a mistake when they click the wrong button or run out of time
- Whwn a player loses or wins a game, it goes back to the first scene (showing only the Play button.)
- Although I implemented a different way to display message when the game is lost or won, I stilled included alert(..), in order nto to lose any points :)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](your-link-here) I really tried to add this gif here severally, but all to no avail. The gif is in the assets folder please. Thank you.



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- stackoverflow.com
- w3schools.com
- epidemicsound.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I really enjoyed creating the basic version of this game. It was fun and quite easy. I spent 1.5 hours working on the basic version.
Now my challenges came when I started working on the optional part. Well, the first four parts of the optional features were not a challenge. 
However, I couldn't spruce up my buttons. I tried adding an image, 
but it wouldn't show up in the position I wanted it to, neither would it show when a button is clicked.
Eventually, I found out that I could implent this using Javascript. 
I didn't really encounter a challenge using audio, seeing that I added the buzzer sound.
But the issue was that I couldn't find what I was looking for. 
I pretty much preferred this look and sound of the game than adding images and audios.
But, if I was going to, I wanted to add images of animals and audios of animal sounds to make the game more interesting. 
I didn't have enough time to source for these images and audios, so I left them out.
I think my major challenge was adding a ticking clock. Ok, at some point, I got pretty much confused as to what was going on.
I had wanted to implement the flipdown timer, and had the flipdown module in package.json.
Becausse I started buiding this site with a Classic website template, it didn't have a package.json file. 
So, I had to convert it to a node.js template, then installed the module. Well, for some reason, I couldn't get it to work.
So I moved on to normal timer, which was, well, counting down.
So the challenge I had about this implementing the normal timer. It could count down, but it wasn't always starting at the times it needed to restart.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
Web development is an interesting skill. I took a class on Web Development last year Spring 
and I really enjoyed learning how to develop websites. I'm really happy I got to do this pre-work so I can refresh my memory with respect to what I learned last year.
Also, I'm currently working on a website for Stanford Robotics Center.
I have one important question though, about onclick in HTML. You know, I had previously learnt that this method was obsolete and no longer in use.
That it is more common now to use DOM and event listeners. 
I'm just curious to know why we had to use it in the pre-work. I mean, it could be that it's not soo obsolete after all.
Another important thing I would really want to learn more about is node.js and connecting to servers. I hope I do get an opportunity to learn more about it.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]
I pretty much played around a lot on this project. I spent more than 7 hours doing both the actual work and playing around.
But the 7 hours is what I spent doing the actual important work I will be submitting.
I already implemented some extra features as described above. But, if I had more time, I would have added the images and audio.
I would also implement a scoreboard, so the player can keep track of his fastest win.
I had wanted to add animations to reflect winning or losing the game.
I wanted to implement a voice saying "You have ... seconds remaining", and "Time up!"
More important, work on the ticking clock.
I don't know, but I really how hope the ticking clock doesn't count against me, 
because I don't think my implementation was all that great.
And umm, most likely keep playing around and see what changes I can make.


Finally, thank you for this pre-work!


## License

    Copyright Sochima Ezema

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.