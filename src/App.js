
import Navbar from './Navbar';

function App() {

  // Constant variables
  const title = "Welcome to new blog!"
  const likes = 50

  
  // Object
  const person = {
    name: 'Chenter',
    age: 19
  }


  // Array
  const Employees = [
    {
      name: 'Vireak',
      age: 20,
      pos: 'Web Designer'
    },
    {
      name: 'Boeun Boek',
      age: 22,
      pos: 'Web Developer'
    },
    {
      name: 'Ny Vannak',
      age: 21,
      pos: 'Graphic Designer'
    },
  ]

  // Dynamic value
  const link = "http://www.google.com"

  
  return (
    <div className="App">
      <Navbar />
      <main className='container mx-auto border py-4 mt-2'>
        <h1 className='text-red-600'>Hello World!</h1>
        <h1>{title}</h1>
        <p>Likes {likes} times.</p>
        <h1>Hi! My name is {person.name}</h1>
        <p>I am {person.age}</p>

        {Employees.map((items) => (
          <div>
            <h1>{`Name: ${items.name}.`}</h1>
            <p>{`Age: ${items.age}`}</p>
            <p>{`Position: ${items.pos}`}</p>
          </div>
        ))}

        <a href={link}>Google</a>
      </main>

    </div>
  );

  
}

export default App;
