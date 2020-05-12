import React from 'react';
import About from './siteComponents/About';
import Help from './siteComponents/Help';

class PageContent extends React.Component {
    render(){
        return(
            <>
                <About/>
                <Help/>
            </>
        )
    }
}

export default PageContent;