import axios from 'axios'
const baseURL="http://localhost:8000/api/atlas"

export const userRequest=axios.create({baseURL:baseURL})
// headers:{"Access-Control-Request-Headers":"*","Origin":true,"Access-Control-Allow-Credentials":"*","api-key":"a2pJneejPLob94PzqiGZbsJqzxHnIEmyDXFG8S3QqZUHGQAkky00piofpaJTiJap","Content-Type":"application/json" 
// ,"Access-Control-Allow-Origin":"*"