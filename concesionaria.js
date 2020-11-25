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

  autosParaLaVenta: function () {
    let sinVender = autos.filter((auto) => auto.vendido == false);
    return sinVender;
  },

  autos0KM: function () {
    let autosVendibles = this.autosParaLaVenta();
    let autos0km = autosVendibles.filter((auto) => auto.km < 100);
    return autos0km;
  },
};

console.log(concesionaria.autos0km());
