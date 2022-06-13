function Tempo(props){
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
      <a>desta forma o valor estático é atualizado a cada (pelo menos)  1s, passando por todo o processo de build</a>
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
    },
    revalidate: 1
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

export default Tempo;