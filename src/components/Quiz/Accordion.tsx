import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState, useCallback } from 'react';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Accordion({ setShowResults }: { setShowResults: (showResults: boolean) => void }) {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = useCallback(
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    },
    [],
  );

  return (
    <>
      <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary>
          <Typography>Have you had a dog before?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <FormControl>
              <FormLabel>Your response</FormLabel>

              <RadioGroup defaultValue="no">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Typography>

          <Button variant="outlined" sx={{ mt: '10px' }} onClick={() => setExpanded('panel2')}>
            Next question
          </Button>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary>
          <Typography>How much of a problem would dog barking cause in your life?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <FormControl>
              <FormLabel>Your response</FormLabel>

              <RadioGroup defaultValue="neutral">
                <FormControlLabel value="hate" control={<Radio />} label="I can't bare it" />
                <FormControlLabel value="neutral" control={<Radio />} label="I'm neutral" />
                <FormControlLabel value="like" control={<Radio />} label="I like barking" />
              </RadioGroup>
            </FormControl>
          </Typography>

          <Button variant="outlined" sx={{ mt: '10px' }} onClick={() => setExpanded('panel3')}>
            Next question
          </Button>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary>
          <Typography>What dog size would be the maximum that you could consider?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <FormControl>
              <FormLabel>Your response</FormLabel>

              <RadioGroup defaultValue="medium">
                <FormControlLabel value="large" control={<Radio />} label="< Large" />
                <FormControlLabel value="medium" control={<Radio />} label="< Medium" />
                <FormControlLabel value="small" control={<Radio />} label="< Small" />
              </RadioGroup>
            </FormControl>
          </Typography>

          <Button variant="contained" sx={{ mt: '10px' }} onClick={() => setShowResults(true)}>
            Show results
          </Button>
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
}

export default Accordion;
