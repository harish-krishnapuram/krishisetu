import { motion, AnimatePresence } from "framer-motion";

function Modal({ isOpen, onClose, title, children, size = "md" }) {
  if (!isOpen) return null;

  const getMaxWidth = () => {
    switch (size) {
      case "lg":
        return "800px";
      case "xl":
        return "1000px";
      case "sm":
        return "400px";
      default:
        return "580px";
    }
  };

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop fade show position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-3 d-flex align-items-center justify-content-center p-3"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          className="ks-glass-card bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative z-4"
          style={{ maxWidth: getMaxWidth() }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header border-bottom p-3 px-4 d-flex align-items-center justify-content-between bg-light">
            <h5 className="modal-title fw-bold text-dark mb-0">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body p-4 overflow-y-auto" style={{ maxHeight: "78vh" }}>
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Modal;
