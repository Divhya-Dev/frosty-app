import React, { useState } from "react";

function TextForm(props){
    const [text, setText] = useState('');
    // const [myStyle, setStyle] = useState({
    //     color: 'light',
    //     backgroundColor: 'black'
    // });

       const toConvertCase = (option) => {
        let newText;
        switch(option) {
            case 'upper':
                newText = text.toUpperCase();
                setText(newText);  
                break;
            case 'lower':
                newText = text.toLowerCase();
                setText(newText);  
                break;
            default:
                console.log('Something went south.');
                break;
        }
    };

    const capitalizeSentence = () => {

        const sentences = text.split(".").map(sentence => {
            sentence = sentence.trim();
            if(sentence.length > 0)
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            
            return sentence;
        })
        //console.log(sentences);
        const newText = sentences.join('. ') ;
        setText(newText);
        props.alert('Sentence has been capitalized', 'success')
    };



    const handleOnChange = event =>
    {
       // console.log("IT WAS CHANGED");
        setText(event.target.value);
       
    };

    const resetText = () =>{
        setText("");
       
    };

    const markVowel= () =>{

        const vowels = ['a','e','i','o','u'];
        let updatedText = '';
        let characters = text.split('');
        for(let i=0; i< characters.length; i++)
        {
           if(vowels.includes(characters[i].toLowerCase()))
            updatedText += `<strong>${characters[i]}</strong>`;
           else
              updatedText += characters[i];
        };

        setText(updatedText);
    };

  

    const calculateValues = () => {
       //console.log(">>>>>>>>>>>>>>",text)
        const wordCount = text?.split(" ").filter(word => word !== "").length;
        const charCount = text?.trim().length;
        const readingTime =  text?.trim().split("").filter(word => word !== "").length * 0.008;

        return {wordCount, charCount, readingTime};
    };

    let {wordCount, charCount, readingTime} = calculateValues();

    return(
        <>
            <div>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label" style= {{color: (props.modeType === 'light'? 'black' : 'white')}}>{props.heading}</label>
                    <textarea className="form-control" id="myBox" placeholder="Enter here" value={text} rows="6" onChange={handleOnChange} style = {{backgroundColor: props.modeType === 'light'? 'white' : 'black', color: (props.modeType === 'light'? 'black' : 'white')}}></textarea>           
                </div>
                <button className="btn btn-primary" onClick={() => toConvertCase('upper')}>Convert to UpperCase</button>  
                <button className="btn btn-primary mx-3" onClick={() => toConvertCase('lower')}>Convert to LowerCase</button>  
                <button className ="btn btn-primary mx-3" onClick={capitalizeSentence}>Capitalize Text</button> 
                <button className="btn btn-primary mx-3" onClick={markVowel}>Mark vowels</button>
                <button className ="btn btn-primary mx-3" onClick={resetText}>Clear Text</button> 
               
            </div>
            <div className="container my-3" style= {{color: (props.modeType === 'light'? 'black':'white')}}>
                <h3>Your Magic Summary</h3>
                <p>{wordCount} words and {charCount} characters</p>
                <p>Reading Time for Invention- {readingTime} minutes</p>
                <p id ="textChar" >{text.length} characters with spaces.</p>
                <h2>Preview</h2>
            <p>{text}</p>
            </div>
            
        </>
    );
};



export default TextForm;