import { create } from 'zustand';

export const useNotes = create((set) => ({
    notes: ['One note'],
    addNote: (note) =>
        set((state) => ({
            notes: [...state.notes, note],
        })),
    removeNote: (note) =>
        set((state) => ({
            notes: state.notes.filter((value) => note !== value),
        })),
    removeAllNotes: () =>
        set({ notes: [] }),
    reset: () =>
        set({
            notes: ['One', 'Two'],
        }),
    addRandomNumber: () =>
        set((state => ({
            notes: [...state.notes, parseInt(Math.random() *100)]
    }))
    ),
}));