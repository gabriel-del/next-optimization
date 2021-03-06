function Tempo(props){
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático - com delay)</div>
      <a>supondo que o servidor esteja saturado e com delay, o delay será uma vez apenas durante o build</a>
    </div>
  )

}

export async function getStaticProps(){
  console.log('Adicionando delay de 5 segundos');
  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

export default Tempo;