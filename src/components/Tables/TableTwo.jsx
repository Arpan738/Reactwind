import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import ProductFour from '../../images/product/product-04.png';

const productData = [
  {
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: '$296',
    sold: 22,
    profit: '$45',
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: '$546',
    sold: 12,
    profit: '$125',
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: '$443',
    sold: 64,
    profit: '$247',
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    category: 'Electronics',
    price: '$499',
    sold: 72,
    profit: '$103',
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-2 dark:bg-meta-4 text-left">
              <th className="p-3 text-sm font-medium uppercase">Product Name</th>
              <th className="p-3 text-sm font-medium uppercase hidden sm:table-cell">
                Category
              </th>
              <th className="p-3 text-sm font-medium uppercase text-center">
                Price
              </th>
              <th className="p-3 text-sm font-medium uppercase text-center">
                Sold
              </th>
              <th className="p-3 text-sm font-medium uppercase text-center">
                Profit
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr
                key={index}
                className={`border-b dark:border-strokedark ${
                  index === productData.length - 1 ? '' : 'border-stroke'
                }`}
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <span className="text-black dark:text-white">
                    {product.name}
                  </span>
                </td>
                <td className="p-3 hidden sm:table-cell text-black dark:text-white">
                  {product.category}
                </td>
                <td className="p-3 text-center text-black dark:text-white">
                  {product.price}
                </td>
                <td className="p-3 text-center text-black dark:text-white">
                  {product.sold}
                </td>
                <td className="p-3 text-center text-meta-3">{product.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTwo;
