const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
    "X-RapidAPI-Key": "464120f8d9msh3b05900e8682082p1dd125jsna6faa13b7c2f",
  },
  body: '{"key1":"","key2":""}',
};

const randomMotivation = () => {
  fetch("https://motivational-quotes1.p.rapidapi.com/motivation", options)
    .then((response) => response.text())
    .then((response) => {
      let mensajes = response;

      mensajes = mensajes.split("-");
      const mensaje = document.getElementById("motivate");
      let mensajeFormatiado = mensajes[0].substring(1)
      mensajeFormatiado = mensajeFormatiado.slice(0,-3)

      mensaje.textContent = mensajeFormatiado;
      const autor = document.getElementById("autor");
      autor.textContent = mensajes[1];
    })
    .catch((err) => console.error(err));
};

const buttonGenerate = document.querySelector("button");
buttonGenerate.addEventListener("click", randomMotivation);
