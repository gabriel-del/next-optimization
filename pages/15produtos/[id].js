//pega as props no servidor
export async  function  getServerSideProps(context) {
  const id = context.query.id;

  return {
    props: {
      id: id
    }
  }

}

function Produtos(props) {
  return <div>Id do produto: {props.id}</div>
}

//desta forma a informação já vem diretamente pronta do servidor, no html
//porém haverá build pra cada requisição, ou seja, pode ficar sobrecarregado
export default Produtos;