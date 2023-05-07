function generateAvatar() {
  const name = document.getElementById('name').value;
  const favoriteColor = document.getElementById('favorite-color').value;
  const favoriteAnimal = document.getElementById('favorite-animal').value;
  const favoriteFood = document.getElementById('favorite-food').value;
  const hobby = document.getElementById('hobby').value;
  const personalityTrait = document.getElementById('personality-trait').value;
  const luckyNumber = parseInt(document.getElementById('lucky-number').value);
  const birthMonth = document.getElementById('birth-month').value;
  const birthYear = parseInt(document.getElementById('birth-year').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // calculate avatar properties based on the input values
  const backgroundColor = favoriteColor;
  const animalImage = `https://robohash.org/${favoriteAnimal}?size=200x200&set=set4`;
  const foodImage = `https://source.unsplash.com/200x200/?${favoriteFood}`;
  const hobbyImage = `https://source.unsplash.com/200x200/?${hobby}`;
  const personalityTraitEmoji = getPersonalityTraitEmoji(personalityTrait);
  const birthMonthEmoji = getBirthMonthEmoji(birthMonth);
  const birthYearEmoji = getBirthYearEmoji(birthYear);
  const genderEmoji = getGenderEmoji(gender);
  const luckyNumberEmoji = getLuckyNumberEmoji(luckyNumber);

  // create the avatar HTML
  const avatarHtml = `
    <div style="background-color: ${backgroundColor}; padding: 20px;">
      <img src="${animalImage}" alt="${favoriteAnimal}" style="float: left; margin-right: 20px;">
      <div>
        <h2>${name} ${genderEmoji}</h2>
        <p>${birthMonthEmoji} ${birthYearEmoji}</p>
        <p>${personalityTraitEmoji} ${hobbyImage}</p>
        <p>${foodImage} ${luckyNumberEmoji}</p>
      </div>
    </div>
  `;

  // insert the avatar HTML into the avatar container
  document.getElementById('avatar-container').innerHTML = avatarHtml;
}

function getPersonalityTraitEmoji(personalityTrait) {
  switch (personalityTrait.toLowerCase()) {
    case 'adventurous':
      return '🏞️';
    case 'creative':
      return '🎨';
    case 'empathetic':
      return '❤️';
    case 'funny':
      return '😂';
    case 'logical':
      return '🧠';
    case 'optimistic':
      return '🌞';
    case 'organized':
      return '🗂️';
    case 'patient':
      return '⏳';
    case 'resourceful':
      return '🛠️';
    case 'wise':
      return '🦉';
    default:
      return '';
  }
}

function getBirthMonthEmoji(birthMonth) {
  switch (birthMonth.toLowerCase()) {
    case 'jan':
      return '🌨️';
    case 'feb':
      return '❤️';
    case 'mar':
      return '🌱';
    case 'apr':
      return '🌸';
    case 'may':
      return '🌺';
    case 'jun':
      return '🌞';
    case 'jul':
      return '🌊';
    case 'aug':
      return '☀️';
    case 'sep':
      return '🍁';
    case 'oct':
      return '🎃';
    case 'nov':
      return '🍂';
    case 'dec':
      return '☃️';
    default:
      return '';
  }
}

function getBirthYearEmoji(birthYear) {
  // calculate the animal year based on the birth year
  const animalYear = (birthYear - 4) % 12;

  switch (animalYear) {
    case 0:
      return '🐀';
    case 1:
      return '🐂';
    case 2:
      return '🐅';
    case 3:
      return '🐇';
    case 4:
      return '🐉';
    case 5:
      return '🐍';
    case 6:
      return '🐎';
    case 7:
      return '🐑';
    case 8:
      return '🐒';
    case 9:
      return '🐓';
    case 10:
      return '🐕';
    case 11:
      return '🐖';
    default:
      return '';
  }
}

function getGenderEmoji(gender) {
  switch (gender.toLowerCase()) {
    case 'male':
      return '👨';
    case 'female':
      return '👩';
    case 'x':
      return '🏳️‍🌈';
    default:
      return '';
  }
}

function getLuckyNumberEmoji(luckyNumber) {
  const emojis = ['', '🌟', '🍀', '💫', '🔮', '🎉', '💎', '🎁', '🔑', '📚'];

  if (luckyNumber >= 1 && luckyNumber <= 9) {
    return emojis[luckyNumber];
  } else {
    return '';
  }
}
