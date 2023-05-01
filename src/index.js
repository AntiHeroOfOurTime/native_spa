const fun = () => {
   const root = document.getElementById('root');
   const child = document.createTextNode('123');
   root.appendChild(child);   
};
fun();