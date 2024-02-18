import React, { createContext, useReducer } from "react";

type StateType = {
    theme: string;
    fontSize: number;
}

// type ActionType = {
//     type: 'SET_THEME' | 'SET_FONT_SIZE',
//     payload: number
// }

type ThemeType = {
    type: 'SET_THEME'
}

type FontSizeType = {
    type: 'SET_FONT_SIZE';
    payload: number;
}

type ActionType = ThemeType | FontSizeType;

const INITIAL_STATE: StateType = {
    theme: 'light',
    fontSize: 14
}

export const ThemeContext = createContext<{
    state: StateType,
    dispatch: React.Dispatch<ActionType>
}>({
    state: INITIAL_STATE,
    dispatch: () => {}
});

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark': 'light'
            }
        case 'SET_FONT_SIZE':
            return {
                ...state,
                fontSize: action.payload
            }
        default:
            return state;
    }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
      <ThemeContext.Provider value={{ state, dispatch }}>
        {children}
      </ThemeContext.Provider>
    );
  };