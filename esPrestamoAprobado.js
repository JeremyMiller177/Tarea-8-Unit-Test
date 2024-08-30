// esPrestamoAprobado.js
function esPrestamoAprobado(tipoPersona, tieneDeudas) {
  if (tipoPersona === "estudiante") {
    return false;
  } else if (tipoPersona === "empleado" || tipoPersona === "trabajador") {
    return true;
  } else if (tipoPersona === "retirado") {
    return !tieneDeudas;
  }
  return false; // Para casos no esperados
}

module.exports = esPrestamoAprobado;
