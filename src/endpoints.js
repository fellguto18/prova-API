import { Router } from 'express'
import {dobro, somar, febre, media, cor, IngressoCinema} from './services.js'


const server = Router();
server.get('/dobro/:numero', (req, resp) => {
    try{
        let numero = Number(req.params.numero);
      
        const d = dobro(numero);
        resp.send({
            dobro:d
        });
    }catch(err)
    {
        resp.status(404).send({
            erro: err.message
        })
        
    }
})

server.get('/somar', (req, resp) => {
    try{

        const a = Number(req.query.a);
        const b = Number(req.query.b);
    
        const x = somar(a, b);
    
        resp.send({
            soma:x
        })
    }catch(err){

         resp.status(404).send({
            erro: err.message
        })
        
    }
})

server.post('/somar', (req, resp) => {
    try{
        const {a, b} = req.body;
    const x = somar(a, b);
    resp.send({
        soma:x
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
        
    }
    
})

server.get('/temperatura', (req, resp) => { 
    try{
        const a = Number(req.query.a);
        
        const x = febre(a);
        resp.send({
            febre: x
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
    
})
server.post('/media', (req,resp) => {
    try{
        const {a, b, c} = req.body;
        const x = media(a, b, c);
        resp.send({
            media: x
        })
    }catch(err){

    }
})
server.get('/dia2/cor', (req,resp) => {
    try{
        const a = req.query.a;
        const x = cor(a);

        resp.send({
            primaria: x
        })
    }catch(err){

    }
})
export default server;