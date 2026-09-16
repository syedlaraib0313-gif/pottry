import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onStartShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onStartShopping,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [giftNote, setGiftNote] = useState('');

  // Checkout form fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 2499;
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountRate = discountApplied ? 0.1 : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const freeShippingEligible = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = subtotal === 0 || freeShippingEligible ? 0 : 199;
  const finalTotal = subtotal - discountAmount + shippingFee;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'JAIPUR10' || couponCode.trim().toUpperCase() === 'MITTI10') {
      setDiscountApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid code. Try "JAIPUR10" for 10% off.');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `MB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderComplete(true);
    setIsCheckingOut(false);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF8F3] shadow-2xl border-l border-[#E8E0D2] flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E8E0D2] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C25B34]" />
              <h2 className="font-serif text-xl font-semibold text-[#241D1A]">
                Your Artisan Bag
              </h2>
              <span className="text-xs bg-[#F4EFE6] text-[#7A6C65] font-semibold px-2 py-0.5 rounded-full">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              id="btn-close-cart"
              onClick={onClose}
              className="p-2 text-[#7A6C65] hover:text-[#241D1A] rounded-full hover:bg-[#F4EFE6]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F4EFE6] px-5 py-3 border-b border-[#E8E0D2] text-xs">
            {freeShippingEligible ? (
              <div className="flex items-center gap-2 text-emerald-800 font-medium">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>You’ve unlocked free pan-India courier delivery!</span>
              </div>
            ) : (
              <div>
                <p className="text-[#4D423D]">
                  Add <strong className="text-[#C25B34]">₹{(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString('en-IN')}</strong> more to unlock <strong className="text-[#241D1A]">Free Pan-India Delivery</strong>
                </p>
                <div className="w-full bg-[#E8E0D2] rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className="bg-[#C25B34] h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Content: Empty State or Items List */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#7A6C65] mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#241D1A]">
                Your bag is empty
              </h3>
              <p className="text-xs text-[#7A6C65] max-w-xs mt-1 leading-relaxed">
                Discover authentic terracotta, hand-poured petrichor candles, and woven crafts from Jaipur.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onStartShopping();
                }}
                className="mt-6 bg-[#241D1A] hover:bg-[#C25B34] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Explore Artisan Shop
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {/* Items List */}
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-xl bg-white border border-[#E8E0D2] shadow-xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-[#F4EFE6] shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-semibold text-[#241D1A] truncate pr-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#7A6C65] hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#7A6C65]">{item.product.categoryLabel}</p>
                      <p className="text-xs font-bold text-[#241D1A] mt-1">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F4EFE6]">
                      <div className="flex items-center border border-[#E8E0D2] rounded-lg bg-[#FBF8F3]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-xs text-[#241D1A] hover:text-[#C25B34] font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#241D1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#241D1A] hover:text-[#C25B34] font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-xs font-bold text-[#C25B34]">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon Code Accordion */}
              <div className="pt-2">
                {discountApplied ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-800">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <span>Code <strong>JAIPUR10</strong> applied (10% off)</span>
                    </div>
                    <button
                      onClick={() => setDiscountApplied(false)}
                      className="text-xs text-emerald-700 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                        setCouponError('');
                      }}
                      placeholder="Coupon Code (e.g. JAIPUR10)"
                      className="flex-1 bg-white border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs text-[#241D1A] placeholder-[#7A6C65] focus:outline-none focus:border-[#C25B34]"
                    />
                    <button
                      type="submit"
                      className="bg-[#362D29] hover:bg-[#241D1A] text-white px-4 py-2 rounded-xl text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && <p className="text-[11px] text-red-600 mt-1">{couponError}</p>}
              </div>

              {/* Gift Message Optional Note */}
              <div className="pt-1">
                <label className="text-[11px] font-medium text-[#7A6C65] block mb-1">
                  Complimentary handwritten greeting note (Optional)
                </label>
                <textarea
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="e.g. Happy housewarming Maya! Love from Vikram & Aditi."
                  rows={2}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl p-2.5 text-xs text-[#241D1A] placeholder-[#7A6C65] focus:outline-none focus:border-[#C25B34]"
                />
              </div>
            </div>
          )}

          {/* Footer Totals & Checkout Button */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E8E0D2] bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#7A6C65]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#241D1A]">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Artisan Discount (10%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#7A6C65]">
                  <span>Pan-India Delivery</span>
                  <span>
                    {shippingFee === 0 ? (
                      <strong className="text-emerald-700 font-semibold">FREE</strong>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#241D1A] pt-2 border-t border-[#E8E0D2]">
                  <span>Estimated Total</span>
                  <span className="text-base text-[#C25B34]">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                id="btn-cart-checkout"
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-[#241D1A] hover:bg-[#C25B34] text-white py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A6C65]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Protected against chipping in transit</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Simulation Dialog */}
      {isCheckingOut && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FBF8F3] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E0D2] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E0D2]">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#241D1A]">Shipping &amp; Order Details</h3>
                <p className="text-xs text-[#7A6C65]">Direct delivery from our Jaipur pottery studio</p>
              </div>
              <button
                onClick={() => setIsCheckingOut(false)}
                className="p-1.5 rounded-full hover:bg-[#E8E0D2] text-[#7A6C65]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#241D1A] block mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Radhika Sen"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#241D1A] block mb-1">Phone (WhatsApp updates)</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#241D1A] block mb-1">City &amp; State</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Indiranagar, Bengaluru"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#241D1A] block mb-1">Delivery Address &amp; PIN Code</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Apartment / Villa, Street, Landmark, PIN Code"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl p-3 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-semibold text-[#241D1A] block mb-1.5">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-colors ${
                      paymentMethod === 'upi'
                        ? 'border-[#C25B34] bg-[#FDF7F4] text-[#C25B34]'
                        : 'border-[#D8CCBA] bg-white text-[#7A6C65]'
                    }`}
                  >
                    UPI / QR Code
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-[#C25B34] bg-[#FDF7F4] text-[#C25B34]'
                        : 'border-[#D8CCBA] bg-white text-[#7A6C65]'
                    }`}
                  >
                    Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-colors ${
                      paymentMethod === 'cod'
                        ? 'border-[#C25B34] bg-[#FDF7F4] text-[#C25B34]'
                        : 'border-[#D8CCBA] bg-white text-[#7A6C65]'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>

              {/* Order total recap */}
              <div className="bg-[#F4EFE6] rounded-xl p-3.5 text-xs space-y-1">
                <div className="flex justify-between text-[#7A6C65]">
                  <span>Items count:</span>
                  <span>{items.reduce((s, i) => s + i.quantity, 0)} handcrafted pieces</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#241D1A] pt-1 border-t border-[#E8E0D2]">
                  <span>Amount to Pay:</span>
                  <span className="text-[#C25B34]">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                id="btn-place-order"
                className="w-full bg-[#C25B34] hover:bg-[#A84924] text-white py-3.5 px-4 rounded-xl text-sm font-semibold tracking-wide shadow-md transition-colors"
              >
                Place Artisan Order • ₹{finalTotal.toLocaleString('en-IN')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Order Confirmed Congratulations Modal */}
      {orderComplete && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#FBF8F3] w-full max-w-md rounded-3xl p-8 text-center shadow-2xl border border-[#E8E0D2] animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#C25B34] font-bold">
              Shukriya! Thank You
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#241D1A] mt-1">
              Order Confirmed
            </h3>
            <p className="text-xs text-[#7A6C65] mt-2 leading-relaxed">
              Your order <strong className="text-[#241D1A]">{orderId}</strong> has been received by our Jaipur workshop. Master artisans will carefully cure, inspect, and package your ceramics in honeycomb protective wrap.
            </p>

            <div className="my-5 bg-[#F4EFE6] rounded-2xl p-4 text-xs text-left space-y-2 border border-[#E8E0D2]">
              <div className="flex justify-between">
                <span className="text-[#7A6C65]">Recipient:</span>
                <span className="font-semibold text-[#241D1A]">{customerName || 'Customer'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6C65]">Delivery City:</span>
                <span className="font-semibold text-[#241D1A]">{customerCity || 'Across India'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6C65]">Estimated Dispatch:</span>
                <span className="font-semibold text-emerald-700">Within 24-48 Hours</span>
              </div>
            </div>

            <button
              id="btn-finish-order"
              onClick={handleFinish}
              className="w-full bg-[#241D1A] hover:bg-[#C25B34] text-white py-3 rounded-xl text-xs font-semibold tracking-wide transition-colors"
            >
              Continue Exploring Mitti &amp; Bloom
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
