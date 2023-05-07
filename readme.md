# Avatar Generator

This program generates an avatar based on user input for various attributes such as name, favorite color, favorite animal, favorite food, hobby, personality trait, lucky number, birth month, and birth year. The avatar is displayed in an HTML container.

## Usage

To use the program, follow these steps:

1. Enter your name in the "Name" field.
2. Enter your favorite color in the "Favorite Color" field.
3. Enter your favorite animal in the "Favorite Animal" field.
4. Enter your favorite food in the "Favorite Food" field.
5. Enter your hobby in the "Hobby" field.
6. Select your personality trait from the dropdown menu.
7. Enter your lucky number in the "Lucky Number" field.
8. Select your birth month from the dropdown menu.
9. Enter your birth year in the "Birth Year" field.
10. Select your gender from the radio buttons.
11. Click the "Generate Avatar" button.

### Function: generateAvatar()

This function generates an avatar based on the user input. It calculates the avatar properties based on the input values and creates the avatar HTML. It then inserts the avatar HTML into the avatar container.

### Function: getPersonalityTraitEmoji(personalityTrait)

This function takes in a personality trait and returns an emoji based on that trait. If the input is not a valid personality trait, it returns an empty string.

### Function: getBirthMonthEmoji(birthMonth)

This function takes in a birth month and returns an emoji based on that month. If the input is not a valid birth month, it returns an empty string.

### Function: getBirthYearEmoji(birthYear)

This function takes in a birth year and calculates the animal year based on that year. It then returns an emoji based on the animal year. If the input is not a valid birth year, it returns an empty string.

### Function: getGenderEmoji(gender)

This function takes in a gender and returns an emoji based on that gender. If the input is not a valid gender, it returns an empty string.

### Function: getLuckyNumberEmoji(luckyNumber)

This function takes in a lucky number and returns an emoji based on that number. If the input is not a valid lucky number, it returns an empty string.
