import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      category: "beauty",
      price: 19.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
    {
      id: 3,
      title: "Powder Canister",
      category: "beauty",
      price: 14.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
    {
      id: 4,
      title: "Red Lipstick",
      category: "beauty",
      price: 12.99,
      rating: 2.51,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
      ],
    },
    {
      id: 5,
      title: "Red Nail Polish",
      category: "beauty",
      price: 8.99,
      rating: 3.91,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
      ],
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      category: "furniture",
      price: 1899.99,
      rating: 4.14,

      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png",
      ],
    },
    {
      id: 12,
      title: "Annibale Colombo Sofa",
      category: "furniture",
      price: 2499.99,
      rating: 3.08,

      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png",
      ],
    },
    {
      id: 13,
      title: "Bedside Table African Cherry",
      category: "furniture",
      price: 299.99,
      rating: 4.48,
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
      ],
    },
    {
      id: 14,
      title: "Knoll Saarinen Executive Conference Chair",
      category: "furniture",
      price: 499.99,
      rating: 4.11,

      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
      ],
    },
    {
      id: 15,
      title: "Wooden Bathroom Sink With Mirror",
      category: "furniture",
      price: 799.99,
      rating: 3.26,
      images: [
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
        "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
      ],
    },
    {
      id: 16,
      title: "Apple",
      category: "groceries",
      price: 1.99,
      rating: 2.96,
      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
      ],
    },
    {
      id: 17,
      title: "Beef Steak",
      category: "groceries",
      price: 12.99,
      rating: 2.83,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
    },
    {
      id: 18,
      title: "Cat Food",
      description:
        "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      category: "groceries",
      price: 8.99,
      discountPercentage: 9.57,
      rating: 2.88,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
    },
    {
      id: 19,
      title: "Chicken Meat",
      description:
        "Fresh and tender chicken meat, suitable for various culinary preparations.",
      category: "groceries",
      price: 9.99,
      discountPercentage: 10.46,
      rating: 4.61,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
    },
    {
      id: 20,
      title: "Cooking Oil",
      description:
        "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      category: "groceries",
      price: 4.99,
      discountPercentage: 18.89,
      rating: 4.01,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
    },
    {
      id: 21,
      title: "Cucumber",
      description:
        "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      category: "groceries",
      price: 1.49,
      discountPercentage: 11.44,
      rating: 4.71,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
    },
    {
      id: 22,
      title: "Dog Food",
      description:
        "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      category: "groceries",
      price: 10.99,
      discountPercentage: 18.15,
      rating: 2.74,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
    },
    {
      id: 23,
      title: "Eggs",
      description:
        "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      category: "groceries",
      price: 2.99,
      discountPercentage: 5.8,
      rating: 4.46,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
    },
    {
      id: 24,
      title: "Fish Steak",
      description:
        "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      category: "groceries",
      price: 14.99,
      discountPercentage: 7,
      rating: 4.83,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
    },
    {
      id: 25,
      title: "Green Bell Pepper",
      description:
        "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      category: "groceries",
      price: 1.29,
      discountPercentage: 15.5,
      rating: 4.28,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
    },
    {
      id: 26,
      title: "Green Chili Pepper",
      description:
        "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      category: "groceries",
      price: 0.99,
      discountPercentage: 18.51,
      rating: 4.43,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
    },
    {
      id: 27,
      title: "Honey Jar",
      description:
        "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      category: "groceries",
      price: 6.99,
      discountPercentage: 1.91,
      rating: 3.5,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
    },
    {
      id: 28,
      title: "Ice Cream",
      description:
        "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      category: "groceries",
      price: 5.49,
      discountPercentage: 7.58,
      rating: 3.77,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
    },
    {
      id: 29,
      title: "Juice",
      description:
        "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      category: "groceries",
      price: 3.99,
      discountPercentage: 5.45,
      rating: 3.41,

      images: [
        "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
    },
  ]);

  const deleteBtn = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  return (
    <div className="root container">
      <h1>Products</h1>
      {products.length == 0 && <h1>Maxsulot Qolmadi</h1>}
      <ul>
        {products.map((product, arr) => {
          return (
            <li key={product.id}>
              <img src={product.images[0]} alt="" width={150} />
              <h2>{product.title}</h2>
              <p>Category:{product.category}</p>
              <p>Price:{product.price}</p>
              <p>Rating:{product.rating ? product.rating : "no-Rating"}</p>

              <button onClick={() => deleteBtn(product.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
