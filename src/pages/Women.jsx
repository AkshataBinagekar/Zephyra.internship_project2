
import  React from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import './Women.css'
function Women() {
  const filterOptions = [
    "Sort by",
    "Brand",
    "New in",
    "Size",
    "Prize",
    "Colour",
    "Material",
    "Length",
    "Pattern",
  ];
  return (
    <div>
      <Navbar /> 
        <Navbar2 />
      
      <div className='women_page'>
<section className='sidebar_section'>
<h4>women &gt; clothing</h4>
<h2>Clothing</h2>
<div className='sidebar'>
<h4>Clothing</h4>
<ul className='sidebar-ul'>
  <li className='sidebar_list'>Dresses</li>
  <li className='sidebar_list'>T-shirts & tops</li>
  <li className='sidebar_list'>Trousers</li>
  <li className='sidebar_list'>Jeans</li>
  <li className='sidebar_list'>Jackets & Blazers</li>
  <li className='sidebar_list'>Coats</li>
  <li className='sidebar_list'>Sportswear</li>
  <li className='sidebar_list'>Skirts</li>
  <li className='sidebar_list'>Jumppsuits</li>
  <li className='sidebar_list'>Shirts & Blouses</li>
  <li className='sidebar_list'>Knitwear</li>
</ul>
</div>
</section>

<section className='content'>
  <div className='filter'>
  
  <div className="filters-container">
      <div className="filter-options">
        {filterOptions.map((option, index) => (
          <div key={index} className="filter-item">
            <select>
              <option value="">{option}</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        ))}
        <div className="filter-item show-all">
          <i className="fa fa-sliders"></i> Show all filter
        </div>
      </div>
    </div>

<p>142,165 items</p>
  </div>
  <div className='card_container'>
<div className='card'>
<div className='heart'>
<i class="fa-regular fa-heart" style={{color: "#ffffff",}}></i>
</div>
</div>
<div className='card'>
<div className='heart'>
<i class="fa-regular fa-heart" style={{color: "#ffffff",}}></i>
</div>
</div>
<div className='card'>
<div className='heart'>
<i class="fa-regular fa-heart" style={{color: "#ffffff",}}></i>
</div>
</div>
  </div>
<div className='text'>
<p>Pink shirt</p>
<p>Yellow dress</p>
<p>Black Trousers</p>
</div>
<div className='text2'>
<p>Rs.1000</p>
<p>Rs.3000</p>
<p>Rs.1000</p>
</div>
<div className='fast_delivery'>

<p><i class="fa-solid fa-truck-fast" style={{color: "#ff66c4",}}></i>  Fast Delivery</p>


</div>
</section>
      </div>
    </div>
  )
}

export default Women
