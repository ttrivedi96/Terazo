import React from "react";
import "./FAQs.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordian = () => {
  return (
    <div className="Rectangle-6">
      <span className="Frequently-Asked-Questions">
        Frequently Asked Questions
      </span>
      <br />
      <div style={{ margin: "50px" }}>
        <Accordion style={{ opacity: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#1a60f6" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <span className="Q-Question-goes-here-and-can-be-longer-too">
              Q. What is Terazo? How does it work?
            </span>
          </AccordionSummary>
          <AccordionDetails className="We-wish-to-make-private-market-investing-inclusive-and-frictionless-for-everyone-through-a-regulated">
            We wish to make private market investing inclusive and frictionless
            for everyone through a regulated and transparent platform. Our dream
            is to create equal opportunities for investment and a faster, safer
            and simpler way to trade.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#1a60f6" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              <span className="Q-Question-goes-here-and-can-be-longer-too">
                Q. What is tokenization?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#1a60f6" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <span className="Q-Question-goes-here-and-can-be-longer-too">
              Q. Is Terazo safe? How are my investments protected?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#1a60f6" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <span className="Q-Question-goes-here-and-can-be-longer-too">
              Q. Where do I see my investments?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#1a60f6" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <span className="Q-Question-goes-here-and-can-be-longer-too">
              Q. Do I need to pay for the invite?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqAccordian;
