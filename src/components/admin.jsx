import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import './admin.css';
import { Fetchdata } from "../Redux/action.jsx";
import { useSelector, useDispatch } from 'react-redux';

export const Admin = () => {
  const red = useSelector((store) => store.imageData.pictures);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', description: '', price: '', imageUrl: '' });
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!red || red.length === 0) {
      dispatch(Fetchdata());
      setLoading(false);
    }
    if (num === 0) {
      dispatch(Fetchdata());
      setNum((num) => num + 1);
      setLoading(false);
    }
  }, [num, red, dispatch]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      try {
        const response = await axios.put(`http://localhost:5000/api/food-items/${editId}`, formData);
        setMessage(response.data.message);
        setEditing(false);
        setEditId(null);
      } catch (error) {
        setMessage('Error updating food item');
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/food-items', formData);
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Error posting food item');
      }
    }
    setFormData({ name: '', description: '', price: '', imageUrl: '' });
  };

  const handleEdit = (item) => {
    setEditing(true);
    setEditId(item._id);
    setFormData({ name: item.foodname, description:item.item, price: item.foodprice, imageUrl: item.foodimage });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/food-items/${id}`);
      setMessage('Food item deleted successfully');
    } catch (error) {
      setMessage('Error deleting food item');
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">{editing ? 'Update' : 'Add'} Food Item</button>
      </form>
      {message && <p>{message}</p>}
      <div className="food-items-list">
        <h3>Food Items</h3>
        {loading ? (
          <p>Loading...</p>
        ) : red.data ? (
          <div className='grid grid-cols-2 lg:grid-cols-2 gap-6 pt-2'>
            {red.data.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                key={item.id}
                className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
              >
                <img
                  className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg'
                  src={item.foodimage}
                  alt={item.foodname}
                />
                <div className='flex justify-between px-2 py-4'>
                  <p>{item.foodname}</p>
                  <p>{item.item}</p>
                  <p>
                    <span className='bg-orange-500 text-white p-1 rounded-md'>₹{item.foodprice}</span>
                  </p>
                </div>
                <div className='flex justify-between px-2 py-4'>
                  <button onClick={() => handleEdit(item)} className='bg-blue-500 text-white p-1 rounded-md'>Edit</button>
                  <button onClick={() => handleDelete(item._id)} className='bg-red-500 text-white p-1 rounded-md'>Delete</button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No food data available.</p>
        )}
      </div>
    </div>
  );
};
