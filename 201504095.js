//Áreas de figuras y mayor/menor entre dos numeros

module.exports = {

    getAreaTriangulo: function(base,altura){
        return (base * altura) / 2;
    },

    getAreaCirculo: function(radio){
        return 3.1416 * (radio * radio);
    },

    getAreaCuadrado: function(lado){
        return lado * lado;
    },

    getAreaRectangulo: function(base, altura){
        return base * altura;
    },

    getAreaTrapecio: function(baseMayor,BaseMenor, altura){
        return ((baseMayor * BaseMenor) / 2) * altura;
    },

  }