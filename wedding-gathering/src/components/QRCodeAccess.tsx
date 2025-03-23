
import { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import AccessModal from './AccessModal';

interface QRCodeAccessProps {
  children: React.ReactNode;
}

const QRCodeAccess = ({ children }: QRCodeAccessProps) => {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already been verified
    const hasAccess = localStorage.getItem('weddingAccessVerified') === 'true';
    setIsVerified(hasAccess);
    setIsLoading(false);
    
    // If not verified, show modal
    if (!hasAccess) {
      setShowModal(true);
    }
  }, []);

  const handleVerify = (verified: boolean) => {
    setIsVerified(verified);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-wedding-primary z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-wedding-accent border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-wedding-accent font-medium">Wczytywanie...</p>
        </div>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-wedding-primary">
          <div className="w-20 h-20 rounded-full neo-morphism flex items-center justify-center mb-8">
            <Lock size={32} className="text-wedding-accent" />
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl text-wedding-dark mb-4 text-center">
            Zawartość chroniona
          </h1>
          
          <p className="font-serif text-wedding-accent text-center max-w-md mb-8">
            To zaproszenie jest prywatne i wymaga kodu dostępu z papierowego zaproszenia.
          </p>
          
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-3 rounded-lg bg-wedding-dark text-white font-medium transition-all hover:bg-wedding-dark/90"
          >
            Wprowadź kod dostępu
          </button>
        </div>
        
        <AccessModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onVerify={handleVerify}
        />
      </>
    );
  }

  return <>{children}</>;
};

export default QRCodeAccess;
