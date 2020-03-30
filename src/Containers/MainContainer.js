import React, { Component } from 'react';
import SortContainer from './SortContainer';
import FormContainer from './FormContainer';
import { mortality, ards, ardsDeath, exceptionObjects } from '../data.js'

export class MainContainer extends Component {

    state = {
        sortValue: "Mortality",
        counter: 0,
        data: mortality,
        exceptions: exceptionObjects,
        hypertension: false,
        age: false,
        covidExposure: false,
        diabetes: false,
        cad: false,
        dyspnea: false,
        temp: false,
        sofa: false,
        neutro: false,
        lympho: false,
        ddimer: false,
        ferritin: false,
        ldh: false,
        plateles: false,
        pt: false,
        procal: false,
        cr: false,
        hstrop: false,
        hscrp: false,
        albumin: false,
        bilirubin: false,
        alt40: false,
        ast: false,
        astalt: false,
        urea: false,
        glucose: false,
        il6: false,
        alt40YesState: false,
        alt40NoState: false,
        astYesState: false,
        astNoState: false,
        rr24YesState: false,
        rr24NoState: false,
    }

    handleClick = (title, value) => {
        let newStateObject;
        let stateKeyToUpdate;
        let points;

        if (this.state.data[0][1].find(element => element.stateName === title)) {
            //logic is to click and unclick and update counter
            stateKeyToUpdate = this.state.data[0][1]
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title) {
                    element.showing = !element.showing
                    if (value[0] === false || value[0] === "undefined") {
                        if (typeof (element.points) === "undefined" || isNaN(element.points)) {
                            points = 0
                        } else {
                            points = element.points
                        }
                    } else {
                        if (typeof (element.points) === "undefined" || isNaN(element.points)) {
                            points = 0
                        } else {
                            points = element.points * -1
                        }
                    }
                    return element
                } else {
                    return element
                }
            })
        } else if (this.state.data[1][1].find(element => element.stateName === title)) {
            //logic to handle clicking and unclicking of advanced data
            stateKeyToUpdate = this.state.data[1][1]
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title) {
                    element.showing = !element.showing
                    if (value[0] === false) {
                        points = element.points
                    } else {
                        points = element.points * -1
                    }
                    return element
                } else {
                    return element
                }
            })
        } else {
            stateKeyToUpdate = this.state.exceptions
            //logic to handle clicking and unclicking of exceptions
            newStateObject = stateKeyToUpdate.map(element => {
                if (element.stateName === title) {
                    element.showing = !element.showing
                    if (value[0] === false) {
                        points = element.points
                    } else {
                        points = element.points * -1
                    }
                    return element
                } else {
                    return element
                }
            })
        }

        if (isNaN(points)) {
            points = 0
        }

        this.setState(prevState => {
            return {
                [stateKeyToUpdate]: newStateObject,
                [title]: !prevState[title],
                counter: prevState.counter + points,
            }
        })
    }

    handleSort = (newSortValue) => {
        if (newSortValue === "Mortality") {
            this.setState({
                sortValue: newSortValue,
                data: mortality,
            }, ()=> this.calculateCount(this.state.data, this.state))
        } else if (newSortValue === "ARDS") {

            this.setState({
                sortValue: newSortValue,
                data: ards,
            }, ()=> this.calculateCount(this.state.data, this.state))
        } else {
            this.setState({
                sortValue: newSortValue,
                data: ardsDeath,
            }, ()=> this.calculateCount(this.state.data, this.state))
        }
    }

    // displaySorted = () => {
    //     let { sortValue } = this.state

    //     // sorted from the highest to the lowest value

    // }


    calculateCount = (data, state) => {
    //calculates the count every time a new study renders based on the current state
    let count = 0
    data[0][1].map(factor => {
        return count = count + (state[factor.stateName] ? factor.points : 0)
    })
    data[1][1].map(factor => {
        return count = count + (state[factor.stateName] ? factor.points : 0)
    })
    this.setState({
        counter: count
    })
}

    render() {
            return (
            <main>
                <SortContainer handleSort={this.handleSort} counter={this.state.counter} />
                <FormContainer data={this.state.data} handleClick={this.handleClick} state={this.state} exceptions={this.state.exceptions} />
            </main>
        )
    }
}

export default MainContainer
