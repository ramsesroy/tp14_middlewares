let administradores = ['Ada','Greta','Vim','Tim'];

function administrador(req, res, next) {
  administradores.forEach((adminis) => {
    if (adminis===req.query.adminis) {
      return res.send("Hola Administrador");
    } else {
      return res.send("No tienes los privilegios para ingresar.");
    }
    next();
  });
}

module.exports = administrador;

