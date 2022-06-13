import Link from 'next/link'

function Home () {
  return (<div>
    <h1>Home</h1>
    <Link href="/3sobre">
      <a>Acessa página sobre</a>
    </Link>
    <br/>
    <a>No ambiente de produção. Carrega a página seguinte só de passar o mouse por cima do link</a>
    <br/>
    <a>Mantém modificações no html, mesmo mudando de página</a>
  </div>)
}

export default Home