
let Loan = require('loan');
let moment = require('moment');

const args = require('yargs')
    .option('precioInmueble', {
        alias: 'p',
    })
    .option('mensualidades', {
        alias: 'm',
        default: 12 //por defecto 12 meses,prestamo a un año
    })
    .argv
 
    const precioInmueble = args.precioInmueble;
    const mensualidades = args.mensualidades;
   
let loan = new Loan({
  type: 'annuity',
  principal: precioInmueble, 
  pay_every: 'month',
  instalments: mensualidades, 
});

let DatosHipoteca =
{
    tipo_prestamo : loan.type,
    precio_inmueble : precioInmueble,
    mensualidades : mensualidades,
    tipo_plazo : loan.pay_every,
    pago_mensual : precioInmueble/mensualidades    
}

console.log('Los datos de la hipoteca son:'+"\n",DatosHipoteca)

 