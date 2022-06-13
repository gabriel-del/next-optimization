import { useRouter } from 'next/router';

function Produtos() {
  const router = useRouter();
  const id = router.query.id;

  return <div>Id do produto: {id}</div>
}

//O SEO fica ruim desta forma, pois as informações são geradas no client-side apenas

export default Produtos;