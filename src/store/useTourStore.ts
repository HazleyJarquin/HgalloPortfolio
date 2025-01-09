import { create } from "zustand";
import { persist } from "zustand/middleware";

type TourStore = {
  tour: boolean;
  setTour: (tour: boolean) => void;
};

export const useTourStore = create<TourStore>()(
  persist(
    (set) => ({
      tour: false,
      setTour: (tour) => set({ tour }),
    }),
    {
      name: "tour-storage",
    }
  )
);
