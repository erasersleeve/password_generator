## Info and Methods
The goal of this project was to create a password generator with selectable parameters. My first plan used a series of while loops to generate prompts and confirms to gather data while stacking arrays to generate a password. This solution failed to ensure that passwords had an even representation of characters and became overly complicated.

My second solution is not so different than the first, but is more concise and does not simply increase the size of the character pool as users choose more characters. It gathers user data using a simple prompt in the case of the length and a function that asks several confirms. This generator keeps the character groups separate and chooses characters in a two step process. First the generator randomly selects a number between 0 and 3, which represents one of the 4 character type choices. If the user decided not to use the type chosen by this first random number, then the generator ignores it and tries again. This way the generator will always produce the user's choosen length. It then randomly selects one of the characters in the respective string. It repeats this as necessary until it has enough characters at which point a password is presented in the readonly area. 

## Links

Link to deployed application:https://erasersleeve.github.io/password_generator/

Link to github repo: https://github.com/erasersleeve/password_generator

## Screenshots
![1](https://github.com/erasersleeve/password_generator/blob/master/Assets/Capture%20d%E2%80%99%C3%A9cran%20(13).png)
![2](https://github.com/erasersleeve/password_generator/blob/master/Assets/Capture%20d%E2%80%99%C3%A9cran%20(14).png)
![3](https://github.com/erasersleeve/password_generator/blob/master/Assets/Capture%20d%E2%80%99%C3%A9cran%20(15).png)
![4](https://github.com/erasersleeve/password_generator/blob/master/Assets/Capture%20d%E2%80%99%C3%A9cran%20(16).png)
## Contributors

Tim Winters