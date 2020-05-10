import React, { Component } from 'react'
import './App.css'
// made some changes

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'enter your phrase here',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  // myPigLatinCodeHere = () => {
  //   // the variable 'userInput' will contain the text input from the user
  //   // no need to change this variable
  //   let userInput = this.state.phrase
  //
  //   // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
  //   // no need to change this variable
  //   let translatedWordsArray = []
  //
  //   // taking the user input and spliting the text into an array of words
  //   let splitUserInput = userInput.toLowerCase().split(" ")
  //
  //   // now that we have an array of words, we can map over the array and access each word
  //   splitUserInput.map(currentWord => {
  //     // ACTION ITEM: use 'currentWord' as a starting point for your code
  //

      // your code here!
      pigLatinSentence = (sentence) =>{
        return sentence.split(" ").map(word => this.myPigLatinCodeHere(word)).join(" ")

      }

      myPigLatinCodeHere = (str) => {
        const vowels = ["a", "e", "i", "o", "u"]
        const notFirstCharVowels = ["a", "e", "i", "o", "u", "y"]
        const specialChars = ["?", "!", ".", ",","1","2","3","4","5","6","7","8","9","0"]
        str = str.toLowerCase()
        for(var i = str.length -1; i >= 0; i--) {
          if(!specialChars.includes(str[i])){
            break
          }
        }
        var left = str.slice(0, i+1)
        var right = str.slice(i+1)
        if(left.slice(0,2) === "qu"){
          return left.slice(2) + "-quay" + right
        }
        else if(vowels.includes(str[0])){
          return left + "-way" + right
        }
        else {
          for(var j=1; j <str.length; j++) {
            if(notFirstCharVowels.includes(str[j])) {
              break
            }
          }
          return left.slice(j) + left.slice(0, j)+ "-ay" + right
        }
      }

// console.log(pigLatinSentence("queen!"));
// console.log(pigLatinSentence("oil?"));
// console.log(pigLatinSentence("love!!!?"));
// console.log(pigLatinSentence("wtf,"));
// console.log(pigLatinSentence("bruh"));
// // console.log(pigLatinSentence("are you smart!?"));
// // console.log(pigLatinSentence("?dry!"));
// // console.log(pigLatinSentence("helloooo?!"));
// // console.log(pigLatinSentence("my name is pig"));


      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
    //   return translatedWordsArray.push(currentWord)
    // })


    // joining the array back to a string of translated words
    // no need to change this variable
  //   let translatedWords = translatedWordsArray.join(" ")
  //
  //   // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
  //   // no need to change this method
  //   this.setState({ phraseTranslated: translatedWords })
  //   // done!
  // }

  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    var latinVersion = this.pigLatinSentence(this.state.phrase)
    this.setState({phraseTranslated: latinVersion})
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'What would you like to translate?',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin ... :)</h1>
          <div id="pigImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Toby_learned_pig.JPG"
              alt="pig scholar"
              id="teacherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button id="button" onClick={ this.setUpPreventDefault }>Translate</button>
              {/* button that resets the game */}
              <button id="button" onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by Ara Jo 2020
        </footer>
      </div>
    )
  }
}

export default App
