async function tempo(request, response) {
  const apiSecret = process.env.API;
  const dynamicDate = new Date();
  
  const subscriberResponse = await fetch(`https://api.github.com/users/${apiSecret}`);
  const subscribersResponseJson = await subscriberResponse.json();
  const inscritos = subscribersResponseJson.followers;

  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  });

}

//desta forma a informação da api vai pelo variavel de ambiente env
//A falha dessa abordagem é que a api do github pode ficar sobrecarregada

export default tempo;