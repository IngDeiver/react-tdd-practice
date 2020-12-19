import React from "react";
import { render} from "@testing-library/react";

// redux
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()
const store = mockStore({tasks:[]})

const AllTheProviders = ({ children }) => {
  return <Provider store={store} >{children}</Provider>
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, store};