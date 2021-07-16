const button = document.querySelector('button')!;

function clickHandler(message: string) {
  console.log('Clicked!');
}

button.addEventListener('click', () => {
  console.log('Clicked!', clickHandler.bind(null, "You're Welcome"));
});
