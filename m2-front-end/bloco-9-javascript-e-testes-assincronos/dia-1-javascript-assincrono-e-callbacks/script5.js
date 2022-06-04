// 5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (saudar) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => saudar(currentTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);

// .......................................................

// Tradução
// messageDelay: Atraso da mensagem
// getMarsTemperature: obter a temperatura de Marte
// maxTemperature: Temperatura máxima
// sendMarsTemperature: enviar temperatura de Marte

// toFahrenheit: para Fahrenheit
// degreeCelsius: graus Celsius
// temperatureInFahrenheit: temperatura em Fahrenheit
// It is currently ${toFahrenheit(temperature)}ºF at Mars: Atualmente está ${toFahrenheit(temperature)}ºF em Marte
// greet: saudar
// Hi there! Curiosity here. Right now is ${temperature}ºC at Mars: Olá! Curiosidade aqui. Agora é ${temperature}ºC em Marte