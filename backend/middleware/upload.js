const multer = require("multer");
const {
  ALLOWED_MIME_TYPES,
  MAX_FILE_SIZE_BYTES,
} = require("../src/storage/storage");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE_BYTES },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          `Only the following file types are allowed: ${ALLOWED_MIME_TYPES.join(", ")}`,
        ),
      );
    }
  },
});

module.exports = { upload };
