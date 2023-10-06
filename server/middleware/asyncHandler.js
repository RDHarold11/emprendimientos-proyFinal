/* Los middleware son funciones que se ejecutan antes de llegar a una ruta
    Esto nos permitirá comprobar quien es admin, quien es emprendedor, etc.
*/
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
