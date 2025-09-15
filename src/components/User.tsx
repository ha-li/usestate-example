import { useState, useEffect } from 'react';

interface User {
  name: string;
  age: number;
};

const initUser: User = {
  name: "Alice",
  age: 30
};


export function User() {
  // initialize the user for this component,
  // and the setter method using the data above
  const [user, setUser] = useState<User>(initUser);
  
  // initialize the text boxes first value from our user data

  // the input value of the text box
  // each time the text box is updated, this state captures it
  const [inputValue, setInputValue] = useState<string>(initUser.name);


  function printUserName({name}: User) {
    console.log(`The user name is ${name}`);
  }

  // the button handler will update the user
  // which will cause the component to re-render
  const updateUserHandler = () => {
    // const newUser: User = {...user, name: inputValue};
    // setUser(newUser)

    // this is shorter and cleaner, but takes understanding the idiom
    setUser ({...user, name: inputValue});
    // printUserName(newUser)
  }

  // a great example of useEffect
  // The effect is executed the first time the component renders,
  // and each time user changes.
  useEffect( () => {
    printUserName(user);
  }, [user])
    
  return (
    <div>
      {user.name} is {user.age} years old.
      <button onClick={updateUserHandler} />
  
      {/* the input onChange saves the value to the variable using
          the provided setter method
        */}  
      <input type="text" value={inputValue} 
         onChange={(e) => setInputValue(e.target.value)} />
      {/* We could have simplified this by removing the button,
          and setting the input onChange to the updateUserHandler.
          This would cause the component to re-render each character.
          Depending on the use case, this may or may not be good
       */}
    </div>
  );
}