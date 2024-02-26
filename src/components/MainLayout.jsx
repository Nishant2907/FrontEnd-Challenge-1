// import React from 'react'
import React from 'react';
import { Resize, ResizeVertical, ResizeHorizon } from "react-resize-layout";
import ToDo from "./mainLayout-components/ToDo"
import AiModel from './mainLayout-components/AiModel';
import Clock from './mainLayout-components/Clock';
import Filter from './mainLayout-components/Filter';

export default function MainLayout({shade,shade1}) {
    return (
        <div className=" h-full p-4 relative">
            <Resize handleWidth="16px" handleColor="transparent">
                <ResizeVertical height="380px" minHeight="330px">
                    <Resize handleWidth="16px" handleColor="transparent">
                        <ResizeHorizon width="320px" minWidth="270px">
                            <ToDo shade={shade}/>
                        </ResizeHorizon>
                        <ResizeHorizon width="550px" minWidth="550px">
                            <AiModel shade={shade} shade1={shade1}/>
                        </ResizeHorizon>
                        <ResizeHorizon width="250px" minWidth="249.9px">
                           <Clock/>
                        </ResizeHorizon>
                    </Resize>
                </ResizeVertical>
                <ResizeVertical height="192px" minHeight="192px">
                    <Filter/>
                </ResizeVertical>
            </Resize>
        </div>
    )
}
