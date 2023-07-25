import { useState } from "react";

const NewTask = () => {
  const val = ["Hi", "Deepak", "how are you"];

  const [output, setOutput] = useState("");

  const [newtext, setNewtext] = useState("");

  const addText = (ele) => {
    var val = ele;
    var newval = newtext+ ' ' + val;
    setNewtext(newval);
  };

  const getVal = (e) => {};

  const GetOutput = (e) => {
    setOutput(newtext);
  };

  const clrOutput = () => {
    setOutput('');
    setNewtext('');
  };

  const Buttons = () => {
    const tag = val.map((ele, index) => (
      <button id={index} key={index} onClick={()=>addText(ele)} >
        {ele}
      </button>
    ));
    return tag;
  };

  const Textarea = (props) => (
    <textarea onChange={getVal} value={props.text}>
      {props.text}
    </textarea>
  );

  const Submit = () => <button onClick={GetOutput}>Submit</button>;

  const Output = (props) => <h1>{props.og}</h1>;

  const Clear = () => <button onClick={clrOutput}>Clear</button>;

  return (
    <div>
      <Buttons />
      <Textarea text={newtext || ''} />
      <Submit />
      <Output og={output} />
      <Clear />
    </div>
  );
};

export default NewTask;
