import { useState, useEffect } from "react";
import { X, QrCode, Unlock, Lock } from "lucide-react";

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (verified: boolean) => void;
}

const ACCESS_CODE = "7770"; // Changed from "WEDDING2024" to "7770"

const AccessModal = ({ isOpen, onClose, onVerify }: AccessModalProps) => {
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleVerify = () => {
    setIsVerifying(true);
    setError("");

    // Simulate API verification
    setTimeout(() => {
      if (accessCode === ACCESS_CODE) {
        localStorage.setItem("weddingAccessVerified", "true");
        onVerify(true);
        onClose();
      } else {
        setError("Nieprawidłowy kod dostępu. Spróbuj ponownie.");
      }
      setIsVerifying(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-subtle overflow-hidden animate-scale-in">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-wedding-accent hover:text-wedding-dark transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full neo-morphism flex items-center justify-center mb-6">
              <QrCode size={28} className="text-wedding-accent" />
            </div>

            <h3 className="font-display text-2xl text-wedding-dark mb-3">
              Wymagana weryfikacja
            </h3>

            <p className="font-serif text-wedding-accent mb-6">
              Aby uzyskać dostęp do zaproszenia, wprowadź kod QR, który
              otrzymałeś w papierowym zaproszeniu.
            </p>

            <div className="w-full space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="access-code"
                  className="text-sm font-medium text-wedding-dark text-left block"
                >
                  Kod dostępu
                </label>
                <input
                  id="access-code"
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-wedding-secondary bg-white focus:outline-none focus:ring-2 focus:ring-wedding-accent transition-all"
                  placeholder="Wprowadź kod z zaproszenia"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              <button
                onClick={handleVerify}
                disabled={isVerifying || !accessCode}
                className="w-full py-3 rounded-lg bg-wedding-dark text-white font-medium transition-all hover:bg-wedding-dark/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isVerifying ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Weryfikacja...</span>
                  </>
                ) : (
                  <>
                    <Unlock size={18} />
                    <span>Weryfikuj</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessModal;
