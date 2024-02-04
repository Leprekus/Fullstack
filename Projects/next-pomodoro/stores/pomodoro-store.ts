import { create } from 'zustand';
interface PomodoroState {
    session: {
        count: number;
        duration: number;
        setDuration: (amount: number) => void;

        increaseCount: () => void;
        decreaseCount: () => void;
        reset: () => void;
    };
    rest: {
        duration: number;
        setDuration: (amount: number) => void;
        reset: () => void;
    };
    cooldown: {
        duration: number;
        setDuration: (amount: number) => void;
        reset: () => void;
    };
    settings: {
        autoStartBreak: boolean;
        toggleAutoStartBreak: () => void;
        autoStartSession: boolean;
        toggleAutoStartSession: () => void;
        breakInterval: number;
        setBreakInterval: (amount: number) => void;

        resetDefault: () => void;
    };
}

const toMinutes = (time: number) => time * 60 * 1000;

const initialState = (
    set: (
        partial:
            | PomodoroState
            | Partial<PomodoroState>
            | ((
                    state: PomodoroState,
                ) => PomodoroState | Partial<PomodoroState>),
        replace?: boolean | undefined,
    ) => void,
) => ({
    session: {
        count: 0,

        duration: toMinutes(25),
        setDuration: (amount: number) =>
            set((state) => ({
                session: { ...state.session, duration: toMinutes(amount) },
            })),

        increaseCount: () =>
            set((state) => ({
                session: { ...state.session, count: state.session.count + 1 },
            })),
        decreaseCount: () =>
            set((state) => ({
                session: { ...state.session, count: state.session.count - 1 },
            })),
        reset: () =>
            set((state) => ({
                session: {
                    ...state.session,
                    count: 0,
                    duration: toMinutes(25), //TODO: get value picked by user
                },
            })),
    },
    rest: {
        duration: toMinutes(5),
        setDuration: (amount: number) =>
            set((state) => ({
                rest: { ...state.rest, duration: toMinutes(amount) },
            })),
        reset: () =>
            set((state) => ({
                rest: {
                    ...state.rest,
                    duration: toMinutes(5), //TODO: get value picked by user
                },
            })),
    },
    cooldown: {
        duration: toMinutes(15),
        setDuration: (amount: number) =>
            set((state) => ({
                cooldown: { ...state.cooldown, duration: toMinutes(amount) },
            })),
        reset: () =>
            set((state) => ({
                cooldown: {
                    ...state.cooldown,
                    duration: toMinutes(15), //TODO: get value picked by user
                },
            })),
    },

    settings: {
        autoStartBreak: false,
        toggleAutoStartBreak: () =>
            set((state) => ({
                settings: {
                    ...state.settings,
                    autoStartBreak: !state.settings.autoStartBreak,
                },
            })),
        autoStartSession: false,
        toggleAutoStartSession: () =>
            set((state) => ({
                settings: {
                    ...state.settings,
                    autoStartSession: !state.settings.autoStartSession,
                },
            })),
        breakInterval: 4,
        setBreakInterval: (amount: number) =>
            set((state) => ({
                settings: {
                    ...state.settings,
                    breakInterval: toMinutes(amount),
                },
            })),

        resetDefault: () => ({ ...initialState }),
    },
});
export const usePomodoroStore = create<PomodoroState>(initialState);
