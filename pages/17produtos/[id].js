export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    },{
      params: {
        id: '2'
      }
    }],
    fallback: 'blocking'
  }
}
// se colocar o fallback true, dá para enviar uma página logo de cara, enquanto a nova é gerada.

export async function getStaticProps(context){
  await delay(5000);
  const id = context.params.id;

  return {
    props: {
      id: id
    }
  }
}

function Produtos(props) {
  return <div>Id do produto: {props.id}</div>
}

// Com esse código, em localhost haverá um delay de 5s, para qualquer um dos id's.
// Porém em produção o 1 e 2 será instantâneo, e os outros terão o delay a primeira vez, mas depois também será instantâneo.
export default Produtos;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}