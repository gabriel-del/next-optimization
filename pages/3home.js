import Link from 'next/link'

function Home () {
  return (<div>
    <h1>Home</h1>
    <Link href="/3sobre">
      <a>Acessa página sobre</a>
    </Link>
  </div>)
}

export default Home