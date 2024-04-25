# <ins> Redux Notes</ins>

### redux and react-redux are two differant things redux is a core library and react-redux is a implementation of redux.

## Make store using redux 

first make store.js in app folder 

 Har ek application ka ek hi store ho to acha rehta hain it's called single source of truth.
 Hame store ke andar redusers ko introduce karna hota hain. To hame ise batana padhta hain ki saare 
 redusers kaha hain.
 Therefor we make slice.js file banata hain feature folder main.

 #### slice banane ke liye hame createSlice ka use karna hota hain.

and then we import configureStore form @reduxjs/toolkit.
and then we make one valriable to using configurStore.

## Reducers ke ander hame two ka access milta hain. <ins>state, action</ins> ka
#### state main hume intialState main jo bhi abhi data hain vo milt hain. matlab hame basically ek list milti hain. State hame handson situation deta hain. ki abhi kya state hain. 


  #### and <ins>action</ins> mujhe vo value deta hain jinka mujhe methods(functions) main use karna hota hain. aage.

#### what is reducers ? It's just a function.