import React from "react";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";
import "./AccOne";

const AccOne = () => {
  return (
    <div>
      <CollapsibleComponent style={{backgroundColor:"red"}}>
        <CollapsibleHead style={{
             width:" 570px",
             height: "44px",
             margin: "0 56px 0 0",
             fontfamily: "Manrope",
             fontsize: '20px',
             fontweight: 'normal',
             fontstretch: 'normal',
             fontstyle: 'normal',
             lineheight: '2.18',
             letterspacing: 'normal',
             textalign: 'left',
             color: '#000',
        }}>
            Q. What is Terazo? How does it work?
        </CollapsibleHead>
        <CollapsibleContent className="additionalClassForContent">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex{" "}
          </p>
        </CollapsibleContent>

        <CollapsibleHead isExpanded={true}>Head title 2</CollapsibleHead>
        <CollapsibleContent isExpanded={true}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </CollapsibleContent>

        <CollapsibleHead>Head title 3</CollapsibleHead>
        <CollapsibleContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </CollapsibleContent>
      </CollapsibleComponent>
    </div>
  );
};

export default AccOne;
