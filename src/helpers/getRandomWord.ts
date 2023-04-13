const words: string[] =[
  'COMPUTADORA',
  'PALTA',
  'VEHICULO',
  'TELEFONO',
  'SILLA',
  'VASO',
  'FUTBOL'
];

export const getRandomWord = () => {

  let randomIndex: number = Math.floor( Math.random() * (words.length) );
  return words[randomIndex];

}