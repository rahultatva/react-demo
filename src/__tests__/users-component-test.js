import React from "react";
import { Provider } from "react-redux";
import UsersList from "../containers/UsersList";
import renderer from 'react-test-renderer';
import {store} from "../store"
import { connect } from "react-redux";

describe("UsersList Component", () => {
    it("should render without throwing an error", async () => {
        const rendered = renderer.create(
            <Provider dispatch={jest.fn} store={store}>
                <UsersList />
            </Provider>
        );
        
        const mapStateToProps = state => {
        const {
            users:{usersList, loader}
            } = state;
        return { users:usersList, loader:loader };
        };
        
        const mapDispatchToProps = dispatch => ({
            getAllUsers: payload => dispatch({ type: "FETCH_USERS", payload })
        });
        
        connect(mapStateToProps, mapDispatchToProps);

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});