import React from "react";
import { Provider } from "react-redux";
import UsersList from "../containers/UsersList";
import renderer from 'react-test-renderer';
import {store} from "../store"

describe("UsersList Component", () => {
    it("should render without throwing an error", async () => {
        const rendered = renderer.create(
            <Provider dispatch={jest.fn} store={store}>
                <UsersList />
            </Provider>
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});