window.onload = function() {
    
    function corDeFundo(color) {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color
      localStorage.setItem("backgroundColor", color)
    }

    function corFonte(color) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
      }
      localStorage.setItem("fontColor", color)
    }

    function tamanhoDaFonte(size) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size
      }
      localStorage.setItem("fontSize", size)
    }

    function alturaDaLinha(height) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = height
      }
      localStorage.setItem("lineHeight", height)
    }

    function familiaDeFontes(family) {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = family
      }
      localStorage.setItem("fontFamily", family)
    }

 //.................. Cor de Fundo ...................

    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
      backgroundColorButtons[index].addEventListener("click", function(event) {
        corDeFundo(event.target.innerHTML)
      })
    }

 //.................. Cor da Fonte ...................
    
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < fontColorButtons.length; index += 1) {
      fontColorButtons[index].addEventListener("click", function(event) {
        corFonte(event.target.innerHTML)
      })
    }

 //.................. Tamaho da Fonte ...................

    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
      fontSizeButtons[index].addEventListener("click", function(event) {
        tamanhoDaFonte(event.target.innerHTML)
      })
    }

 //.................. Altura da Linha ...................

    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", function(event) {
        alturaDaLinha(event.target.innerHTML)
      })
    }

 
 //.................. Família de Fontes ...................

    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", function(event) {
        familiaDeFontes(event.target.innerHTML)
      })
    }

    function inicializar() {
      let backgroundColor = localStorage.getItem("backgroundColor")
      if (backgroundColor) corDeFundo(backgroundColor)

      let fontColor = localStorage.getItem("fontColor")
      if (fontColor) corFonte(fontColor)

      let fontSize = localStorage.getItem("fontSize")
      if (fontSize) tamanhoDaFonte(fontSize)

      let lineHeight = localStorage.getItem("lineHeight")
      if (lineHeight) alturaDaLinha(lineHeight)

      let fontFamily = localStorage.getItem("fontFamily")
      if (fontFamily) familiaDeFontes(fontFamily)
    }

    inicializar()
  }

