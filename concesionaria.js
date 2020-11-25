const autos = require("./autos");

let concesionaria = {
  autos: autos,

  buscarAuto: function (patente) {
    return this.autos.find((auto) => auto.patente == patente) || null;
  },

  venderAuto: function (patente) {
    let encontrado = this.buscarAuto(patente);
    encontrado.vendido = true;
    return this.buscarAuto(patente);
  },
};

console.log(concesionaria.venderAuto("APL123"));
