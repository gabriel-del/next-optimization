function Tempo(props){
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
      <p>
        <a>o getstaticprops roda apenas durante o build no deploy</a>
      <br/>
      <a>o frontend não passa pelo getstaticprops</a>
      </p>
      </div>
  )

}

export function getStaticProps(){
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo;