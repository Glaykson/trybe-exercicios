// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  setTimeout(() => console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus Celsius`), messageDelay()); 
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// .......................................................

// const messageDelay = () => Math.floor(Math.random() * 5000);
// const maxTemperature = 58;
// const getMarsTemperature = () => Math.floor(Math.random() * maxTemperature);

// setTimeout(() => console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus Celsius`), messageDelay()); 

// getMarsTemperature();

// Tradução:
// messageDelay: Atraso da mensagem
// getMarsTemperature: obter a temperatura de Marte
// maxTemperature: Temperatura máxima
// sendMarsTemperature: enviar temperatura de Marte