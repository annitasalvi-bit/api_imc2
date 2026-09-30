import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.post('/imc', (req: Request, res: Response) => {
  //res.send('Vamos calcular sei IMC');
  const {nome,idade,altura,peso}=req.body; 
  const imc= peso/(altura*altura);
  //Casting
  const imcPreciso=parseFloat(imc.toFixed(2)); 
  let status=""; 
  if(imcPreciso<18.5){
    status="Abaixo do peso normal"
  }
  else if (imcPreciso<25){
    status="Peso normal!"
  }
  else if (imcPreciso<30){
    status= "Excesso de peso!"
  } else {
    status= "Obesidade";
  }
  res.json({
    nome,
    idade, 
    peso,
    altura, 
    imc:imcPreciso, 
    status
  });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});