class Financiacion {
  constructor(total) {
    this.total = total;
    this.porcentajeInteresPorNumeroCuotas = [
      {
        1: 1.0,
      },
      {
        3: 1.101,
      },
      {
        6: 2.078,
      },
      {
        10: 2.669,
      },
      {
        12: 4.506,
      },
      {
        18: 7.379,
      },
      {
        24: 10.778,
      },
    ];
  }

  calcularTotalesPorNumeroDeCuotas() {
    const cuotas = [];
    this.porcentajeInteresPorNumeroCuotas.forEach((porcentajeObj) => {
      const cuotasObjeto = {};
      const cuotasNum = Object.keys(porcentajeObj)[0];
      const porcentaje = porcentajeObj[cuotasNum];
      const montoTotalConInteres = this.total * porcentaje;
      cuotasObjeto.cuotas = cuotasNum;
      cuotasObjeto.montoTotalConInteres = montoTotalConInteres;
      cuotasObjeto.totalPorCuota = montoTotalConInteres / cuotasNum;
      cuotas.push(cuotasObjeto);
    });

    return cuotas;
  }
}
