import app from '../app';
import request from 'supertest';

// test("request no /err",async function(){
//   const result = await request(app).get('/err');
//   expect(result.text).toEqual("hi");
//   expect(result.status).toEqual(200);
// });

test("criando usuario",async function(done){
  //se o teste nao passar, é pq possivelmente esta dando e-mail ja existe
  const result = 
    await request(app)
      .post('/user')
      .send({name:"hue",email:"aq@a.com",password:"123456"}) 
      .set("Accept",'application/json')
      .set("Content-type","application/json");
      expect(result.status).toEqual(200);
      done();
});