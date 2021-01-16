const {MongoClient} = require('mongodb');
const uri =
  "mongodb+srv://MateuszW:587188Ab@test.bxxiy.mongodb.net/test>?retryWrites=true&w=majority";


const ProductsGet = async (model, req, res) => {

  const client = new MongoClient(uri, { useUnifiedTopology: true }); // inicjalizacja instancji klienta mongodb lokalnie w funkcji rozwiązuje problem topology is closed, który występował z powodu tego że połączenie było zamykane lokalnie, a klient był inicjalizowany globalnie

  try {
    await client.connect();

    const database = client.db('Products')
    const collection = database.collection(model)
  
    const query = { name: model}
    const productDetails = await collection.findOne(query)
    res.json(productDetails)

  } catch(e) {
    console.log(e)
  } finally {

   await client.close()
  }

}

module.exports = {
    ProductsGet
}