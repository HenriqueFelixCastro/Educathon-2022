import React from "react";

import { TableOfContents } from "@carbon/ibmdotcom-react";
import { Grid, Row, Column } from "carbon-components-react";

import AboutPage from "./AboutPage";
import Agenda from "./Agenda";
import AcademicIniative from "./AcademicIniative";
import Experts from "./Experts";
import ProgramsForUniversities from "./ProgramsForUniversities";

const menuItems = [
    {
        title: "About the Event",
        id:"about-event"
    },
    
    {
        title: "Agenda",
        id:"agenda"
    },

    {
        title: "Academic Initiative",
        id:"academic-initiative"
    },

    {
        title: "Meet the Speakers",
        id:"meet-speakers"
    },

    {
        title: "IBM and Academia",
        id: "ibm-academia"
    },
];

const TableOfContentsComponent = () => {
    return(
        <main style={{marginBottom: '1rem'}}>
            <Grid>
                <Row>
                    <Column>
                        <TableOfContents theme={"white"} menuItems={menuItems} stickyOffset={97}>
                            <a name='about-event' aria-label="about page"></a>
                            <AboutPage />

                            <a name='agenda' arial-label="agenda"></a>
                            <Agenda />

                            <a name='academic-initiative' aria-label="academic initiative"></a>
                            <AcademicIniative />

                            <a name='meet-speakers' arial-label="meet speakers"></a>
                            <Experts />

                            <a name='ibm-academia' arial-label="ibm academia"></a>
                            <ProgramsForUniversities />
                        </TableOfContents>
                    </Column>
                </Row>
            </Grid>
        </main>
    )
}

export default TableOfContentsComponent;