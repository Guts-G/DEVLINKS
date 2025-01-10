function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", " ./assets/Light-mode.png")
    img.setAttribute("alt", "minha foto sem camisa")
  } else {
    img.setAttribute("src", "./assets/Dark-mode.png")
    img.setAttribute(
      "alt",
      "Minha foto sem camisa e de oculos escuro"
    )
  }
}
