async function tempo(request, response) {
  const apiSecret = process.env.API;
  const dynamicDate = new Date();
  
  const subscriberResponse = await fetch(`https://api.github.com/users/${apiSecret}`);
  const subscribersResponseJson = await subscriberResponse.json();
  const inscritos = subscribersResponseJson.followers;

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  //com esse comando a vercel guarda os valores em cache, e apenas faz requisição para a api, passado 10s.

  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  });

}

export default tempo;