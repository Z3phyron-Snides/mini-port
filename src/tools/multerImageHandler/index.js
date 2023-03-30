const createHttpError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(`${__dirname}/../uploads/`));
  },
  filename: function (req, file, cb) {
    let ext = file.mimetype.split("/")[1];
    cb(null, uuidv4() + "." + ext);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(createHttpError.UnsupportedMediaType(), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const handleImage = async (req, res, next) => {
  const host = "http://localhost:3500/uploads/";
  upload.array("images", 5)(req, res, (error) => {
    if (error) return next(error);

    req.images = req.files.map((file) => host + file.filename);
    next();
  });
};

module.exports = handleImage;
