import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementBy: (amount: number) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementBy: (amount) => set((state) => ({ count: state.count + amount })),
}));

// persist should be immediately after the Create
export const useCounterStore2 = create<CounterStore>()(
  persist(
    (set, get) => ({
      count: sessionStorage.getItem("count")
        ? Number(sessionStorage.getItem("count"))
        : 0,

      increment: () => set({ count: get().count + 1 }),
      decrement: () => set({ count: get().count - 1 }),
      incrementBy: (amount) => set({ count: get().count + amount }),
    }),

    // session storage - only available in same tab
    // localStorage - available across tabs even after browser restart
    { name: "counter2", getStorage: () => localStorage }
  )
);
