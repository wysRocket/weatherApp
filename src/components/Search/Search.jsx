import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from './../FormControl';
import {required} from './../validator';
import {useDispatch} from "react-redux";
import {getParticularCityWeather} from './../../redux/weather-reducer';

const SearchForm = (props) => {
return (
<div className="form-inline">
    <form onSubmit={props.handleSubmit}>
        <Field name="city" type="text" component={Input} validate={[required]}
            placeholder="Enter city name" />

        <button className="btn btn-primary btn-sm ">
            Search
        </button>

    </form>
</div>
)
}
const SearchReduxForm = reduxForm({form: 'city_name'})(SearchForm);

const Search = (props) => {
const dispatch = useDispatch();
const pushSubmit = (formData) => {
dispatch(getParticularCityWeather(formData.city))
}
return (
<div className="center mt20">
    <SearchReduxForm onSubmit={pushSubmit} />
</div>
)
}

export default Search;