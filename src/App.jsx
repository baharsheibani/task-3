import './App.css'
const App = () => {
  var numbers = [2, 46, 1, 38, 4];
  return (
    <div>
      
        <h1>
          {numbers.map(function (num) {
          return(
            <>
            <h1 className='h1'>{num*2},</h1>
            </>
          )
        })}
        </h1>
      <hr/>
      <h1 className='h1'>
        {numbers.filter(function(num){
          return  num>20 ;
        })}
      </h1>
      <hr />
      <h1  className='h1' >
        {numbers.find((num)=>{
          return num >30;
        })}
      </h1>
      <hr />
      <h1  className='h1'>
        {numbers.findIndex((num)=>{
          return num >40;
        })}
      </h1>
      <hr/>
      <h1  className='h1'>
        {numbers.reduce((index,num)=>{
          return index+num;
        },0)}
      </h1>
    </div>
  );
};
export default App;