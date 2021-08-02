import React from 'react';

export default function Footer() {
    return (
        <footer className="pt-60 mt-20" style={{backgroundColor: "#161616"}}>
            <div className="flex flex-wrap overflow-hidden lg:-mx-3 xl:-mx-3">

            <div className="w-full overflow-hidden lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                Left
            </div>

            <div className="w-full overflow-hidden lg:my-3 lg:px-3 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2">
                Right
            </div>

            </div>
        </footer>
    )
}