const BotonPDF = document.getElementById("PDFdw");

var doc = new jsPDF();

BotonPDF.addEventListener("click", (e) => {
  e.preventDefault();

  var img = new Image();
  img.src = "../images/PDF/Fondo.png";
  img.onload = () => {
    doc.addImage(img, "png", 0, 0, 210, 297);

    doc.text(79, 68, "DATOS DEL CLIENTE");
    doc.text(81, 130,"DATOS DE ENTREGA");
    doc.text(84, 199, "DATOS DEL PAGO");


    doc.text(20, 85, "Nombre Y Apellido:_______________________________________");
    let Nombre = document.getElementById("NyA").value;
    doc.text(70, 84, Nombre);
    doc.text(20, 95, "Email:_________________________________________________");
    let Email = document.getElementById("Email").value;
    doc.text(40, 94, Email);
    doc.text(20, 105, "Pais de Residencia:______________________________________");
    let Pais = document.getElementById("Pais").value;
    doc.text(72, 104, Pais);
    doc.text(20, 115, "Codigo Postal:__________________________________________");
    let CP = document.getElementById("CP").value;
    doc.text(60, 114, CP);
    doc.text(40, 145, "Envio a domicilio:");
    let EnvioE = document.getElementById("EnvioE").value;
    doc.text(85, 145, EnvioE);
    doc.text(130, 145, "Envio a Sucursal:");
    let EnvioS = document.getElementById("EnvioS").value;
    doc.text(175, 145, EnvioS);
    doc.text(20, 160, "Dirección:______________________________________________");
    let Dirección = document.getElementById("Direc").value;
    doc.text(50, 159, Dirección);
    doc.text(20, 170, "Descripción:____________________________________________");
    doc.text(20, 177, "______________________________________________________");
    doc.text(20, 185, "______________________________________________________");
    let Descripcion = document.getElementById("Descrip").value;
    doc.text(55, 169, Descripcion);
    doc.text(20, 230, "N° de Tarjeta:____________________________________________");
    let Tarjeta = document.getElementById("Tarjeta").value;
    doc.text(60, 229, Tarjeta);
    doc.text(20, 220, "Forma de Pago:__________________________________________");
    let Pago = document.getElementById("Pago").value;
    doc.text(65, 219, Pago);
    doc.text(20, 240, "Dato Extra:______________________________________________");
    let DatoX = document.getElementById("DatoX").value;
    doc.text(50, 239, DatoX);
    doc.text(120, 270, "TOTAL: $ ______________");
    let Monto = document.getElementById("Monto").value;
    doc.text(150, 269, Monto);
    doc.save("DOC.pdf");
  };
});
