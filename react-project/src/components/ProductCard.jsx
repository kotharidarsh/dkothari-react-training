const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 shadow rounded-lg">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
