async function tempo(request, response) {
  const dynamicDate = new Date();
  
  const subscriberResponse = await fetch("https://api.github.com/users/torvalds");
  const subscribersResponseJson = await subscriberResponse.json();
  const inscritos = subscribersResponseJson.followers;

  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  });

}

export default tempo;