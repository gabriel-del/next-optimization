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
    fallback: false
  }
}

export async function getStaticProps(context){
  const id = context.params.id;

  return {
    props: {
      id: id
    }
  }
}

//dessa forma será gerada as páginas 1 e 2, as outras darão 404

function Produtos(props) {
  return <div>Id do produto: {props.id}</div>
}

export default Produtos;