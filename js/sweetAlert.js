function saludo(){
	const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Estas seguro de comprar este calzado?',
    footer: "No podrás volver atrás luego de confirmar",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '¡Si, deseo comprarlo!',
    cancelButtonText: 'No, cancela mi compra',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Comprado',
        '¡Muchas gracias por confiar en nosotros!',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Compra cancelada',
        'Vuelve al catálogo para más zapatillas',
        'error'
      )
    }
  });
	}