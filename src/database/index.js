// Instância para utilizar o MongoDB
const {MongoClient} = require("mongodb");

// Criação de nova instância para criar o banco de dados que será utilizado na aplicação
// O MongoDB possui a porta 27017 como padrão
const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Conexão do cliente com o banco de dados criado
client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log("SUCCESSFULLY connected to MongoDB");
})

// Padrão do NodeJS para exportar o banco de dados
module.exports = client;