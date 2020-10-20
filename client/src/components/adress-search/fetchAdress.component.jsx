import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { selectUserData } from '../../redux/data/user/userdata.selectors';
import { mapDataFetchStart } from '../../redux/data/mapdata.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SearchAdressContainer, StyledGoButton, StyledSearchButton, StyledMessageField } from './fetchAdress.styles';
import { capitalizeThis } from '../../helpers/mapHelpers';

const FetchAdress = ({ mapDataFetchStart, isEmpty, userPositionData: {isUserPosition} }) =>{
    const [searchAdress, setUserStreet] = useState('');
    const [lastSearchSubmitted, setlastSearchSubmitted] = useState('');
    const handleSubmit = async event => {

        //console.log("Button clicked ", event, " inputAdress: ", searchAdress, " lastSearchSubmitted: ", lastSearchSubmitted);
        // Set the input field to focus
        if (searchAdress 
            && 
            (searchAdress !== lastSearchSubmitted || lastSearchSubmitted === '')) {
            event.preventDefault();
            // TODO 09/10:
            // useEffect för att sätta state här ??? 
            // Kolla: https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re
            try  {
                setlastSearchSubmitted(searchAdress);
                setUserStreet('');
                const adress = capitalizeThis(searchAdress);
                mapDataFetchStart({ adress: adress });
            } catch (e) {
                console.log("error in fetchAdress: ", e);
            }
        }

    }

    const handleChange = event => {

        const value = event.target.value;
        setUserStreet(value);
    }

    const handleInputReset = event => {
       if (event.target.value === lastSearchSubmitted && !isUserPosition) {
            setUserStreet('');   
       }
    }
    
    return (
        <SearchAdressContainer >
            <form onSubmit={handleSubmit} title=" " >
                <FormInput placeholder={"Enter an adress..."} autocomplete="off" warn="false" name="Adress" type="Adress" value={searchAdress} handleChange={handleChange} handleInputReset={handleInputReset} required >
                    <CustomButton type='submit' onClick={handleSubmit} > 
                        {!searchAdress ?     
                            <StyledSearchButton/> 
                            : 
                            <StyledGoButton/>
                        }
                    </CustomButton>
                </FormInput>
            </form>
            {isEmpty && 
                <StyledMessageField>
                    Fann inte adressen du sökte
                </StyledMessageField>
            }
        </SearchAdressContainer>                                                                   


    );

}


const mapDispatchToProps = dispatch => ({
    mapDataFetchStart: adress => dispatch(mapDataFetchStart(adress))
});

const mapStateToProps = (state) => ({
    userPositionData: selectUserData(state),
    isEmpty: state.mapData.isEmpty
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchAdress);