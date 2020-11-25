const autos = require("./autos");

let concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    return this.autos.find((auto) => auto.patente == patente) || null;
  },
};
