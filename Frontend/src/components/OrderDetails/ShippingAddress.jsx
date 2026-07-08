function ShippingAddress() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
        Shipping Address
      </h3>

      <div>
        <p className="font-bold text-gray-900 text-base mb-1">
          Alexander Vance
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          128 Berkeley Square,
          <br />
          Mayfair, London W1J 6EB
          <br />
          United Kingdom
        </p>
        <p className="text-gray-600 text-sm mt-2">+44 20 7946 0124</p>
      </div>
    </div>
  );
}

export default ShippingAddress;
