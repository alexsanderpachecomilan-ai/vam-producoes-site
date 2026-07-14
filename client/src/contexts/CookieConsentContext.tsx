import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type ConsentValue = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'vam_cookie_consent';

interface CookieConsentContextType {
  consent: ConsentValue;
  isBannerOpen: boolean;
  accept: () => void;
  reject: () => void;
  openPreferences: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue;
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored);
    } else {
      setIsBannerOpen(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setIsBannerOpen(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setConsent('rejected');
    setIsBannerOpen(false);
  };

  const openPreferences = () => setIsBannerOpen(true);

  return (
    <CookieConsentContext.Provider value={{ consent, isBannerOpen, accept, reject, openPreferences }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
