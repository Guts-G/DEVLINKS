function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", " ./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do mike brito no fundo roxo de oculos escuro")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de myke brito sorrindo,usando oculos camisa preta barba e fundo amarelo"
    )
  }
}
