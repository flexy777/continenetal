"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import PartnerModal from "./PartnerModal";

type UIContextValue = {
  openPartner: () => void;
  closePartner: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [partnerOpen, setPartnerOpen] = useState(false);
  const openPartner = useCallback(() => setPartnerOpen(true), []);
  const closePartner = useCallback(() => setPartnerOpen(false), []);

  return (
    <UIContext.Provider value={{ openPartner, closePartner }}>
      {children}
      <PartnerModal open={partnerOpen} onClose={closePartner} />
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
}
