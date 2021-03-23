const assert = require('chai').assert;
const app = require('../201504095');

// Results
describe('App', function(){

  describe('getAreaTriangulo()', function(){
    it('Deberia devolver la mitad de la multiplicación de base por altura.', function(){
        let calcularAreaTriangulo = app.getAreaTriangulo(10,5);
        assert.equal(calcularAreaTriangulo, 25);
      });
      
  });

  describe('getAreaCirculo()', function(){
    it('Deberia devolver un numero mayor al radio.', function(){
        let calcularAreaCirculo = app.getAreaCirculo(5);
        assert.isAbove(calcularAreaCirculo, 5);
      });
      
  });

  describe('getAreaCuadrado()', function(){
    it('Deberia devolver el número ingresado al cuadrado.', function(){
        let calcularAreaCuadrado = app.getAreaCuadrado(3);
        assert.equal(calcularAreaCuadrado, 9);
      });
      
      it('Deberia devolver tipo numero', function(){
        let resultado = app.getAreaCuadrado(3);
        assert.typeOf(resultado, 'number');
    });
  });
  

  describe('getAreaRectangulo()', function(){
    it('Deberia devolver la multiplicacion de los parametros enviados.', function(){
        let calcularArea = app.getAreaRectangulo(5,20);
        assert.equal(calcularArea, 5*20);
    });
  });


  describe('getAreaTrapecio()', function(){
    it('Deberia devolver un número.', function(){
        let calcularArea = app.getAreaTrapecio(10,5,4);
        assert.typeOf(calcularArea, 'number');
    });
  });




});
