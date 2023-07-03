"use client"

import { store} from '../data/store'
import { Provider } from "react-redux"
import React from 'react'

export default function ReduxProvider({children}: {children: React.ReactNode}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}



