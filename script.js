let joke = document.querySelector(".joke");
const func = () => {
    joke.classList.remove("fade")
  const jokey = fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  jokey
    .then((p) => {
      return p.json();
    })
    .then((p) => {
      console.log(p.joke);
      joke.textContent = `${p.joke}`;
      joke.classList.add('fade');
    });
};
document.querySelector(".button").addEventListener("click",()=>{
    console.log("button clicked");
    func()
})
