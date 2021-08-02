import React from 'react';
import { BlockPicker } from 'react-color';
import {Controller} from 'react-hook-form';



export const ColorSwitch = ({control, name}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={(onChange, onBlur) => {
                return (<>
                    <BlockPicker 
                    onChange={onChange} >
                  
                    {({getInputProps}) => (
                        <input {...getInputProps} name={name}  onBlur={onBlur}/>
                    )}  
                    

                    </BlockPicker>
                </>)
            }}
        >
            
        </Controller>
    )
}


