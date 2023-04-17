//
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>#1 HAIR TRANSPLANT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        a thin strip of skin with hair is removed from the back of your head and
                        divided into pieces, each containing 1 to 4 hairs (hair grafts)
                        the grafts are placed
                        into tiny cuts made in the scalp. the site where the hairs are taken is closed
                        with stitches.
                     </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>#2 BEARD TRANSPLANT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The procedure involves harvesting healthy hair follicles.
                        Grafts are delicately and expertly harvested from a donor area
                        from the back or side of the head, and then transplanted to fill
                        in an uneven beard growth pattern, or to create a thicker, more
                        attractive beard.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>#3 HAIR TREATMENT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Hair treatments generally refer to any means of managing common
                        hair related problems such as hair fall, dryness, dandruff,
                        frizzy hair, thinning hair, and so on. The treatments vary in
                        terms of the problem you are suffering from because different
                        ingredients and elements are required to tackle them.06
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}