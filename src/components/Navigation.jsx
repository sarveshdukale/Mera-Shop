import React from 'react'

const Navigation = ({category ,setCategory}) => {
 
  const categories = ["All", "Mens", "Womens", "Apliences", "Jwelery"];
  
  return (
    <div className="flex justify-center">
      <nav className="flex justify-around rounded-4xl py-3 bg-blue-700 w-[60%]">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4   ${
              category === item
                ? "border-b-2 text-white"
                : " text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Navigation