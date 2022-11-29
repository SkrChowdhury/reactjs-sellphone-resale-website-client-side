import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: brands, isLoading } = useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const res = await fetch(
        'https://reactjs-sellphone-server-side.vercel.app/brands'
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddPhone = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const phone = {
            brand: data.brands,
            phone_name: data.phonename,
            location: data.location,
            original_price: data.originalprice,
            resale_price: data.resaleprice,
            condition_type: data.conditiontype,
            year_of_use: data.yearofuse,
            mobile_number: data.mobilenumber,
            posted_on: new Date(),
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch('https://reactjs-sellphone-server-side.vercel.app/allphones', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(phone),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.brand} is added successfully`);
              navigate('/dashboard/myproducts');
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Phone</h2>
      <form onSubmit={handleSubmit(handleAddPhone)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Brand Name</span>
          </label>
          <select
            {...register('brands')}
            className="select input-bordered w-full max-w-xs"
          >
            {brands.map((brand) => (
              <option key={brand._id} value={brand.brand}>
                {brand.brand}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Phone Model</span>
          </label>
          <input
            type="text"
            {...register('phonename', {
              required: 'Phone Name is Required',
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phonename && (
            <p className="text-red-500">{errors.phonename.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="number"
            {...register('resaleprice', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resaleprice && (
            <p className="text-red-500">{errors.resaleprice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="number"
            {...register('originalprice', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalprice && (
            <p className="text-red-500">{errors.originalprice.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Condition Type</span>
          </label>
          <input
            type="text"
            {...register('conditiontype', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.conditiontype && (
            <p className="text-red-500">{errors.conditiontype.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            {...register('mobilenumber', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobilenumber && (
            <p className="text-red-500">{errors.mobilenumber.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register('location', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Year of Use</span>
          </label>
          <input
            type="number"
            {...register('yearofuse', {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.yearofuse && (
            <p className="text-red-500">{errors.yearofuse.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {' '}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register('image', {
              required: 'Photo is Required',
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Phone"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
