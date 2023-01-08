
import React from 'react'

const FilterPrice = ({ setInputPrice }) => {
  //acceder al form sin libreris
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputFrom = +e.target.from.value;
    const inputTo = +e.target.to.value;

    if (inputFrom && inputTo) {
      setInputPrice({
        from: inputFrom,
        to: inputTo,
      });
    } else if (!inputFrom && inputTo) {
      setInputPrice({
        from: 0,
        to: inputTo,
      });
    } else if (inputFrom && !inputTo) {
      setInputPrice({
        from: inputFrom,
        to: Infinity,
      });
    } else {
      setInputPrice({
        from: 0,
        to: Infinity,
      });
    }
  };


  return (
    <section className='filter__price'>
        <h2>Price</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="from"></label>
                <input type="number" id='from' />
            </div>
            <div>
                <label htmlFor="to"></label>
                <input type="number" id='to' />
            </div>
            <button>Apply</button>
        </form>
    </section>
  )
}


export default FilterPrice