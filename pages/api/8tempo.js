function tempo(request, response) {
  //Sempre que um site pede algo (request), fica esperando uma response, mesmo que seja apenas um OK.
  const dynamicDate = new Date();
  
  response.json({
    date: dynamicDate.toGMTString()
  });

}

export default tempo;