import PhoneCategory from './PhoneCategory';
import { useQuery } from '@tanstack/react-query';

const PhoneCategories = () => {
  // const [brands, setBrands] = useState([]);

  const { data: brands = [] } = useQuery({
    queryKey: ['brands'],
    queryFn: () =>
      fetch('https://reactjs-sellphone-server-side.vercel.app/brands').then(
        (res) => res.json()
      ),
  });
  // useEffect(() => {
  //   fetch('https://reactjs-sellphone-server-side.vercel.app/brands')
  //     .then((res) => res.json())
  //     .then((data) => setBrands(data));
  // }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          Phone Categories
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500">
          We have different brands of phones that can attracts you. you also can
          buy them from here. which brand do you like? browse them now!!!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-6">
        {brands.map((brand) => (
          <PhoneCategory key={brand._id} brand={brand}></PhoneCategory>
        ))}
      </div>
    </div>
  );
};

export default PhoneCategories;
