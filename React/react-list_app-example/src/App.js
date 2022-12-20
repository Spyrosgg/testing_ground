import {useState} from 'react';
import './App.css';

function ProductRow({product}){
  const name = product.stocked? product.name: 
    <span style={{color: 'red'}}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductCategoryRow({category}){
  return (
    <tr>
      <th colSpan="2" style={{color:'blue'}}>
        {category}
      </th>
    </tr>
  )
}
function ProductTable({products, filterText, inStockOnly}){
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
      return;
    }
    if (inStockOnly && !product.stocked){
      return;
    }
    if (product.category !==lastCategory){
      rows.push(<ProductCategoryRow 
        category={product.category} 
        key={product.category}/>
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
    });  
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

function SearchBar({filterText, inStockOnly, funFilterText, funInStockOnly}){
  //const [filterText, inStockOnly, setFilterText, setInStockOnly]=props;
  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={(e)=> funFilterText(e.target.value)}
          value={filterText} /><br/>
        <label>
          <input 
          type="checkbox"
          checked={inStockOnly}
          onChange={(e)=> funInStockOnly(e.target.checked)} />
            {" "}Only show products in stock
        </label>
      </form>
    </div>
  )
}

function FilterableProductTable({products}){
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
      filterText={filterText} 
      inStockOnly={inStockOnly}
      funFilterText={setFilterText}
      funInStockOnly={setInStockOnly} />
      <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

const PRODUCTS= [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
  return (
    <div className="App">
      <h1>My app goes here</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;