const mainForm = document.querySelector('#main-form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const resetBtn = document.querySelector('#reset-btn');

const alphabet = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'j',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'i',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya'
};

Object.entries(alphabet).forEach(char => {
  if (char[1].length > 1) {
    alphabet[char[0].toUpperCase()] = capitalize(char[1]);
  } else {
    alphabet[char[0].toUpperCase()] = char[1].toUpperCase()
  }
});

const regex = /[^а-яА-Я\.,!\?\-:; ]/gu;

input.addEventListener('keyup', () => {
  if (regex.test(input.value)) {
    input.value = input.value.replace(regex, '');
  }
});

mainForm.addEventListener('submit', e => {
  let result = '';

  for (char of input.value) {
    if (char in alphabet) {
      result += alphabet[char];
    } else {
      result += char;
    }
  }

  output.value = result;

  e.preventDefault();
});

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

resetBtn.addEventListener('click', () => {
  if (confirm('Do you really want to reset inputs?')) {
    input.value = '';
    input.style.height = '60px';

    output.value = '';
    output.style.height = '60px';
  }
});