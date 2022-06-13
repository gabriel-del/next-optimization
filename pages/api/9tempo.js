async function tempo(request, response) {
  //Sempre que um site pede algo (request), fica esperando uma response, mesmo que seja apenas um OK.
  const dynamicDate = new Date();
  
  const subscriberResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=ZJwLOhi01EvB90CIpsyw1e0fGRzPfw1Q");
  const subscribersResponseJson = await subscriberResponse.json();
  const inscritos = subscriberResponseJson.total_subscribers;


  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  });

}
// em /api/8tempo vai retornar sempre data atual
export default tempo;