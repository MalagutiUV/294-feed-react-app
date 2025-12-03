import Header from "./layout/Header";

function Welcome() {
  return (
    <>
      <Header />
      <h1>THIS IS THE WELCOME COMPONET</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <input
        type='checkbox'
        value='synthwave'
        className='checkbox theme-controller'
      />
      <button className='btn'>Test Button</button>
    </>
  );
}
export default Welcome;
