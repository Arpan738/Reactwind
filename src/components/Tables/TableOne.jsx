import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

const brandData = [
  {
    logo: BrandOne,
    name: 'Google',
    visitors: '3.5K',
    revenues: '$5,768',
    sales: 590,
    conversion: '4.8%',
  },
  {
    logo: BrandTwo,
    name: 'Twitter',
    visitors: '2.2K',
    revenues: '$4,635',
    sales: 467,
    conversion: '4.3%',
  },
  {
    logo: BrandThree,
    name: 'Github',
    visitors: '2.1K',
    revenues: '$4,290',
    sales: 420,
    conversion: '3.7%',
  },
  {
    logo: BrandFour,
    name: 'Vimeo',
    visitors: '1.5K',
    revenues: '$3,580',
    sales: 389,
    conversion: '2.5%',
  },
  {
    logo: BrandFive,
    name: 'Facebook',
    visitors: '3.5K',
    revenues: '$6,768',
    sales: 390,
    conversion: '4.2%',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Channels
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-2 dark:bg-meta-4 text-left">
              <th className="p-3 text-sm font-medium uppercase">Source</th>
              <th className="p-3 text-sm font-medium uppercase text-center">
                Visitors
              </th>
              <th className="p-3 text-sm font-medium uppercase text-center">
                Revenues
              </th>
              <th className="p-3 text-sm font-medium uppercase text-center hidden sm:table-cell">
                Sales
              </th>
              <th className="p-3 text-sm font-medium uppercase text-center hidden sm:table-cell">
                Conversion
              </th>
            </tr>
          </thead>
          <tbody>
            {brandData.map((brand, index) => (
              <tr
                key={index}
                className={`border-b dark:border-strokedark ${
                  index === brandData.length - 1 ? '' : 'border-stroke'
                }`}
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-6 h-6"
                  />
                  <span className="text-black dark:text-white">{brand.name}</span>
                </td>
                <td className="p-3 text-center text-black dark:text-white">
                  {brand.visitors}
                </td>
                <td className="p-3 text-center text-meta-3">{brand.revenues}</td>
                <td className="p-3 text-center hidden sm:table-cell text-black dark:text-white">
                  {brand.sales}
                </td>
                <td className="p-3 text-center hidden sm:table-cell text-meta-5">
                  {brand.conversion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
