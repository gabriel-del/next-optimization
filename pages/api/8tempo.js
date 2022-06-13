function tempo(request, response) {
  //Sempre que um site pede algo (request), fica esperando uma response, mesmo que seja apenas um OK.
  const dynamicDate = new Date();
  
  response.json({
    date: dynamicDate.toGMTString()
  });

}
// em /api/8tempo vai retornar sempre data atual
export default tempo;