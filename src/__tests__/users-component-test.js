import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import configureStore from "redux-mock-store";
import NewsItem from "../containers/NewsItem";
import UsersList from "../containers/UsersList";
//import "../../setupTests";
import renderer from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('should render correctly <NewsItem>', () => {  
    const mockStore = configureStore();
    const store = mockStore({
        users: {
            usersList: [{
            "name": {
                "title": "Mrs",
                "first": "Isabella",
                "last": "Vargas"
            },
            "location": {
                "street": {
                    "number": 3384,
                    "name": "Mcgowen St"
                },
                "city": "Dubbo",
                "state": "New South Wales",
                "country": "Australia",
                "postcode": 1960,
                "coordinates": {
                    "latitude": "-83.9535",
                    "longitude": "103.5239"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "isabella.vargas@example.com",
            "id": {
                "name": "TFN",
                "value": "946735183"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/18.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
            }
        }, {
            "name": {
                "title": "Mr",
                "first": "Aaron",
                "last": "Bruland"
            },
            "location": {
                "street": {
                    "number": 9909,
                    "name": "Spångbergveien"
                },
                "city": "Meldal",
                "state": "Finnmark - Finnmárku",
                "country": "Norway",
                "postcode": "3676",
                "coordinates": {
                    "latitude": "-25.3702",
                    "longitude": "-66.1791"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "aaron.bruland@example.com",
            "id": {
                "name": "FN",
                "value": "29054611909"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/84.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
            }
            }],
            loader: false
        }
    });
    const rendered = renderer.create(
        <Provider store={store}>
            <UsersList />
        </Provider>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});