const protect = () => {};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  }
  res.status(401);
  throw new Error("No autorizado como admin");
};

export { protect, admin };
