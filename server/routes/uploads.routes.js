import path from "node:path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//Problemas al encontrar la ruta de guardado

function checkFileType(file, cb) {
  const fileType = /jpg|jpeg|png/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = fileType.test(path.extname(file.originalname).toLowerCase());
  const mimeType = mimetypes.test(file.mimeType);

  if (extname && mimeType) {
    cb(null, false);
  } else {
    cb(new Error("Solo imagenes"), false);
  }
}

const upload = multer({
  storage,
  checkFileType,
});

const uploadSingleImage = upload.single("image");

router.post("/", (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      return res.status(400).send({ message: err.message });
    }
    res.status(200).send({
      message: "Imagen cargada correctamente",
      image: `/${req.file.path}`,
    });
  });
});

export default router;
