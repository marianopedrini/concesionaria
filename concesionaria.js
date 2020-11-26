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

  listaDeVentas: function () {
    let lista = [];
    let autosVendidos = autos.filter((auto) => auto.vendido == true);
    autosVendidos.forEach((auto) => lista.push(auto.precio));
    return lista;
  },

  totalDeVentas: function () {
    let lista = this.listaDeVentas();
    if (lista != 0) {
      let ventas = lista.reduce(function (acum, precio) {
        return acum + precio;
      });
      return ventas;
    } else {
      return 0;
    }
  },

  puedeComprar: function (auto, persona) {
    let precioAuto = auto.precio;
    let cuotasAuto = precioAuto / auto.cuotas;
    return (
      precioAuto < persona.capacidadDePagoTotal &&
      cuotasAuto < persona.capacidadDePagoEnCuotas
    );
  },

  autosQuePuedeComprar: function (persona) {
    //podría ser el return solo sin crear la variable listadoAutos
    let listadoAutos = autos.filter((auto) => this.puedeComprar(auto, persona));
    return listadoAutos;
  },
};
