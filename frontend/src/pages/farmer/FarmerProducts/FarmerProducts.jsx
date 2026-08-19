import { useState } from "react";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "../../../data/mockData";
import { toast } from "react-toastify";

const PRESET_TEMPLATES = [
  { name: "🍅 Fresh Tomatoes", url: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80" },
  { name: "🥭 Alphonso Mangoes", url: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80" },
  { name: "🌾 Golden Wheat Grains", url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80" },
  { name: "🥛 A2 Milk / Vedic Ghee", url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80" },
  { name: "🍯 Raw Forest Honey", url: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=600&q=80" },
  { name: "🥬 Fresh Organic Greens", url: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80" },
  { name: "🌶️ Sun-Dried Spices", url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80" }
];

function FarmerProducts() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "Fresh Vegetables",
    categoryId: "cat-1",
    price: "",
    unit: "kg",
    stock: "",
    isOrganic: true,
    harvestDate: "Today (Morning)",
    description: "",
    image: PRESET_TEMPLATES[0].url
  });

  const handleOpenAddModal = () => {
    setEditingId(null);
    setFormData({
      name: "",
      category: "Fresh Vegetables",
      categoryId: "cat-1",
      price: "",
      unit: "kg",
      stock: "",
      isOrganic: true,
      harvestDate: "Today (Morning)",
      description: "",
      image: PRESET_TEMPLATES[0].url
    });
    setShowModal(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      categoryId: product.categoryId,
      price: product.price,
      unit: product.unit,
      stock: product.stock,
      isOrganic: product.isOrganic,
      harvestDate: product.harvestDate || "Today",
      description: product.description || "",
      image: product.image
    });
    setShowModal(true);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove '${name}' from marketplace?`)) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.info(`Removed ${name} from your crop listings.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.stock) {
      toast.warning("Please fill in crop title, price, and stock quantity.");
      return;
    }

    if (editingId) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, ...formData, price: Number(formData.price), stock: Number(formData.stock) }
            : p
        )
      );
      toast.success(`Crop listing '${formData.name}' updated successfully!`);
    } else {
      const newProduct = {
        id: `prod-${Date.now()}`,
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        rating: 5.0,
        ratingCount: 1,
        farmer: { name: "Rameshwar Patel", location: "Nashik, Maharashtra" }
      };
      setProducts([newProduct, ...products]);
      toast.success(`New crop '${formData.name}' listed on KrishiSetu!`);
    }

    setShowModal(false);
  };

  return (
    <div className="farmer-products d-flex flex-column gap-4">
      {/* Top Banner & Trigger */}
      <div className="bg-white p-4 rounded-4 border shadow-sm d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
        <div>
          <h4 className="fw-bold mb-1 text-dark">My Crop Listings & Catalog</h4>
          <p className="text-muted small mb-0">Publish fresh farm crops direct to urban buyers with instant pricing</p>
        </div>
        <button className="btn btn-krishi-primary px-4 d-flex align-items-center gap-2" onClick={handleOpenAddModal}>
          <i className="bi bi-plus-circle-fill fs-5"></i>
          Add New Crop Listing
        </button>
      </div>

      {/* Product List Table */}
      <div className="bg-white p-4 rounded-4 border shadow-sm">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Crop Image</th>
                <th>Crop Title</th>
                <th>Category</th>
                <th>Selling Price</th>
                <th>Stock Quantity</th>
                <th>Farming Standard</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} className="rounded-3 border" style={{ width: 52, height: 52, objectFit: "cover" }} />
                  </td>
                  <td>
                    <span className="fw-bold text-dark d-block">{product.name}</span>
                    <span className="text-muted small">Rating: ⭐ {product.rating}</span>
                  </td>
                  <td><span className="badge bg-light text-dark border">{product.category}</span></td>
                  <td className="fw-bold text-success">₹{product.price} / {product.unit}</td>
                  <td>{product.stock} {product.unit}s</td>
                  <td>
                    {product.isOrganic ? (
                      <span className="badge bg-success-subtle text-success border border-success">🌱 Organic</span>
                    ) : (
                      <span className="badge bg-secondary-subtle text-secondary border">Conventional</span>
                    )}
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2 rounded-pill px-3" onClick={() => handleOpenEditModal(product)}>
                      <i className="bi bi-pencil-fill me-1"></i> Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger rounded-pill px-3" onClick={() => handleDelete(product.id, product.name)}>
                      <i className="bi bi-trash-fill me-1"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Crop Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header border-bottom p-4">
                <h5 className="modal-title fw-bold text-dark">
                  {editingId ? "✏️ Edit Crop Listing" : "🌾 Add New Farm Product"}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body p-4 row g-3">
                  <div className="col-md-8">
                    <label className="form-label small fw-semibold text-secondary">Crop Name / Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Organic Alphonso Mangoes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-secondary">Category</label>
                    <select
                      className="form-select"
                      value={formData.categoryId}
                      onChange={(e) => {
                        const cat = MOCK_CATEGORIES.find((c) => c.id === e.target.value);
                        setFormData({ ...formData, categoryId: e.target.value, category: cat?.name || "Fresh Vegetables" });
                      }}
                    >
                      {MOCK_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-secondary">Selling Price (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="e.g. 45"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-secondary">Pricing Unit</label>
                    <select
                      className="form-select"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    >
                      <option value="kg">per kg</option>
                      <option value="dozen">per dozen</option>
                      <option value="bottle">per bottle</option>
                      <option value="liter">per liter</option>
                      <option value="quintal">per quintal</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-secondary">Available Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="e.g. 500"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      required
                    />
                  </div>

                  {/* Preset Image Template Selector */}
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-secondary d-block mb-2">
                      📷 Select 1-Click Crop Image Template (No URL Needed)
                    </label>
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {PRESET_TEMPLATES.map((tmpl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`btn btn-sm rounded-pill border ${formData.image === tmpl.url ? "btn-success text-white shadow-sm" : "btn-light text-secondary"}`}
                          onClick={() => setFormData({ ...formData, image: tmpl.url })}
                        >
                          {tmpl.name}
                        </button>
                      ))}
                    </div>
                    <input
                      type="url"
                      className="form-control form-control-sm text-muted"
                      placeholder="Or paste custom image URL..."
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                  </div>

                  <div className="col-md-12">
                    <div className="form-check form-switch pt-2">
                      <input
                        className="form-check-input ms-0 me-2"
                        type="checkbox"
                        id="modalOrganic"
                        checked={formData.isOrganic}
                        onChange={(e) => setFormData({ ...formData, isOrganic: e.target.checked })}
                      />
                      <label className="form-check-label fw-bold text-success" htmlFor="modalOrganic">
                        🌱 Certified Organic Product
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-secondary">Harvest Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe soil type, harvesting process, or freshness..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <div className="modal-footer border-top p-3">
                  <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-krishi-primary rounded-pill px-4">
                    {editingId ? "Save Changes" : "Publish Crop Listing"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FarmerProducts;
